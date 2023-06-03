---
template: overrides/blog.html
---

# Database Manipulation APIs

## Single Row Manipulation
-------------------------------------------------------------------------------

### cross_dbInsertRow {#cross_dbInsertRow}

Intert row to Table
```c
cross_ret 
cross_dbInsertRow (cross_tbl_h hTbl, void *pRow, uint32_t flags);
```

Parameters

 Arg     | Type  | Descritpion
 ----    | ----  | ----
hTbl     | in    | Table Handle
pRow     | in    | Row buffer to insert
pValFlds | [in]  | Not used
flags    | [in]  | Not used

Returns

- `CROSS_OK`:	The row was inserted successfully
- `Other`:		Decode with [cross_errMsg](#cross_errmsg)

Description

- If table has Primary Key or unique index, it must be valid and unique.


### cross_dbReplaceRow {#cross_dbReplaceRow}

Insert row to Table if not exist else replace row
```c
cross_ret 
cross_dbReplaceRow (cross_tbl_h hTbl, void *pInRow, uint32_t flags);
```

Parameters

 Arg     | Type  | Descritpion
 ----    | ----  | ----
hTbl     | in    | Table Handle
pRow     | in    | Row buffer to insert/update
pNullFlds| in    | Not used
flags    | [in]  | Not used

Returns

- `CROSS_OK`:	The row was inserted/updated successfully
- `Other`:		Decode with [cross_errMsg](#cross_errmsg)

Description

- If table has Primary Key or unique index, it must be valid and unique.


### cross_dbGetRowByPK {#cross_dbGetRowByPK}

Get one row by Primary Key
```c
cross_ret 
cross_dbGetRowByPK (cross_tbl_h hTbl, const void *pInRow, void *pOutRow, uint32_t flags);
```

Parameters

 Arg     | Type  | Descritpion
 ----    | ----  | ----
hTbl     | in    | Table Handle
pInRow   | in    | Row buffer with Primary Key
pSelFlds | [in]  | Select specified fields
pOutRow  | [out] | Row buffer to return DB row
flags    | [in]  | Not used

Returns

- `CROSS_OK`:	Get row successfully
- `CROSS_E_NOTFOUND`: The row is not found
- `Other`:		Decode with [cross_errMsg](#cross_errmsg)

Description

- `pSelFlds` can be cloumn list seperated by `,`,
- `pSelFlds` = `NULL` returns whole row
- `pOutRow` = NULL can be used to check if row exists by Primary Key
- `pOutRow` can = `pInRow`


### cross_dbUpdRowByPK {#cross_dbUpdRowByPK}

Update row by Primary Key
```c
cross_ret 
cross_dbUpdRowByPK (cross_tbl_h hTbl, const void *pInRow, 
					const void *pUpdFlds, void *pUpdRow, uint32_t flags);
```

Parameters

 Arg     | Type   | Descritpion
 ----    | ----   | ----
hTbl     | in     | Table Handle
pInRow   | in     | Row buffer with Primary Key
pUpdFlds | [in]   | Fields to update
pUpdRow  | in     | Row buffer to upate
flags    | [in]   | Not used

Returns

- `CROSS_OK`:	Update row successfully
- `CROSS_E_NOTFOUND`: The row is not found
- `Other`:		Decode with [cross_errMsg](#cross_errmsg)

Description

- `pUpdFlds` can be cloumn list seperated by `,`
- `pUpdFlds` = NULL will update whole DB row
- `pUpdRow` can = `pInRow`


### cross_dbDelRowByPK {#cross_dbDelRowByPK}

Delete row by Primary Key
```c
cross_ret 
cross_dbDelRowByPK (cross_tbl_h hTbl, void *pInRow, uint32_t flags);
```

Parameters

 Arg     | Type  | Descritpion
 ----    | ----  | ----
hTbl     | in    | Table Handle
pInRow   | in    | Row buffer with Primary Key
flags    | [in]  | Not used

Returns

- `CROSS_OK`:	Delete row successfully
- `CROSS_E_NOTFOUND`: No row is found
- `Other`:		Decode with [cross_errMsg](#cross_errmsg)


### cross_dbGetOneRow {#cross_dbGetOneRow}

Get one row by match fields
```c
cross_ret 
cross_dbGetOneRow (cross_tbl_h hTbl, const void *pMatFlds, const void *pMatRow, 
					void *pOutRow, uint32_t flags);
```

Parameters

 Arg     | Type  | Descritpion
 ----    | ----  | ----
hTbl     | in    | Table Handle
pMatFlds | in    | Fields to match
pMatRow  | in    | Row buffer with match row
pSelFlds | [in]  | Select specified fields
pOutRow  | [out] | Row buffer to return DB row
flags    | [in]  | Not used

Returns

- `CROSS_OK`:	Get row successfully
- `CROSS_E_NOTFOUND`: No row is found
- `Other`:		Decode with [cross_errMsg](#cross_errmsg)

Description

- `pMatFlds` can be cloumn list seperated by `,`, they are `AND` together. 
	* `fld`: equal to match `dbRow.fld` = `pMatRow.fld`.
	* `fld!=`: unequal match `dbRow.fld` != `pMatRow.fld`.
	* `fld>`: greater than match `dbRow.fld` > `pMatRow.fld`.
	* `fld>=`: greater than or equal to match `dbRow.fld` >= `pMatRow.fld`.
	* `fld<`: less match `dbRow.fld` < `pMatRow.fld`.
	* `fld<=`: leas than or equal to match `dbRow.fld` < `pMatRow.fld`.
- `pSelFlds` can be cloumn list seperated by `,`,
- `pSelFlds` = `NULL` returns whole row
- `pOutRow` = NULL can be used to check if row exists


##Multiple Rows Manipulation
-------------------------------------------------------------------------------

### cross_dbUpdateRows {#cross_dbUpdateRows}

Update rows by match fields
```c
cross_rowid 
cross_dbUpdateRows (cross_tbl_h hTbl, const void *pMatFlds, const void *pMatRow, 
					const void *pUpdFlds, const void *pUpdRow, uint32_t flags);
```

Parameters

 Arg     | Type  | Descritpion
 ----    | ----  | ----
hTbl     | in    | Table Handle
pMatFlds | in    | Fields to match
pMatRow  | in    | Row buffer with match row
pUpdFlds | [in]  | Upate specified fields
pUpdRow  | in    | Row buffer to update
flags    | [in]  | Not used

Returns

- `>=0`:	Rows count updated successfully
- `Other`:	Decode with [cross_errMsg](#cross_errmsg)

Description

- `pMatFlds` can be cloumn list seperated by `,`, they are `AND` together.  Refer [cross_dbGetOneRow](#cross_dbGetOneRow)
- `pUpdFlds` can be cloumn list seperated by `,`,
- `pUpdFlds` = `NULL` updates whole row


### cross_dbDeleteRows {#cross_dbDeleteRows}

Delete rows by match fields
```c
cross_rowid 
cross_dbDeleteRows (cross_tbl_h hTbl, const void *pMatFlds, 
					const void *pMatRow, uint32_t flags);
```

Parameters

 Arg     | Type  | Descritpion
 ----    | ----  | ----
hTbl     | in    | Table Handle
pMatFlds | in    | Fields to match
pMatRow  | in    | Row buffer with match row
flags    | [in]  | Not used

Returns

- `>=0`:	Rows count deleted successfully
- `Other`:	Decode with [cross_errMsg](#cross_errmsg)

Description
- `pMatFlds` can be cloumn list seperated by `,`, they are `AND` together.  Refer [cross_dbGetOneRow](#cross_dbGetOneRow)


###  cross_dbGetRowsCount {#cross_dbGetRowsCount}

Get rows count by match fields
```c
cross_rowid 
cross_dbGetRowsCount (cross_tbl_h hTbl, const void *pMatFlds, 
						const void *pMatRow, uint32_t flags);
```

Parameters

 Arg     | Type  | Descritpion
 ----    | ----  | ----
hTbl     | in    | Table Handle
pMatFlds | in    | Fields to match
pMatRow  | in    | Row buffer with match row
flags    | [in]  | Not used

Returns

- `>=0`:	Rows count
- `Other`:	Decode with [cross_errMsg](#cross_errmsg)

Description
- `pMatFlds` can be cloumn list seperated by `,`, they are `AND` together.  Refer [cross_dbGetOneRow](#cross_dbGetOneRow)


## Cursor

### cross_dbQueryRows {#cross_dbQueryRows}

Query rows into cursor
```c
cross_rowid 
cross_dbQueryRows (cross_tbl_h hTbl, cross_cursor_h *phCursor, const void *pMatFlds, 
					const void *pMatRow, uint32_t flags);
```

Parameters

 Arg     | Type  | Descritpion
 ----    | ----  | ----
hTbl     | in    | Table Handle
phCursor | io\|out | Return Cursor handle or 
pMatFlds | in    | Fields to match
pMatRow  | in    | Row buffer with match row
pSelFlds | [in]  | Select specified fields
flags    | [in]  | `CROSS_DB_REUSE` means phCursor points to a valid cursor handle and it'll be reused

Returns

- `>=0`:	Rows count
- `Other`:	Decode with [cross_errMsg](#cross_errmsg)

Description

- `pMatFlds` can be cloumn list seperated by `,`, they are `AND` together.  Refer [cross_dbGetOneRow](#cross_dbGetOneRow)
- `pSelFlds` can be cloumn list seperated by `,`,
- `pSelFlds` = `NULL` returns whole row


### cross_cursorGetNextRow {#cross_cursorGetNextRow}

Get next row in cursor
```c
cross_ret 
cross_cursorGetNextRow (cross_cursor_h hCursor, void *pOutRow, uint32_t flags);
```

Parameters

 Arg     | Type  | Descritpion
 ----    | ----  | ----
hCursor  | in    | Cursor Handle
pInRow   | in    | Row buffer with Primary Key
pSelFlds | [in]  | Select specified fields
pOutRow  | [out] | Row buffer to return DB row
flags    | [in]  | Not used

Returns

- `CROSS_OK`:	Get next row successfully
- `CROSS_E_NOTFOUND`: No row is found
- `Other`:		Decode with [cross_errMsg](#cross_errmsg)


### cross_cursorGetCount {cross_cursorGetCount}

Get cursor rows count
```c
cross_rowid 
cross_cursorGetCount (cross_cursor_h hCursor, uint32_t flags);
```

Parameters

 Arg     | Type  | Descritpion
 ----    | ----  | ----
hCursor  | in    | Cursor Handle
flags    | [in]  | Not used

Returns

- `>=0`:	Rows count
- `Other`:	Decode with [cross_errMsg](#cross_errmsg)


### cross_cursorClose {#cross_cursorClose}

Close cursor
```c
cross_ret 
cross_cursorClose (cross_cursor_h hCursor, uint32_t flags);
```

Parameters

 Arg     | Type  | Descritpion
 ----    | ----  | ----
hCursor  | in    | Cursor Handle
flags    | [in]  | Not used

Returns

- `>=0`:	Rows count
- `Other`:	Decode with [cross_errMsg](#cross_errmsg)

> **Warning**
> Cursor handle can't be used after close.


## Transaction
-------------------------------------------------------------------------------

### cross_dbTransBegin {#cross_dbTransBegin}

Begin Transaction
```c
cross_ret cross_dbTransBegin (cross_db_h hDb, uint32_t flags);
```
Parameters

 Arg     | Type  | Descritpion
 ----    | ----  | ----
hDb      | in    | DB Handle
flags    | [in]  | Not used

Returns

- `CROSS_OK`:	Begin transaction successfully
- `Other`:		Decode with [cross_errMsg](#cross_errmsg)

> **Note**
> If there's onging transaction, it'll be commited first.


### cross_dbTransCommit {#cross_dbTransCommit}

Commit Transaction
```c
cross_ret 
cross_dbTransCommit (cross_db_h hDb, uint32_t flags);
```

Parameters

 Arg     | Type  | Descritpion
 ----    | ----  | ----
hDb      | in    | DB Handle
flags    | [in]  | Not used

Returns

- `CROSS_OK`:	Commit transaction successfully
- `Other`:		Decode with [cross_errMsg](#cross_errmsg)


### cross_dbTransRollback {#cross_dbTransRollback}

Rollback Transaction
```c
cross_ret 
cross_dbTransRollback (cross_db_h hDb, uint32_t flags);
```

Parameters

 Arg     | Type  | Descritpion
 ----    | ----  | ----
hDb      | in    | DB Handle
flags    | [in]  | Not used

Returns

- `CROSS_OK`:	Rollback transaction successfully
- `Other`:		Decode with [cross_errMsg](#cross_errmsg)
