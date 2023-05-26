# Database Definition

- Decide where to store the database: on disk, on ramdisk or in memory.
- Decide the database is accessed by single process or multiple proceses.
- Use [cross_dbCreate](#cross_dbCreate) to create or open database.
- Use [Schema](schema.md#schema) to define table scheam.
- Decide Table Primary Key: fields list, index type.
- Use [cross_dbTblCreate](#cross_dbtblcreate) to create or open table with schema defined above and provide the primary key.
- Decide how many secondary indexes: fields list, index type, whether unique.
- Use [cross_dbIdxCreate](#cross_dbidxcreate) to create table secondary index.

## Database
-------------------------------------------------------------------------------

### Create Database {#cross_dbCreate}

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

### Close Database {#cross_dbClose}

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


### Drop Database {#cross_dbDrop}

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
> DB handle can't be used after drop.


## Table
-------------------------------------------------------------------------------

### Create Table {#cross_dbtblcreate}

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
priKey   | In   | Table Primary Key, default is HASH type
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


### Drop Table {#cross_dbTblDrop}
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
> DB handle can't be used after drop.


## Index
-------------------------------------------------------------------------------

### cross_dbIdxCreate
```c
cross_ret cross_dbIdxCreate (cross_tbl_h hTbl, const char *idxName, const char *fldsStr, uint32_t flags);
```

### cross_dbIdxDrop
```c
cross_ret cross_dbIdxDrop (cross_tbl_h hTbl, const char *idxName, uint32_t flags);
```


