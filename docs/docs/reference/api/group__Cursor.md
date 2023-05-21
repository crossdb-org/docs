---
title: Cursor APIs


---

# Cursor APIs


**Module:** **[CalixDB APIs](./group__APIs.html)**

 [More...](#detailed-description)










## Functions

|                | Name           |
| -------------- | -------------- |
| cdb_cursor_t * | **[cdb_cursor_open](./group__Cursor.html#function-cdb_cursor_open)**(cdb_cursor_t * pCursor, cdb_table_h hTbl, const void * pMatchFlds, const void * pMatchRec, const void * pSelFlds, const void * pOrderFlds, cdb_cursor_flag flags)  |
| cdb_rec_id | **[cdb_cursor_count](./group__Cursor.html#function-cdb_cursor_count)**(cdb_cursor_t * pCursor)  |
| cdb_error | **[cdb_cursor_get_next](./group__Cursor.html#function-cdb_cursor_get_next)**(cdb_cursor_t * pCursor, void * pOutRec, cdb_rec_id * pRecId)  |
| cdb_rec_id | **[cdb_cursor_iterate](./group__Cursor.html#function-cdb_cursor_iterate)**(cdb_cursor_t * pCursor, void * pOutRec, cdb_traverse_cb cb_func, void * pArg)  |
| cdb_error | **[cdb_cursor_close](./group__Cursor.html#function-cdb_cursor_close)**(cdb_cursor_t * pCursor)  |
| cdb_error | **[cdb_cursor_set_flag](./group__Cursor.html#function-cdb_cursor_set_flag)**(cdb_cursor_t * pCursor, cdb_cursor_flag flags)  |
| cdb_rec_id | **[cdb_table_select](./group__Cursor.html#function-cdb_table_select)**(cdb_table_h hTbl, const void * pMatchFlds, const void * pMatchRec, void * pOutRec, cdb_traverse_cb cb_fn, void * pArg)  |
| cdb_rec_id | **[cdb_table_select2](./group__Cursor.html#function-cdb_table_select2)**(cdb_table_h hTbl, const void * pMatchFlds, const void * pMatchRec, void * pOutRec, const void * pSelFlds, const void * pOrderFlds, cdb_traverse_cb cb_fn, void * pArg)  |
| cdb_rec_id | **[cdb_table_delete](./group__Cursor.html#function-cdb_table_delete)**(cdb_table_h hTbl, const void * pMatchFlds, const void * pMatchRec, cdb_record_flag flags)  |
| cdb_rec_id | **[cdb_table_update](./group__Cursor.html#function-cdb_table_update)**(cdb_table_h hTbl, const void * pMatchFlds, const void * pMatchRec, const void * pUpdFlds, void * pUpdRec, cdb_record_flag flags)  |





## Detailed Description





























------------------





## Functions Documentation

### function cdb_cursor_open

```cpp
cdb_cursor_t * cdb_cursor_open(
    cdb_cursor_t * pCursor,
    cdb_table_h hTbl,
    const void * pMatchFlds,
    const void * pMatchRec,
    const void * pSelFlds,
    const void * pOrderFlds,
    cdb_cursor_flag flags
)
```






























### function cdb_cursor_count

```cpp
cdb_rec_id cdb_cursor_count(
    cdb_cursor_t * pCursor
)
```






























### function cdb_cursor_get_next

```cpp
cdb_error cdb_cursor_get_next(
    cdb_cursor_t * pCursor,
    void * pOutRec,
    cdb_rec_id * pRecId
)
```






























### function cdb_cursor_iterate

```cpp
cdb_rec_id cdb_cursor_iterate(
    cdb_cursor_t * pCursor,
    void * pOutRec,
    cdb_traverse_cb cb_func,
    void * pArg
)
```






























### function cdb_cursor_close

```cpp
cdb_error cdb_cursor_close(
    cdb_cursor_t * pCursor
)
```






























### function cdb_cursor_set_flag

```cpp
cdb_error cdb_cursor_set_flag(
    cdb_cursor_t * pCursor,
    cdb_cursor_flag flags
)
```






























### function cdb_table_select

```cpp
cdb_rec_id cdb_table_select(
    cdb_table_h hTbl,
    const void * pMatchFlds,
    const void * pMatchRec,
    void * pOutRec,
    cdb_traverse_cb cb_fn,
    void * pArg
)
```






























### function cdb_table_select2

```cpp
cdb_rec_id cdb_table_select2(
    cdb_table_h hTbl,
    const void * pMatchFlds,
    const void * pMatchRec,
    void * pOutRec,
    const void * pSelFlds,
    const void * pOrderFlds,
    cdb_traverse_cb cb_fn,
    void * pArg
)
```






























### function cdb_table_delete

```cpp
cdb_rec_id cdb_table_delete(
    cdb_table_h hTbl,
    const void * pMatchFlds,
    const void * pMatchRec,
    cdb_record_flag flags
)
```






























### function cdb_table_update

```cpp
cdb_rec_id cdb_table_update(
    cdb_table_h hTbl,
    const void * pMatchFlds,
    const void * pMatchRec,
    const void * pUpdFlds,
    void * pUpdRec,
    cdb_record_flag flags
)
```



































-------------------------------

Updated on  7 December 2020 at 00:47:40 PST