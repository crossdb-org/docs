---
title: Table and Index APIs


---

# Table and Index APIs


**Module:** **[CalixDB APIs](./group__APIs.html)**

 [More...](#detailed-description)







## Types

|                | Name           |
| -------------- | -------------- |
| enum | **[cdb_tbl_flag](./group__Table.html#enum-cdb_tbl_flag)** { CDB_TBL_FLAG_CHECKSUM = (1<<0) } |
| enum | **[cdb_idx_type](./group__Table.html#enum-cdb_idx_type)** { CDB_IDX_TYPE_DFT = 0, CDB_IDX_TYPE_HASH = 0, CDB_IDX_TYPE_RBTREE = 1 } |



## Functions

|                | Name           |
| -------------- | -------------- |
| cdb_error | **[cdb_table_create](./group__Table.html#function-cdb_table_create)**(cdb_db_h hDb, cdb_table_h * phTbl, const char * tbl_name, void * pSchemas, cdb_rec_id max_count, const char * primary_key, [cdb_tbl_flag](./group__Table.html#enum-cdb_tbl_flag) flags) <br>Create a table.  |
| cdb_error | **[cdb_table_create2](./group__Table.html#function-cdb_table_create2)**(cdb_db_h hDb, cdb_table_h * phTbl, cdb_table_info_t * pTblInfo) <br>Create a table.  |
| cdb_table_h | **[cdb_table_get](./group__Table.html#function-cdb_table_get)**(cdb_db_h hDb, const char * tbl_name) <br>Get table handle by name.  |
| cdb_error | **[cdb_table_drop](./group__Table.html#function-cdb_table_drop)**(cdb_table_h * phTbl, cdb_bool bForce) <br>Drop a table.  |
| cdb_error | **[cdb_index_create](./group__Table.html#function-cdb_index_create)**(cdb_table_h hTbl, const char * idx_name, const char * pMatchStr, [cdb_idx_type](./group__Table.html#enum-cdb_idx_type) idx_type, cdb_idx_flag flags) <br>Create an index on table.  |
| cdb_error | **[cdb_index_create2](./group__Table.html#function-cdb_index_create2)**(cdb_table_h hTbl, cdb_index_info_t * pIdxInfo)  |
| cdb_error | **[cdb_index_drop](./group__Table.html#function-cdb_index_drop)**(cdb_table_h hTbl, const char * idx_name)  |





## Detailed Description





























------------------




## Types Documentation

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



































-------------------------------

Updated on  7 December 2020 at 00:47:40 PST