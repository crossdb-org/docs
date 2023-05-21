---
title: Database and Transaction APIs


---

# Database and Transaction APIs


**Module:** **[CalixDB APIs](./group__APIs.html)**

 [More...](#detailed-description)







## Types

|                | Name           |
| -------------- | -------------- |
| enum | **[cdb_db_type](./group__Database.html#enum-cdb_db_type)** { CDB_DB_TYPE_DFT = 0, CDB_DB_TYPE_RAMDISK = 0, CDB_DB_TYPE_PERSIST = 1, CDB_DB_TYPE_MEMORY = 2 } |
| enum | **[cdb_db_flag](./group__Database.html#enum-cdb_db_flag)** { CDB_DB_FLAG_SHARE = (1<<0), CDB_DB_FLAG_MAPLOCK = (1<<1) } |



## Functions

|                | Name           |
| -------------- | -------------- |
| cdb_error | **[cdb_database_create](./group__Database.html#function-cdb_database_create)**(cdb_db_h * phDb, const char * db_name, const char * db_path, [cdb_db_type](./group__Database.html#enum-cdb_db_type) db_type, cdb_lock_type lock_type, [cdb_db_flag](./group__Database.html#enum-cdb_db_flag) flags) <br>Create or open a database.  |
| cdb_error | **[cdb_database_create2](./group__Database.html#function-cdb_database_create2)**(cdb_db_h * phDb, const cdb_dbinfo_t * pDbInfo) <br>Create or open a database.  |
| cdb_error | **[cdb_database_open](./group__Database.html#function-cdb_database_open)**(cdb_db_h * phDb, const char * db_name, const char * db_path, int flags) <br>Open a database.  |
| cdb_error | **[cdb_database_close](./group__Database.html#function-cdb_database_close)**(cdb_db_h * phDb, int flags) <br>Close a database.  |
| cdb_db_h | **[cdb_database_get](./group__Database.html#function-cdb_database_get)**(const char * db_name) <br>Get database handle by name.  |
| cdb_error | **[cdb_database_drop](./group__Database.html#function-cdb_database_drop)**(cdb_db_h * phDb, cdb_bool bForce) <br>Drop a database.  |
| cdb_error | **[cdb_transaction_begin](./group__Database.html#function-cdb_transaction_begin)**(cdb_db_h hDb, int flags) <br>Begin a transaction.  |
| cdb_error | **[cdb_transaction_commit](./group__Database.html#function-cdb_transaction_commit)**(cdb_db_h hDb, cdb_bool bFlush, int flags) <br>Commit a transaction.  |
| cdb_error | **[cdb_transaction_rollback](./group__Database.html#function-cdb_transaction_rollback)**(cdb_db_h hDb, void * pSavepoint, int flags) <br>Rollback a transaction.  |





## Detailed Description





























------------------

Database is a collection of tables 




## Types Documentation

### enum cdb_db_type


| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| CDB_DB_TYPE_DFT | 0 | Default is RAMDisk.   |
| CDB_DB_TYPE_RAMDISK | 0 | DB in RamDisk or Tmpfs.   |
| CDB_DB_TYPE_PERSIST | 1 | DB in filesystem.   |
| CDB_DB_TYPE_MEMORY | 2 | DB in memory.   |
































### enum cdb_db_flag


| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| CDB_DB_FLAG_SHARE | (1<<0) | DB is shared by many processes.   |
| CDB_DB_FLAG_MAPLOCK | (1<<1) | DB table has mmap memory lock(TBD)   |

































## Functions Documentation

### function cdb_database_create

```cpp
cdb_error cdb_database_create(
    cdb_db_h * phDb,
    const char * db_name,
    const char * db_path,
    cdb_db_type db_type,
    cdb_lock_type lock_type,
    cdb_db_flag flags
)
```

Create or open a database. 

Parameters: 

  * `phDb` [out] Database handle 
  * `db_name` Database name 
  * `db_path` Database directory 
  * `db_type` Database Type [cdb_db_type](./group__Database.html#enum-cdb_db_type)
  * `lock_type` Database Table Lock Type 
  * `flags` Database Flags


Returns: 

  * `CDB_ERROR_OK` Create Database OK 
  * `CDB_ERROR_EXIST` Open existing Database 
  * `Other` cdb_error 




























### function cdb_database_create2

```cpp
cdb_error cdb_database_create2(
    cdb_db_h * phDb,
    const cdb_dbinfo_t * pDbInfo
)
```

Create or open a database. 

Parameters: 

  * `phDb` [out] Database handle 
  * `pDbInfo` cdb_dbinfo_t


Returns: 

  * `CDB_ERROR_OK` Create Database OK 
  * `CDB_ERROR_EXIST` Open existing Database 
  * `Other` cdb_error 




























### function cdb_database_open

```cpp
cdb_error cdb_database_open(
    cdb_db_h * phDb,
    const char * db_name,
    const char * db_path,
    int flags
)
```

Open a database. 

Parameters: 

  * `phDb` [out] Database handle 
  * `db_name` Database name 
  * `db_path` Database directory 
  * `flags` Resvered


Returns: 

  * `CDB_ERROR_OK` Open Database OK 
  * `CDB_ERROR_NOT_FOUND` Open existing Database 
  * `Other` cdb_error 




























### function cdb_database_close

```cpp
cdb_error cdb_database_close(
    cdb_db_h * phDb,
    int flags
)
```

Close a database. 

Parameters: 

  * `phDb` Database handle, will be set to NULL 
  * `flags` Resvered 


Returns: 

  * `CDB_ERROR_OK` Open Database OK 
  * `Other` cdb_error 




























### function cdb_database_get

```cpp
cdb_db_h cdb_database_get(
    const char * db_name
)
```

Get database handle by name. 

Parameters: 

  * `db_name` Database name 





























### function cdb_database_drop

```cpp
cdb_error cdb_database_drop(
    cdb_db_h * phDb,
    cdb_bool bForce
)
```

Drop a database. 

Parameters: 

  * `phDb` Database handle, will be set to NULL 
  * `bForce` Delete all tables 


Returns: 

  * `CDB_ERROR_OK` Drop database OK 
  * `CDB_ERROR_NOT_EMPTY` Database has table 
  * `Other` cdb_error 




























### function cdb_transaction_begin

```cpp
cdb_error cdb_transaction_begin(
    cdb_db_h hDb,
    int flags
)
```

Begin a transaction. 

Parameters: 

  * `hDb` Database handle 
  * `flags` Resvered 


Returns: 

  * `CDB_ERROR_OK` Open Database OK 
  * `Other` cdb_error 




























### function cdb_transaction_commit

```cpp
cdb_error cdb_transaction_commit(
    cdb_db_h hDb,
    cdb_bool bFlush,
    int flags
)
```

Commit a transaction. 

Parameters: 

  * `hDb` Database handle 
  * `bFlush` Flush all tables 
  * `flags` Resvered 







**Return**: cdb_error 






















### function cdb_transaction_rollback

```cpp
cdb_error cdb_transaction_rollback(
    cdb_db_h hDb,
    void * pSavepoint,
    int flags
)
```

Rollback a transaction. 

Parameters: 

  * `hDb` Database handle 
  * `pSavepoint` Resvered to support savepoint feature 
  * `flags` Resvered 







**Return**: cdb_error 



























-------------------------------

Updated on  7 December 2020 at 00:47:40 PST