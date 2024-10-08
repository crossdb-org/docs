---
template: overrides/blog.html
---

# FAQ

## What are the reasons for creating a new Relational DBMS?

CrossDB is engineered for ultra high-performance scenarios, where existing SQL and NoSQL databases fall short of meeting the stringent performance requirements. 

We have investigated and tested the following databases:

- Open Source: `SQLite`, `H2`, `ObjectBox`, `Realm`, `PERST`, `BerkeleyDB`, `WiredTiger`(`MongoDB` Storage Engine), `LMDB`, `mdbx`, `LevelDB`, `RocksDB`, `forestdb`,   `Sophia`, `unqilite`, `upscaledb`, `Vedis`, `FastDB`
- Commercial: `eXtremeDB`, `RaimaDB`

## What are the drawbacks or limitations of CrossDB?

CrossDB has a few limitations to consider:

- The database size must be relatively small, and the available memory must exceed the database size to achieve maximum speed.
- It does not support network-mounted disks.

## Why is it called CrossDB?

CrossDB is named for its versatility across various applications:

* Lightweight Embedded DB
* High-performance OLTP DB
* In-Memory DB/OnDisk DB/Hybrid DB
* Managing runtime data to replace STL, collections, or hand-written data structures
* Embedded and Standalone Server
* Data-driven development (future plan)
* Native language triggers (future plan)
* JSON support (future plan)
* Data PUBSUB (future plan)
* Data Replication (future plan)
* Functioning as a Redis Server (future plan)
* Functioning as a MySQL Server (future plan)
* And more

Thus, it is not merely a pure embedded database.

## Why is CrossDB so fast?

* Utilizes memory mapping to access DB data directly.
* Employs a high-performance hash as the main index, with the super-fast **wyhash** as the hash function.
* Uses a hand-written SQL parser that is over 10 times faster than Flex/Bison parser tools.
* Incorporates high-performance read-write locks and multi-core optimization.
* Executes multiple SQL statements in a single API call, significantly enhancing client-server database interactions.
* Uses highly efficient client-server protocols.
* Minimizes memory allocation and deallocation.
* Minimizes the use of temporary tables whenever possible.
* Implements high-performance code.

## Why not use scanner and parser tools like Flex/Bison?

CrossDB uses a hand-written scanner and a hand-written recursive descent parser because:

* The hand-written scanner/parser is smaller, about one-third the size of code generated by Flex/Bison tools.
* It is more efficient, approximately 10 times faster than Flex/Bison tools.
* It is more portable.
* It is fully reentrant and thread-safe.
* It provides better error messages.
* It is easier to read, debug, and optimize.
* Its fast SQL execution speed can meet most scenarios without the need for prepared statements. ([_CrossDB SQL performance is several times faster than SQLite prepared statements_](../blog/benchmark/crossdb-vs-sqlite3/))