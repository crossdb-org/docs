# DB Manipulation APIs

## Single Row Manipulation
-------------------------------------------------------------------------------

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


##Multiple Rows Manipulation
-------------------------------------------------------------------------------

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
