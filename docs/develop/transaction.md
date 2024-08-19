---
template: overrides/blog.html
---

# Transaction

CrossDB transaction supports ACID.
Default isolation level is `READ COMMITTED`

## Reader-Writeer MVCC

Current CrossDB uses table-level readwrite lock, only one writer connection thread can modify the table, other writer connection threads will be blocked. 
However the reader connection threads won't be blocked and they'll see the old values. 
When the writer connection change is committed, the new value is visible by these reader connections (read committed).  
In short writer before commit will not block readers to read old values

## Auto-commit

Enabled by default.

=== "SQL"

	```sql
	-- Disable auto-commit
	SET AUTOCOMMIT = 0;
	-- Enable auto-commit
	SET AUTOCOMMIT = 1;
	```
	
=== "C"

	```c
	// Disable auto-commit
	xdb_exec (pConn, "SET AUTOCOMMIT = 0");
	// Enable auto-commit
	xdb_exec (pConn, "SET AUTOCOMMIT = 1");
	```

## Begin Transaction

=== "SQL"

	```sql
	BEGIN;
	```
	
=== "C"

	```c
	xdb_begin (pConn); // fast
	// or
	xdb_exec (pConn, "BEGIN");
	```

> **NOTE**
> This operation is optional and transaction will begin automatically when changing table.

## Commit Transaction

=== "SQL"

	```sql
	COMMIT;
	```
	
=== "C"

	```c
	xdb_commit (pConn); // fast
	// or
	xdb_exec (pConn, "COMMIT");
	```

## Rollback Transaction

=== "SQL"

	```sql
	ROLLBACK;
	```
	
=== "C"

	```c
	xdb_rollback (pConn); // fast
	// or
	xdb_exec (pConn, "ROLLBACK");
	```

> **NOTE**
> Even there's errors during statements execution, transaction won't be rollbacked automatically, and user have to issue `rollback` expilicitly.