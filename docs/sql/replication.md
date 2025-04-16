---
template: overrides/blog.html
---

# Replication

## Create Replication

```sql
CREATE REPLICA rep_name [replication_option] ...

replication_option:
    HOST = xx 
  | PORT = xx 
  | USER = xx 
  | PASSWORD = xx 
  | DB = db_name, db_name, ...
  | TABLE = db_name.tbl_name, ...
```

## Drop Replication

```sql
DROP REPLICA rep_name
```

## Show Replication

```sql
SHOW REPLICAS
```

<!--

## Change Replication
```sql
ALTER REPLICA rep_name ENABLE
ALTER REPLICA rep_name DISABLE

SHOW REPLICSTATUS
	show secondary status

SHOW REPLICATION
	show my replica status

role: master/slave

SHOW MASTER STATUS

SHOW REPLICA STATUS [FOR CHANNEL channel]
SHOW SLAVE STATUS [FOR CHANNEL channel]

-->
