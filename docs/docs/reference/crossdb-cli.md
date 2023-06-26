---
template: overrides/blog.html
---

# CrossDB CLI

The **crossdb-cli** CrossDB Command Line Interface (CLI) is the simplest way for users to manipulate and interact with CrossDB.

## Installation
There is no need for additional installation steps to install CrossDB CLI as it is already included in package automatically.

## Execution
To access the CrossDB CLI, you can execute crossdb-cli command-line utility from a terminal or double click in windows.
```
./crossdb-cli
   _____                   _____  ____      _
  / ____|                 |  __ \|  _ \   _| |_
 | |     _ __ ___  ___ ___| |  | | |_) | |_   _|
 | |    | '__/ _ \/ __/ __| |  | |  _ <    |_|
 | |____| | | (_) \__ \__ \ |__| | |_) |
  \_____|_|  \___/|___/___/_____/|____/ crossdb.org


CrossDB 0.5.0  DB version 0.1  Little Endian  64bit

============ Welcome to CrossDB Shell ============
<help>: Help Info       <F1>: Shortcuts
<exit>: Exit shell      <TAB>: Auto completion

CrossDB>
```
After entering the CrossDB CLI, you can execute various SQL commands.

<figure class="cdb-figure">
	<a href="docs/reference/crossdb-cli">
		<img src="../../../images/crossdb-cli.gif">
	</a>
</figure>


## CrossDB CLI tips
- Press `TAB` key to get auto completion
- Use `up` and `down` keys to iterate the history of commands entered
- Use `F1` to get all shortcuts
- `./crossdb-cli /tmp/_benchmarkdb/CrossDB` open DB directly
- Enter `open /tmp/_benchmarkdb/CrossDB` to oepn DB interactly
- Enter `show d` to show all opened databases
- Enter `show t` to show all tables in current database
- Enter `use <db>` to switch currenbt database
- Enter `exit` to exit CrossDB CLI
- Append `>>` at end to redirect output to file


## Command List 
Press `TAB` key to show it
```sql
CrossDB>
select      Select records from TABLE
insert      Insert a record to TABLE
replace     Replace a record to TABLE (update if exists else insert)
update      Update records in TABLE
delete      Delete records from TABLE
begin       Begin Transaction
commit      Commit Transaction
rollback    Rollback Transaction
create      Create INDEX, TABLE, DATABASE
drop        Drop INDEX, TABLE, DATABASE [!!! Caution !!!]
show        Show tables, databases, indexes, etc
use         Switch DATABASE
open        Open DATABASE
close       Close DATABASE
history     Show history
exit        Exit shell
```


## Database Command

### Open Databases

```
./crossdb-cli /tmp/_benchmarkdb/CrossDB

CrossDB> open /tmp/_benchmarkdb/CrossDB
```

### Switch Databases
```sql
CrossDB> use CrossDB
Current Datatbase is changed to CrossDB
```


## Show Command

### Show Databases
```sql
CrossDB> show d
ID  Name     Tables  Type     Share  Size  Path
==  =======  ======  =======  =====  ====  =========================
1   CrossDB  1       RamDisk  F      5792  /tmp/_benchmarkdb/CrossDB

Current Database is CrossDB ("use <dbname>" to switch db)
```

### Show Tables
```sql
CrossDB> show t
ID  Name   RowCount  RowLimit  RowSize  Columns  Indexes  TblSize
==  =====  ========  ========  =======  =======  =======  =======
1   route  0         0         48       7        1        5672
```

### Show Tables Indexes
```sql
CrossDB> show indexes
ID  Table  Index    Columns      Primary  Unique  Type  RowNum  NodeNum  SlotUsed  Size
==  =====  =======  ===========  =======  ======  ====  ======  =======  ========  ====
1   route  PRIMARY  prefix,mask  T        T       HASH  0       0        0         1216
```

### Show Tables Status
```sql
CrossDB> show status
ID  Name   RowCount  PoolCount  Cursor  TblSize  DatSize  IdxSize
==  =====  ========  =========  ======  =======  =======  =======
1   route  0         8          0       5672     784      1216
```

### Show Tables Counters
```sql
CrossDB> show counters
ID  Name   Scan  Insert   Update    Delete   InsertFail  UpdateFail  DeleteFail
==  =====  ====  =======  ========  =======  ==========  ==========  ==========
1   route  0     1000000  10000000  1000000  0           0           0
```

### Show table schema
```sql
CrossDB> show create table route
create table `route` (
  `prefix`       UINT(4,0)      format IPv4,
  `mask`         UINT(1,4),
  `nexthop`      UINT(4,8)      format IPv4,
  `metric`       UINT(1,12),
  `intf`         CHAR(16,13),
  `birth`        UINT(8,32)     format TIMESTAMP,
  `flags`        UINT(4,40)     format HEX,

  PRIMARY KEY (prefix,mask)
) rec_size=48;
```


## Select Command

```sql
select < * | column1,columnm2,...> from <table> 
	[ where columnA=valueA and columnB=valueB and ... ]
	[ order by columnX,columnY,... [desc|asc] ]
	[ limit <n> ] [ offset <m> ] | [limit offset,row_count]
```

Where operators: =, !=, >, >=, <, <=

> **Note**
> Default `select *` will only show none zero fields, `select **` can show all fields.  
> One field can only apper twice.  
> Only `AND` is supported

```sql
CrossDB> select * from route limit 10
ID  prefix     mask  nexthop     metric  intf  birth                flags
==  =========  ====  ==========  ======  ====  ===================  =====
1   10.1.1.2   24    10.1.1.254  1       eth1  2023-10-20T11:02:05  0x0
2   10.1.1.55  24    10.1.1.254  1       eth1  2023-10-20T11:01:06  0x0
3   10.1.1.18  24    10.1.1.254  1       eth1  2023-10-20T11:01:01  0x0
4   10.1.1.90  24    10.1.1.254  1       eth1  2023-10-20T10:59:08  0x0
5   10.1.1.37  24    10.1.1.254  1       eth1  2023-10-20T11:01:12  0x0
6   10.1.1.27  24    10.1.1.254  1       eth1  2023-10-20T11:01:33  0x0
7   10.1.1.61  24    10.1.1.254  1       eth1  2023-10-20T11:00:52  0x0
8   10.1.1.95  24    10.1.1.254  1       eth1  2023-10-20T11:00:29  0x0
9   10.1.1.46  24    10.1.1.254  1       eth1  2023-10-20T10:57:50  0x0
10  10.1.1.75  24    10.1.1.254  1       eth1  2023-10-20T11:02:18  0x0

Qualified Rows: 100     Select Rows: 10    Use time 34us QPS 294117
```

```sql
CrossDB> select * from route where prefix=10.1.1.2
ID  prefix    mask  nexthop     metric  intf  birth                flags
==  ========  ====  ==========  ======  ====  ===================  =====
1   10.1.1.2  24    10.1.1.254  1       eth1  2023-10-20T11:02:05  0x0

Qualified Rows: 1       Select Rows: 1    Use time 8us QPS 125000
```

```sql
CrossDB> select * from route where prefix>=10.1.1.10 and prefix<=10.1.1.20
ID  prefix     mask  nexthop     metric  intf  birth                flags
==  =========  ====  ==========  ======  ====  ===================  =====
1   10.1.1.18  24    10.1.1.254  1       eth1  2023-10-20T11:01:01  0x0
2   10.1.1.20  24    10.1.1.254  1       eth1  2023-10-20T10:59:22  0x0
3   10.1.1.14  24    10.1.1.254  1       eth1  2023-10-20T11:02:04  0x0
4   10.1.1.11  24    10.1.1.254  1       eth1  2023-10-20T11:01:50  0x0
5   10.1.1.12  24    10.1.1.254  1       eth1  2023-10-20T11:01:44  0x0
6   10.1.1.19  24    10.1.1.254  1       eth1  2023-10-20T11:01:09  0x0
7   10.1.1.16  24    10.1.1.254  1       eth1  2023-10-20T11:00:56  0x0
8   10.1.1.17  24    10.1.1.254  1       eth1  2023-10-20T11:02:32  0x0
9   10.1.1.15  24    10.1.1.254  1       eth1  2023-10-20T10:58:50  0x0
10  10.1.1.10  24    10.1.1.254  1       eth1  2023-10-20T10:59:38  0x0
11  10.1.1.13  24    10.1.1.254  1       eth1  2023-10-20T11:02:29  0x0
```

```sql
CrossDB> select * from route order by prefix
ID   prefix     mask  nexthop     metric  intf  birth                flags
===  =========  ====  ==========  ======  ====  ===================  =====
1    10.1.1.0   24    10.1.1.254  1       eth1  2023-10-20T11:00:23  0x0
2    10.1.1.1   24    10.1.1.254  1       eth1  2023-10-20T11:02:36  0x0
3    10.1.1.2   24    10.1.1.254  1       eth1  2023-10-20T11:02:05  0x0
4    10.1.1.3   24    10.1.1.254  1       eth1  2023-10-20T11:02:21  0x0
5    10.1.1.4   24    10.1.1.254  1       eth1  2023-10-20T11:02:52  0x0
6    10.1.1.5   24    10.1.1.254  1       eth1  2023-10-20T11:01:36  0x0
7    10.1.1.6   24    10.1.1.254  1       eth1  2023-10-20T11:02:25  0x0
8    10.1.1.7   24    10.1.1.254  1       eth1  2023-10-20T11:00:43  0x0
9    10.1.1.8   24    10.1.1.254  1       eth1  2023-10-20T11:01:20  0x0
```

## DML Commands

> **Warning**
> Database is accessed exclusively by single process with best performance. So if process is running and accessing the DB, please don't do the DML commands, otherwise the table may be corrupted. You can update fields not used in index, but be careful to do it. 

### Insert Row
```sql
insert into route set prefix=1.1.1.1 mask=24 nexthop=1.1.1.254 metric=5 intf='eth1'
```
> **Note**
> Where clause follows [select](#select-command) syntax. 

### Update Row

```sql
update route set metric=5 where prefix=1.1.1.1
```
> **Note**
> Where clause follows [select](#select-command) syntax. 

### Delete Row

```sql
delete from route where prefix=1.1.1.1
```
> **Note**
> Where clause follows [select](#select-command) syntax. 
