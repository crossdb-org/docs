---
template: overrides/blog.html
---

# Transaction

CrossDB transaction supports ACID.
Default isolation level is `READ COMMITTED`

## Reader-Writer MVCC

Currently, CrossDB uses table-level read-write locks. Only one writer connection thread can modify the table at a time, while other writer connection threads will be blocked. However, reader connection threads will not be blocked and will see the old values. Once the writer connection's changes are committed, the new values become visible to these reader connections (read committed). 

In short, there are two versions: a writer version and a reader version. A writer, before commit or rollback, will not block readers from reading old values. If the writer executes for a long time, this mechanism will significantly improve concurrency.

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
> This operation is optional, and the transaction will begin automatically when the table is changed.

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
> Even if there are errors during statement execution, the transaction will not be rolled back automatically. The user must explicitly issue a rollback.