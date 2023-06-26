---
template: overrides/blog.html
---

# CrossDB vs. Sqlite3 Benchmark Test

## On-Disk Test
-------------------------------------------------------------------------------

## RamDisk Test
-------------------------------------------------------------------------------

- Database is on persistent disk, survive with power cycle. 
- If you have data persistency requirements, please use this type. The performance is ver high. 
- You need use transaction to guarantee data integrity even power cycle happened. 

**RamDisk Database**

- Database is on `ramdisk` `tmpfs` `ramfs`(`CROSS_RAMDISK`), survive with process restart, lose after power cycle. 
- This is designed for process runtime databse and the transaction performance is higher than On-Disk database. 
- The performance is almost the same with In-Memory database. 
- For Linux embedded system, this is the prefered database as the database can be viewed and stayed there even process crashed.

**In-Memory Database**

- Database is in memory(`CROSS_INMEM`), survie when process is runnig, lose after process terminates. 
- This is not recommented, but if you don't want the process runtime database visible, it's the solution.

