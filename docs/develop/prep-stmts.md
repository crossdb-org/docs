---
template: overrides/blog.html
---

# Prepared Statements

Prepared Statements can save SQL parsing time and improve performance.

> **NOTE**
> Now only support `INSERT`, `SELECT` `UPDATE` `DELETE` statements.

## Steps

- Create Prepared Statements

	``` c
	xdb_stmt_t *pStmt = xdb_stmt_prepare (pConn, "SELECT * FROM student WHERE id=?");
	```

- Method A: Execute with Args

	```c
	xdb_res_t *pRes = xdb_stmt_bexec (pStmt, id);
	```


- Method B: Bind then Execute

	- Bind parameters

	```c
	xdb_bind_int (pStmt, 1, id);
	```

	> **NOTE**
	> Bind parameter id starts from 1. 

	- Execute prepared statements

	```c
	xdb_res_t *pRes = xdb_stmt_exec (pStmt);
	```

- Close statements

	```c
	xdb_stmt_close (pStmt);
	```

# Insert

=== "Execute with Args"

	```c
	xdb_stmt_t *pStmt = xdb_stmt_prepare (pConn, "INSERT INTO student (id,name,age,class,score) VALUES (?,?,?,?,?)");
	if (NULL != pStmt) {
		pRes = xdb_stmt_bexec (pStmt, id, name, age, cls, score);
		pRow = xdb_fetch_row (pRes);
		// handle pRow
		xdb_free_result (pRes);

		// close when finish using
		xdb_stmt_close (pStmt);
		}
	}
	```

=== "Bind then Execute"

	```c
	xdb_stmt_t *pStmt = xdb_stmt_prepare (pConn, "INSERT INTO student (id,name,age,class,score) VALUES (?,?,?,?,?)");
	if (NULL != pStmt) {
		xdb_bind_int (pStmt, 1, id);
		xdb_bind_str (pStmt, 2, name);
		xdb_bind_int (pStmt, 3, age);
		xdb_bind_str (pStmt, 4, cls);
		xdb_bind_int (pStmt, 5, score);
		pRes = xdb_stmt_exec (pStmt);
		pRow = xdb_fetch_row (pRes);
		// handle pRow
		xdb_free_result (pRes);

		// close when finish using
		xdb_stmt_close (pStmt);
		}
	}
	```

## Select

=== "Bind & Execute"

	```c
	xdb_stmt_t *pStmt = xdb_stmt_prepare (pConn, "SELECT * FROM student WHERE id=?");
	if (NULL != pStmt) {
		pRes = xdb_stmt_bexec (pStmt, id);
		pRow = xdb_fetch_row (pRes);
		// handle pRow
		xdb_free_result (pRes);

		// close when finish using
		xdb_stmt_close (pStmt);
		}
	}
	```

=== "Bind then Execute"

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

=== "Bind & Execute"

	```c
	xdb_stmt_t *pStmt = xdb_stmt_prepare (pConn, "UPDATE student SET age=age+? WHERE id=?");
	if (NULL != pStmt) {
		pRes = xdb_stmt_bexec (pStmt, 2, id);

		// close when finish using
		xdb_stmt_close (pStmt);
		}
	}
	```

=== "Bind then Execute"

	```c
	xdb_stmt_t *pStmt = xdb_stmt_prepare (pConn, "UPDATE student SET age=age+? WHERE id=?");
	if (NULL != pStmt) {
		xdb_bind_int (pStmt, 1, 2); // age
		xdb_bind_int (pStmt, 2, id);
		pRes = xdb_stmt_exec (pStmt);

		// close when finish using
		xdb_stmt_close (pStmt);
		}
	}
	```

## Delete

=== "Bind & Execute"

	```c
	xdb_stmt_t *pStmt = xdb_stmt_prepare (pConn, "DELETE FROM student WHERE id=?");
	if (NULL != pStmt) {
		pRes = xdb_stmt_bexec (pStmt, id);

		// close when finish using
		xdb_stmt_close (pStmt);
		}
	}
	```

=== "Bind then Execute"

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