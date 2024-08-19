---
template: overrides/blog.html
---

# Data Manipulation

## Insert Rows

=== "SQL"

	```sql
	INSERT INTO student (id,name,age,class,score) VALUES (1,'jack',10,'3-1',90),(2,'tom',11,'2-5',91),(3,'jack',11,'1-6',92),(4,'rose',10,'4-2',90),(5,'tim',10,'3-1',95);

	INSERT INTO student (id,name,age,class,score,info) VALUES (6,'Tony',10,'3-1',95,'%s')", 'He is a boy.\nHe likes playing football.\nWe all like him!');
	```

=== "C"

	```c
	pRes = xdb_exec (pConn, "INSERT INTO student (id,name,age,class,score) VALUES (1,'jack',10,'3-1',90),(2,'tom',11,'2-5',91),(3,'jack',11,'1-6',92),(4,'rose',10,'4-2',90),(5,'tim',10,'3-1',95)");

	pRes = xdb_pexec (pConn, "INSERT INTO student (id,name,age,class,score,info) VALUES (6,'Tony',10,'3-1',95,'%s')", "He is a boy.\nHe likes playing football.\nWe all like him!");
	// check pRes->errcode = 0 and pRes->affected rows
	```

## Update Rows

=== "SQL"

	```sql
	UPDATE student set age=9 WHERE id = 2;
	```
	
=== "C"

	```c
	pRes = xdb_exec (pConn, "UPDATE student set age=9 WHERE id = 2");

	pRes = xdb_pexec (pConn, "UPDATE student set age=9 WHERE id = %d", id);

	// check pRes->errcode = 0 and pRes->affected rows
	```
	

## Delete Rows

=== "SQL"

	```sql
	DELETE FROM student WHERE id = 3;
	```
	
=== "C"

	```c
	pRes = xdb_exec (pConn, "DELETE FROM student WHERE id = 3");

	pRes = xdb_pexec (pConn, "DELETE FROM student WHERE id = %d", id);

	// check pRes->errcode = 0 and pRes->affected rows
	```