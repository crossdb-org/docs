---
template: overrides/blog.html
---

# CrossDB Shell

## CrossDB tool

This tool can

- Open and operate local database
- Connect and operate remote database
<!--
- Work as standalone database server
-->

```
$ xdb-cli -h
crossdb: option requires an argument -- 'h'
Usage: xdb-cli [OPTIONS] [[path/]db_name]
  -h                        Show this help
  -S                        Server: Start in server mode
  -h <ip>                   IP address to bind to or connect to
  -P <port>                 Port to listen or connect
  -D <datadir>              Server: Data directory to store databases
  -u <user>                 Client user
  -p              			Client password
  -e <sql>                  Execute SQL statements and quite
```

## Open DB

```
xdb-cli school
```

## Open DB and Execute Command

```
xdb-cli -e 'SELECT * FROM student WHERE id=1; SELECT * FROM student WHERE age=10' school
```

## Embedded Shell

You program can enter interactive shell use the `SHELL` statement.

=== "SQL"

	```sql
	SHELL
	```

=== "C"

	```c
	xdb_exec (pConn, "SHELL");
	```

## Auto Completion

Use `TAB` to do auto completion for SQL statements, keywords, db name, table name, field name, etc.

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
USE         Switch Databae
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
