---
template: overrides/blog.html
---

# Trigger

## Define Trigger Function

```c
int 
stu_trigger (xdb_conn_t *pConn, xdb_res_t* pRes, uint32_t type, xdb_row_t *pNewRow, xdb_row_t *pOldRow, void *pArg)
{
	switch (type) {
	case XDB_TRIG_AFT_INS:
		printf ("insert student: id %d name '%s' age %d\n", 
					xdb_col_int(pRes, pNewRow, "id"), 
					xdb_col_str(pRes, pNewRow, "name"), 
					xdb_col_int(pRes, pNewRow, "age"));
		break;
	case XDB_TRIG_AFT_DEL:
		printf ("delete student id %d: name '%s' age %d\n", 
					xdb_col_int(pRes, pNewRow, "id"), 
					xdb_col_str(pRes, pNewRow, "name"), 
					xdb_col_int(pRes, pNewRow, "age"));
		break;
	case XDB_TRIG_AFT_UPD:
		printf ("update student id %d: \n", 
					xdb_col_int(pRes, pNewRow, "id"));
		printf ("    age:  '%d' -> '%d'\n", 
					xdb_col_int(pRes, pOldRow, "age"), 
					xdb_col_int(pRes, pNewRow, "age"));
		break;
	}
	return 0;
}
```

## Create Trigger Function

```c
xdb_create_func ("stu_trig", XDB_FUNC_TRIG, "C", stu_trigger, NULL);
```

## Create Trigger

=== "SQL"

	```sql
	CREATE TRIGGER stu_ins AFTER INSERT ON student CALL stu_trig
	CREATE TRIGGER stu_upd AFTER UPDATE ON student CALL stu_trig	
	CREATE TRIGGER stu_del AFTER DELETE ON student CALL stu_trig
	```

=== "C"

	```c
	xdb_exec (pConn, "CREATE TRIGGER stu_ins AFTER INSERT ON student CALL stu_trig");
	xdb_exec (pConn, "CREATE TRIGGER stu_upd AFTER UPDATE ON student CALL stu_trig");
	xdb_exec (pConn, "CREATE TRIGGER stu_del AFTER DELETE ON student CALL stu_trig");
	```
