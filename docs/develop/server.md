---
title: Server
template: overrides/blog.html
---

## Start Embedded CrossDB Server

- Listen on default port 7777

```c
xdb_exec (pConn, "CREATE SERVER myserver1");
```

- Listen on specified port 8888

```c
xdb_exec (pConn, "CREATE SERVER myserver2 PORT=8888");
```

## Start Standalone CrossDB Server

You can use `xdb-cli` to start a CrossDB Server.

> **Note**
> `xdb-cli` should have `read&write` permission to access `DataDir`

- Start a default server 

```
$ xdb-cli -S
   _____                   _____  ____      _
  / ____|                 |  __ \|  _ \   _| |_    CrossDB Server v0.13.0
 | |     _ __ ___  ___ ___| |  | | |_) | |_   _|   Port: 7777
 | |    | '__/ _ \/ __/ __| |  | |  _ <    |_|     DataDir: /var/xdb_data
 | |____| | | (_) \__ \__ \ |__| | |_) |           ServerID: 1
  \_____|_|  \___/|___/___/_____/|____/            https://crossdb.org

XDB>
```

- Create a sever with specified port and DataDir

```
$ xdb-cli -S -P 8888 -D /tmp/xdb_data
   _____                   _____  ____      _
  / ____|                 |  __ \|  _ \   _| |_    CrossDB Server v0.13.0
 | |     _ __ ___  ___ ___| |  | | |_) | |_   _|   Port: 8888
 | |    | '__/ _ \/ __/ __| |  | |  _ <    |_|     DataDir: /tmp/xdb_data
 | |____| | | (_) \__ \__ \ |__| | |_) |           ServerID: 1
  \_____|_|  \___/|___/___/_____/|____/            https://crossdb.org
```

- Start server in background

```
xdb-cli -S -q &
```

## Connect to CrossDB Server

You can use following ways to connect CrossDB Server

- `xdb-connect` API
- `xdb-cli`
- `telnet`
