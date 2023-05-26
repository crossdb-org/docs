# Cursor

## Basic Usage
-------------------------------------------------------------------------------

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



