---
template: overrides/blog.html
---

# TTL (Time to Live)

If you want to periodically delete expired data automatically, you can use the TTL feature. This feature is inspired from [TiDB TTL](https://docs.pingcap.com/tidb/stable/time-to-live/), which is similar with [Mongo DB TTL index](https://www.mongodb.com/docs/manual/core/index-ttl/) and [Redis Expire](https://redis.io/docs/latest/commands/expire/).

Time to live (TTL) is a feature that allows you to manage CrossDB data lifetime at the row level. For a table with the TTL attribute, CrossDB automatically checks data lifetime and deletes expired data at the row level. This feature can effectively save storage space and enhance performance in some scenarios.

The following are some common scenarios for TTL:

* Cache data cleanup automatically.
* Data aging like mac table(fdb).
* Regularly delete unnecessary historical data.

TTL does not guarantee that all expired data is deleted immediately, but it guarantees the client won't read the expired data.

## Syntax
You can configure the TTL attribute of a table using the `CREATE TABLE` statement.

```sql
CREATE TABLE t1 (
    id int PRIMARY KEY,
    created_at TIMESTAMP
) TTL = created_at + INTERVAL 3 MONTH;
```

The above example creates a table `t1` and specifies `created_at` as the TTL timestamp column, which indicates the creation time of the data. The example also sets the longest time that a row is allowed to live in the table to 3 months through `INTERVAL 3 MONTH`. Data that lives longer than this value will be deleted later.

## Example

```sql
CREATE TABLE fdb (
    macaddr MAC,
    vlan    INT,
    port    VARCHAR,
    update_at TIMESTAMP,
    PRIMARY KEY (vlan, macaddr)
) TTL = update_at + INTERVAL 5 MINUTE;
```
The above example creates a mac table fdb and specifies `update_at` as the TTL timestamp column. The mac entry will be deleted after 5 minutes. If `update_at` is updated when there's traffic hit to this mac entry, expiring will be deferred.

Insert a mac address.

```sql
INSERT INTO fdb VALUES ('00:01:02:03:04:05', 100, 'eth1', '2025-05-14T12:40:00');

XDB> SELECT * FROM fdb;
+-------------------+------+------+---------------------+
| macaddr           | vlan | port | update_at           |
+-------------------+------+------+---------------------+
| 00:01:02:03:04:05 | 100  | eth1 | 2025-05-14T12:40:00 |
+-------------------+------+------+---------------------+
1 row in set (0.010 ms)
```

After 12:45, this row will not be visible and will be deleted in later time.

```sql
XDB> SELECT * FROM fdb;
0 row in set (0.023 ms)
```
