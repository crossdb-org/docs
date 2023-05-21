---
title: Hook and Action APIs


---

# Hook and Action APIs


**Module:** **[CalixDB APIs](./group__APIs.html)**

 [More...](#detailed-description)










## Functions

|                | Name           |
| -------------- | -------------- |
| cdb_error | **[cdb_database_hook_register](./group__Hook.html#function-cdb_database_hook_register)**(cdb_db_h hDb, cdb_hook_type type, cdb_hook_cb hook_cb, void * pArg)  |
| cdb_error | **[cdb_table_hook_register](./group__Hook.html#function-cdb_table_hook_register)**(cdb_table_h hTbl, cdb_hook_type type, cdb_hook_cb hook_cb, void * pArg)  |
| cdb_error | **[cdb_table_set_rank](./group__Hook.html#function-cdb_table_set_rank)**(cdb_table_h hTbl, cdb_rank_id rank)  |
| cdb_rec_id | **[cdb_table_action](./group__Hook.html#function-cdb_table_action)**(cdb_table_h hTbl, const void * pMatchFlds, const void * pMatchRec, cdb_hook_type action)  |
| cdb_error | **[cdb_database_install](./group__Hook.html#function-cdb_database_install)**(cdb_db_h hDb, int flags)  |
| cdb_error | **[cdb_database_uninstall](./group__Hook.html#function-cdb_database_uninstall)**(cdb_db_h hDb, int flags)  |





## Detailed Description





























------------------





## Functions Documentation

### function cdb_database_hook_register

```cpp
cdb_error cdb_database_hook_register(
    cdb_db_h hDb,
    cdb_hook_type type,
    cdb_hook_cb hook_cb,
    void * pArg
)
```






























### function cdb_table_hook_register

```cpp
cdb_error cdb_table_hook_register(
    cdb_table_h hTbl,
    cdb_hook_type type,
    cdb_hook_cb hook_cb,
    void * pArg
)
```






























### function cdb_table_set_rank

```cpp
cdb_error cdb_table_set_rank(
    cdb_table_h hTbl,
    cdb_rank_id rank
)
```






























### function cdb_table_action

```cpp
cdb_rec_id cdb_table_action(
    cdb_table_h hTbl,
    const void * pMatchFlds,
    const void * pMatchRec,
    cdb_hook_type action
)
```






























### function cdb_database_install

```cpp
cdb_error cdb_database_install(
    cdb_db_h hDb,
    int flags
)
```






























### function cdb_database_uninstall

```cpp
cdb_error cdb_database_uninstall(
    cdb_db_h hDb,
    int flags
)
```



































-------------------------------

Updated on  7 December 2020 at 00:47:40 PST