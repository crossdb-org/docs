---
template: overrides/blog.html
---

# CrossDB Shell

## CrossDB tool

This tool can

- Open and operate many local databases.
- Connect to and operate a remote database server.
- Work as standalone database server.

> **NOTE**
> `xdb-cli` creates a default memory database, allowing you to directly create tables for practice.


```
$ xdb-cli -?
Usage: xdb-cli [OPTIONS] [[path]/db_name]
  -?                        Show this help
  -S                        Server: Start in server mode, default port 7777
  -I                        Server ID: <string>
  -h <ip>                   IP address to bind to or connect to
  -P <port>                 Port to listen or connect
  -D <datadir>              Server: Data directory to store databases, default '/var/xdb_data'
  -q                        Server: quite mode.
  -u <user>                 Client user
  -p                        Client password
  -e <sql>                  Client: Execute command and quit.
```

## Open DB

```
xdb-cli school
```

## Open DB and Execute Command

```
xdb-cli -e 'SELECT * FROM student WHERE id=1; SELECT * FROM student WHERE age=10' school
```

## Connect to CrossDB Server

```
xdb-cli -P 7777
xdb-cli -h 192.168.172.176
xdb-cli -h 192.168.172.176 -P 8888

xdb-cli -P 7777 school
xdb-cli -h 192.168.172.176 school
xdb-cli -h 192.168.172.176 -P 7777 school
```

## Connect to CrossDB Server and Execute Command

```
xdb-cli -P 7777 -e 'SELECT * FROM school.student WHERE id=1; SELECT * FROM school.student WHERE age=10'
xdb-cli -h 192.168.172.176 -e 'SELECT * FROM school.student WHERE id=1; SELECT * FROM school.student WHERE age=10'
xdb-cli -h 192.168.172.176 -P 7777 -e 'SELECT * FROM school.student WHERE id=1; SELECT * FROM school.student WHERE age=10'

xdb-cli -P 7777 -e 'SELECT * FROM student WHERE id=1; SELECT * FROM student WHERE age=10' school
xdb-cli -h 192.168.172.176 -e 'SELECT * FROM student WHERE id=1; SELECT * FROM student WHERE age=10' school
xdb-cli -h 192.168.172.176 -P 7777 -e 'SELECT * FROM student WHERE id=1; SELECT * FROM student WHERE age=10' school
```

## Connect to CrossDB with Telnet

```
$ telnet 127.0.0.1 7777
Trying 127.0.0.1...
Connected to 127.0.0.1.
Escape character is '^]'.
USE school;
Database changed

SHOW TABLES;
+---------+--------+
| table   | engine |
+---------+--------+
| student | MMAP   |
+---------+--------+
1 row in set (0.048 ms)

SELECT * FROM student;
+----+------+-----+-------+-----------+------+
| id | name | age | class | score     | info |
+----+------+-----+-------+-----------+------+
| 1  | Jack | 10  | 3-1   | 90.500000 | NULL |
| 2  | Tom  | 10  | 2-5   | 91.900002 | NULL |
| 3  | Jack | 11  | 1-6   | 92.300003 | NULL |
+----+------+-----+-------+-----------+------+
3 rows in set (0.023 ms)

exit
Connection closed by foreign host.
```

## Embedded Shell

Your program can enter the interactive shell using the `SHELL` statement.

=== "SQL"

	```sql
	SHELL
	```

=== "C"

	```c
	xdb_exec (pConn, "SHELL");
	```

## Auto Completion

Use `TAB` to auto-complete SQL statements, keywords, database names, table names, field names, etc.

```sql
XDB> <TAB>
CREATE      Create database, table, index, etc
DROP        Drop database, table, index, etc
ALTER       Alter database, table, index, etc
SELECT      Select rows from table
INSERT      Insert rows into table
UPDATE      Update rows in table
DELETE      Delete rows from table
BEGIN       Begin transaction
COMMIT      Commit transaction
ROLLBACK    Rollback transaction
USE         Switch Database
SHOW        Show database, table, index, etc
DESCRIBE    Show Table Schema
EXPLAIN     Show SELECT statement index selection
SET         Config parameters
OPEN        Open database
CLOSE       Close database
DUMP        Dump database
SOURCE      Load SQL file
SHELL       Enter interactive shell
HELP        Help
```

```sql
XDB> S <TAB>
SELECT    Select rows from table
SHOW      Show database, table, index, etc
SET       Config parameters
SOURCE    Load SQL file
SHELL     Enter interactive shell
XDB> SE <TAB>
SELECT    Select rows from table
SET       Config parameters
XDB> SEL <TAB>
XDB> SELECT
```

```sql
XDB> SELECT <TAB>
XDB> SELECT * <TAB>
XDB> SELECT * FROM <TAB>
student    teacher    book
XDB> SELECT * FROM s<TAB>
XDB> SELECT * FROM student
```

```sql
XDB> SELECT * FROM student <TAB>
WHERE       ORDER BY    LIMIT       OFFSET      AND         id          name        age         class       score
info
XDB> SELECT * FROM student WHERE i <TAB>
id      info
```

```sql
XDB> SHOW  <TAB>
DATABASES    TABLES       INDEXES      COLUMNS      CREATE
```
