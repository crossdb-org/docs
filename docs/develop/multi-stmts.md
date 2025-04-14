---
template: overrides/blog.html
---

# Multi-Statements

The Multi-Statements feature can significantly improve performance, especially in client-server mode. By running a batch of statements in one query, you can retrieve results one by one in parallel. In databases that do not support Multi-Statements, you must send one statement, wait for the result, and then send the next one. This process results in lower performance, particularly when network latency is high.

=== "SQL"

	```sql
	SELECT COUNT(*) FROM student; SELECT id,name FROM student WHERE id=2;
	```
	
=== "C"

	```c
	pRes = xdb_exec (pConn, "SELECT COUNT(*) FROM student; SELECT id,name FROM student WHERE id=2");
	printf ("-- 1st result: ");
	if (NULL != (pRow = xdb_fetch_row (pRes))) {
		xdb_print_row (pRes, pRow, 0);
		printf ("\n");
	}
	xdb_free_result (pRes);
	printf ("-- 2nd result: ");
	pRes = xdb_next_result (pConn);
	if (NULL != pRes) {
		if (NULL != (pRow = xdb_fetch_row (pRes))) {
			xdb_print_row (pRes, pRow, 0);
			printf ("\n");
		}
		xdb_free_result (pRes);
	}
	```