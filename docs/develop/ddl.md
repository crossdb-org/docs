---
template: overrides/blog.html
---

# Data Model

## Create and Use a Database

=== "SQL"

	```sql
	-- Create database in current folder
	CREATE DATABASE school;
	-- Create database in specified folder (must exist)
	CREATE DATABASE '/var/crossdb/school';
	-- Create in-memory database 
	CREATE DATABASE test ENGINE=memory;
	```

=== "C"

	```c
	// Create database in current folder
	xdb_res_t *pRes = xdb_exec (pConn, "CREATE DATABASE school");
	// Create database in specified folder (must exist)
	xdb_res_t *pRes = xdb_exec (pConn, "CREATE DATABASE '/var/crossdb/school'");
	// Create in-memory database 
	xdb_res_t *pRes = xdb_exec (pConn, "CREATE DATABASE test ENGINE=memory");
	```


## Create a Table

=== "SQL"

	```sql
	CREATE TABLE IF NOT EXISTS student (id INT PRIMARY KEY, name CHAR(16), age INT, class CHAR(16), score FLOAT, info CHAR(256), INDEX (name));
	CREATE TABLE IF NOT EXISTS teacher (id INT PRIMARY KEY, name CHAR(16), age INT, info CHAR(256), INDEX (name));
	CREATE TABLE IF NOT EXISTS book (id INT PRIMARY KEY, name CHAR(64), author CHAR(32), count INT, INDEX (name));
	```
	
=== "C"

	```c
	xdb_res_t *pRes = pRes = xdb_exec (pConn, "CREATE TABLE IF NOT EXISTS student (id INT PRIMARY KEY, name CHAR(16), age INT, class CHAR(16), score FLOAT, info CHAR(256), INDEX (name))");
	xdb_res_t *pRes = pRes = xdb_exec (pConn, "CREATE TABLE IF NOT EXISTS teacher (id INT PRIMARY KEY, name CHAR(16), age INT, info CHAR(256), INDEX (name))");
	xdb_res_t *pRes = pRes = xdb_exec (pConn, "CREATE TABLE IF NOT EXISTS book (id INT PRIMARY KEY, name CHAR(64), author CHAR(32), count INT, INDEX (name))");
	```

## Create Index

=== "SQL"

	```sql
	CREATE INDEX idx_name ON student (age);
	CREATE INDEX idx_name ON teacher (age);
	CREATE INDEX idx_name ON student (author);
	```

=== "C"

	```c
	xdb_res_t *pRes = pRes = xdb_exec (pConn, "CREATE INDEX idx_name ON student (age)");
	xdb_res_t *pRes = pRes = xdb_exec (pConn, "CREATE INDEX idx_name ON teacher (age)");
	xdb_res_t *pRes = pRes = xdb_exec (pConn, "CREATE INDEX idx_name ON student (author)");
	```