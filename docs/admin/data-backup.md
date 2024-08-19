---
template: overrides/blog.html
---

# Data Backup

## Dump with DUMP statement

- Dump everything

=== "SQL"

	```sql
	DUMP DATABASE school INTO 'school.sql';
	```

=== "C"

	```c
	xdb_exec (pConn, "DUMP DATABASE school INTO 'school.sql'");
	```

- Dump schema only

=== "SQL"

	```sql
	DUMP DATABASE school NODATA INTO 'school.sql';
	```

=== "C"

	```c
	xdb_exec (pConn, "DUMP DATABASE school NODATA INTO 'school.sql'");
	```

- Dump data only

=== "SQL"

	```sql
	DUMP DATABASE school NODROP NOCREATE INTO 'school.sql';
	```

=== "C"

	```c
	xdb_exec (pConn, "DUMP DATABASE school NODROP NOCREATE INTO 'school.sql'");
	```

## Dump with crossdb tool

- Dump everything

```bash
crossdb -e "DUMP DATABASE" school > school.sql
```

```bash
crossdb -e "DUMP DATABASE school INTO 'school.sql'" school
```

- Dump schema only

```bash
crossdb -e "DUMP DATABASE school NODATA INTO 'school.sql'" school
```

- Dump data only

```bash
crossdb -e "DUMP DATABASE school NODROP NOCREATE INTO 'school.sql'" school
```
