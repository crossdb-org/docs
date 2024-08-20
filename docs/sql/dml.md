---
template: overrides/blog.html
---

# Data Manipulation

## Insert

```sql
INSERT INTO tbl_name 
	[(col_name,...)] 
	VALUES (val,...), ...

INSERT INTO tbl_name SET col_name = value, [col_name = value], ...
```

## Replace

```sql
REPLACE INTO tbl_name 
	[(col_name,...)] 
	VALUES (val,...), ...
```

## Select

```sql
SELECT col_name,... FROM tbl_name
    [WHERE expr]
    [ORDER BY col_name [ASC | DESC], ...]
    [LIMIT {[offset,] row_count | row_count OFFSET offset}]
```

## Update

```sql
UPDATE tbl_name
	SET col_name=val, ... 
    [WHERE expr]
    [ORDER BY col_name [ASC | DESC], ...]
    [LIMIT {[offset,] row_count | row_count OFFSET offset}]
```

## Delete

```sql
DELETE FROM tbl_name
    [WHERE expr]
    [ORDER BY col_name [ASC | DESC], ...]
    [LIMIT {[offset,] row_count | row_count OFFSET offset}]
```

<!--
## Prepare

```sql
PREPARE stmt_name FROM preparable_stmt
```

> **Note**
> Session scope. A prepared statement created in one session is not available to other sessions.
> When a session ends, whether normally or abnormally, its prepared statements no longer exist.

## Execute

```sql
EXECUTE stmt_name [USING @var_name [, @var_name] ...]
```

## Drop Prepare

```sql
DROP PREPARE stmt_name
```
-->

## Explain

```sql
EXPLAIN SELECT statement
```