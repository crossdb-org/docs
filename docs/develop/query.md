---
template: overrides/blog.html
---

# Query Rows

## Select Rows

=== "SQL"

	```sql
	SELECT id,name,age,class,score from student WHERE id = 2;
	```
	
=== "C"

	```c
	xdb_res_t *pRes = xdb_exec (pConn, "SELECT id,name,age,class,score from student WHERE id = 2");

	xdb_res_t *pRes = xdb_pexec (pConn, "SELECT id,name,age,class,score from student WHERE id = %d", id);
	```

## Get Row Count

```c
xdb_row_count (pRes);
```

## Get Column information

```c
for (int i = 0; i < xdb_column_count(pRes); ++i) {
	printf ("type %d name %s\n", xdb_column_type(pRes, i), xdb_column_name(pRes, i));
}
```

## Fetch One Row 

```c
xdb_row_t *pRow = xdb_fetch_row (pRes);
```

## Get Column Values by ID

```c
printf ("char value %d\n",		xdb_column_int(pRes, pRow, 0));
printf ("short value %d\n",		xdb_column_int(pRes, pRow, 1));
printf ("int value %d\n", 		xdb_column_int(pRes, pRow, 2));
printf ("bigint value %"PRIi64"\n",	xdb_column_int64(pRes, pRow, 3));
printf ("float value %f\n",		xdb_column_float(pRes, pRow, 4));
printf ("double value %d\n",	xdb_column_double(pRes, pRow, 5));
printf ("string value %s\n",	xdb_column_str(pRes, pRow, 6));
int len;
printf ("string value %s, len %d\n", xdb_column_str2(pRes, pRow, 6, &len), len);
```

## Get Column Values by Name

```c
printf ("char value %d\n",		xdb_col_int(pRes, pRow, "age"));
printf ("short value %d\n",		xdb_column_int(pRes, pRow, ""));
printf ("int value %d\n", 		xdb_column_int(pRes, pRow, "id"));
printf ("bigint value %"PRIi64"\n",	xdb_column_int64(pRes, pRow, "distance"));
printf ("float value %f\n",		xdb_column_float(pRes, pRow, "score"));
printf ("double value %d\n",	xdb_column_double(pRes, pRow, "totoal"));
printf ("string value %s\n",	xdb_column_str(pRes, pRow, "name"));
int len;
printf ("string value %s, len %d\n", xdb_col_str2(pRes, pRow, "name", &len), len);
```
