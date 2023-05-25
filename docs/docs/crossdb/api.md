# Programming Guide

## Schema

Schem is used to define CrossDB table and it's defined based on C struct with some CrossDB macro.

### Basic Types

CrossDB Type and C Type Map

 CrossDB Type | Description      | C Type
 ----         | ----             | ----
 INT          | integer          | `char`, `short`, `int`, `long long`, `int8_t`, `int16_t`, `int32_t`, `int64_t`
 UINT         | unsinged integer | `unsigned char`, `unsigned short`, `unsigned int`, `unsigned long long`, `uint8_t` `uint16_t`, `uint32_t`, `uint64_t`
 FLOAT        | floating-point   | `float`, `double`
 CHAR         | charater string  | `char []`
 BYTE         | byte array       | `unsiged char []`, `uint8_t []`, `struct`

CrossDB Format

 CrossDB Type | CrossDB Formt | Description
 ----         | ----          | ----
 INT/UINT	  | DFT           | default decimal
 FLOAT   	  | DFT           | default floating-point
 CHAR   	  | DFT           | default charater string
 BYTE         | DFT			  | default hexadecimal string
 INT/UINT	  | BOOL          | boolean
 UINT		  | HEX           | hexadecimal
 INT/UINT	  | TIMESTAMP/TS  | Timestamp: `time_t`, `uin32_t`, `uint64_t`
 BTYE         | MAC			  | MAC addrss: `uint8_t [6]`, `struct ether_addr`
 UINT		  | IPv4		  | Host endian IPv4 address: `uint32_t`
 BYTE		  | IPv4		  | Network endian IPv4 address: `struct in_addr`, `uint32_t`
 BYTE		  | IPv6		  | Network endian IPv4 address: `uint8_t [16]`, `struct in_addr6`

Example

```c
typedef struct {
	char			val_char;
	int64_t			val_int64;
	uint16_t 		val_u16;
	uint8_t 		val_u8;
	float 			val_float;
	double 			val_double;
	char 			val_str[16];
	uint8_t			val_byte[64];

	char			val_bool;
	uint16_t 		flags;
	time_t			birth;
	unsigned char 	mac[6];
	uint32_t		ipAddrHost;
	struct in_addr 	ipAddrNet;
	uint8_t			ip6Addr[16];
} basic_types_t;
```

Set `CROSS_STRUCT_NAME` to the struct name `basic_types_t` for `CROSS_FIELD` to define the schema entry. 
`CROSS_END` is used to mark the end of schema definition.

```c
#undef	CROSS_STRUCT_NAME
#define	CROSS_STRUCT_NAME	basic_types_t
cross_field_t 	basic_types_schema[] = {
	CROSS_FIELD (val_char,		INT,	DFT,  0),
	CROSS_FIELD (val_int64, 	INT,	DFT,  0),
	CROSS_FIELD (val_u16,		UINT,	DFT,  0),
	CROSS_FIELD (val_u8, 		UINT,	DFT,  0),
	CROSS_FIELD (val_float,		FLOAT,	DFT,  0),
	CROSS_FIELD (val_double, 	FLOAT,	DFT,  0),
	CROSS_FIELD (val_str, 		CHAR,	DFT,  0),
	CROSS_FIELD (val_byte,		BYTE,	DFT,  0),
	CROSS_FIELD (val_bool, 		UINT,	BOOL, 0),
	CROSS_FIELD (flags, 		UINT,	HEX,  0),
	CROSS_FIELD (birth,			UINT,	TS,   0),
	CROSS_FIELD (mac, 			BYTE,	MAC,  0),
	CROSS_FIELD (ipAddrHost, 	UINT,	IPv4, 0),
	CROSS_FIELD (ipAddrNet, 	BYTE,	IPv4, 0),
	CROSS_FIELD (ip6Addr, 		BYTEE,	IPv6, 0),
	CROSS_END (basic_types_t)
};
```

To keep struct and schema in header file, you can define them together like following way.

Define macro `ROUTE_SCHEMA()` in header file
```c
// In header file
typedef struct {
	uint32_t 			prefix;
	uint8_t 			mask;
	uint32_t			nexthop;
	uint8_t 			metric;
	char				intf[16];
	uint32_t			birth;
	uint32_t			flags;
} route_t;

#dfine ROUTE_SCHEMA()	\	
	CROSS_FIELD (prefix,	UINT,	IPv4, 0), \
	CROSS_FIELD (mask, 		UINT,	DFT,  0), \
	CROSS_FIELD (nexthop,	UINT,	IPv4, 0), \
	CROSS_FIELD (metric, 	UINT,	DFT,  0), \
	CROSS_FIELD (intf,		CHAR,	DFT,  0), \
	CROSS_FIELD (birth, 	UINT,	TS,   0), \
	CROSS_FIELD (flags, 	UINT,	HEX,  0), \
	CROSS_END (route_t)

```

Define schema in source file. `CROSS_END` can be define in `route_schema` also then you can reuse the macro `ROUTE_SCHEMA()` or combine them.
```c
	// In source file
	#undef	CROSS_STRUCT_NAME
	#define	CROSS_STRUCT_NAME	route_t
	cross_field_t 	route_schema[] = {
		ROUTE_SCHEMA()
	}
```


## DB Definition

- Decide where to store the database: on disk, on ramdisk or in memory.
- Decide the database is accessed by single process or multiple proceses.
- Use [cross_dbCreate](#cross_dbCreate) to create or open database.
- Use [Schema](#schema) to define table scheam.
- Decide Table Primary Key: fields list, index type.
- Use [cross_dbTblCreate](#cross_dbtblcreate) to create or open table with schema defined above and provide the primary key.
- Decide how many secondary indexes: fields list, index type, whether unique.
- Use [cross_dbIdxCreate](#cross_dbidxcreate) to create table secondary index.

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

### Drop Database {#cross_dbtblcreate}

### cross_dbTblCreate
```c
cross_ret cross_dbTblCreate (cross_db_h hDb, cross_tbl_h *phTbl, const char *tblName,
	const cross_field_t *pFields, const char *priKey, uint32_t flags);
```

### cross_dbTblDrop
```c
cross_ret cross_dbTblDrop (cross_tbl_h hTbl, uint32_t flags);
```

### cross_dbIdxCreate
```c
cross_ret cross_dbIdxCreate (cross_tbl_h hTbl, const char *idxName, const char *fldsStr, uint32_t flags);
```

### cross_dbIdxDrop
```c
cross_ret cross_dbIdxDrop (cross_tbl_h hTbl, const char *idxName, uint32_t flags);
```


## DB Manipulation APIs

### cross_dbInsertRow
```c
cross_ret cross_dbInsertRow (cross_tbl_h hTbl, void *pRow, uint32_t flags);
```

### cross_dbReplaceRow
```c
cross_ret cross_dbReplaceRow (cross_tbl_h hTbl, void *pInRow, uint32_t flags);
```

### cross_dbGetRowByPk
```c
cross_ret cross_dbGetRowByPk (cross_tbl_h hTbl, const void *pInRow, void *pOutRow, uint32_t flags);
```

### cross_dbUpdRowByPk
```c
cross_ret cross_dbUpdRowByPk (cross_tbl_h hTbl, const void *pInRow, const void *pUpdFlds, void *pUpdRow, uint32_t flags);
```

### cross_dbDelRowByPk
```c
cross_ret cross_dbDelRowByPk (cross_tbl_h hTbl, void *pInRow, uint32_t flags);
```

### cross_dbGetOneRow
```c
cross_ret cross_dbGetOneRow (cross_tbl_h hTbl, const void *pMatFlds, const void *pMatRow, void *pOutRow, uint32_t flags);
```

### cross_dbUpdateRows
```c
cross_rowid cross_dbUpdateRows (cross_tbl_h hTbl, const void *pMatFlds, const void *pMatRow,
```

### cross_dbDeleteRows
```c
cross_rowid cross_dbDeleteRows (cross_tbl_h hTbl, const void *pMatFlds, const void *pMatRow, uint32_t flags);
```

### cross_dbGetRowsCount
```c
cross_rowid cross_dbGetRowsCount (cross_tbl_h hTbl, const void *pMatFlds, const void *pMatRow, uint32_t flags);
```


## Cursor APIs

### cross_dbQueryRows
```c
cross_rowid cross_dbQueryRows (cross_tbl_h hTbl, cross_cursor_h *phCursor, const void *pMatFlds, const void *pMatRow, uint32_t flags);
```

### cross_curosrGetCount
```c
cross_rowid cross_cursorGetCount (cross_cursor_h hCursor, uint32_t flags);
```

### cross_cursorClose
```c
cross_ret cross_cursorClose (cross_cursor_h hCursor, uint32_t flags);
```

### cross_cursorGetNextRow
```c
cross_ret cross_cursorGetNextRow (cross_cursor_h hCursor, void *pOutRow, uint32_t flags);
```


## Transaction APIs

### cross_dbTransBegin
```c
cross_ret cross_dbTransBegin (cross_db_h hDb, uint32_t flags);
```

### cross_dbTransCommit
```c
cross_ret cross_dbTransCommit (cross_db_h hDb, uint32_t flags);
```

### cross_dbTransRollback
```c
cross_ret cross_dbTransRollback (cross_db_h hDb, uint32_t flags);
```

## Misc

### cross_errMsg
```c
const char *cross_errMsg (cross_ret ret);
```

## API Reference

 API                   | Descritpion
 ----                  | ----
[cross_dbCreate](#cross_dbcreate)         		| Create or Open Database
[cross_dbClose](#cross_dbclose)		   			| Close Database
[cross_dbDrop](#cross_dbdrop)           		| Drop Database
[cross_dbTblCreate](#cross_dbtblcreate)     	| Create or Open Table
[cross_dbTblDrop](#cross_dbtbldrop)        		| Drop Table
[cross_dbIdxCreate](#cross_dbidxcreate)     	| Create Index on Table
[cross_dbIdxDrop](#cross_dbidxdrop)        		| Drop Table Index
[cross_dbInsertRow](#cross_dbinsertrow)     	| Intert row into Table
[cross_dbReplaceRow](#cross_dbreplacerow)   	| Insert/update row
[cross_dbGetRowByPk](#cross_dbgetrowbypk)   	| Get row by PrimaryKey
[cross_dbUpdRowByPk](#cross_dbupdrowbypk)   	| Update row by PrimaryKey
[cross_dbDelRowByPk](#cross_dbdelrowbypk)   	| Delete row by PrimaryKey
[cross_dbGetOneRow](#cross_dbgetonerow)     	| Get one row by match fields
[cross_dbUpdateRows](#cross_dbupdaterows)   	| Update rows by match fields
[cross_dbDeleteRows](#cross_dbdeleterows)   	| Delete rows by match fields
[cross_dbGetRowsCount](#cross_dbgetrowscount) 	| Get rows count by match fields
[cross_dbQueryRows](#cross_dbqueryrows)     	| Query rows into cursor
[cross_curosrGetCount](#cross_curosrgetcount) 	| Get cursor row count
[cross_cursorClose](#cross_cursorclose)     	| Close cursor
[cross_cursorGetNextRow](#cross_cursorgetnextrow) | Get next cursor in cursor
[cross_dbTransBegin](#cross_dbtransbegin)   	| Begin Transaction
[cross_dbTransCommit](#cross_dbtranscommit) 	| Commit Transaction
[cross_dbTransRollback](#cross_dbtransrollback)	| Rollback Transaction
[cross_errMsg](#cross_errmsg)					| Return err code message
