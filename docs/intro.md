---
template: overrides/blog.html
---

# Introduction

**CrossDB** is a super high-performance lightweight embedded and server SQL RDBMS. 
It's developed for high performance scenarios with main memory can hold whole DB.

## Features

- Support Multiple OS Platforms: Linux/Windows/MacOS/FreeBSD etc
- Support Multiple CPU ARCH: X86/ARM/PPC/MIPS etc
- Support OnDisk/In-memory(IMDB)/RamDisk/Hybrid Storage
- Support Standard RDBMS model
- Support Standard SQL and many extensions from MySQL
- Support Multiple databases
- Support Embedded and Client-Server mode(TBD)
- Support Primary Key and multiple Secondary Indexes
- Support HASH and RBTREE(TBD) Index
- Support Multi-columns Index
- Support Exact Match, Leftmost Match(TBD), Range Match(TBD)
- Support Standard ACID Transaction (begin/commit/rollback)
- Support WAL for OnDisk storage(TBD)
- Support Multiple Threads and Multiple Processes Access
- Support Table level read-write lock
- Support Reader-Writer MVCC
- Support Embedded CrossDB Shell with convenient auto-completion
- Support Multi-Statments APIs
- Support Prepared Statments APIs
- Super High Performance
- Very Simple: Simple header and library file
- Zero Config: no complex config, real out-of-the-box

## Use Cases

- High-frenquency trade (OLTP)
- High-peformance query
- High-peformance data manamgent: You can use CrossDB OnDisk DB to store data on Disk/Flash/SDD.
- High-peformance IMDB: You can use CrossDB In-Memory DB to manage Process Runtime Data to replace STL or hand-written data structures.
- You can use CrossDB RamDisk DB to support Process Restartability, In-Service Software Upgrade(ISSU) easily.
- You can use CrossDB to work as a super fast cache DB.

<!--
- You can use CrossDB Trigger to implement Data-Driven programming paradigm.
- You can use CrossDB PUBSUB to subscribe DB from other process's DB either on same host or remote host.
- You can use CrossDB to implement Centralize-DB programming paradigm.
- You can use CrossDB eventloop to implement event-driven programming paradigm.
- You can use CrossDB RPC to build distributed service.
- You can use CrossDB CLI tool to debug running program's data in off-line way.
- You can use CrossDB SQL to view/create/update/delete/filter program data.
- You can use CrossDB Browser to view program data.
- You can use CrossDB to do DB backup restore it.
- You can use CrossDB DB Change Log to view DB change history with filter, backtrace, rate-limit, expiring, etc.
- You can use Python connector to write unit test with SQL to test program.
- You can copy the DB folders from device and open on PC/Server with CrossDB-cli or Python directly.
- Use CrossDB DB-Driven Mode to Build Program Logic (Table Trigger, FK, auto delete, Cascade Trigger)
- Use CrossDB Python Connector to do DB-Driven Unit Test
- Use CrossDB Pub/Sub to Build Distributed System (Eventloop/Timer/WorkQueue, vs IPC, OOP [priv data])
- Use CrossDB Pub/Sub to Build Centralized DB-Driven System (3rd lang, DM no checkpoint)
- CrossDB Serialization and RPC
- CrossDB SQL Connectors (RESP3, Python)
- CrossDB SQL Drivers (C, Python)
-->