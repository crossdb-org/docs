# Database Definition APIs

## Database
-------------------------------------------------------------------------------

### cross_dbCreate {#cross_dbCreate}

Create or Open Database
```c
cross_ret cross_dbCreate (cross_db_h *phDb, const char *dbName, uint32_t flags)
```
Parameters

 Arg     | Type | Descritpion
 ----    | ---- | ----
phDb     | Out  | DB Handle
dbName   | In   | DB Name(can with Path)
flags    | In   | See following tables

 Flag              | Descritpion
 ----              | ----
CROSS_DB_ONDISK    | DB is on persistent disk, survive with power cycle (Default)
CROSS_DB_RAMDISK   | DB is on ramdisk/tmpfs/ramfs, survive with process restart, lose after power cycle
CROSS_DB_INMEM     | DB is in memory, survie when process is runnig, lose after process terminates
CROSS_DB_EXCLUSIVE | DB is used exclusively by single process (Default)
CROSS_DB_SHARED    | DB is shared by multiple processes
CROSS_DB_AUTOLOCK  | DB will do lock automatically (Default)
CROSS_DB_OPEN      | Open DB (don't create if not exist)

Returns

- `CROSS_OK`:	The database was created/opened successfully
- `Other`:		Decode with [cross_errMsg](#cross_errmsg)

Description

- DB is stored on disk by default.
- If path(absoulte or relative) is not provided, DB is stored in current folder.
- If you want DB in memory, please set `CROSS_DB_INMEM`.
- If you want DB stored in `ramdisk/tmpfs/ramfs`, you can use `CROSS_DB_RAMDISK` to improve performance. 
- DB is accessed exclusively by single process by default which has maximun performance.
- If DB is accessd by multiple process please set `CROSS_DB_SHARED`, then performance will be low as file lock is used to access DB which can recover lock when process crashed.

Example

```c
	#define CHECK(ret,str)	\
		if (ret < 0) {	printf (str": %s\n", cross_errMsg(ret)); return -1; }

	cross_ret 		ret;
	cross_db_h 		hDb;

	// Create on disk database in current folder for single process access
	ret = cross_dbCreate (&hDb, "ondiskdb", 0);
	CHECK (ret, "Failed to create database");

	// Create on disk database for multiple process access
	ret = cross_dbCreate (&hDb, "cdb_data/shareddb", CROSS_DB_SHARED);
	CHECK (ret, "Failed to create database");

	// Create ramdisk database for single process access
	ret = cross_dbCreate (&hDb, "/tmp/cdb_data/mydb", CROSS_DB_RAMDISK);
	CHECK (ret, "Failed to create database");

	// Create in memory database
	ret = cross_dbCreate (&hDb, "imdb", CROSS_DB_INMEM);
	CHECK (ret, "Failed to create database");
```

### cross_dbClose {#cross_dbClose}

Close Database
```c
cross_ret cross_dbClose (cross_db_h hDb, uint32_t flags)
```
Parameters

 Arg     | Type | Descritpion
 ----    | ---- | ----
hDb      | In   | DB Handle
flags    | In   | Not used

Returns

- `CROSS_OK`:	The database was closed successfully
- `Other`:		Decode with [cross_errMsg](#cross_errmsg)

> **Warning**
> DB handle can't be used after close.


### cross_dbDrop {#cross_dbDrop}

Drop Database
```c
cross_ret cross_dbDrop (cross_db_h hDb, uint32_t flags)
```
Parameters

 Arg     | Type | Descritpion
 ----    | ---- | ----
hDb      | In   | DB Handle
flags    | In   | Not used

Returns

- `CROSS_OK`:	The database was dropped successfully
- `Other`:		Decode with [cross_errMsg](#cross_errmsg)

> **Warning**
> All tables and indexes will be removed.
> DB handle can't be used after drop.


## Table
-------------------------------------------------------------------------------

### cross_dbtblcreate {#cross_dbtblcreate}

Create or Open Table
```c
cross_ret cross_dbTblCreate (cross_db_h hDb, cross_tbl_h *phTbl, const char *tblName,
	const cross_field_t *pFields, const char *priKey, uint32_t flags);
```

Parameters

 Arg     | Type | Descritpion
 ----    | ---- | ----
hDb      | In   | DB Handle
phDb     | Out  | Table Handle
tblName  | In   | Table Name
pFields  | In   | Table [Schema](schema/) Fields
priKey   | In   | Primary Key cloumn list seperated by `,`
flags    | In   | See following tables

 Flag              | Descritpion
 ----              | ----
CROSS_DB_BTREE     | Primary Key is BTREE
CROSS_DB_OPEN      | Open DB (don't create if not exist)

Returns

- `CROSS_OK`:	The table was created/opened successfully
- `Other`:		Decode with [cross_errMsg](#cross_errmsg)

Description

- If table exists and pFields is different with table schema, table will be upgraded automatically.
- If you want to know if table exists, you can use `CROSS_DB_OPEN` to get handle first.
- Primary Key is `HASH` type by default to achieve highest performance.
- If you don't care about performance, you can set `CROSS_DB_BTREE` to create `BTREE` type Primary Key.
- If you need both exact match and range match for Primary Key, you can create another `RBTREE` index with same column list.

Example

```c
	// Create table with PrimaryKey="prefix,mask", HASH Type
	ret = cross_dbTblCreate (hDb, &hRtTbl, "route", route_schema, "prefix,mask", 0);
	CHECK (ret, "Failed to create route table");

	// Create table with PrimaryKey="prefix,mask", BTREE Type
	ret = cross_dbTblCreate (hDb, &hRtTbl, "route", route_schema, "prefix,mask", CROSS_DB_BTREE);
	CHECK (ret, "Failed to create route table");

	// Get table handle
	ret = cross_dbTblCreate (hDb, &hRtTbl, "route", NULL, NULL, CROSS_DB_OPEN);
	CHECK (ret, "Failed to get route table");
```


### cross_dbTblDrop {#cross_dbTblDrop}

Drop Table
```c
cross_ret cross_dbTblDrop (cross_tbl_h hTbl, uint32_t flags);
```

Parameters

 Arg     | Type | Descritpion
 ----    | ---- | ----
hTbl     | In   | Table Handle
flags    | In   | Not used

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
cross_ret cross_dbIdxCreate (cross_tbl_h hTbl, const char *idxName, const char *fldsStr, uint32_t flags);
```

Parameters

 Arg     | Type | Descritpion
 ----    | ---- | ----
hTbl     | In   | Table Handle
idxName  | In   | index name(table scope)
fldsStr  | In   | cloumn list seperated by `,`

 Flag              | Descritpion
 ----              | ----
CROSS_DB_HASH      | Index type HASH (default)
CROSS_DB_RBTREE    | Index type RBTREE
CROSS_DB_UNIQUE    | Index is Unique

Description

- Default index is `HASH` type.
- `HASH` index has highest O(1) performance. It's optimized a lot to achieve best performance.
- `HASH` index can dynamically scale with table rows number to get high performance.
- `HASH` index only supports exact match.
- `RBTREE` index is almost the same with popular RDBMS BTree, which is core index engine of RDBMS.
- `RBTREE` index can support exact match, range match and leftmost prefix match with multiple-column.
- If one query matches both HASH index and BTREE index, then Hash index is selected in most cases.
- You can create `HASH` index for high performance query and `BTREE` index for normal performance queries.
- Index is not free, it occupies space and all inexes may be updated during INSERT/UPDATE/DELET row.

Example


### cross_dbIdxDrop {#cross_dbIdxDrop}

Drop Table Index
```c
cross_ret cross_dbIdxDrop (cross_tbl_h hTbl, const char *idxName, uint32_t flags);
```
Parameters

 Arg     | Type | Descritpion
 ----    | ---- | ----
hTbl     | In   | Table Handle
idxName  | In   | index name(table scope)
flags    | In   | Not used
