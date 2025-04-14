---
template: overrides/blog.html
---

# Trigger

## Create Trigger

```sql
CREATE TRIGGER [IF NOT EXISTS] trigger_name
    { BEFORE | AFTER } { INSERT | UPDATE | DELETE }
    ON tbl_name
    CALL func_name
```

## Drop Trigger

```sql
DROP TRIGGER [IF EXISTS] trigger_name ON tbl_name
```

## Show Triggers

```sql
SHOW TRIGGER [FROM tbl_name]
```

```sql
SHOW TRIGGER STATUS
```

<!--
### Show Table Status

```sql
SHOW TABLE STATUS [FROM db_name] [LIKE 'pattern' | WHERE expr]
```
-->
