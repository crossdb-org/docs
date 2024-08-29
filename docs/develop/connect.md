---
title: Connect
template: overrides/blog.html
---

# Connect to CrossDB

You need a connection instance to connect to CrossDB, and all operations will use this connection handle.

- Each thread can use only one connection, and each connection can be used by only one thread.
- All opened databases are shared among all opened connections, and you can use `USE DATABASE db_name` command to switch the connection's default database.

## C APIs

- Open a connection

```c
xdb_conn_t *pConn = xdb_open (NULL);
```
> **Note**
> User has to use `OPEN DATABASE '[path/]db_name'` or `CREATE DATABASE '[path/]db_name'` or `USE DATABASE db_name`.

- Open a connection and create a default memory database if not exist

```c
xdb_conn_t *pConn = xdb_open (":memory:");
```

- Open a connection and create a on-disk database `school` if not exist as the default database


```c
//  In current folder
xdb_conn_t *pConn = xdb_open ("school");
```

```c
// In specified folder
xdb_conn_t *pConn = xdb_open ("/var/crossdb/school");
```

<!--
## Embedded Database

## Embedded Server Database
TBD

## Standalone CrossDB Server
TBD

Start CrossDB Server
crossdb -S -D

Default CrossDB Data Directory

## Connection Modes

* Embedded mode (local connections)
* Server mode (remote connections over TCP/IP)
* Mixed mode (local and remote connections at the same time)

# Running Mode

## Embedded Database

## Embedded Server Database
TBD

## Standalone CrossDB Server
TBD

Start CrossDB Server
crossdb -S -D

Default CrossDB Data Directory

## Connection Modes

* Embedded mode (local connections)
* Server mode (remote connections over TCP/IP)
* Mixed mode (local and remote connections at the same time)

-->