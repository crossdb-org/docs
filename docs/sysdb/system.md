---
template: overrides/blog.html
---

# system

## Databases

```sql
XDB> SELECT * FROM system.databases;
+----------+--------+-----------+
| database | engine | data_path |
+----------+--------+-----------+
| system   |        |           |
| memory   |        |           |
+----------+--------+-----------+
2 rows in set (0.010 ms)
```

## Tables

```sql
XDB> SELECT * FROM system.tables where database='memory';
+----------+---------+--------+-----------+-------------------------------+
| database | table   | engine | data_path | schema                        |
+----------+---------+--------+-----------+-------------------------------+
| memory   | student |        |           | CREATE TABLE student (        |
|          |         |        |           |   id               INT,       |
|          |         |        |           |   name             CHAR(16),  |
|          |         |        |           |   age              INT,       |
|          |         |        |           |   class            CHAR(16),  |
|          |         |        |           |   score            FLOAT,     |
|          |         |        |           |   info             CHAR(256), |
|          |         |        |           |   PRIMARY KEY (id),           |
|          |         |        |           |   KEY         name_2 (name)   |
|          |         |        |           | );                            |
| memory   | teacher |        |           | CREATE TABLE teacher (        |
|          |         |        |           |   id               INT,       |
|          |         |        |           |   name             CHAR(16),  |
|          |         |        |           |   age              INT,       |
|          |         |        |           |   info             CHAR(256), |
|          |         |        |           |   PRIMARY KEY (id),           |
|          |         |        |           |   KEY         name_2 (name)   |
|          |         |        |           | );                            |
| memory   | book    |        |           | CREATE TABLE book (           |
|          |         |        |           |   id               INT,       |
|          |         |        |           |   name             CHAR(64),  |
|          |         |        |           |   author           CHAR(32),  |
|          |         |        |           |   count            INT,       |
|          |         |        |           |   PRIMARY KEY (id),           |
|          |         |        |           |   KEY         name_2 (name)   |
|          |         |        |           | );                            |
+----------+---------+--------+-----------+-------------------------------+
3 rows in set (0.020 ms)
```

## Columns

```sql
XDB> SELECT * FROM system.columns where database='memory';
+----------+---------+--------+-------+-----+
| database | table   | column | type  | len |
+----------+---------+--------+-------+-----+
| memory   | student | id     | INT   | 4   |
| memory   | student | name   | CHAR  | 16  |
| memory   | student | age    | INT   | 4   |
| memory   | student | class  | CHAR  | 16  |
| memory   | student | score  | FLOAT | 4   |
| memory   | student | info   | CHAR  | 256 |
| memory   | teacher | id     | INT   | 4   |
| memory   | teacher | name   | CHAR  | 16  |
| memory   | teacher | age    | INT   | 4   |
| memory   | teacher | info   | CHAR  | 256 |
| memory   | book    | id     | INT   | 4   |
| memory   | book    | name   | CHAR  | 64  |
| memory   | book    | author | CHAR  | 32  |
| memory   | book    | count  | INT   | 4   |
+----------+---------+--------+-------+-----+
14 rows in set (0.017 ms)
```

## Indexes

```sql
XDB> SELECT * FROM system.indexes where database='memory';
+----------+---------+---------+------+----------+
| database | table   | idx_key | type | col_list |
+----------+---------+---------+------+----------+
| memory   | student | PRIMARY | HASH | id       |
| memory   | student | name_2  | HASH | name     |
| memory   | teacher | PRIMARY | HASH | id       |
| memory   | teacher | name_2  | HASH | name     |
| memory   | book    | PRIMARY | HASH | id       |
| memory   | book    | name_2  | HASH | name     |
+----------+---------+---------+------+----------+
6 rows in set (0.016 ms)
```

<!--
## KEY_USAGE

```sql
```

## Server

```sql
```

## Connections

```sql
```

## DB_STATS

```sql
```

## TBL_STATS

```sql
```

## INDEX_STATS

```sql
```

## PROCESS

```sql
```
-->