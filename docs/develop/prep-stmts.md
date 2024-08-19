---
template: overrides/blog.html
---

# Prepared Statements

Prepared Statements can save the SQL parsing time and improve performance.

> **NOTE**
> Now only support `SELECT` `UPDATE` `DELETE` statements.

## Steps

- Create Prepared Statments

``` c
xdb_stmt_t *pStmt = xdb_stmt_prepare (pConn, "xxx WHERE id=?");
```

- Bind paramters

```c
xdb_bind_int (pStmt, 1, id);
```

> **NOTE**
> Bind parameter id starts from 1. 
> Now only support `WHERE` clause.

- Execute prepared statements

```c
xdb_res_t *pRes = xdb_stmt_exec (pStmt);
```

- Close statements

```c
xdb_stmt_close (pStmt);
```

## Select

```c
xdb_stmt_t *pStmt = xdb_stmt_prepare (pConn, "SELECT * FROM student WHERE id=?");
if (NULL != pStmt) {
	xdb_bind_int (pStmt, 1, id);
	pRes = xdb_stmt_exec (pStmt);
	pRow = xdb_fetch_row (pRes);
	// handle pRow
	xdb_free_result (pRes);

	// close when finish using
	xdb_stmt_close (pStmt);
	}
}
```

## Update

```c
xdb_stmt_t *pStmt = xdb_stmt_prepare (pConn, "UPDATE student SET age=15 WHERE id=?");
if (NULL != pStmt) {
	xdb_bind_int (pStmt, 1, id);
	pRes = xdb_stmt_exec (pStmt);

	// close when finish using
	xdb_stmt_close (pStmt);
	}
}
```

## Delete

```c
xdb_stmt_t *pStmt = xdb_stmt_prepare (pConn, "DELETE FROM student WHERE id=?");
if (NULL != pStmt) {
	xdb_bind_int (pStmt, 1, id[i]);
	pRes = xdb_stmt_exec (pStmt);

	// close when finish using
	xdb_stmt_close (pStmt);
	}
}
```