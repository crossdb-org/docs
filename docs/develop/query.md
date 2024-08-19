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

	// check pRes->errcode = 0
	```

## Get Row Count

```c
pRes->row_count;
```

## Get Column information

```c
for (int i = 0; i < pRes->col_count; ++i) {
	xdb_col_t *pCol = xdb_column_meta (pRes, i);
	printf ("type %d name %s\n", pCol->type, pCol->name);
}
```

## Fetch One Row 

```c
xdb_row_t *pRow = xdb_fetch_row (pRes);
```

## Get Column Values

- Access by column data type

```c
printf ("char value %d\n",		*(char*)pRow[0]);
printf ("short value %d\n",		*(short*)pRow[1]);
printf ("int value %d\n", 		*(int*)pRow[2]);
printf ("bigint value %"PRIi64"\n",	*(int64_t*)pRow[3]);
printf ("float value %f\n",		*(float*)pRow[4]);
printf ("double value %d\n",	*(double*)pRow[5]);
printf ("string value %s\n",	*(char*)pRow[6]);
printf ("string len   %d\n",	*(uint16_t*)(pRow[6]-2));
```

- Access by API

```c
printf ("char value %d\n",		xdb_column_int(pRes->col_meta, pRow, 0));
printf ("short value %d\n",		xdb_column_int(pRes->col_meta, pRow, 1));
printf ("int value %d\n", 		xdb_column_int(pRes->col_meta, pRow, 2));
printf ("bigint value %"PRIi64"\n",	xdb_column_int64(pRes->col_meta, pRow, 3));
printf ("float value %f\n",		xdb_column_float(pRes->col_meta, pRow, 4));
printf ("double value %d\n",	xdb_column_double(pRes->col_meta, pRow, 5));
printf ("string value %s\n",	xdb_column_str(pRes->col_meta, pRow, 6));
int len;
printf ("string value %s, len %d\n", xdb_column_str2(pRes->col_meta, pRow, 6, &len), len);
```