# Database

**CrosDB** Database is a collection of tables.

<figure class="cdb-figure">
	<img src="../../../images/crossdb-model.png">
</figure>

Steps to define a database

- Decide where to store the database: on disk, on ramdisk or in memory.
- Decide the database is accessed by single process or multiple proceses.
- Use [cross_dbCreate](#cross_dbCreate) to create or open database.
- Use [Schema](schema.md#schema) to define table scheam.
- Decide Table Primary Key: fields list, index type.
- Use [cross_dbTblCreate](#cross_dbTblCreate) to create or open table with schema defined above and provide the primary key.
- Decide how many secondary indexes: fields list, index type, whether unique.
- Use [cross_dbIdxCreate](#cross_dbIdxCreate) to create table secondary index.


## Storage
-------------------------------------------------------------------------------

**On-Disk Database**

- Database is on persistent disk, survive with power cycle. 
- If you have data persistency requirements, please use this type. The performance is ver high. 
- You need use [transaction](#transaction) to guarantee data integrity even power cycle happened. 

**RamDisk Database**

- Database is on ramdisk/tmpfs/ramfs, survive with process restart, lose after power cycle. 
- This is designed for process runtime databse and the transaction performance is higher than On-Disk database. 
- The speed is almost the same with In-Memory database. 
- For Linux embedded system, this is the prefered database as the database can be viewed and stayed there even process crashed.

**In-Memory Database**

- Database is in memory, survie when process is runnig, lose after process terminates. 
- This is not recommented, but if you don't want the process runtime database visible, it's the solution.

## Access
-------------------------------------------------------------------------------

**Exclusive**

**Shared**

## Example
-------------------------------------------------------------------------------
