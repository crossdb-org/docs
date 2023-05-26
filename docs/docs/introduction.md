# Introduction

CrossDB(CDB) is a powerful high-performance distrubuted embedded SQL RDBMS database. It's developed to 
improve development efficiency for embedded programmers. 

## Features

- Support Windows/Linux Platform (more will be supported)
- Support X86/ARM/PPC/MIPS etc CPU
- Support OnDisk/In-memory/RamDisk Storage
- Support Primary Key and multiple Secondary Index
- Support Standard HASH and BTREE Index
- Support Multi-columns Index
- Support Exact Match, Leftmost Match, Range Match
- Support C/C++ Struct/Union ORM APIs
- Support Auto upgrade/downgrade
- Support All C data types(int,float,string,byte array,array,nested struct,etc)
- Support rich DEC/HEX/BIN/Bitmap/MAC/IPv4/IPv6/Timestamp formats
- Support Standard Transaction (begin/commit/rollback)
- Support WAL for OnDisk storage
- Dynamic Growing/Shrinking Table with Limit
- Support Multiple Threads and Multiple Processes
- Support Table level read/write lock
- Super High Performance
- Robust: Process Restart, Process Crash, Power Cycle
- Simple: Simple header and source file
- Zero Config: no complex config, real out-of-the-box

## Use Cases

- You can use CDB RDBMS to Manage Program Data efficiently.
- You can use CDB transaction to do persistency storage on Disk/Flash with ACID feature.
- YOu can use CDB to support Process Restartability, In-Service Software Upgrade(ISSU) easily.
- You can use CDB RDBMS to refactor your code conveniently.
- You can use CDB Index to optimize performance without changing your code.
- You can use CDB Trigger to implement Data-Driven programming paradigm.
- You can use CDB PUBSUB to subscribe DB from other process's DB either on same host or remote host.
- You can use CDB to implement Centralize-DB programming paradigm.
- You can use CDB eventloop to implement event-driven programming paradigm.
- You can use CDB RPC to build distributed service.
- You can use CDB CLI tool to debug running program's data in off-line way.
- You can use CDB SQL to view/create/update/delete/filter program data.
- You can use CDB Browser to view program data.
- You can use CDB to do DB backup restore it.
- You can use CDB DB Change Log to view DB change history with filter, backtrace, rate-limit, expiring, etc.
- You can use Python connector to write unit test with SQL to test program.
- You can copy the DB folders from device and open on PC/Server with cdb-cli or Python directly.
- Use CDB DB-Driven Mode to Build Program Logic (Table Trigger, FK, auto delete, Cascade Trigger)
- Use CDB Python Connector to do DB-Driven Unit Test
- Use CDB Pub/Sub to Build Distributed System (Eventloop/Timer/WorkQueue, vs IPC, OOP [priv data])
- Use CDB Pub/Sub to Build Centralized DB-Driven System (3rd lang, DM no checkpoint)
- CDB Serialization and RPC
- CDB SQL Connectors (RESP3, Python)
- CDB SQL Drivers (C, Python)
