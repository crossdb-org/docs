---
title: cdb_api.h


---

# cdb_api.h









## Types

|                | Name           |
| -------------- | -------------- |
| enum | **[cdb_db_type](./cdb__api_8h.html#enum-cdb_db_type)** { CDB_DB_TYPE_DFT = 0, CDB_DB_TYPE_RAMDISK = 0, CDB_DB_TYPE_PERSIST = 1, CDB_DB_TYPE_MEMORY = 2 } |
| enum | **[cdb_db_flag](./cdb__api_8h.html#enum-cdb_db_flag)** { CDB_DB_FLAG_SHARE = (1<<0), CDB_DB_FLAG_MAPLOCK = (1<<1) } |
| enum | **[cdb_tbl_flag](./cdb__api_8h.html#enum-cdb_tbl_flag)** { CDB_TBL_FLAG_CHECKSUM = (1<<0) } |
| enum | **[cdb_idx_type](./cdb__api_8h.html#enum-cdb_idx_type)** { CDB_IDX_TYPE_DFT = 0, CDB_IDX_TYPE_HASH = 0, CDB_IDX_TYPE_RBTREE = 1 } |



## Functions

|                | Name           |
| -------------- | -------------- |
| cdb_error | **[cdb_record_insert](./cdb__api_8h.html#function-cdb_record_insert)**(cdb_table_h hTbl, void * pRecord, cdb_record_flag flags)  |
| cdb_error | **[cdb_record_insert2](./cdb__api_8h.html#function-cdb_record_insert2)**(cdb_table_h hTbl, void * pRecord, const void * pSelFlds, cdb_rec_id * pRecId, cdb_record_flag flags)  |
| cdb_error | **[cdb_record_get](./cdb__api_8h.html#function-cdb_record_get)**(cdb_table_h hTbl, const void * pMatchRec, void * pOutRec)  |
| cdb_error | **[cdb_record_get2](./cdb__api_8h.html#function-cdb_record_get2)**(cdb_table_h hTbl, const void * pMatchRec, void * pOutRec, const void * pSelFlds, cdb_rec_id * pRecId, cdb_record_flag flags)  |
| cdb_error | **[cdb_record_update](./cdb__api_8h.html#function-cdb_record_update)**(cdb_table_h hTbl, const void * pMatchRec, const void * pUpdFlds, void * pUpdRec, cdb_record_flag flags)  |
| cdb_error | **[cdb_record_delete](./cdb__api_8h.html#function-cdb_record_delete)**(cdb_table_h hTbl, const void * pMatchRec, cdb_record_flag flags)  |
| cdb_error | **[cdb_record_exist](./cdb__api_8h.html#function-cdb_record_exist)**(cdb_table_h hTbl, const void * pMatchRec)  |
| cdb_error | **[cdb_record_query](./cdb__api_8h.html#function-cdb_record_query)**(cdb_table_h hTbl, const void * pMatchFlds, const void * pMatchRec, void * pOutRec)  |
| cdb_error | **[cdb_record_query2](./cdb__api_8h.html#function-cdb_record_query2)**(cdb_table_h hTbl, const void * pMatchFlds, const void * pMatchRec, void * pOutRec, const void * pSelFlds, cdb_rec_id * pRecId)  |
| cdb_error | **[cdb_record_exist2](./cdb__api_8h.html#function-cdb_record_exist2)**(cdb_table_h hTbl, const void * pMatchFlds, const void * pMatchRec)  |
| cdb_rec_id | **[cdb_record_count](./cdb__api_8h.html#function-cdb_record_count)**(cdb_table_h hTbl, const void * pMatchFlds, const void * pMatchRec)  |
| cdb_error | **[cdb_record_insert_byid](./cdb__api_8h.html#function-cdb_record_insert_byid)**(cdb_table_h hTbl, cdb_rec_id rec_id, void * pRecord, const void * pSelFlds, cdb_record_flag flags)  |
| cdb_error | **[cdb_record_get_byid](./cdb__api_8h.html#function-cdb_record_get_byid)**(cdb_table_h hTbl, cdb_rec_id rec_id, void * pOutRec, const void * pSelFlds, cdb_record_flag flags)  |
| cdb_error | **[cdb_record_update_byid](./cdb__api_8h.html#function-cdb_record_update_byid)**(cdb_table_h hTbl, cdb_rec_id * pRecId, const void * pUpdFlds, void * pUpdRec, cdb_record_flag flags)  |
| cdb_error | **[cdb_record_delete_byid](./cdb__api_8h.html#function-cdb_record_delete_byid)**(cdb_table_h hTbl, cdb_rec_id rec_id, cdb_record_flag flags)  |
| cdb_error | **[cdb_record_getptr_byid](./cdb__api_8h.html#function-cdb_record_getptr_byid)**(cdb_table_h hTbl, cdb_record_h * phRecord, cdb_rec_id rec_id)  |
| cdb_error | **[cdb_record_enqueue](./cdb__api_8h.html#function-cdb_record_enqueue)**(cdb_table_h hTbl, void * pRecord, cdb_record_flag flags)  |
| cdb_error | **[cdb_record_dequeue](./cdb__api_8h.html#function-cdb_record_dequeue)**(cdb_table_h hTbl, void * pOutRec, cdb_record_flag flags)  |
| cdb_error | **[cdb_database_create](./cdb__api_8h.html#function-cdb_database_create)**(cdb_db_h * phDb, const char * db_name, const char * db_path, [cdb_db_type](./group__Database.html#enum-cdb_db_type) db_type, cdb_lock_type lock_type, [cdb_db_flag](./group__Database.html#enum-cdb_db_flag) flags) <br>Create or open a database.  |
| cdb_error | **[cdb_database_create2](./cdb__api_8h.html#function-cdb_database_create2)**(cdb_db_h * phDb, const cdb_dbinfo_t * pDbInfo) <br>Create or open a database.  |
| cdb_error | **[cdb_database_open](./cdb__api_8h.html#function-cdb_database_open)**(cdb_db_h * phDb, const char * db_name, const char * db_path, int flags) <br>Open a database.  |
| cdb_error | **[cdb_database_close](./cdb__api_8h.html#function-cdb_database_close)**(cdb_db_h * phDb, int flags) <br>Close a database.  |
| cdb_db_h | **[cdb_database_get](./cdb__api_8h.html#function-cdb_database_get)**(const char * db_name) <br>Get database handle by name.  |
| cdb_error | **[cdb_database_drop](./cdb__api_8h.html#function-cdb_database_drop)**(cdb_db_h * phDb, cdb_bool bForce) <br>Drop a database.  |
| cdb_error | **[cdb_transaction_begin](./cdb__api_8h.html#function-cdb_transaction_begin)**(cdb_db_h hDb, int flags) <br>Begin a transaction.  |
| cdb_error | **[cdb_transaction_commit](./cdb__api_8h.html#function-cdb_transaction_commit)**(cdb_db_h hDb, cdb_bool bFlush, int flags) <br>Commit a transaction.  |
| cdb_error | **[cdb_transaction_rollback](./cdb__api_8h.html#function-cdb_transaction_rollback)**(cdb_db_h hDb, void * pSavepoint, int flags) <br>Rollback a transaction.  |
| cdb_error | **[cdb_table_create](./cdb__api_8h.html#function-cdb_table_create)**(cdb_db_h hDb, cdb_table_h * phTbl, const char * tbl_name, void * pSchemas, cdb_rec_id max_count, const char * primary_key, [cdb_tbl_flag](./group__Table.html#enum-cdb_tbl_flag) flags) <br>Create a table.  |
| cdb_error | **[cdb_table_create2](./cdb__api_8h.html#function-cdb_table_create2)**(cdb_db_h hDb, cdb_table_h * phTbl, cdb_table_info_t * pTblInfo) <br>Create a table.  |
| cdb_table_h | **[cdb_table_get](./cdb__api_8h.html#function-cdb_table_get)**(cdb_db_h hDb, const char * tbl_name) <br>Get table handle by name.  |
| cdb_error | **[cdb_table_drop](./cdb__api_8h.html#function-cdb_table_drop)**(cdb_table_h * phTbl, cdb_bool bForce) <br>Drop a table.  |
| cdb_error | **[cdb_index_create](./cdb__api_8h.html#function-cdb_index_create)**(cdb_table_h hTbl, const char * idx_name, const char * pMatchStr, [cdb_idx_type](./group__Table.html#enum-cdb_idx_type) idx_type, cdb_idx_flag flags) <br>Create an index on table.  |
| cdb_error | **[cdb_index_create2](./cdb__api_8h.html#function-cdb_index_create2)**(cdb_table_h hTbl, cdb_index_info_t * pIdxInfo)  |
| cdb_error | **[cdb_index_drop](./cdb__api_8h.html#function-cdb_index_drop)**(cdb_table_h hTbl, const char * idx_name)  |
| cdb_cursor_t * | **[cdb_cursor_open](./cdb__api_8h.html#function-cdb_cursor_open)**(cdb_cursor_t * pCursor, cdb_table_h hTbl, const void * pMatchFlds, const void * pMatchRec, const void * pSelFlds, const void * pOrderFlds, cdb_cursor_flag flags)  |
| cdb_rec_id | **[cdb_cursor_count](./cdb__api_8h.html#function-cdb_cursor_count)**(cdb_cursor_t * pCursor)  |
| cdb_error | **[cdb_cursor_get_next](./cdb__api_8h.html#function-cdb_cursor_get_next)**(cdb_cursor_t * pCursor, void * pOutRec, cdb_rec_id * pRecId)  |
| cdb_rec_id | **[cdb_cursor_iterate](./cdb__api_8h.html#function-cdb_cursor_iterate)**(cdb_cursor_t * pCursor, void * pOutRec, cdb_traverse_cb cb_func, void * pArg)  |
| cdb_error | **[cdb_cursor_close](./cdb__api_8h.html#function-cdb_cursor_close)**(cdb_cursor_t * pCursor)  |
| cdb_error | **[cdb_cursor_set_flag](./cdb__api_8h.html#function-cdb_cursor_set_flag)**(cdb_cursor_t * pCursor, cdb_cursor_flag flags)  |
| cdb_rec_id | **[cdb_table_select](./cdb__api_8h.html#function-cdb_table_select)**(cdb_table_h hTbl, const void * pMatchFlds, const void * pMatchRec, void * pOutRec, cdb_traverse_cb cb_fn, void * pArg)  |
| cdb_rec_id | **[cdb_table_select2](./cdb__api_8h.html#function-cdb_table_select2)**(cdb_table_h hTbl, const void * pMatchFlds, const void * pMatchRec, void * pOutRec, const void * pSelFlds, const void * pOrderFlds, cdb_traverse_cb cb_fn, void * pArg)  |
| cdb_rec_id | **[cdb_table_delete](./cdb__api_8h.html#function-cdb_table_delete)**(cdb_table_h hTbl, const void * pMatchFlds, const void * pMatchRec, cdb_record_flag flags)  |
| cdb_rec_id | **[cdb_table_update](./cdb__api_8h.html#function-cdb_table_update)**(cdb_table_h hTbl, const void * pMatchFlds, const void * pMatchRec, const void * pUpdFlds, void * pUpdRec, cdb_record_flag flags)  |
| cdb_schema_t * | **[cdb_table_get_schema](./cdb__api_8h.html#function-cdb_table_get_schema)**(cdb_table_h hTbl, int flags)  |
| cdb_error | **[cdb_schema_expand](./cdb__api_8h.html#function-cdb_schema_expand)**(cdb_schema_t ** ppSchema, cdb_schema_field_t * pSrcSchema, int schema_count, int rsvd_schema)  |
| cdb_error | **[cdb_schema_append](./cdb__api_8h.html#function-cdb_schema_append)**(cdb_schema_t * pSchema, cdb_schema_field_entry * pField, cdb_bool bAdjRecSize)  |
| int | **[cdb_schema_sprintf](./cdb__api_8h.html#function-cdb_schema_sprintf)**(cdb_schema_t * pSchema, char * buf, size_t size, cdb_dump_format format, const void * pRecord, const char * pTblName, cdb_dump_flag flags)  |
| int | **[cdb_schema_sprintf2](./cdb__api_8h.html#function-cdb_schema_sprintf2)**(cdb_schema_t * pSchema, char buf[], size_t size, cdb_dump_format format, const void * pRecord, const void * pSelFlds, cdb_rec_id rec_id, const char * pTblName, cdb_dump_flag flags)  |
| int | **[cdb_schema_scanf](./cdb__api_8h.html#function-cdb_schema_scanf)**(cdb_schema_t * pSchema, const char * str, cdb_dump_format format, void * pRecord, cdb_dump_flag flags)  |
| int | **[cdb_schema_scanf2](./cdb__api_8h.html#function-cdb_schema_scanf2)**(cdb_schema_t * pSchema, const char * str, cdb_dump_format format, void * pRecord, cdb_fields_t * pSelFlds, cdb_rec_id * pRecId, cdb_dump_flag flags)  |
| int | **[cdb_record_sprintf](./cdb__api_8h.html#function-cdb_record_sprintf)**(cdb_table_h hTbl, char * buf, size_t size, cdb_dump_format format, const void * pRecord, cdb_dump_flag flags)  |
| int | **[cdb_record_sprintf2](./cdb__api_8h.html#function-cdb_record_sprintf2)**(cdb_table_h hTbl, char * buf, size_t size, cdb_dump_format format, const void * pRecord, const void * pSelFlds, cdb_rec_id rec_id, cdb_dump_flag flags)  |
| int | **[cdb_record_scanf](./cdb__api_8h.html#function-cdb_record_scanf)**(cdb_table_h hTbl, const char * str, cdb_dump_format format, void * pRecord, cdb_dump_flag flags)  |
| int | **[cdb_record_scanf2](./cdb__api_8h.html#function-cdb_record_scanf2)**(cdb_table_h hTbl, const char * str, cdb_dump_format format, void * pRecord, cdb_fields_t * pSelFlds, cdb_rec_id * pRecId, cdb_dump_flag flags)  |
| cdb_error | **[cdb_sql_exec](./cdb__api_8h.html#function-cdb_sql_exec)**(cdb_db_h hDb, const char * sql_fmt, ... )  |
| cdb_error | **[cdb_sql_exec2](./cdb__api_8h.html#function-cdb_sql_exec2)**(cdb_db_h hDb, cdb_dump_flag flags, cdb_traverse_cb cb_fn, void * pArg, const char * sql_fmt, ... )  |
| cdb_cursor_t * | **[cdb_sql_query](./cdb__api_8h.html#function-cdb_sql_query)**(cdb_db_h hDb, cdb_cursor_t * pCursor, const char * sql_fmt, ... )  |
| cdb_error | **[cdb_sql_source](./cdb__api_8h.html#function-cdb_sql_source)**(cdb_db_h hDb, const char * sql_file, cdb_dump_flag flags)  |
| cdb_error | **[cdb_database_dump](./cdb__api_8h.html#function-cdb_database_dump)**(cdb_db_h hDb, const char * file, cdb_dump_format format, cdb_dump_flag flags)  |
| cdb_error | **[cdb_table_dump](./cdb__api_8h.html#function-cdb_table_dump)**(cdb_table_h hTbl, const char * file, cdb_dump_format format, const void * pMatchFlds, const void * pMatchRec, cdb_dump_flag flags)  |
| cdb_error | **[cdb_table_fdump](./cdb__api_8h.html#function-cdb_table_fdump)**(cdb_table_h hTbl, FILE * pFile, cdb_dump_format format, const void * pMatchFlds, const void * pMatchRec, cdb_dump_flag flags)  |
| cdb_error | **[cdb_database_hook_register](./cdb__api_8h.html#function-cdb_database_hook_register)**(cdb_db_h hDb, cdb_hook_type type, cdb_hook_cb hook_cb, void * pArg)  |
| cdb_error | **[cdb_table_hook_register](./cdb__api_8h.html#function-cdb_table_hook_register)**(cdb_table_h hTbl, cdb_hook_type type, cdb_hook_cb hook_cb, void * pArg)  |
| cdb_error | **[cdb_table_set_rank](./cdb__api_8h.html#function-cdb_table_set_rank)**(cdb_table_h hTbl, cdb_rank_id rank)  |
| cdb_rec_id | **[cdb_table_action](./cdb__api_8h.html#function-cdb_table_action)**(cdb_table_h hTbl, const void * pMatchFlds, const void * pMatchRec, cdb_hook_type action)  |
| cdb_error | **[cdb_database_install](./cdb__api_8h.html#function-cdb_database_install)**(cdb_db_h hDb, int flags)  |
| cdb_error | **[cdb_database_uninstall](./cdb__api_8h.html#function-cdb_database_uninstall)**(cdb_db_h hDb, int flags)  |
| const char * | **[cdb_errmsg](./cdb__api_8h.html#function-cdb_errmsg)**(cdb_error ret)  |







## Types Documentation

### enum cdb_db_type


| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| CDB_DB_TYPE_DFT | 0 | Default is RAMDisk.   |
| CDB_DB_TYPE_RAMDISK | 0 | DB in RamDisk or Tmpfs.   |
| CDB_DB_TYPE_PERSIST | 1 | DB in filesystem.   |
| CDB_DB_TYPE_MEMORY | 2 | DB in memory.   |
































### enum cdb_db_flag


| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| CDB_DB_FLAG_SHARE | (1<<0) | DB is shared by many processes.   |
| CDB_DB_FLAG_MAPLOCK | (1<<1) | DB table has mmap memory lock(TBD)   |
































### enum cdb_tbl_flag


| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| CDB_TBL_FLAG_CHECKSUM | (1<<0) | Support per record checksum.   |
































### enum cdb_idx_type


| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| CDB_IDX_TYPE_DFT | 0 | Default is Hash.   |
| CDB_IDX_TYPE_HASH | 0 | Hash Index.   |
| CDB_IDX_TYPE_RBTREE | 1 | RBTree Index.   |

































## Functions Documentation

### function cdb_record_insert

```cpp
cdb_error cdb_record_insert(
    cdb_table_h hTbl,
    void * pRecord,
    cdb_record_flag flags
)
```






























### function cdb_record_insert2

```cpp
cdb_error cdb_record_insert2(
    cdb_table_h hTbl,
    void * pRecord,
    const void * pSelFlds,
    cdb_rec_id * pRecId,
    cdb_record_flag flags
)
```






























### function cdb_record_get

```cpp
cdb_error cdb_record_get(
    cdb_table_h hTbl,
    const void * pMatchRec,
    void * pOutRec
)
```






























### function cdb_record_get2

```cpp
cdb_error cdb_record_get2(
    cdb_table_h hTbl,
    const void * pMatchRec,
    void * pOutRec,
    const void * pSelFlds,
    cdb_rec_id * pRecId,
    cdb_record_flag flags
)
```






























### function cdb_record_update

```cpp
cdb_error cdb_record_update(
    cdb_table_h hTbl,
    const void * pMatchRec,
    const void * pUpdFlds,
    void * pUpdRec,
    cdb_record_flag flags
)
```






























### function cdb_record_delete

```cpp
cdb_error cdb_record_delete(
    cdb_table_h hTbl,
    const void * pMatchRec,
    cdb_record_flag flags
)
```






























### function cdb_record_exist

```cpp
cdb_error cdb_record_exist(
    cdb_table_h hTbl,
    const void * pMatchRec
)
```






























### function cdb_record_query

```cpp
cdb_error cdb_record_query(
    cdb_table_h hTbl,
    const void * pMatchFlds,
    const void * pMatchRec,
    void * pOutRec
)
```






























### function cdb_record_query2

```cpp
cdb_error cdb_record_query2(
    cdb_table_h hTbl,
    const void * pMatchFlds,
    const void * pMatchRec,
    void * pOutRec,
    const void * pSelFlds,
    cdb_rec_id * pRecId
)
```






























### function cdb_record_exist2

```cpp
cdb_error cdb_record_exist2(
    cdb_table_h hTbl,
    const void * pMatchFlds,
    const void * pMatchRec
)
```






























### function cdb_record_count

```cpp
cdb_rec_id cdb_record_count(
    cdb_table_h hTbl,
    const void * pMatchFlds,
    const void * pMatchRec
)
```






























### function cdb_record_insert_byid

```cpp
cdb_error cdb_record_insert_byid(
    cdb_table_h hTbl,
    cdb_rec_id rec_id,
    void * pRecord,
    const void * pSelFlds,
    cdb_record_flag flags
)
```






























### function cdb_record_get_byid

```cpp
cdb_error cdb_record_get_byid(
    cdb_table_h hTbl,
    cdb_rec_id rec_id,
    void * pOutRec,
    const void * pSelFlds,
    cdb_record_flag flags
)
```






























### function cdb_record_update_byid

```cpp
cdb_error cdb_record_update_byid(
    cdb_table_h hTbl,
    cdb_rec_id * pRecId,
    const void * pUpdFlds,
    void * pUpdRec,
    cdb_record_flag flags
)
```






























### function cdb_record_delete_byid

```cpp
cdb_error cdb_record_delete_byid(
    cdb_table_h hTbl,
    cdb_rec_id rec_id,
    cdb_record_flag flags
)
```






























### function cdb_record_getptr_byid

```cpp
cdb_error cdb_record_getptr_byid(
    cdb_table_h hTbl,
    cdb_record_h * phRecord,
    cdb_rec_id rec_id
)
```






























### function cdb_record_enqueue

```cpp
cdb_error cdb_record_enqueue(
    cdb_table_h hTbl,
    void * pRecord,
    cdb_record_flag flags
)
```






























### function cdb_record_dequeue

```cpp
cdb_error cdb_record_dequeue(
    cdb_table_h hTbl,
    void * pOutRec,
    cdb_record_flag flags
)
```






























### function cdb_database_create

```cpp
cdb_error cdb_database_create(
    cdb_db_h * phDb,
    const char * db_name,
    const char * db_path,
    cdb_db_type db_type,
    cdb_lock_type lock_type,
    cdb_db_flag flags
)
```

Create or open a database. 

Parameters: 

  * `phDb` [out] Database handle 
  * `db_name` Database name 
  * `db_path` Database directory 
  * `db_type` Database Type [cdb_db_type](./group__Database.html#enum-cdb_db_type)
  * `lock_type` Database Table Lock Type 
  * `flags` Database Flags


Returns: 

  * `CDB_ERROR_OK` Create Database OK 
  * `CDB_ERROR_EXIST` Open existing Database 
  * `Other` cdb_error 




























### function cdb_database_create2

```cpp
cdb_error cdb_database_create2(
    cdb_db_h * phDb,
    const cdb_dbinfo_t * pDbInfo
)
```

Create or open a database. 

Parameters: 

  * `phDb` [out] Database handle 
  * `pDbInfo` cdb_dbinfo_t


Returns: 

  * `CDB_ERROR_OK` Create Database OK 
  * `CDB_ERROR_EXIST` Open existing Database 
  * `Other` cdb_error 




























### function cdb_database_open

```cpp
cdb_error cdb_database_open(
    cdb_db_h * phDb,
    const char * db_name,
    const char * db_path,
    int flags
)
```

Open a database. 

Parameters: 

  * `phDb` [out] Database handle 
  * `db_name` Database name 
  * `db_path` Database directory 
  * `flags` Resvered


Returns: 

  * `CDB_ERROR_OK` Open Database OK 
  * `CDB_ERROR_NOT_FOUND` Open existing Database 
  * `Other` cdb_error 




























### function cdb_database_close

```cpp
cdb_error cdb_database_close(
    cdb_db_h * phDb,
    int flags
)
```

Close a database. 

Parameters: 

  * `phDb` Database handle, will be set to NULL 
  * `flags` Resvered 


Returns: 

  * `CDB_ERROR_OK` Open Database OK 
  * `Other` cdb_error 




























### function cdb_database_get

```cpp
cdb_db_h cdb_database_get(
    const char * db_name
)
```

Get database handle by name. 

Parameters: 

  * `db_name` Database name 





























### function cdb_database_drop

```cpp
cdb_error cdb_database_drop(
    cdb_db_h * phDb,
    cdb_bool bForce
)
```

Drop a database. 

Parameters: 

  * `phDb` Database handle, will be set to NULL 
  * `bForce` Delete all tables 


Returns: 

  * `CDB_ERROR_OK` Drop database OK 
  * `CDB_ERROR_NOT_EMPTY` Database has table 
  * `Other` cdb_error 




























### function cdb_transaction_begin

```cpp
cdb_error cdb_transaction_begin(
    cdb_db_h hDb,
    int flags
)
```

Begin a transaction. 

Parameters: 

  * `hDb` Database handle 
  * `flags` Resvered 


Returns: 

  * `CDB_ERROR_OK` Open Database OK 
  * `Other` cdb_error 




























### function cdb_transaction_commit

```cpp
cdb_error cdb_transaction_commit(
    cdb_db_h hDb,
    cdb_bool bFlush,
    int flags
)
```

Commit a transaction. 

Parameters: 

  * `hDb` Database handle 
  * `bFlush` Flush all tables 
  * `flags` Resvered 







**Return**: cdb_error 






















### function cdb_transaction_rollback

```cpp
cdb_error cdb_transaction_rollback(
    cdb_db_h hDb,
    void * pSavepoint,
    int flags
)
```

Rollback a transaction. 

Parameters: 

  * `hDb` Database handle 
  * `pSavepoint` Resvered to support savepoint feature 
  * `flags` Resvered 







**Return**: cdb_error 






















### function cdb_table_create

```cpp
cdb_error cdb_table_create(
    cdb_db_h hDb,
    cdb_table_h * phTbl,
    const char * tbl_name,
    void * pSchemas,
    cdb_rec_id max_count,
    const char * primary_key,
    cdb_tbl_flag flags
)
```

Create a table. 

Parameters: 

  * `hDb` Database handle 
  * `phTbl` [out] Table handle 
  * `tbl_name` Table name 
  * `pSchemas` Table schemas, can be cdb_schema_field_t or ref @cdb_schema_t 
  * `max_count` Maximum table records 
  * `primary_key` Table primary key: "vlan,mac" 
  * `flags` Table Flags, [cdb_tbl_flag](./group__Table.html#enum-cdb_tbl_flag)


Returns: 

  * `CDB_ERROR_OK` Create Database OK 
  * `CDB_ERROR_EXIST` Table already exists 
  * `Other` cdb_error 




























### function cdb_table_create2

```cpp
cdb_error cdb_table_create2(
    cdb_db_h hDb,
    cdb_table_h * phTbl,
    cdb_table_info_t * pTblInfo
)
```

Create a table. 

Parameters: 

  * `hDb` Database handle 
  * `phTbl` [out] Table handle 
  * `pTblInfo` cdb_table_info_t


Returns: 

  * `CDB_ERROR_OK` Create table OK 
  * `CDB_ERROR_EXIST` Table already exists 
  * `Other` cdb_error 




























### function cdb_table_get

```cpp
cdb_table_h cdb_table_get(
    cdb_db_h hDb,
    const char * tbl_name
)
```

Get table handle by name. 

Parameters: 

  * `hDb` Database handle 
  * `tbl_name` Table name 





























### function cdb_table_drop

```cpp
cdb_error cdb_table_drop(
    cdb_table_h * phTbl,
    cdb_bool bForce
)
```

Drop a table. 

Parameters: 

  * `phTbl` Table handle, will be set to NULL 
  * `bForce` Delete all records and indexes 


Returns: 

  * `CDB_ERROR_OK` Drop table OK 
  * `CDB_ERROR_NOT_EMPTY` Table has records or index 




























### function cdb_index_create

```cpp
cdb_error cdb_index_create(
    cdb_table_h hTbl,
    const char * idx_name,
    const char * pMatchStr,
    cdb_idx_type idx_type,
    cdb_idx_flag flags
)
```

Create an index on table. 

Parameters: 

  * `pTbl` Table handle 
  * `idx_name` Index name 
  * `pMatchStr` Match string ex: "vlan,mac" 
  * `max_count` Maximum table records 
  * `flags` Table Flags, [cdb_tbl_flag](./group__Table.html#enum-cdb_tbl_flag)


Returns: 

  * `CDB_ERROR_OK` Create Index OK 
  * `CDB_ERROR_EXIST` Index already exsits 
  * `Other` cdb_error 




























### function cdb_index_create2

```cpp
cdb_error cdb_index_create2(
    cdb_table_h hTbl,
    cdb_index_info_t * pIdxInfo
)
```






























### function cdb_index_drop

```cpp
cdb_error cdb_index_drop(
    cdb_table_h hTbl,
    const char * idx_name
)
```






























### function cdb_cursor_open

```cpp
cdb_cursor_t * cdb_cursor_open(
    cdb_cursor_t * pCursor,
    cdb_table_h hTbl,
    const void * pMatchFlds,
    const void * pMatchRec,
    const void * pSelFlds,
    const void * pOrderFlds,
    cdb_cursor_flag flags
)
```






























### function cdb_cursor_count

```cpp
cdb_rec_id cdb_cursor_count(
    cdb_cursor_t * pCursor
)
```






























### function cdb_cursor_get_next

```cpp
cdb_error cdb_cursor_get_next(
    cdb_cursor_t * pCursor,
    void * pOutRec,
    cdb_rec_id * pRecId
)
```






























### function cdb_cursor_iterate

```cpp
cdb_rec_id cdb_cursor_iterate(
    cdb_cursor_t * pCursor,
    void * pOutRec,
    cdb_traverse_cb cb_func,
    void * pArg
)
```






























### function cdb_cursor_close

```cpp
cdb_error cdb_cursor_close(
    cdb_cursor_t * pCursor
)
```






























### function cdb_cursor_set_flag

```cpp
cdb_error cdb_cursor_set_flag(
    cdb_cursor_t * pCursor,
    cdb_cursor_flag flags
)
```






























### function cdb_table_select

```cpp
cdb_rec_id cdb_table_select(
    cdb_table_h hTbl,
    const void * pMatchFlds,
    const void * pMatchRec,
    void * pOutRec,
    cdb_traverse_cb cb_fn,
    void * pArg
)
```






























### function cdb_table_select2

```cpp
cdb_rec_id cdb_table_select2(
    cdb_table_h hTbl,
    const void * pMatchFlds,
    const void * pMatchRec,
    void * pOutRec,
    const void * pSelFlds,
    const void * pOrderFlds,
    cdb_traverse_cb cb_fn,
    void * pArg
)
```






























### function cdb_table_delete

```cpp
cdb_rec_id cdb_table_delete(
    cdb_table_h hTbl,
    const void * pMatchFlds,
    const void * pMatchRec,
    cdb_record_flag flags
)
```






























### function cdb_table_update

```cpp
cdb_rec_id cdb_table_update(
    cdb_table_h hTbl,
    const void * pMatchFlds,
    const void * pMatchRec,
    const void * pUpdFlds,
    void * pUpdRec,
    cdb_record_flag flags
)
```






























### function cdb_table_get_schema

```cpp
cdb_schema_t * cdb_table_get_schema(
    cdb_table_h hTbl,
    int flags
)
```






























### function cdb_schema_expand

```cpp
cdb_error cdb_schema_expand(
    cdb_schema_t ** ppSchema,
    cdb_schema_field_t * pSrcSchema,
    int schema_count,
    int rsvd_schema
)
```






























### function cdb_schema_append

```cpp
cdb_error cdb_schema_append(
    cdb_schema_t * pSchema,
    cdb_schema_field_entry * pField,
    cdb_bool bAdjRecSize
)
```






























### function cdb_schema_sprintf

```cpp
int cdb_schema_sprintf(
    cdb_schema_t * pSchema,
    char * buf,
    size_t size,
    cdb_dump_format format,
    const void * pRecord,
    const char * pTblName,
    cdb_dump_flag flags
)
```






























### function cdb_schema_sprintf2

```cpp
int cdb_schema_sprintf2(
    cdb_schema_t * pSchema,
    char buf[],
    size_t size,
    cdb_dump_format format,
    const void * pRecord,
    const void * pSelFlds,
    cdb_rec_id rec_id,
    const char * pTblName,
    cdb_dump_flag flags
)
```






























### function cdb_schema_scanf

```cpp
int cdb_schema_scanf(
    cdb_schema_t * pSchema,
    const char * str,
    cdb_dump_format format,
    void * pRecord,
    cdb_dump_flag flags
)
```






























### function cdb_schema_scanf2

```cpp
int cdb_schema_scanf2(
    cdb_schema_t * pSchema,
    const char * str,
    cdb_dump_format format,
    void * pRecord,
    cdb_fields_t * pSelFlds,
    cdb_rec_id * pRecId,
    cdb_dump_flag flags
)
```






























### function cdb_record_sprintf

```cpp
int cdb_record_sprintf(
    cdb_table_h hTbl,
    char * buf,
    size_t size,
    cdb_dump_format format,
    const void * pRecord,
    cdb_dump_flag flags
)
```






























### function cdb_record_sprintf2

```cpp
int cdb_record_sprintf2(
    cdb_table_h hTbl,
    char * buf,
    size_t size,
    cdb_dump_format format,
    const void * pRecord,
    const void * pSelFlds,
    cdb_rec_id rec_id,
    cdb_dump_flag flags
)
```






























### function cdb_record_scanf

```cpp
int cdb_record_scanf(
    cdb_table_h hTbl,
    const char * str,
    cdb_dump_format format,
    void * pRecord,
    cdb_dump_flag flags
)
```






























### function cdb_record_scanf2

```cpp
int cdb_record_scanf2(
    cdb_table_h hTbl,
    const char * str,
    cdb_dump_format format,
    void * pRecord,
    cdb_fields_t * pSelFlds,
    cdb_rec_id * pRecId,
    cdb_dump_flag flags
)
```






























### function cdb_sql_exec

```cpp
cdb_error cdb_sql_exec(
    cdb_db_h hDb,
    const char * sql_fmt,
    ... 
)
```






























### function cdb_sql_exec2

```cpp
cdb_error cdb_sql_exec2(
    cdb_db_h hDb,
    cdb_dump_flag flags,
    cdb_traverse_cb cb_fn,
    void * pArg,
    const char * sql_fmt,
    ... 
)
```






























### function cdb_sql_query

```cpp
cdb_cursor_t * cdb_sql_query(
    cdb_db_h hDb,
    cdb_cursor_t * pCursor,
    const char * sql_fmt,
    ... 
)
```






























### function cdb_sql_source

```cpp
cdb_error cdb_sql_source(
    cdb_db_h hDb,
    const char * sql_file,
    cdb_dump_flag flags
)
```






























### function cdb_database_dump

```cpp
cdb_error cdb_database_dump(
    cdb_db_h hDb,
    const char * file,
    cdb_dump_format format,
    cdb_dump_flag flags
)
```






























### function cdb_table_dump

```cpp
cdb_error cdb_table_dump(
    cdb_table_h hTbl,
    const char * file,
    cdb_dump_format format,
    const void * pMatchFlds,
    const void * pMatchRec,
    cdb_dump_flag flags
)
```






























### function cdb_table_fdump

```cpp
cdb_error cdb_table_fdump(
    cdb_table_h hTbl,
    FILE * pFile,
    cdb_dump_format format,
    const void * pMatchFlds,
    const void * pMatchRec,
    cdb_dump_flag flags
)
```






























### function cdb_database_hook_register

```cpp
cdb_error cdb_database_hook_register(
    cdb_db_h hDb,
    cdb_hook_type type,
    cdb_hook_cb hook_cb,
    void * pArg
)
```






























### function cdb_table_hook_register

```cpp
cdb_error cdb_table_hook_register(
    cdb_table_h hTbl,
    cdb_hook_type type,
    cdb_hook_cb hook_cb,
    void * pArg
)
```






























### function cdb_table_set_rank

```cpp
cdb_error cdb_table_set_rank(
    cdb_table_h hTbl,
    cdb_rank_id rank
)
```






























### function cdb_table_action

```cpp
cdb_rec_id cdb_table_action(
    cdb_table_h hTbl,
    const void * pMatchFlds,
    const void * pMatchRec,
    cdb_hook_type action
)
```






























### function cdb_database_install

```cpp
cdb_error cdb_database_install(
    cdb_db_h hDb,
    int flags
)
```






























### function cdb_database_uninstall

```cpp
cdb_error cdb_database_uninstall(
    cdb_db_h hDb,
    int flags
)
```






























### function cdb_errmsg

```cpp
const char * cdb_errmsg(
    cdb_error ret
)
```



































## Source code

```cpp
#ifndef __CDB_API_H__
#define __CDB_API_H__

/*!****************************************************************************
@addtogroup APIs CalixDB APIs
@{
******************************************************************************/


/*!***************************************************************************
@addtogroup  Database Database and Transaction APIs
Database is a collection of tables
@{
******************************************************************************/

typedef enum {
    CDB_DB_TYPE_DFT             = 0,    
    CDB_DB_TYPE_RAMDISK         = 0,    
    CDB_DB_TYPE_PERSIST         = 1,    
    CDB_DB_TYPE_MEMORY          = 2,    
#ifdef CDB_INTERNAL
    CDB_DB_TYPE_MAX             = 3
#endif
} cdb_db_type;

typedef enum {
    CDB_DB_FLAG_SHARE           = (1<<0),  
    CDB_DB_FLAG_MAPLOCK         = (1<<1),  
#ifdef CDB_INTERNAL
    CDB_DB_FLAG_OPEN            = (1<<16), // open only
    CDB_DB_FALG_CHECK           = (1<<17)  // Check tables
#endif
} cdb_db_flag;

// CHG: add lock_type

extern cdb_error 
cdb_database_create (cdb_db_h *phDb, const char *db_name, const char *db_path, 
                            cdb_db_type db_type, cdb_lock_type lock_type, cdb_db_flag flags);

extern cdb_error 
cdb_database_create2 (cdb_db_h *phDb, const cdb_dbinfo_t *pDbInfo);

// CHG: add db_path, flags
extern cdb_error 
cdb_database_open (cdb_db_h *phDb, const char *db_name, const char *db_path, int flags);

// CHG: add flags
extern cdb_error 
cdb_database_close (cdb_db_h *phDb, int flags);

extern cdb_db_h 
cdb_database_get (const char *db_name);

extern cdb_error 
cdb_database_drop (cdb_db_h *phDb, cdb_bool bForce);

// CHG: add flags
extern cdb_error 
cdb_transaction_begin (cdb_db_h hDb, int flags);

extern cdb_error 
cdb_transaction_commit (cdb_db_h hDb, cdb_bool bFlush, int flags);

extern cdb_error 
cdb_transaction_rollback (cdb_db_h hDb, void *pSavepoint, int flags);

/*!***************************************************************************
@addtogroup  Table Table and Index APIs
@{
******************************************************************************/

typedef enum {
    CDB_TBL_FLAG_CHECKSUM       = (1<<0), 
#ifdef CDB_INTERNAL
    CDB_TBL_FLAG_SCHEMA_NULL    = (1<<1), // Support NULL bits
    CDB_TBL_FLAG_MVCC           = (1<<2), // Support MVCC, recid will move
    CDB_TBL_FLAG_SCHEMA_CASE    = (1<<3), // Schema fields match is case sensitive
    CDB_TBL_FLAG_LOG_INSERT     = (1<<4), // Enable DB Change INSERT logs
    CDB_TBL_FLAG_LOG_DELETE     = (1<<5), // Enable DB Change DELETE logs
    CDB_TBL_FLAG_LOG_UPDATE     = (1<<6), // Enable DB Change UPDATE logs
    CDB_TBL_FLAG_LOG            = (CDB_TBL_FLAG_LOG_INSERT | CDB_TBL_FLAG_LOG_DELETE | CDB_TBL_FLAG_LOG_UPDATE),
    CDB_TBL_FLAG_LOG_STACK      = (1<<7), // Enable log call stack
    CDB_TBL_FLAG_DIRTY          = (1<<12),// output only (for flush only)
    CDB_TBL_FLAG_IN_TRANS       = (1<<13),// output only
    CDB_TBL_FLAG_CORRUPT        = (1<<14),// output only
    CDB_TBL_FLAG_OPEN           = (1<<24),// Open only
    CDB_TBL_FLAG_NO_UPGRADE     = (1<<25),// Don't upgrade automatically
    CDB_TBL_FLAG_CHECK          = (1<<26) // Check table if existing
#endif
} cdb_tbl_flag;

typedef enum {
    CDB_IDX_TYPE_DFT        = 0, 
    CDB_IDX_TYPE_HASH       = 0, 
    CDB_IDX_TYPE_RBTREE     = 1, 
#ifdef CDB_INTERNAL
    CDB_IDX_TYPE_MAX        = 2,
    CDB_IDX_TYPE_FULLTEXT   = 2
#endif
} cdb_idx_type;

extern cdb_error 
cdb_table_create (cdb_db_h hDb, cdb_table_h *phTbl, const char *tbl_name, 
                    void *pSchemas, cdb_rec_id max_count, const char *primary_key, cdb_tbl_flag flags);

extern cdb_error 
cdb_table_create2 (cdb_db_h hDb, cdb_table_h *phTbl, cdb_table_info_t *pTblInfo);

// CHG: rename from cdb_table_get_by_name
extern cdb_table_h 
cdb_table_get (cdb_db_h hDb, const char *tbl_name);

extern cdb_error 
cdb_table_drop (cdb_table_h *phTbl, cdb_bool bForce);

// Suggest using SQL to create Index
extern cdb_error 
cdb_index_create (cdb_table_h hTbl, const char *idx_name, const char *pMatchStr, 
                    cdb_idx_type idx_type, cdb_idx_flag flags);

extern cdb_error 
cdb_index_create2 (cdb_table_h hTbl, cdb_index_info_t *pIdxInfo);

extern cdb_error  
cdb_index_drop (cdb_table_h hTbl, const char *idx_name);

/*!***************************************************************************
@addtogroup  Cursor Cursor APIs
@{
******************************************************************************/

// remove cdb_traverse_e

// CHG: chg return 
extern cdb_cursor_t* 
cdb_cursor_open (cdb_cursor_t *pCursor, cdb_table_h hTbl, const void *pMatchFlds, const void *pMatchRec, 
                    const void *pSelFlds, const void *pOrderFlds, cdb_cursor_flag flags);

// remove cdb_cursor_create

extern cdb_rec_id 
cdb_cursor_count (cdb_cursor_t *pCursor);

extern cdb_error 
cdb_cursor_get_next (cdb_cursor_t *pCursor, void *pOutRec, cdb_rec_id *pRecId);

extern cdb_rec_id
cdb_cursor_iterate (cdb_cursor_t *pCursor, void *pOutRec, cdb_traverse_cb cb_func, void *pArg);

extern cdb_error 
cdb_cursor_close (cdb_cursor_t *pCursor);

extern cdb_error 
cdb_cursor_set_flag (cdb_cursor_t *pCursor, cdb_cursor_flag flags);

// inline of cdb_table_select2
extern cdb_rec_id 
cdb_table_select (cdb_table_h hTbl, const void *pMatchFlds, const void *pMatchRec,
                    void *pOutRec, cdb_traverse_cb cb_fn, void *pArg);

extern cdb_rec_id 
cdb_table_select2 (cdb_table_h hTbl, const void *pMatchFlds, const void *pMatchRec,
                    void *pOutRec, const void *pSelFlds, const void *pOrderFlds, 
                    cdb_traverse_cb cb_fn, void *pArg);

// CHG: add flags
extern cdb_rec_id 
cdb_table_delete (cdb_table_h hTbl, const void *pMatchFlds, const void *pMatchRec, cdb_record_flag flags);

// CHG: add flags
extern cdb_rec_id 
cdb_table_update (cdb_table_h hTbl, const void *pMatchFlds, const void *pMatchRec,
                    const void *pUpdFlds, void *pUpdRec, cdb_record_flag flags);


/*!***************************************************************************
@addtogroup  Record Record APIs
@{
******************************************************************************/

extern cdb_error 
cdb_record_insert (cdb_table_h hTbl, void *pRecord, cdb_record_flag flags);

extern cdb_error 
cdb_record_insert2 (cdb_table_h hTbl, void *pRecord,
                    const void *pSelFlds, cdb_rec_id *pRecId, cdb_record_flag flags);


// TBD, add more parameter, pSelFlds->pOutRec
extern cdb_error 
cdb_record_get (cdb_table_h hTbl, const void *pMatchRec, void *pOutRec);

extern cdb_error 
cdb_record_get2 (cdb_table_h hTbl, const void *pMatchRec, void *pOutRec, 
                    const void *pSelFlds, cdb_rec_id *pRecId, cdb_record_flag flags);

// inline
extern cdb_error 
cdb_record_update (cdb_table_h hTbl, const void *pMatchRec, 
                    const void *pUpdFlds, void *pUpdRec, cdb_record_flag flags);

// inline
extern cdb_error 
cdb_record_delete (cdb_table_h hTbl, const void *pMatchRec, cdb_record_flag flags);

// CHG: ret error
extern cdb_error 
cdb_record_exist (cdb_table_h hTbl, const void *pMatchRec);


extern cdb_error 
cdb_record_query (cdb_table_h hTbl, const void *pMatchFlds, const void *pMatchRec, void *pOutRec);

extern cdb_error 
cdb_record_query2 (cdb_table_h hTbl, const void *pMatchFlds, const void *pMatchRec,
                void *pOutRec, const void *pSelFlds, cdb_rec_id *pRecId);

// CHG: ret error
extern cdb_error 
cdb_record_exist2 (cdb_table_h hTbl, const void *pMatchFlds, const void *pMatchRec);

extern cdb_rec_id 
cdb_record_count (cdb_table_h hTbl, const void *pMatchFlds, const void *pMatchRec);


// inline
extern cdb_error 
cdb_record_insert_byid (cdb_table_h hTbl, cdb_rec_id rec_id,
                    void *pRecord, const void *pSelFlds, cdb_record_flag flags);

// inline
extern cdb_error 
cdb_record_get_byid (cdb_table_h hTbl, cdb_rec_id rec_id,
                    void *pOutRec, const void *pSelFlds, cdb_record_flag flags);

// inline
// CHG: rec_id->&
extern cdb_error 
cdb_record_update_byid (cdb_table_h hTbl, cdb_rec_id *pRecId,
                    const void *pUpdFlds, void *pUpdRec, cdb_record_flag flags);

extern cdb_error 
cdb_record_delete_byid (cdb_table_h hTbl, cdb_rec_id rec_id, cdb_record_flag flags);

extern cdb_error 
cdb_record_getptr_byid (cdb_table_h hTbl, cdb_record_h *phRecord, cdb_rec_id rec_id);


extern cdb_error 
cdb_record_enqueue (cdb_table_h hTbl, void *pRecord, cdb_record_flag flags);

extern cdb_error 
cdb_record_dequeue (cdb_table_h hTbl, void *pOutRec, cdb_record_flag flags);

/*!***************************************************************************
@addtogroup  Schema Schema and Format APIs
@{
******************************************************************************/

extern cdb_schema_t* 
cdb_table_get_schema (cdb_table_h hTbl, int flags);

extern cdb_error 
cdb_schema_expand (cdb_schema_t **ppSchema, cdb_schema_field_t *pSrcSchema, int schema_count, int rsvd_schema);

extern cdb_error 
cdb_schema_append (cdb_schema_t *pSchema, cdb_schema_field_entry *pField, cdb_bool bAdjRecSize);

extern int 
cdb_schema_sprintf (cdb_schema_t *pSchema, char *buf, size_t size, cdb_dump_format format, 
                const void *pRecord, const char *pTblName, cdb_dump_flag flags);

extern int 
cdb_schema_sprintf2 (cdb_schema_t *pSchema, char buf[], size_t size, cdb_dump_format format, 
                const void *pRecord, const void *pSelFlds, cdb_rec_id rec_id, 
                const char *pTblName, cdb_dump_flag flags);

extern int 
cdb_schema_scanf (cdb_schema_t *pSchema, const char *str, cdb_dump_format format, 
                void *pRecord, cdb_dump_flag flags);

extern int 
cdb_schema_scanf2 (cdb_schema_t *pSchema, const char *str, cdb_dump_format format, 
                void *pRecord, cdb_fields_t *pSelFlds, cdb_rec_id *pRecId, cdb_dump_flag flags);

extern int 
cdb_record_sprintf (cdb_table_h hTbl, char *buf, size_t size, cdb_dump_format format,  
                const void *pRecord, cdb_dump_flag flags);

extern int 
cdb_record_sprintf2 (cdb_table_h hTbl, char *buf, size_t size, cdb_dump_format format,  
                const void *pRecord, const void *pSelFlds, cdb_rec_id rec_id, cdb_dump_flag flags);

extern int 
cdb_record_scanf (cdb_table_h hTbl, const char *str, cdb_dump_format format, 
                void *pRecord, cdb_dump_flag flags);

extern int 
cdb_record_scanf2 (cdb_table_h hTbl, const char *str, cdb_dump_format format, 
                void *pRecord, cdb_fields_t *pSelFlds, cdb_rec_id *pRecId, cdb_dump_flag flags);


/*!***************************************************************************
@addtogroup  SQL SQL and Dump APIs
@{
******************************************************************************/

extern cdb_error 
cdb_sql_exec (cdb_db_h hDb, const char *sql_fmt, ...);

extern cdb_error 
cdb_sql_exec2 (cdb_db_h hDb, cdb_dump_flag flags, cdb_traverse_cb cb_fn, void *pArg, const char *sql_fmt, ...);

extern cdb_cursor_t* 
cdb_sql_query (cdb_db_h hDb, cdb_cursor_t *pCursor, const char *sql_fmt, ...);

extern cdb_error 
cdb_sql_source (cdb_db_h hDb, const char *sql_file, cdb_dump_flag flags);

extern cdb_error 
cdb_database_dump (cdb_db_h hDb, const char *file, cdb_dump_format format, cdb_dump_flag flags);

extern cdb_error 
cdb_table_dump (cdb_table_h hTbl, const char *file, cdb_dump_format format, 
                const void *pMatchFlds, const void *pMatchRec, cdb_dump_flag flags);

extern cdb_error 
cdb_table_fdump (cdb_table_h hTbl, FILE *pFile, cdb_dump_format format, 
                const void *pMatchFlds, const void *pMatchRec, cdb_dump_flag flags);


/*!***************************************************************************
@addtogroup  Hook Hook and Action APIs
@{
******************************************************************************/

extern cdb_error 
cdb_database_hook_register (cdb_db_h hDb, cdb_hook_type type, cdb_hook_cb hook_cb, void *pArg);

extern cdb_error 
cdb_table_hook_register (cdb_table_h hTbl, cdb_hook_type type, cdb_hook_cb hook_cb, void *pArg);

extern cdb_error 
cdb_table_set_rank (cdb_table_h hTbl, cdb_rank_id rank);

extern cdb_rec_id 
cdb_table_action (cdb_table_h hTbl, const void *pMatchFlds, const void *pMatchRec, cdb_hook_type action);

extern cdb_error 
cdb_database_install (cdb_db_h hDb, int flags);

extern cdb_error 
cdb_database_uninstall (cdb_db_h hDb, int flags);

/*!***************************************************************************
@addtogroup Misc Misc APIs
@{
******************************************************************************/

extern const char* 
cdb_errmsg (cdb_error ret);

#else
#endif // __CDB_API_H__
```


-------------------------------

Updated on  7 December 2020 at 00:47:41 PST
