---
template: overrides/blog.html
---

# Index

## Create Index

```sql
CREATE [UNIQUE] INDEX idx_name 
	[USING {HASH | BTREE}] 
	ON tbl_name (col_name,...)
```

<!--
## Modify Index

```sql
ALTER TABLE tbl_name ALTER INDEX idx_name {VISIBLE | INVISIBLE}
```

## Rename Index

```sql
ALTER TABLE tbl_name RENAME INDEX idx_name TO idx_name2
```
-->

## Drop Index

```sql
DROP INDEX idx_name ON tbl_name
```

## Show Index

```sql
SHOW {INDEX | INDEXES | KEYS} [FROM tbl_name] [WHERE expr]
```

```sql
XDB> show INDEXES ;
+---------+---------+------+----------+
| table   | idx_key | type | col_list |
+---------+---------+------+----------+
| student | PRIMARY | HASH | id       |
| student | name_2  | HASH | name     |
| teacher | PRIMARY | HASH | id       |
| teacher | name_2  | HASH | name     |
| book    | PRIMARY | HASH | id       |
| book    | name_2  | HASH | name     |
+---------+---------+------+----------+
6 rows in set (0.016 ms)
```
