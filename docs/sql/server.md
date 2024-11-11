---
template: overrides/blog.html
---

# Server

## Create Server

```sql
CREATE SERVER [IF NOT EXISTS] svr_name [server_option ...]

server_option:
    PORT = 1~65535  -- default 7777
```

<!--
  | TYPE = {SERVER | WEBUI | MYSQL}
  | AUTH = {NO | PASSWORD | ACL}
  | ENABLE = {true | false}
  | PASSWORD = 'string'
  | DB = (db_name,...)
    IP = ipaddr

## Modify Server
```sql
ALTER SERVER svr_name [server_option ...]

server_option:
  | AUTH = {NO | PASSWORD | ACL}
  | ENABLE = {true | false}
  | PASSWORD = xxxx
  | DB = (db_name,...)

```
-->

## Drop Server

```sql
DROP SERVER [IF EXISTS] svr_name
```

## Show Server

```sql
SHOW SERVERS
```

```sql
XDB> show SERVERS ;
+---------+------+
| server  | port |
+---------+------+
| crossdb | 7777 |
+---------+------+
1 row in set (0.022 ms)
```
