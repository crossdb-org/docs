---
template: overrides/blog.html
---

# Database Definition APIs

## Database
-------------------------------------------------------------------------------

### cross_dbCreate {#cross_dbCreate}

Create or Open Database
```c
cross_ret 
cross_dbCreate (cross_db_h *phDb, const char *dbName, uint32_t flags);
```
Parameters

 Arg     | Type | Descritpion
 ----    | ---- | ----
phDb     | out  | DB Handle
dbName   | in   | DB Name(can with Path)
flags    | [in] | See following tables

 Flag           | Descritpion
 ----           | ----
CROSS_ONDISK    | DB is on persistent disk, survive with power cycle (Default)
CROSS_RAMDISK   | DB is on ramdisk/tmpfs/ramfs, survive with process restart, lose after power cycle
CROSS_INMEM     | DB is in memory, survie when process is runnig, lose after process terminates
CROSS_EXCLUSIVE | DB is used exclusively by single process (Default)
CROSS_SHARED    | DB is shared by multiple processes
CROSS_AUTOLOCK  | DB will do lock automatically (Default)
CROSS_OPEN      | Open DB (don't create if not exist)

Returns

- `CROSS_OK`:	The database was created/opened successfully
- `Other`:		Decode with [cross_errMsg](#cross_errmsg)


### cross_dbClose {#cross_dbClose}

Close Database
```c
cross_ret 
cross_dbClose (cross_db_h hDb, uint32_t flags);
```
Parameters

 Arg     | Type | Descritpion
 ----    | ---- | ----
hDb      | in   | DB Handle
flags    | [in] | Not used

Returns

- `CROSS_OK`:	The database was closed successfully
- `Other`:		Decode with [cross_errMsg](#cross_errmsg)

> **Warning**
> DB handle can't be used after close.


### cross_dbDrop {#cross_dbDrop}

Drop Database
```c
cross_ret 
cross_dbDrop (cross_db_h hDb, uint32_t flags);
```
Parameters

 Arg     | Type | Descritpion
 ----    | ---- | ----
hDb      | in   | DB Handle
flags    | [in] | Not used

Returns

- `CROSS_OK`:	The database was dropped successfully
- `Other`:		Decode with [cross_errMsg](#cross_errmsg)

> **Warning**
> All tables and indexes will be removed.
> DB handle can't be used after drop.


## Table
-------------------------------------------------------------------------------

### cross_dbTblCreate {#cross_dbTblCreate}

Create or Open Table
```c
cross_ret 
cross_dbTblCreate (cross_db_h hDb, cross_tbl_h *phTbl, const char *tblName,
	const cross_field_t *pFields, const char *priKey, uint32_t flags);
```

Parameters

 Arg     | Type | Descritpion
 ----    | ---- | ----
hDb      | in   | DB Handle
phDb     | out  | Table Handle
tblName  | in   | Table Name
pFields  | [in] | Table [Schema](schema/) Fields
priKey   | [in] | Primary Key cloumn list seperated by `,`
flags    | [in] | See following tables

 Flag           | Descritpion
 ----           | ----
CROSS_RBTREE    | Primary Key is RBTREE
CROSS_OPEN      | Open DB (don't create if not exist)

Returns

- `CROSS_OK`:	The table was created/opened successfully
- `Other`:		Decode with [cross_errMsg](#cross_errmsg)


### cross_dbTblDrop {#cross_dbTblDrop}

Drop Table
```c
cross_ret 
cross_dbTblDrop (cross_tbl_h hTbl, uint32_t flags);
```

Parameters

 Arg     | Type | Descritpion
 ----    | ---- | ----
hTbl     | in   | Table Handle
flags    | [in] | Not used

Returns

- `CROSS_OK`:	The table was dropped successfully
- `Other`:		Decode with [cross_errMsg](#cross_errmsg)

> **Warning**
> Table handle can't be used after drop.


## Index
-------------------------------------------------------------------------------

### cross_dbIdxCreate {#cross_dbIdxCreate}

Create Index on Table
```c
cross_ret 
cross_dbIdxCreate (cross_tbl_h hTbl, const char *idxName, 
					const char *fldsStr, uint32_t flags);
```

Parameters

 Arg     | Type | Descritpion
 ----    | ---- | ----
hTbl     | in   | Table Handle
idxName  | in   | index name(table scope)
fldsStr  | in   | cloumn list seperated by `,`
flags    | [in] | See following tables

 Flag           | Descritpion
 ----           | ----
CROSS_HASH      | index type HASH (default)
CROSS_RBTREE    | index type RBTREE
CROSS_UNIQUE    | index is Unique

Returns

- `CROSS_OK`:	The index was created successfully
- `Other`:		Decode with [cross_errMsg](#cross_errmsg)


### cross_dbIdxDrop {#cross_dbIdxDrop}

Drop Table Index
```c
cross_ret 
cross_dbIdxDrop (cross_tbl_h hTbl, const char *idxName, uint32_t flags);
```
Parameters

 Arg     | Type | Descritpion
 ----    | ---- | ----
hTbl     | in   | Table Handle
idxName  | in   | index name(table scope)
flags    | [in] | Not used

Returns

- `CROSS_OK`:	The index was dropped successfully
- `Other`:		Decode with [cross_errMsg](#cross_errmsg)
