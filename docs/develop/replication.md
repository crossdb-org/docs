---
template: overrides/blog.html
---

# Replication

## Source-replica replication

=== "SQL"

	```sql
	CREATE REPLICA default HOST='192.168.1.1', PORT=7777;
	```

=== "C"

	```c
	xdb_exec (pConn, "CREATE REPLICA default HOST='192.168.1.1', PORT=7777");
	```

## Multi-source replication

=== "SQL"

	```sql
	CREATE REPLICA server1 HOST='192.168.1.1', PORT=7777, DO_DB=(library, school);
	CREATE REPLICA server2 HOST='192.168.1.2', PORT=7777, DO_DB=(shop, canteen);
	```

=== "C"

	```c
	xdb_exec (pConn, "CREATE REPLICA server1 HOST='192.168.1.1', PORT=7777, DO_DB=(library, school)");
	xdb_exec (pConn, "CREATE REPLICA server2 HOST='192.168.1.2', PORT=7777, DO_DB=(shop, canteen)");
	```

<!--
	pRes = xdb_exec (pConn, "CREATE REPLICA xxx TABLES='config.port [(*|a,b,c)] [where (xx=xx)] [with (publish='')] [into db.table];', PORT=8000");
-->