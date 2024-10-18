---
template: overrides/blog.html
---

# C APIs

## APIs List

|            | **API**               | **Description**
 ----        | ----                  | ----
xdb_conn_t*  | [**xdb_open**](#xdb_open) (const char *path)		| Open a connection
void         | [**xdb_close**](#xdb_close) (xdb_conn_t *pConn)	| Close a connection
xdb_res_t*   | [**xdb_exec**](#xdb_exec) (xdb_conn_t* pConn, const char *sql) 		| Execute SQL statement
xdb_res_t*   | [**xdb_next_result**](#xdb_next_result) (xdb_conn_t *pConn) | Get next SQL statement result
bool         | [**xdb_more_result**](#xdb_more_result) (xdb_conn_t* pRes)  | Check is there more result
void      	 | [**xdb_free_result**](#xdb_free_result) (xdb_res_t* pRes)   | Free result set
xdb_col_t*   | [**xdb_column_meta**](#xdb_column_meta) (uint64_t meta, uint16_t iCol)	| Get column meta
xdb_type_t   | [**xdb_column_type**](#xdb_column_type) (uint64_t meta, uint16_t iCol)	| Get column type
const char*  | [**xdb_column_name**](#xdb_column_name) (uint64_t meta, uint16_t iCol)	| Get column name
xdb_row_t*   | [**xdb_fetch_row**](#xdb_fetch_row) (xdb_res_t* pRes)       | Fetch one row
int          | [**xdb_column_int**](#xdb_column_int) (uint64_t meta, void *pRow, uint16_t iCol)     	| Get int column from row
float        | [**xdb_column_float**](#xdb_column_float) (uint64_t meta, void *pRow, uint16_t iCol) 	| Get float/double column from row
const char * | [**xdb_column_str**](#xdb_column_str) (uint64_t meta, void *pRow, uint16_t iCol)       	| Get string column from row
const void * | [**xdb_column_blob**](#xdb_column_blob) (uint64_t meta, xdb_row_t *pRow, uint16_t iCol, int *pLen) | Get binary column from row
xdb_stmt_t*  | [**xdb_stmt_prepare**](#xdb_stmt_prepare) (xdb_conn_t* pConn, const char *sql) 		 	| Prepare statement
xdb_ret      | [**xdb_bind_int**](#xdb_bind_int) (xdb_stmt_t *pStmt, uint16_t para_id, int val)	| Bind int value
xdb_ret      | [**xdb_bind_float**](#xdb_bind_float) (xdb_stmt_t *pStmt, uint16_t para_id, float val) | Bind float value
xdb_ret      | [**xdb_bind_str**](#xdb_bind_str) (xdb_stmt_t *pStmt, uint16_t para_id, const char *str) | Bind string value
xdb_ret      | [**xdb_clear_bindings**](#xdb_clear_bindings) (xdb_stmt_t *pStmt) | Clear bindings
xdb_res_t*   | [**xdb_stmt_exec**](#xdb_stmt_exec) (xdb_stmt_t *pStmt)				| Execute prepared SQL statement
void         | [**xdb_stmt_close**](#xdb_stmt_close) (xdb_stmt_t *pStmt)			| Free prepared SQL statement
xdb_ret      | [**xdb_begin**](#xdb_begin) (xdb_conn_t* pConn)						| Begin transaction
xdb_ret      | [**xdb_commit**](#xdb_commit) (xdb_conn_t* pConn)					| Commit transaction
xdb_ret      | [**xdb_rollback**](#xdb_rollback) (xdb_conn_t* pConn)				| Rollback transaction
const char * | [**xdb_type2str**](#xdb_type2str) (xdb_type_t type)					| Get data type string
const char * | [**xdb_errmsg**](#xdb_errmsg) (xdb_res_t *pRes)						| Get error/information message
int          | [**xdb_print_row**](#xdb_print_row) (uint64_t meta, void *pRow, int format) 	| Print row to console
const char * | [**xdb_version**](#xdb_version) ()									| Get CrossDB version string

### xdb_open

Open a connection and create/open a Database.

``` c
xdb_conn_t*
xdb_open (const char *path);

// TBD
xdb_conn_t*
xdb_open2 (const char *path, uint32_t flags);
```

- If `path` is `:memory:` will create or open a memory database, else create or open a on-disk database. This database will be the default DB of this connection.
- If `path` is `NULL`: Only open a connection. User has to use `OPEN DATABASE '[path/]db_name'` or `CREATE DATABASE '[path/]db_name'` or `USE DATABASE db_name`.
- One thread can use only one connection. One connection can only be used by one thread
- All opened databases are shared with all opened connections, and they can `USE DATABASE db_name` to switch connection default DB.

### xdb_close

Create a connection.

``` c
void
xdb_close (xdb_conn_t *pConn);
```

### xdb_exec

Execute SQL statement and return result set.

``` c
xdb_res_t*
xdb_exec (xdb_conn_t* pConn, const char *sql);

xdb_res_t*
xdb_exec2 (xdb_conn_t *pConn, const char *sql, int len);

// Use '?' to bind args then execute, only support single statement
xdb_res_t*
xdb_bexec (xdb_conn_t *pConn, const char *sql, ...);

xdb_res_t*
xdb_vbexec (xdb_conn_t *pConn, const char *sql, va_list ap);

// Use '%' to format args then execute, supports multi-statements
xdb_res_t*
xdb_pexec (xdb_conn_t *pConn, const char *sql, ...);
```

- A valid xdb_res_t pointer is returned always.
- errcode:	if != 0, then can use `xdb_errmsg(pRes)` to get the error message.
- row count: `pRes->row_count` for query statement
- affected rows: `pRes->affected_rows` for `INSERT` `UPDATE` `DELETE` rows 
- column count: `pRes->col_count` for query statement
- column meta: `pRes->row_meta`, use `xdb_column_meta` to get column meta.
- For `xdb_pexec`, if `sql` contains `%`, should use escape `\%`.

### xdb_next_result

Get next SQL statement result

Return NULL if no more result

``` c
xdb_res_t*
xdb_next_result (xdb_conn_t *pConn);
```

### xdb_more_result

Check is there more result

``` c
bool
xdb_more_result (xdb_conn_t *pConn);
```

### xdb_free_result

Free result set

``` c
void
xdb_free_result (xdb_res_t *pRes);
```

> **Note**
> You only need to call `xdb_free_result` for query statements with errcode=0.

### xdb_column_meta

Get column meta.

``` c
const xdb_col_t* 
xdb_column_meta (uint64_t meta, uint16_t iCol)
```

### xdb_column_type

Get column type.

``` c
xdb_type_t 
xdb_column_type (uint64_t meta, uint16_t iCol);
```

### xdb_column_name

Get column name.

``` c
const char* 
xdb_column_name (uint64_t meta, uint16_t iCol);
```

### xdb_fetch_row

Fetch one row and return row list array.

``` c
xdb_row_t*
xdb_fetch_row (xdb_res_t *pRes);
```

### xdb_column_int

Get int column from row.
``` c
int 
xdb_column_int (uint64_t meta, void *pRow, uint16_t iCol);

int64_t 
xdb_column_int64 (uint64_t meta, void *pRow, uint16_t iCol);
```

> **Note**
> If you know the detailed format, you can access the pointer directly.
> `*(int8_t*)pVal[iCol]`, `*(int16_t*)pVal[iCol]`, `*(int32_t*)pVal[iCol]`, `*(int64_t*)pVal[iCol]`

### xdb_column_float

Get float column from row.

``` c
float
xdb_column_float (uint64_t meta, xdb_row_t *pRow, uint16_t iCol);

double 
xdb_column_double (uint64_t meta, void *pRow, uint16_t iCol);
```

> **Note**
> If you know the detailed format, you can access the pointer directly.
> `*(float*)pVal[iCol]`, `*(double*)pVal[iCol]`

### xdb_column_str

Get string column from row.

``` c
const char*
xdb_column_str (uint64_t meta, xdb_row_t *pRow, uint16_t iCol);

const char*
xdb_column_str2 (uint64_t meta, xdb_row_t *pRow, uint16_t iCol, int *pLen);
```

> **Note**
> You can access the pointer directly: `*(const char*)pVal[iCol]`, get the length `*(uint16_t*)(pVal[iCol]-2)`

### xdb_column_blob

Get blob column from row.

``` c
const void*
xdb_column_blob (uint64_t meta, xdb_row_t *pRow, uint16_t iCol, int *pLen);
```

> **Note**
> You can access the pointer directly: `*(const char*)pVal[iCol]`, get the length `*(uint16_t*)(pVal[iCol]-2)`

### xdb_stmt_prepare

``` c
xdb_stmt_t* 
xdb_stmt_prepare (xdb_conn_t* pConn, const char *sql);
```

### xdb_bind_int

Binds an int value to the prepared statement at the specified parameter index (from 1).

``` c
xdb_ret
xdb_bind_int (xdb_stmt_t *pStmt, uint16_t para_id, int val);

xdb_ret
xdb_bind_int64 (xdb_stmt_t *pStmt, uint16_t para_id, int64_t val);
```

### xdb_bind_float

Binds a double value to the prepared statement at the specified parameter index (from 1).

``` c
xdb_ret
xdb_bind_float (xdb_stmt_t *pStmt, uint16_t para_id, float val);

xdb_ret
xdb_bind_double (xdb_stmt_t *pStmt, uint16_t para_id, double val)
```

### xdb_bind_str

Binds a string value to the prepared statement at the specified parameter index (from 1).

``` c
xdb_ret
xdb_bind_str (xdb_stmt_t *pStmt, uint16_t id, const char *str, int len);

xdb_ret
xdb_bind_str2 (xdb_stmt_t *pStmt, uint16_t para_id, const char *str, int len)
```

### xdb_clear_bindings

Clear bindings.

``` c
xdb_ret
xdb_clear_bindings (xdb_stmt_t *pStmt);
```

> **Note**
> If you bind all args, don't need to call this APIs.

### xdb_stmt_exec

Execute a prepared statement.

``` c
// use binding APIs first then execute
xdb_res_t*
xdb_stmt_exec (xdb_stmt_t *pStmt);

// bind args then execute
xdb_res_t*
xdb_stmt_bexec (xdb_stmt_t *pStmt, ...);

xdb_res_t*
xdb_stmt_vbexec (xdb_stmt_t *pStmt, va_list ap);
```

Result refers [**xdb_exec**](#xdb_exec)

### xdb_stmt_close

Close a prepared statement.

``` c
void
xdb_stmt_close (xdb_stmt_t *pStmt);
```

### xdb_begin

Begin a transaction.

``` c
xdb_ret
xdb_begin (xdb_conn_t* pConn);
```

- For embedded local connection, always return `XDB_OK`.

### xdb_commit

Commit a transaction.

``` c
xdb_ret
xdb_commit (xdb_conn_t* pConn);
```

- For embedded local connection, always return `XDB_OK`.

### xdb_rollback

Rollback a transaction.

``` c
xdb_ret
xdb_rollback (xdb_conn_t* pConn);
```

- For embedded local connection, always return `XDB_OK`.

### xdb_type2str

Get data type string.

``` c
const char*
xdb_type2str (xdb_type_t type);
```

### xdb_errmsg

Get error/information message in result.

``` c
const char *
xdb_errmsg (xdb_res_t *pRes);
```

### xdb_print_row

Print row to console.

``` c
int 
xdb_print_row (uint64_t meta, xdb_row_t *pRow, int format);
```

### xdb_version

Get CrossDB version string.

``` c
const char*
xdb_version();
```


## Types

###xdb_errno_e

Error Code
``` c
typedef enum {
	XDB_OK,
	XDB_ERROR,
	XDB_E_PARAM,
	XDB_E_STMT,
	XDB_E_NODB,
	XDB_E_NOTFOUND,
	XDB_E_EXISTS,
	XDB_E_FULL,
	XDB_E_CONSTRAINT,
	XDB_E_AUTH,
	XDB_E_MEMORY,
	XDB_E_FILE,
	XDB_E_SOCK,
} xdb_errno_e;
```

###xdb_type_t
Data Types
``` c
typedef enum {
	XDB_TYPE_NULL       = 0,  // 1 bit
	XDB_TYPE_TINYINT	= 1,  // 1 byte
	XDB_TYPE_SMALLINT   = 2,  // 2 bytes
	XDB_TYPE_INT        = 3,  // 4 bytes
	XDB_TYPE_BIGINT     = 4,  // 8 bytes
	XDB_TYPE_UTINYINT   = 5,  // 1 byte
	XDB_TYPE_USMALLINT  = 6,  // 2 bytes
	XDB_TYPE_UINT       = 7,  // 4 bytes
	XDB_TYPE_UBIGINT    = 8,  // 8 bytes
	XDB_TYPE_FLOAT      = 9,  // 4 bytes
	XDB_TYPE_DOUBLE     = 10, // 8 bytes
	XDB_TYPE_TIMESTAMP	= 11, // 8 bytes
	XDB_TYPE_CHAR       = 12, // fixed-length string(at most 65535 byte)
	XDB_TYPE_BINARY     = 13, // fixed-length binary(at most 65535 byte)
	XDB_TYPE_VCHAR      = 14, // varied-length string(at most 65535 byte)
	XDB_TYPE_VBINARY    = 15, // varied-length binary(at most 65535 byte)
	XDB_TYPE_MAX        = 21
} xdb_type_t;
```

## Structures

### xdb_res_t
Result Set
``` c
typedef struct xdb_res_t {
	uint32_t	len_type;		// MSB 4bit are type xdb_restype_t
	uint16_t	errcode;		// 4
	uint16_t	status;			// 6 xdb_status_t

	uint32_t	meta_len;		// 8
	uint16_t	col_count;		// 12
	uint8_t		stmt_type;		// 14 SQL type(create/delete/drop/show/select/delete/update...)
	uint8_t		rsvd;

	uint64_t	row_count;		// 2*8 SELECT/SHOW
	uint64_t	affected_rows;	// 3*8 INSERT/UPDATE/DELETE
	uint64_t	insert_id;		// 4*8 INSERT
	uint64_t	col_meta;		// 5*8 xdb_meta_t, <ptr:ptr off: 0 following is meta>
	uint64_t	row_data;		// 6*8 xdb_rowlist_t, ptr: base ptr or error str or information xdb_msg_t
	uint64_t	data_len;		// 7*8
} xdb_res_t;
```

### xdb_msg_t
Return Message
``` c
typedef struct {
	uint32_t	len_type;		// LSB 4bit are type
	uint16_t	len;
	char		msg[];
} xdb_msg_t;
```

### xdb_meta_t
Query Meta information
``` c
typedef struct {
	uint32_t	len_type;		// LSB 4bit are type
	uint16_t	col_count;		// 3*4
	uint16_t	null_off;		// 3*4+2
	uint16_t	row_size;
	uint16_t	rsvd;
	uint64_t	col_list;		// xdb_col_t list
	xdb_col_t	cols[];
} xdb_meta_t;
```

### xdb_col_t
Query Column information
``` c
typedef struct {
	uint16_t	col_len;	// colum total len
	uint8_t		col_type;	// xdb_type_t
	uint8_t		col_rsvd;
	uint32_t	col_off;
	uint16_t	col_rsvd2;
	uint8_t		col_nmlen;
	char		col_name[];
} xdb_col_t;
```

### xdb_rowdat_t
Query row data information
``` c
typedef struct {
	uint32_t	len_type;		// LSB 4bit are type
	uint8_t		rowdat[];
} xdb_rowdat_t;
```

### xdb_rowlist_t
``` c
typedef uint64_t xdb_row_t;	// xdb_rowdat_t

typedef struct {
	uint32_t	rl_count;
	uint32_t	rl_curid;
	xdb_row_t 	rl_pRows[];
} xdb_rowlist_t;
```
