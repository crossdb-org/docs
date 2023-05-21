---
title: Record APIs


---

# Record APIs


**Module:** **[CalixDB APIs](./group__APIs.html)**

 [More...](#detailed-description)










## Functions

|                | Name           |
| -------------- | -------------- |
| cdb_error | **[cdb_record_insert](./group__Record.html#function-cdb_record_insert)**(cdb_table_h hTbl, void * pRecord, cdb_record_flag flags)  |
| cdb_error | **[cdb_record_insert2](./group__Record.html#function-cdb_record_insert2)**(cdb_table_h hTbl, void * pRecord, const void * pSelFlds, cdb_rec_id * pRecId, cdb_record_flag flags)  |
| cdb_error | **[cdb_record_get](./group__Record.html#function-cdb_record_get)**(cdb_table_h hTbl, const void * pMatchRec, void * pOutRec)  |
| cdb_error | **[cdb_record_get2](./group__Record.html#function-cdb_record_get2)**(cdb_table_h hTbl, const void * pMatchRec, void * pOutRec, const void * pSelFlds, cdb_rec_id * pRecId, cdb_record_flag flags)  |
| cdb_error | **[cdb_record_update](./group__Record.html#function-cdb_record_update)**(cdb_table_h hTbl, const void * pMatchRec, const void * pUpdFlds, void * pUpdRec, cdb_record_flag flags)  |
| cdb_error | **[cdb_record_delete](./group__Record.html#function-cdb_record_delete)**(cdb_table_h hTbl, const void * pMatchRec, cdb_record_flag flags)  |
| cdb_error | **[cdb_record_exist](./group__Record.html#function-cdb_record_exist)**(cdb_table_h hTbl, const void * pMatchRec)  |
| cdb_error | **[cdb_record_query](./group__Record.html#function-cdb_record_query)**(cdb_table_h hTbl, const void * pMatchFlds, const void * pMatchRec, void * pOutRec)  |
| cdb_error | **[cdb_record_query2](./group__Record.html#function-cdb_record_query2)**(cdb_table_h hTbl, const void * pMatchFlds, const void * pMatchRec, void * pOutRec, const void * pSelFlds, cdb_rec_id * pRecId)  |
| cdb_error | **[cdb_record_exist2](./group__Record.html#function-cdb_record_exist2)**(cdb_table_h hTbl, const void * pMatchFlds, const void * pMatchRec)  |
| cdb_rec_id | **[cdb_record_count](./group__Record.html#function-cdb_record_count)**(cdb_table_h hTbl, const void * pMatchFlds, const void * pMatchRec)  |
| cdb_error | **[cdb_record_insert_byid](./group__Record.html#function-cdb_record_insert_byid)**(cdb_table_h hTbl, cdb_rec_id rec_id, void * pRecord, const void * pSelFlds, cdb_record_flag flags)  |
| cdb_error | **[cdb_record_get_byid](./group__Record.html#function-cdb_record_get_byid)**(cdb_table_h hTbl, cdb_rec_id rec_id, void * pOutRec, const void * pSelFlds, cdb_record_flag flags)  |
| cdb_error | **[cdb_record_update_byid](./group__Record.html#function-cdb_record_update_byid)**(cdb_table_h hTbl, cdb_rec_id * pRecId, const void * pUpdFlds, void * pUpdRec, cdb_record_flag flags)  |
| cdb_error | **[cdb_record_delete_byid](./group__Record.html#function-cdb_record_delete_byid)**(cdb_table_h hTbl, cdb_rec_id rec_id, cdb_record_flag flags)  |
| cdb_error | **[cdb_record_getptr_byid](./group__Record.html#function-cdb_record_getptr_byid)**(cdb_table_h hTbl, cdb_record_h * phRecord, cdb_rec_id rec_id)  |
| cdb_error | **[cdb_record_enqueue](./group__Record.html#function-cdb_record_enqueue)**(cdb_table_h hTbl, void * pRecord, cdb_record_flag flags)  |
| cdb_error | **[cdb_record_dequeue](./group__Record.html#function-cdb_record_dequeue)**(cdb_table_h hTbl, void * pOutRec, cdb_record_flag flags)  |





## Detailed Description





























------------------





## Functions Documentation

### function cdb_record_insert

```cpp
cdb_error cdb_record_insert(
    cdb_table_h hTbl,
    void * pRecord,
    cdb_record_flag flags
)
```






























### function cdb_record_insert2

```cpp
cdb_error cdb_record_insert2(
    cdb_table_h hTbl,
    void * pRecord,
    const void * pSelFlds,
    cdb_rec_id * pRecId,
    cdb_record_flag flags
)
```






























### function cdb_record_get

```cpp
cdb_error cdb_record_get(
    cdb_table_h hTbl,
    const void * pMatchRec,
    void * pOutRec
)
```






























### function cdb_record_get2

```cpp
cdb_error cdb_record_get2(
    cdb_table_h hTbl,
    const void * pMatchRec,
    void * pOutRec,
    const void * pSelFlds,
    cdb_rec_id * pRecId,
    cdb_record_flag flags
)
```






























### function cdb_record_update

```cpp
cdb_error cdb_record_update(
    cdb_table_h hTbl,
    const void * pMatchRec,
    const void * pUpdFlds,
    void * pUpdRec,
    cdb_record_flag flags
)
```






























### function cdb_record_delete

```cpp
cdb_error cdb_record_delete(
    cdb_table_h hTbl,
    const void * pMatchRec,
    cdb_record_flag flags
)
```






























### function cdb_record_exist

```cpp
cdb_error cdb_record_exist(
    cdb_table_h hTbl,
    const void * pMatchRec
)
```






























### function cdb_record_query

```cpp
cdb_error cdb_record_query(
    cdb_table_h hTbl,
    const void * pMatchFlds,
    const void * pMatchRec,
    void * pOutRec
)
```






























### function cdb_record_query2

```cpp
cdb_error cdb_record_query2(
    cdb_table_h hTbl,
    const void * pMatchFlds,
    const void * pMatchRec,
    void * pOutRec,
    const void * pSelFlds,
    cdb_rec_id * pRecId
)
```






























### function cdb_record_exist2

```cpp
cdb_error cdb_record_exist2(
    cdb_table_h hTbl,
    const void * pMatchFlds,
    const void * pMatchRec
)
```






























### function cdb_record_count

```cpp
cdb_rec_id cdb_record_count(
    cdb_table_h hTbl,
    const void * pMatchFlds,
    const void * pMatchRec
)
```






























### function cdb_record_insert_byid

```cpp
cdb_error cdb_record_insert_byid(
    cdb_table_h hTbl,
    cdb_rec_id rec_id,
    void * pRecord,
    const void * pSelFlds,
    cdb_record_flag flags
)
```






























### function cdb_record_get_byid

```cpp
cdb_error cdb_record_get_byid(
    cdb_table_h hTbl,
    cdb_rec_id rec_id,
    void * pOutRec,
    const void * pSelFlds,
    cdb_record_flag flags
)
```






























### function cdb_record_update_byid

```cpp
cdb_error cdb_record_update_byid(
    cdb_table_h hTbl,
    cdb_rec_id * pRecId,
    const void * pUpdFlds,
    void * pUpdRec,
    cdb_record_flag flags
)
```






























### function cdb_record_delete_byid

```cpp
cdb_error cdb_record_delete_byid(
    cdb_table_h hTbl,
    cdb_rec_id rec_id,
    cdb_record_flag flags
)
```






























### function cdb_record_getptr_byid

```cpp
cdb_error cdb_record_getptr_byid(
    cdb_table_h hTbl,
    cdb_record_h * phRecord,
    cdb_rec_id rec_id
)
```






























### function cdb_record_enqueue

```cpp
cdb_error cdb_record_enqueue(
    cdb_table_h hTbl,
    void * pRecord,
    cdb_record_flag flags
)
```






























### function cdb_record_dequeue

```cpp
cdb_error cdb_record_dequeue(
    cdb_table_h hTbl,
    void * pOutRec,
    cdb_record_flag flags
)
```



































-------------------------------

Updated on  7 December 2020 at 00:47:40 PST