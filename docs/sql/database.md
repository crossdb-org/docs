---
template: overrides/blog.html
---

# Database

## Create Database

```sql
CREATE DATABASE [IF NOT EXISTS] {db_name | '[path/]db_name'} [db_option] ...

db_option:
    ENGINE = {MMAP | MEMORY}
  | LOCKMODE = {THREAD | PROCESS | NOLOCK}
```

<!--
  | FLUSHMODE = {ASYNC | SYNC | NOSYNC}
  | ROWLOCK = {0 | 1}
  | MVCC = {0 | 1}
-->

|  **LOCKMODE**    	|  **Lock used**     						| **Description** |
  ::               	| ----               						| ----
THREAD [*default*]	| high-performance thread read-write lock   | For single process multiple threads access.
PROCESS    			| file read-write lock                      | For multiple processes multiple threads access.
NOLOCK    			| no lock                      				| For test/diag purpose only.

> **Note**
> `'[path]/db_name'` is only valid for embedded database.
> `db_options` are default values for new created tables and you can use `table_options` to overwrite these default values.

## Open Database

```sql
OPEN DATABASE {db_name | '[path/]db_name'} [dbg_option] ...

dbg_option:
    FLUSHMODE = {ASYNC | SYNC | NOSYNC}
  | LOCKMODE = {THREAD | PROCESS | NOLOCK}
```

> **Note**
> This command can only be used for embedded database. 
> dbg_option is only valid for current session and only for debug purpose.


<!--
## Modify Database

```sql
ALTER DATABASE db_name alter_option ...

alter_option: {
    READONLY = {0 | 1}
  | FLUSHMODE = {ASYNC | SYNC | NOSYNC}
  | LOCKMODE = {THREAD | PROCESS | NOLOCK}
  | ROWLOCK = {0 | 1}
  | MVCC = {0 | 1}
}
```

> **Note**
> `LOCKMODE` `ROWLOCK` `MVCC` won't change existing tables and will be valid for new created tables.
-->

## Close Database

```sql
CLOSE DATABASE [IF EXISTS] db_name
```

> **Note**
> This command can only be used for embedded database. 

## Drop Database

```sql
DROP DATABASE [IF EXISTS] db_name
```

## Use Database

```sql
USE db_name
```

## Show Databases

```sql
SHOW DATABASES [WHERE expr]
```

```
XDB> show DATABASES ;
+----------+--------+-----------+
| database | engine | data_path |
+----------+--------+-----------+
| system   |        |           |
| memory   |        |           |
+----------+--------+-----------+
2 rows in set (0.012 ms)
```

<!--
## Show Create Database

```sql
SHOW CREATE DATABASE db_name
```
-->