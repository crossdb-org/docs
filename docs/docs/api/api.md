---
hide:
  - toc
---

# API Reference

|           | API                   | Descritpion
 ----       | ----                  | ----
cross_ret   | [**cross_dbCreate**](ddl.md#cross_dbCreate) (cross_db_h *phDb, const char *dbName, uint32_t flags) | Create or Open Database
cross_ret   | [**cross_dbClose**](ddl.md#cross_dbClose)(cross_db_h hDb, uint32_t flags) | Close Database
cross_ret   | [**cross_dbDrop**](ddl.md#cross_dbDrop) (cross_db_h hDb, uint32_t flags) | Drop Database
cross_ret   | [**cross_dbTblCreate**](ddl.md#cross_dbTblCreate)(cross_db_h hDb, cross_tbl_h *phTbl, const char *tblName, const cross_field_t *pFields, const char *priKey, uint32_t flags) | Create or Open Table
cross_ret   | [**cross_dbTblDrop**](ddl.md#cross_dbTblDrop) (cross_tbl_h hTbl, uint32_t flags) | Drop Table
cross_ret   | [**cross_dbIdxCreate**](ddl.md#cross_dbIdxCreate) cross_dbIdxCreate (cross_tbl_h hTbl, const char *idxName, const char *fldsStr, uint32_t flags) | Create Index on Table
cross_ret   | [**cross_dbIdxDrop**](ddl.md#cross_dbIdxDrop) (cross_tbl_h hTbl, const char *idxName, uint32_t flags) | Drop Table Index
cross_ret   | [**cross_dbInsertRow**](dml.md#cross_dbInsertRow) (cross_tbl_h hTbl, void *pRow, uint32_t flags) | Intert row into Table
cross_ret   | [**cross_dbReplaceRow**](dml.md#cross_dbReplaceRow) (cross_tbl_h hTbl, void *pInRow, uint32_t flags) | Insert/update row
cross_ret   | [**cross_dbGetRowByPk**](dml.md#cross_dbGetRowByPk) (cross_tbl_h hTbl, const void *pInRow, void *pOutRow, uint32_t flags) | Get one row by Primary Key
cross_ret   | [**cross_dbUpdRowByPk**](dml.md#cross_dbUpdRowByPk) (cross_tbl_h hTbl, const void *pInRow, const void *pUpdFlds, void *pUpdRow, uint32_t flags) | Update row by Primary Key
cross_ret   | [**cross_dbDelRowByPk**](dml.md#cross_dbDelRowByPk) (cross_tbl_h hTbl, void *pInRow, uint32_t flags) | Delete row by Primary Key
cross_ret   | [**cross_dbGetOneRow**](dml.md#cross_dbGetOneRow)(cross_tbl_h hTbl, const void *pMatFlds, const void *pMatRow, void *pOutRow, uint32_t flags) | Get one row by match fields
cross_rowid | [**cross_dbUpdateRows**](dml.md#cross_dbUpdateRows) (cross_tbl_h hTbl, const void *pMatFlds, const void *pMatRow, const void *pUpdFlds, const void *pUpdRow, uint32_t flags) | Update rows by match fields
cross_rowid | [**cross_dbDeleteRows**](dml.md#cross_dbDeleteRows) (cross_tbl_h hTbl, const void *pMatFlds, const void *pMatRow, uint32_t flags) | Delete rows by match fields
cross_rowid | [**cross_dbGetRowsCount**](dml.md#cross_dbGetRowsCount) (cross_tbl_h hTbl, const void *pMatFlds, const void *pMatRow, uint32_t flags) | Get rows count by match fields
cross_rowid | [**cross_dbQueryRows**](dml.md#cross_dbQueryRows) (cross_tbl_h hTbl, cross_cursor_h *phCursor, const void *pMatFlds, const void *pMatRow, uint32_t flags) | Query rows into cursor
cross_rowid | [**cross_cursorGetCount**](dml.md#cross_cursorGetCount) (cross_cursor_h hCursor, uint32_t flags) | Get cursor rows count
cross_ret   | [**cross_cursorClose**](dml.md#cross_cursorClose) (cross_cursor_h hCursor, uint32_t flags) | Close cursor
cross_ret   | [**cross_cursorGetNextRow**](dml.md#cross_cursorGetNextRow) (cross_cursor_h hCursor, void *pOutRow, uint32_t flags) | Get next row in cursor
cross_ret   | [**cross_dbTransBegin**](dml.md#cross_dbTransBegin) (cross_db_h hDb, uint32_t flags) | Begin Transaction
cross_ret   | [**cross_dbTransCommit**](dml.md#cross_dbTransCommit) (cross_db_h hDb, uint32_t flags) | Commit Transaction
cross_ret   | [**cross_dbTransRollback**](dml.md#cross_dbTransRollback)	| Rollback Transaction
const char* | [**cross_errMsg**](misc.md#cross_errMsg) (cross_db_h hDb, uint32_t flags) | Return error code message
