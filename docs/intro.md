---
template: overrides/blog.html
---

# Introduction

**CrossDB** is a ultra high-performance, lightweight embedded and server OLTP RDBMS. 
It is designed for high-performance scenarios where the main memory can hold the entire database.

## Features

| Name  					| **CrossDB**
 ----                       | ----
 Description    			| Ultra High-performance Lightweight Embedded and Server OLTP RDBMS✨  
 Primary database model  	| Relational DBMS  
 Secondary database models	| Document store (TBD)<br>Key-value store(TBD)
 Website					| crossdb.org
 Technical documentation	| crossdb.org/intro
 Initial release			| 2023
 License					| Open Source, MPL
 Cloud-based only			| no
 Implementation language	| C
 Server operating systems	| Server-Less Mode<br>Embedded Server Mode<br>Standalone Server Mode<br>Linux/MacOS/Windows/FreeBSD<br>32-bit or 64-bit X86, ARM, PowerPC, MIPS, etc
 Data scheme				| yes
 Typing 					| yes<br>BOOL<br>TINYINT, SMALLINT, INT, BIGINT<br>TIMESTAMP<br>FLOAT, DOUBLE<br>CHAR, VARCHAR<br>BINARY, VARBINARY<br>INET(IPv4/IPv6 host and subnet), MAC address
 XML support				| no
 Secondary indexes			| yes<br>HASH, RBTREE
 SQL 						| yes, many extensions from MySQL
 APIs and other access methods		| Proprietary native APIs<br>Multi-statement APIs<br>Prepared statement APIs<br>JDBC (TBD)<br>ODBC (TBD)
 Supported programming languages	| C, C++, Python, GO, Rust<br>More bindings (TBD)
 Server-side scripts		| LUA (TBD)
 Triggers					| yes, native languages
 Partitioning methods		| none
 Replication methods		| Source-replica replication<br>Multi-source replication<br>Logical Replication (TBD)
 Data Subscription			| yes (TBD)
 MapReduce 					| no
 Consistency concepts		| Immediate Consistency
 Foreign keys				| yes (TBD)
 TTL						| yes (TBD)
 Transaction concepts		| ACID
 Concurrency 				| yes<br>Table-level read-write locks<br>Row-level read-write locks (TBD)<br>Reader-Writer MVCC (write transaction doesn't block read transactions)<br>PostgreSQL-like MVCC (TBD)
 Durability 				| yes, WAL
 In-memory capabilities		| yes
 User concepts				| yes (TBD)
 Storage Model				| Row-oriented On-Disk, In-Memory, RamDisk<br>Hybrid Storage (on a table-by-table basis, tables can be designated for in-memory or on-disk storage)
 Admin						| Embedded shell<br>xdb-cli tool<br>telnet<br>WEB GUI (TBD)

<!--
 Stored Procedures			| yes, native languages (TBD)
 Views						| yes (TBD)
 Joins						| yes (TBD)
 TTL						| yes (TBD)

- Supports multiple OS platforms: Linux, Windows, MacOS, FreeBSD, etc.
- Supports multiple CPU architectures: X86, ARM, PPC, MIPS, etc.
- Supports OnDisk, In-memory (IMDB), RamDisk, and Hybrid Storage.
- Supports the standard RDBMS model.
- Supports standard SQL and many extensions from MySQL.
- Supports multiple databases.
- Supports embedded and client-server modes
- Supports primary keys and multiple secondary indexes.
- Supports HASH and RBTREE (TBD) indexes.
- Supports multi-column indexes.
- Supports exact match, leftmost match (TBD), and range match (TBD).
- Supports standard ACID transactions.
- Supports WAL for OnDisk storage.
- Supports multiple threads and multiple processes access.
- Supports table-level read-write locks.
- Supports Reader-Writer MVCC (write transaction doesn't block read transactions).
- Supports an embedded CrossDB shell with convenient auto-completion.
- Supports multi-statement APIs.
- Supports prepared statement APIs.
- Ultra high performance.
- Very simple: Simple header and library file.
- Zero config: No complex configuration, truly out-of-the-box.
-->

## Use Cases

- High-frequency trading (OLTP).
- High-performance queries.
- High-performance data management: Use CrossDB OnDisk DB to store data on HDD/SSD/Flash.
- High-performance IMDB: Use CrossDB In-Memory DB to manage process runtime data, replacing STL or hand-written data structures.
- Use CrossDB RamDisk DB to support process restartability and in-service software upgrades (ISSU) easily.
- Use CrossDB as a super-fast cache DB.

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