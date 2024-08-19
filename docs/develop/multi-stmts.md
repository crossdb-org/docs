---
template: overrides/blog.html
---

# Multi-Statements

Multi-Statements feature can improve performance a lot especailly for client-server mode. As you can run a batch of statements in one query, then get result one by one in parallel. For database doesn't support Multi-Statements, you have to send one statement, wait result, then send next one which will be low performance especailly when network lattency is big. 

=== "SQL"

	```sql
	SELECT COUNT(*) FROM student; SELECT id,name FROM student WHERE id=2;
	```
	
=== "C"

	```c
	pRes = xdb_exec (pConn, "SELECT COUNT(*) FROM student; SELECT id,name FROM student WHERE id=2");
	printf ("-- 1st result: ");
	if (NULL != (pRow = xdb_fetch_row (pRes))) {
		xdb_print_row (pRes->col_meta, pRow, 0);
		printf ("\n");
	}
	xdb_free_result (pRes);
	printf ("-- 2nd result: ");
	pRes = xdb_next_result (pConn);
	if (NULL != pRes) {
		if (NULL != (pRow = xdb_fetch_row (pRes))) {
			xdb_print_row (pRes->col_meta, pRow, 0);
			printf ("\n");
		}
		xdb_free_result (pRes);
	}
	```