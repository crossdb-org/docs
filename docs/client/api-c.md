---
template: overrides/blog.html
---

# C APIs

## APIs List

|            | **API**               | **Description**
 ----        | ----                  | ----
xdb_conn_t*  | [**xdb_open**](#xdb_open) (const char *path)		| Open a connection for local DB direct access
xdb_conn_t*  | [**xdb_connect**](#xdb_connect) (const char *host, const char *user, const char *pass, const char *db, uint16_t port)		| Connect CrossDB Server
void         | [**xdb_close**](#xdb_close) (xdb_conn_t *pConn)	| Close a connection
xdb_res_t*   | [**xdb_exec**](#xdb_exec) (xdb_conn_t* pConn, const char *sql) 		| Execute SQL statement
xdb_res_t*   | [**xdb_next_result**](#xdb_next_result) (xdb_conn_t *pConn) | Get next SQL statement result
bool         | [**xdb_more_result**](#xdb_more_result) (xdb_conn_t* pRes)  | Check is there more result
void      	 | [**xdb_free_result**](#xdb_free_result) (xdb_res_t* pRes)   | Free result set
xdb_errno_e	 | [**xdb_errcode**](#xdb_errcode )(xdb_res_t *pRes)           | Get error code
int          | [**xdb_column_count**](#xdb_column_count) (xdb_res_t *pRes) | Get column count
xdb_type_t   | [**xdb_column_type**](#xdb_column_type) (xdb_res_t *pRes, uint16_t iCol)	| Get column type
const char*  | [**xdb_column_name**](#xdb_column_name) (xdb_res_t *pRes, uint16_t iCol)	| Get column name
int          | [**xdb_column_id**](#xdb_column_id) (xdb_res_t *pRes, const char *name)	| Get column ID
xdb_rowid    | [**xdb_row_count**](#xdb_row_count) (xdb_res_t* pRes)       | Get row count
xdb_rowid    | [**xdb_affected_rows**](#xdb_affected_rows) (xdb_res_t* pRes)	| Get affected rows
xdb_row_t*   | [**xdb_fetch_row**](#xdb_fetch_row) (xdb_res_t* pRes)       | Fetch one row
bool         | [**xdb_column_null**](#xdb_column_null) (xdb_res_t *pRes, void *pRow, uint16_t iCol)     | If column is NULL
bool         | [**xdb_column_bool**](#xdb_column_bool) (xdb_res_t *pRes, void *pRow, uint16_t iCol)     | Get bool column from row
int          | [**xdb_column_int**](#xdb_column_int) (xdb_res_t *pRes, void *pRow, uint16_t iCol)     	| Get int column from row
float        | [**xdb_column_float**](#xdb_column_float) (xdb_res_t *pRes, void *pRow, uint16_t iCol) 	| Get float/double column from row
const char * | [**xdb_column_str**](#xdb_column_str) (xdb_res_t *pRes, void *pRow, uint16_t iCol)       	| Get string column from row
const void * | [**xdb_column_blob**](#xdb_column_blob) (xdb_res_t *pRes, xdb_row_t *pRow, uint16_t iCol, int *pLen) | Get binary column from row
xdb_mac_t    | [**xdb_column_mac**](#xdb_column_mac) (xdb_res_t *pRes, void *pRow, uint16_t iCol)     	| Get mac column from row
xdb_inet_t   | [**xdb_column_inet**](#xdb_column_inet) (xdb_res_t *pRes, void *pRow, uint16_t iCol) 	| Get inet column from row
bool         | [**xdb_col_null**](#xdb_col_null) (xdb_res_t *pRes, void *pRow, const char *name)     	| If column is NULL
bool         | [**xdb_col_bool**](#xdb_col_bool) (xdb_res_t *pRes, void *pRow, const char *name)     	| Get bool column from row
int          | [**xdb_col_int**](#xdb_col_int) (xdb_res_t *pRes, void *pRow, const char *name)     		| Get int column from row
float        | [**xdb_col_float**](#xdb_col_float) (xdb_res_t *pRes, void *pRow, const char *name) 		| Get float/double column from row
const char * | [**xdb_col_str**](#xdb_col_str) (xdb_res_t *pRes, void *pRow, const char *name)       	| Get string column from row
const void * | [**xdb_col_blob**](#xdb_col_blob) (xdb_res_t *pRes, xdb_row_t *pRow, const char *name, int *pLen) | Get binary column from row
xdb_mac_t    | [**xdb_col_mac**](#xdb_col_mac) (xdb_res_t *pRes, void *pRow, const char *name)     		| Get mac column from row
xdb_inet_t   | [**xdb_col_inet**](#xdb_col_inet) (xdb_res_t *pRes, void *pRow,const char *name) 		| Get inet column from row
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
xdb_ret      | [**xdb_create_func**](#xdb_create_func) (const char *name, xdb_func_e type, const char *lang, void *cb_func, void *pArg) | Create function
const char * | [**xdb_type2str**](#xdb_type2str) (xdb_type_t type)					| Get data type string
const char * | [**xdb_errmsg**](#xdb_errmsg) (xdb_res_t *pRes)						| Get error/information message
int          | [**xdb_print_row**](#xdb_print_row) (xdb_res_t *pRes, void *pRow, int format) 	| Print row to console
const char * | [**xdb_version**](#xdb_version) ()									| Get CrossDB version string

### xdb_open

Open a connection and create/open a local Database.

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

### xdb_connect

Connect CrossDB Server.

``` c
xdb_conn_t*
xdb_connect (const char *host, const char *user, const char *pass, const char *db, uint16_t port);
```

- `host` is NULL will connect CrossDB server on same host.
- `user` and `pass` are not implemented yet.
- `port` = 0 will call `xdb_open` and pass `db` as `path`.
- One thread can use only one connection. One connection can only be used by one thread
- If db is NULL, can `USE DATABASE db_name` to switch connection default DB.

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
- `xdb_errcode(pRes)`:	if `xdb_errcode(pRes)` = 0, then can use `xdb_errmsg(pRes)` to get the error message.
- row count: `xdb_row_count(pRes)` for query statement
- affected rows: `xdb_affected_rows(pRes)` for `INSERT` `UPDATE` `DELETE` rows 
- column count: `xdb_column_count(pRes` for query statement
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

### xdb_errcode

Get error code

``` c
xdb_errno_e
xdb_errcode (xdb_res_t *pRes);
```


### xdb_column_count

Get column count

``` c
int
xdb_column_count (xdb_res_t *pRes);
```

### xdb_column_type

Get column type.

``` c
xdb_type_t 
xdb_column_type (xdb_res_t *pRes, uint16_t iCol);
```

### xdb_column_name

Get column name.

``` c
const char* 
xdb_column_name (xdb_res_t *pRes, uint16_t iCol);
```

Get column ID.

``` c
int 
xdb_column_id (xdb_res_t *pRes, const char *name);
```

### xdb_fetch_row

Fetch one row and return row list array.

``` c
xdb_row_t*
xdb_fetch_row (xdb_res_t *pRes);
```

### xdb_row_count

Get row count.

``` c
xdb_rowid
xdb_row_count (xdb_res_t *pRes);
```

### xdb_affected_rows

Get row count.

``` c
xdb_rowid
xdb_affected_rows (xdb_res_t *pRes);
```

### xdb_column_null

If column value is NULL.
``` c
bool 
xdb_column_null (xdb_res_t *pRes, xdb_row_t *pRow, uint16_t iCol);
```

### xdb_column_bool

Get bool column from row.
``` c
bool 
xdb_column_bool (xdb_res_t *pRes, xdb_row_t *pRow, uint16_t iCol);
```

### xdb_column_int

Get int column from row.
``` c
int 
xdb_column_int (xdb_res_t *pRes, void *pRow, uint16_t iCol);

int64_t 
xdb_column_int64 (xdb_res_t *pRes, void *pRow, uint16_t iCol);
```

### xdb_column_float

Get float column from row.

``` c
float
xdb_column_float (xdb_res_t *pRes, xdb_row_t *pRow, uint16_t iCol);

double 
xdb_column_double (xdb_res_t *pRes, void *pRow, uint16_t iCol);
```

### xdb_column_str

Get string column from row.

``` c
const char*
xdb_column_str (xdb_res_t *pRes, xdb_row_t *pRow, uint16_t iCol);

const char*
xdb_column_str2 (xdb_res_t *pRes, xdb_row_t *pRow, uint16_t iCol, int *pLen);
```

### xdb_column_blob

Get blob column from row.

``` c
const void*
xdb_column_blob (xdb_res_t *pRes, xdb_row_t *pRow, uint16_t iCol, int *pLen);
```


### xdb_column_mac

Get mac column from row.
``` c
const xdb_mac_t*
xdb_column_mac (xdb_res_t *pRes, xdb_row_t *pRow, uint16_t iCol);
```

### xdb_column_inet

Get inet column from row.
``` c
const xdb_inet_t*
xdb_column_inet (xdb_res_t *pRes, xdb_row_t *pRow, uint16_t iCol);
```


### xdb_col_null

If column value is NULL.
``` c
bool 
xdb_col_null (xdb_res_t *pRes, xdb_row_t *pRow, const char *name);
```

### xdb_col_bool

Get bool column from row.
``` c
bool 
xdb_col_bool (xdb_res_t *pRes, xdb_row_t *pRow, const char *name);
```

### xdb_col_int

Get int column from row.
``` c
int 
xdb_col_int (xdb_res_t *pRes, void *pRow, const char *name);

int64_t 
xdb_col_int64 (xdb_res_t *pRes, void *pRow, const char *name);
```

### xdb_col_float

Get float column from row.

``` c
float
xdb_col_float (xdb_res_t *pRes, xdb_row_t *pRow, const char *name);

double 
xdb_col_double (xdb_res_t *pRes, void *pRow, const char *name);
```

### xdb_col_str

Get string column from row.

``` c
const char*
xdb_col_str (xdb_res_t *pRes, xdb_row_t *pRow, const char *name);

const char*
xdb_col_str2 (xdb_res_t *pRes, xdb_row_t *pRow, const char *name, int *pLen);
```

### xdb_col_blob

Get blob column from row.

``` c
const void*
xdb_col_blob (xdb_res_t *pRes, xdb_row_t *pRow, const char *name, int *pLen);
```

### xdb_col_mac

Get mac column from row.
``` c
const xdb_mac_t*
xdb_col_mac (xdb_res_t *pRes, xdb_row_t *pRow, const char *name);
```

### xdb_col_inet

Get inet column from row.
``` c
const xdb_inet_t*
xdb_col_inet (xdb_res_t *pRes, xdb_row_t *pRow, const char *name);
```


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


### xdb_create_func

Create function.

``` c
typedef int (*xdb_trig_callback) (xdb_conn_t *pConn, xdb_res_t *pRes, xdb_trig_e type, xdb_row_t *pNewRow, xdb_row_t *pOldRow, void *pArg);

typedef enum {
	XDB_FUNC_TRIG,
	XDB_FUNC_MAX,
} xdb_func_e;

xdb_ret 
xdb_create_func (const char *name, xdb_func_e type, const char *lang, void *cb_func, void *pArg);
```

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
xdb_print_row (xdb_res_t *pRes, xdb_row_t *pRow, int format);
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
	XDB_TYPE_BOOL		= 16, // 1 byte
	XDB_TYPE_INET		= 17, // 18 bytes
	XDB_TYPE_MAC		= 18, // 6 bytes
	XDB_TYPE_MAX        = 21
} xdb_type_t;
```

## Structures

### xdb_inet_t

``` c
typedef struct {
	uint8_t		mask;
	uint8_t		family;	// 4=ipv4, 6=ipv6 
	uint8_t		addr[16];
} xdb_inet_t;
```

### xdb_mac_t

``` c
typedef struct {
	uint8_t		addr[6];
} xdb_mac_t;
```
