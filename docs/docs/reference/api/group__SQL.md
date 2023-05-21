---
title: SQL and Dump APIs


---

# SQL and Dump APIs


**Module:** **[CalixDB APIs](./group__APIs.html)**

 [More...](#detailed-description)










## Functions

|                | Name           |
| -------------- | -------------- |
| cdb_error | **[cdb_sql_exec](./group__SQL.html#function-cdb_sql_exec)**(cdb_db_h hDb, const char * sql_fmt, ... )  |
| cdb_error | **[cdb_sql_exec2](./group__SQL.html#function-cdb_sql_exec2)**(cdb_db_h hDb, cdb_dump_flag flags, cdb_traverse_cb cb_fn, void * pArg, const char * sql_fmt, ... )  |
| cdb_cursor_t * | **[cdb_sql_query](./group__SQL.html#function-cdb_sql_query)**(cdb_db_h hDb, cdb_cursor_t * pCursor, const char * sql_fmt, ... )  |
| cdb_error | **[cdb_sql_source](./group__SQL.html#function-cdb_sql_source)**(cdb_db_h hDb, const char * sql_file, cdb_dump_flag flags)  |
| cdb_error | **[cdb_database_dump](./group__SQL.html#function-cdb_database_dump)**(cdb_db_h hDb, const char * file, cdb_dump_format format, cdb_dump_flag flags)  |
| cdb_error | **[cdb_table_dump](./group__SQL.html#function-cdb_table_dump)**(cdb_table_h hTbl, const char * file, cdb_dump_format format, const void * pMatchFlds, const void * pMatchRec, cdb_dump_flag flags)  |
| cdb_error | **[cdb_table_fdump](./group__SQL.html#function-cdb_table_fdump)**(cdb_table_h hTbl, FILE * pFile, cdb_dump_format format, const void * pMatchFlds, const void * pMatchRec, cdb_dump_flag flags)  |





## Detailed Description





























------------------





## Functions Documentation

### function cdb_sql_exec

```cpp
cdb_error cdb_sql_exec(
    cdb_db_h hDb,
    const char * sql_fmt,
    ... 
)
```






























### function cdb_sql_exec2

```cpp
cdb_error cdb_sql_exec2(
    cdb_db_h hDb,
    cdb_dump_flag flags,
    cdb_traverse_cb cb_fn,
    void * pArg,
    const char * sql_fmt,
    ... 
)
```






























### function cdb_sql_query

```cpp
cdb_cursor_t * cdb_sql_query(
    cdb_db_h hDb,
    cdb_cursor_t * pCursor,
    const char * sql_fmt,
    ... 
)
```






























### function cdb_sql_source

```cpp
cdb_error cdb_sql_source(
    cdb_db_h hDb,
    const char * sql_file,
    cdb_dump_flag flags
)
```






























### function cdb_database_dump

```cpp
cdb_error cdb_database_dump(
    cdb_db_h hDb,
    const char * file,
    cdb_dump_format format,
    cdb_dump_flag flags
)
```






























### function cdb_table_dump

```cpp
cdb_error cdb_table_dump(
    cdb_table_h hTbl,
    const char * file,
    cdb_dump_format format,
    const void * pMatchFlds,
    const void * pMatchRec,
    cdb_dump_flag flags
)
```






























### function cdb_table_fdump

```cpp
cdb_error cdb_table_fdump(
    cdb_table_h hTbl,
    FILE * pFile,
    cdb_dump_format format,
    const void * pMatchFlds,
    const void * pMatchRec,
    cdb_dump_flag flags
)
```



































-------------------------------

Updated on  7 December 2020 at 00:47:40 PST