---
template: overrides/blog.html
---

# Turorial

## Open conection and create default memory database

```c
xdb_res_t	*pRes;
xdb_row_t	*pRow;

xdb_conn_t	*pConn = xdb_open (":memory:");
```

## Create Table

```c
pRes = xdb_exec (pConn, "CREATE TABLE student (id INT PRIMARY KEY, name CHAR(16), age INT, class CHAR(16), score FLOAT, info CHAR(255))");
XDB_RESCHK(pRes, printf ("Can't create table student\n"); goto error;);
pRes = xdb_exec (pConn, "CREATE TABLE IF NOT EXISTS teacher (id INT PRIMARY KEY, name CHAR(16), age INT, info CHAR(255), INDEX (name))");
XDB_RESCHK(pRes, printf ("Can't create table teacher\n"); goto error;);
pRes = xdb_exec (pConn, "CREATE TABLE IF NOT EXISTS book (id INT PRIMARY KEY, name CHAR(64), author CHAR(32), count INT, INDEX (name))");
XDB_RESCHK(pRes, printf ("Can't create table book\n"); goto error;);
```

## Insert Rows

```c
pRes = xdb_exec (pConn, "INSERT INTO student (id,name,age,class,score) VALUES (1,'jack',10,'3-1',90),(2,'tom',11,'2-5',91),(3,'jack',11,'1-6',92),(4,'rose',10,'4-2',90),(5,'tim',10,'3-1',95)");
XDB_RESCHK(pRes, printf ("Can't insert table student\n"); goto error;);
pRes = xdb_pexec (pConn, "INSERT INTO student (id,name,age,class,score,info) VALUES (6,'Tony',10,'3-1',95,'%s')", "He is a boy.\nHe likes playing football.\nWe all like him!");
XDB_RESCHK(pRes, printf ("Can't insert table student\n"); goto error;);
pRes = xdb_pexec (pConn, "INSERT INTO student (id,name,age,class,score,info) VALUES (7,'Wendy',10,'3-1',95,'%s')", "She is a girl.\nShe likes cooking.\nWe all love her!");
XDB_RESCHK(pRes, printf ("Can't insert table student\n"); goto error;);
pRes = xdb_exec (pConn, "INSERT INTO teacher (id,name,age) VALUES (1,'Tomas',40),(2,'Steven',50),(3,'Bill',31),(4,'Lucy',29)");
XDB_RESCHK(pRes, printf ("Can't insert table teacher\n"); goto error;);
pRes = xdb_exec (pConn, "INSERT INTO book (id,name,author,count) VALUES (1,'Romeo and Juliet','Shakespeare',10),(2,'Pride and Prejudice','Austen',5),(3,'Great Expectations','Dickens',8),(4,'Sorrows of Young Werther','Von Goethe',4)");
XDB_RESCHK(pRes, printf ("Can't insert table book\n"); goto error;);
```

## Select Rows

```c
pRes = xdb_exec (pConn, "SELECT * from student");
printf ("=== Select all %d rows\n", (int)pRes->row_count);
while (NULL != (pRow = xdb_fetch_row (pRes))) {
	xdb_print_row (pRes->col_meta, pRow, 0);
	printf ("\n");
}
xdb_free_result (pRes);
```

## Update Rows

```c
printf ("\n=== Update age = 9 for id = 2\n");
pRes = xdb_exec (pConn, "UPDATE student set age=9 WHERE id = 2");
XDB_RESCHK(pRes, printf ("Can't update id=%d\n",2); goto error;);

pRes = xdb_exec (pConn, "SELECT id,name,age,class,score from student WHERE id = 2");
printf ("select %d rows\n", (int)pRes->row_count);
while (NULL != (pRow = xdb_fetch_row (pRes))) {
	xdb_print_row (pRes->col_meta, pRow, 0);
	printf ("\n");
}
xdb_free_result (pRes);
```

## Delete Rows

```c
printf ("\n=== Delete id = 3\n");
pRes = xdb_exec (pConn, "DELETE FROM student WHERE id = 3");
XDB_RESCHK(pRes, printf ("Can't delete id=%d\n",3); goto error;);

pRes = xdb_exec (pConn, "SELECT * from student WHERE id = 3");
printf ("select %d rows\n", (int)pRes->row_count);
while (NULL != (pRow = xdb_fetch_row (pRes))) {
	xdb_print_row (pRes->col_meta, pRow, 0);
	printf ("\n");
}
xdb_free_result (pRes);
```

## Aggregation function

```c
printf ("\n=== AGG COUNT,MIN,MAX,SUM,AVG\n");
pRes = xdb_exec (pConn, "SELECT COUNT(*),MIN(score),MAX(score),SUM(score),AVG(score) FROM student");
printf ("=== select %d rows\n", (int)pRes->row_count);
if (NULL != (pRow = xdb_fetch_row (pRes))) {
	xdb_print_row (pRes->col_meta, pRow, 0);
	printf ("\n");
}
xdb_free_result (pRes);
```

## Transaction Rollback

```c
printf ("\n=== Rollback\n");
xdb_begin (pConn);
pRes = xdb_exec (pConn, "UPDATE student set age=15 WHERE id = 2");
pRes = xdb_exec (pConn, "SELECT id,name,age from student WHERE id = 2");
printf ("select %d rows\n", (int)pRes->row_count);
if (NULL != (pRow = xdb_fetch_row (pRes))) {
	xdb_print_row (pRes->col_meta, pRow, 0);
	printf ("\n");
}
xdb_free_result (pRes);
printf ("-- rollback\n");
xdb_rollback (pConn);
pRes = xdb_exec (pConn, "SELECT id,name,age from student WHERE id = 2");
printf ("select %d rows\n", (int)pRes->row_count);
if (NULL != (pRow = xdb_fetch_row (pRes))) {
	xdb_print_row (pRes->col_meta, pRow, 0);
	printf ("\n");
}
xdb_free_result (pRes);
```

## Transaction Commit

```c
printf ("\n=== Commit\n");
xdb_begin (pConn);
pRes = xdb_exec (pConn, "UPDATE student set age=15 WHERE id = 2");
pRes = xdb_exec (pConn, "SELECT * from student WHERE id = 2");
printf ("select %d rows\n", (int)pRes->row_count);
if (NULL != (pRow = xdb_fetch_row (pRes))) {
	xdb_print_row (pRes->col_meta, pRow, 0);
	printf ("\n");
}
xdb_free_result (pRes);
printf ("-- commit\n");
xdb_commit (pConn);
pRes = xdb_exec (pConn, "SELECT * from student WHERE id = 2");
printf ("select %d rows\n", (int)pRes->row_count);
if (NULL != (pRow = xdb_fetch_row (pRes))) {
	xdb_print_row (pRes->col_meta, pRow, 0);
	printf ("\n");
}
xdb_free_result (pRes);
```

## Multi-Statements

```c
printf ("\n=== Muti-Statements\n");
pRes = xdb_exec (pConn, "SELECT COUNT(*) FROM student; SELECT id,name FROM student WHERE id=2");
// count(*)	
if (NULL != (pRow = xdb_fetch_row (pRes))) {
	xdb_print_row (pRes->col_meta, pRow, 0);
	printf ("\n");
}
xdb_free_result (pRes);
// select
pRes = xdb_next_result (pConn);
if (NULL != pRes) {
	if (NULL != (pRow = xdb_fetch_row (pRes))) {
		xdb_print_row (pRes->col_meta, pRow, 0);
		printf ("\n");
	}
	xdb_free_result (pRes);
}

xdb_exec (pConn, "SHELL");
```

## Enter Embedded Shell

```c
xdb_exec (pConn, "SHELL");
```

## Example Output

```bash
crossdb$ make example
=== Select all 7 rows
id=1 name='jack' age=10 class='3-1' score=90.000000 info=''
id=2 name='tom' age=11 class='2-5' score=91.000000 info=''
id=3 name='jack' age=11 class='1-6' score=92.000000 info=''
id=4 name='rose' age=10 class='4-2' score=90.000000 info=''
id=5 name='tim' age=10 class='3-1' score=95.000000 info=''
id=6 name='Tony' age=10 class='3-1' score=95.000000 info='He is a boy.
He likes playing football.
We all like him!'
id=7 name='Wendy' age=10 class='3-1' score=95.000000 info='She is a girl.
She likes cooking.
We all love her!'

=== Update age = 9 for id = 2
select 1 rows
id=2 name='tom' age=9 class='2-5' score=91.000000

=== Delete id = 3
select 0 rows
=== select 1 rows
COUNT(*)=6 MIN(score)=90.000000 MAX(score)=95.000000 SUM(score)=556.000000 AVG(score)=92.666667

=== Muti-Statements
COUNT(*)=6
id=2 name='tom'
   _____                   _____  ____      _
  / ____|                 |  __ \|  _ \   _| |_
 | |     _ __ ___  ___ ___| |  | | |_) | |_   _|
 | |    | '__/ _ \/ __/ __| |  | |  _ <    |_|
 | |____| | | (_) \__ \__ \ |__| | |_) |  0.7.0
  \_____|_|  \___/|___/___/_____/|____/ crossdb.org

============ Welcome to CrossDB Shell ============
<help>: Help Info       <F1>: Shortcuts
<exit>: Exit shell      <TAB>: Auto completion

XDB> exit
```