# Key Features

## High Performance

## ACID Transactions
**CrossDB**'s transactions support the ACID (Atomic, Consistent, Isolated and Durable) principles, which safeguard data integrity by guaranteeing that updates will complete together, or the database will roll back to a pre-transaction state.

## Core RamDisk Database System Design
**CrossDB** was designed to be an application runtime DB from the beginning. An Ra database system eliminates disk and file I/O, cache management and other sources of latency. By working with data directly in main memory, eXtremeDB avoids the overhead of making multiple data copies and transfers inherent in disk-based DBMSs. Databases can be created in shared memory, enabling concurrent access by multiple processes. Read about the performance advantages of IMDS technology in one of our white papers.

## In-Memory RamDisk or On-Disk Storage

CrossDB supports On-Disk Storage and In-Memory
In addition to the core eXtremeDB in-memory database system, McObject’s eXtremeDB offers hybrid storage: on a table-by-table basis, tables can be designated for in-memory or on-disk storage (with flexible caching). Choose the best storage medium based on performance, persistence, cost and form factor.

## Multi-Platform
eXtremeDB is available for use on all major workstation and server platforms: x32- and x64-bit versions of Windows and Linux, Linux on POWER8, Solaris Sparc, Solaris x86_64, HP-UX (Itanium), and AIX.

eXtremeDB is also available for all major embedded platforms: VxWorks, INTEGRITY, QNX, ThreadX, eCos, FreeRTOS and too many more to mention. Also x86, PowerPC, ARM, MIPS, etc.

eXtremeDB source code is available. The minimum requirement to build eXtremeDB for any platform is a 32-bit CPU and a decent quality C compiler.

# B-Tree, R-Tree, Patricia Trie, KD-Tree, Trigram and Hash Indexes
eXtremeDB provides a wide range of database indexes, to boost application performance and minimize footprint. eXtremeDB offers R-trees for geospatial data, Patricia tries for IP/telecom, KD-trees for multi-dimensional data and Query-by-Example (QBE), B-trees, Trigram index for fuzzy search, hash indexes and more. For in-memory databases, rather than storing duplicate data, indexes contain only a reference to data, keeping memory requirements to an absolute minimum.

# Wide Range of Supported Data Types
eXtremeDB supports a wide range of data types — including structures, arrays, boolean, binary, decimal, vectors and BLOBs — for maximum coding efficiency. Data can be stored in the same complex form in which it is used in the application, or as normalized relations.  Learn more in our online documentation.

## 🌈 Single header and libray

CDB follows standard RDBMS model DB, Tabel, Record, Index, Cursor, Transaction, SQL.

## 🚊 C ORM
CDB supports C Struct to access DB direclty. Almost all C data types are supported Enum, Union, Bitfield, Array, nested struct, etc.

## 🚀 Trigger
CDB Supports Foreign Key, Trigger and Cascade Trigger. They can be used to do Data-driven programming and unit test.

## ⛽ PubSub
CDB supports PubSbub to subscribe DB from other source.

## 💮 RPC
CDB supports C struct serailization and a gRPC like RPC framework for C language in future.

## 🔱 Connector
CDB supports C/C++ and Python Connectors now, will support more connectors later.

## ♻️ Best Practice
Use CDB to Manage Data, do Data-Driven Programming, ISSU, distribut provisioning, etc.

## 🌄 Troubleshooting
CDB supports CLI, WEB, Staticstics, Status, Log, DB backup and restore to do troubleshooting.
