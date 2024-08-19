---
template: overrides/blog.html
---

# Transaction and Lock

##Begin Transaction

```sql
BEGIN

START TRANSACTION [READ WRITE | READ ONLY]
```

> **Note**
> Will commit any existing open transaction

##Commit Transaction

```sql
COMMIT
```

##Rollback Transaction

```sql
ROLLBACK
```

##Lock Tables

```sql
-- TBD
LOCK {TABLE | TABLES} tbl_name { READ | WRITE } [, tbl_name { READ | WRITE }] ...
```

> **Note**
> This command must be executed after `BEGIN` transaction for performance or prevent other sessions to , and locks will be released after commit transaction.

##Set Isolation Level

```sql
-- TBD
SET TRANSACTION ISOLATION LEVEL { READ COMMITTED | REPEATABLE READ | READ UNCOMMITTED | SERIALIZABLE }
```

> **Note**
> TBD, default is `READ COMMITTED`.

##Set Auto Commit

```sql
SET AUTOCOMMIT = {0 | 1}
```

> **Note**
> Default `AUTOCOMMIT` = 1.
