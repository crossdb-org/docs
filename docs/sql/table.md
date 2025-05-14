---
template: overrides/blog.html
---

# Table

## Create Table

```sql
CREATE TABLE [IF NOT EXISTS] tbl_name (create_definition, ...) [table_option] ...

CREATE OR REPLACE TABLE tbl_name (create_definition, ...)  [table_option] ...

create_definition:
    col_name data_type [column_option] ...
  | PRIMARY KEY index_definition
  | UNIQUE [KEY | INDEX] [idx_name] index_definition
  | {KEY | INDEX} [idx_name] index_definition

data_type:
    BOOL
  | TINYINT [UNSIGNED]
  | SMALLINT [UNSIGNED]
  | {INT | INTEGER} [UNSIGNED]
  | BIGINT [UNSIGNED]
  | TIMESTAMP
  | CHAR[(n)] [COLLATE <collation_name>]
  | VARCHAR[(n)] [COLLATE <collation_name>]
  | BINARY[(n)]
  | VBINARY[(n)]

collation_name:
    BINARY
  | NOCASE

column_option:
    {NOT NULL | NULL} 
  | DEFAULT value
  | AUTO_INCREMENT 
  | [PRIMARY] KEY
  | UNIQUE [KEY]

index_definition: [USING {HASH | BTREE}] (col_name, ...)

table_option:
    ENGINE = MEMORY
  | MAX_ROWS = value
  | MIN_ROWS = value
  | LOCKMODE = {THREAD | PROCESS | NOLOCK}
  | ROWLOCK = {0 | 1}
  | MVCC = {0 | 1}
  | TTL = col_name + INTERVAL <num> <MICROSECOND | MILLISECOND | SECOND | MINUTE | HOUR | DAY | WEEK | MONTH | QUARTER | YEAR>
```

<!--
## Modify Table

```sql
ALTER TABLE tbl_name alter_option

alter_option:
    ADD [COLUMN] col_name data_type [column_option] ...
  | DROP [COLUMN] col_name
  | MODIFY [COLUMN] col_name data_type [column_option] ...
  | RENAME [COLUMN] old_col_name TO new_col_name
  | RENAME TO new_tbl_name
```

## Rename Table

```sql
RENAME TABLE tbl_name TO tbl_name2;
```

## Truncate Table

```sql
TRUNCATE TABLE tbl_name
```
-->

## Drop Table

```sql
DROP TABLE [IF EXISTS] tbl_name
```

## Show Tables

### Show All Tables

```sql
SHOW TABLES [LIKE pattern] [WHERE expr]
```

```sql
XDB> show TABLES ;
+---------+--------+-------------+-----------+
| table   | engine | primary_key | data_path |
+---------+--------+-------------+-----------+
| student |        |             |           |
| teacher |        |             |           |
| book    |        |             |           |
+---------+--------+-------------+-----------+
3 rows in set (0.022 ms)
```

### Show Create Table

```sql
SHOW CREATE TABLE tbl_name
```

```sql
XDB> show CREATE TABLE student ;
+-------------------------------+
| schema                        |
+-------------------------------+
| CREATE TABLE student (        |
|   id               INT,       |
|   name             CHAR(16),  |
|   age              INT,       |
|   class            CHAR(16),  |
|   score            FLOAT,     |
|   info             CHAR(256), |
|   PRIMARY KEY (id),           |
|   KEY         name_2 (name)   |
| );                            |
+-------------------------------+
1 row in set (0.026 ms)
```

### Show Table Columns

```sql
{DESC | DESCRIBE} tbl_name

SHOW COLUMNS [FROM tbl_name] [WHERE expr]
```

```sql
XDB> DESCRIBE student ;
+--------+-------+-----+
| column | type  | len |
+--------+-------+-----+
| id     | INT   | 4   |
| name   | CHAR  | 16  |
| age    | INT   | 4   |
| class  | CHAR  | 16  |
| score  | FLOAT | 4   |
| info   | CHAR  | 256 |
+--------+-------+-----+
6 rows in set (0.023 ms)
```

<!--
### Show Table Status

```sql
SHOW TABLE STATUS [FROM db_name] [LIKE 'pattern' | WHERE expr]
```
-->
