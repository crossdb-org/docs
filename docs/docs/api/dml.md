# DB Manipulation APIs

## Single Row Manipulation
-------------------------------------------------------------------------------

### cross_dbInsertRow {#cross_dbInsertRow}

Intert row to Table
```c
cross_ret cross_dbInsertRow (cross_tbl_h hTbl, void *pRow, uint32_t flags);
```

### cross_dbReplaceRow {#cross_dbReplaceRow}

Insert/update row to Table
```c
cross_ret cross_dbReplaceRow (cross_tbl_h hTbl, void *pInRow, uint32_t flags);
```

### cross_dbGetRowByPk {#cross_dbGetRowByPk}

Get one row by Primary Key
```c
cross_ret cross_dbGetRowByPk (cross_tbl_h hTbl, const void *pInRow, void *pOutRow, uint32_t flags);
```

### cross_dbUpdRowByPk {#cross_dbUpdRowByPk}

Update row by Primary Key
```c
cross_ret cross_dbUpdRowByPk (cross_tbl_h hTbl, const void *pInRow, const void *pUpdFlds, void *pUpdRow, uint32_t flags);
```

### cross_dbDelRowByPk {#cross_dbDelRowByPk}

Delete row by Primary Key
```c
cross_ret cross_dbDelRowByPk (cross_tbl_h hTbl, void *pInRow, uint32_t flags);
```

### cross_dbDelRowByPk {#cross_dbDelRowByPk}

Get one row by match fields
```c
cross_ret cross_dbGetOneRow (cross_tbl_h hTbl, const void *pMatFlds, const void *pMatRow, void *pOutRow, uint32_t flags);
```


##Multiple Rows Manipulation
-------------------------------------------------------------------------------

### cross_dbUpdateRows {#cross_dbUpdateRows}

Update rows by match fields
```c
cross_rowid cross_dbUpdateRows (cross_tbl_h hTbl, const void *pMatFlds, const void *pMatRow,
```

### cross_dbDeleteRows {#cross_dbDeleteRows}

Delete rows by match fields
```c
cross_rowid cross_dbDeleteRows (cross_tbl_h hTbl, const void *pMatFlds, const void *pMatRow, uint32_t flags);
```

###  cross_dbGetRowsCount {#cross_dbGetRowsCount}

Get rows count by match fields
```c
cross_rowid cross_dbGetRowsCount (cross_tbl_h hTbl, const void *pMatFlds, const void *pMatRow, uint32_t flags);
```


# Cursor

## Basic Usage
-------------------------------------------------------------------------------

### cross_dbQueryRows {#cross_dbQueryRows}

Query rows into cursor
```c
cross_rowid cross_dbQueryRows (cross_tbl_h hTbl, cross_cursor_h *phCursor, const void *pMatFlds, const void *pMatRow, uint32_t flags);
```

### cross_cursorGetCount {cross_cursorGetCount}

Get cursor rows count
```c
cross_rowid cross_cursorGetCount (cross_cursor_h hCursor, uint32_t flags);
```

### cross_cursorClose {#cross_cursorClose}

Close cursor
```c
cross_ret cross_cursorClose (cross_cursor_h hCursor, uint32_t flags);
```

### cross_cursorGetNextRow {#cross_cursorGetNextRow}

Get next row in cursor
```c
cross_ret cross_cursorGetNextRow (cross_cursor_h hCursor, void *pOutRow, uint32_t flags);
```


# Concurrency and Transaction

## Concurrency
-------------------------------------------------------------------------------

## Transaction
-------------------------------------------------------------------------------

### Begin Transaction {#cross_dbTransBegin}

Begin Transaction
```c
cross_ret cross_dbTransBegin (cross_db_h hDb, uint32_t flags);
```

### Begin Transaction {#cross_dbTransCommit}

Commit Transaction
```c
cross_ret cross_dbTransCommit (cross_db_h hDb, uint32_t flags);
```

### Rollback Transaction {#cross_dbTransRollback}

Rollback Transaction
```c
cross_ret cross_dbTransRollback (cross_db_h hDb, uint32_t flags);
```
