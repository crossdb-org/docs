---
template: overrides/blog.html
---

# Data Restore

## Load with SOURCE statement

=== "SQL"

	``` SQL
	SOURCE 'school.sql'
	```

=== "C"

	``` SQL
	xdb_exec (pConn, "SOURCE 'school.sql'");
	```

## Load with CrossDB tool

```bash
crossdb school < school.sql
```

```bash
cat school.sql | crossdb school
```

```bash
crossdb -e "SOURCE 'school.sql'" school
```
