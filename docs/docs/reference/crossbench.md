---
template: overrides/blog.html
---

# CrossBench

**CrossBench** is an utility designed for evaluating performance of embedded databases.
The goal of this project is to provide a standart and simple in use instrument for benchmarking, so any database developer or user can reference to or repeat obtained results.

Storage modes: `on disk`, `in memory`, `on ramdisk`

Benchmarking methods: `insert`, `load`, `query`, `update`, `delete`

Access Sequence: `random`, `sequential`

Supported databases: `crosdb`, `sqlite3`, `lmdb`, `STL map`, `STL hashmap(unordered_map)`


## Usage

```
./crossdb-bench.bin -h
Usage: {count unit can be k or K (*1000)  m or M (*1000000)}
  -h                        show this help
  -t <db type>              ramdisk | inmem | ondisk, default is ramdisk
                            shortcut r: ramdisk  m: inmem    d: ondisk
                            ondisk store db in current folder crossbench
  -i <insert count>         default 1000000, do insert test, conflict with -l load
  -r <row count>            open db which already has these rows
  -q <query count>          default 1000000, do query test
  -u <update count>         default 1000000, do update test
  -d <delete count>         default 1000000, do delete test
  -c <cpu core>             bind cpu core
  -l <load count>           quick load data, conflict with -i insert
  -k <key type>             default | hash | tree
                            shortcut h: hash  t: tree    d: default
  -s                        sequential, defaut is random
  -V                        verify driver basic CRUD operations
  -Q                        quiet mode, only show last result

Example:
  default: do ramdisk random mode test, insert 1M rows, query 1M times, update 1M times, delete 1M rows
     -t m: do inmem random mode test,   insert 1M rows, query 1M times, update 1M times, delete 1M rows
     -t d: do ondisk random mode test,  insert 1M rows, query 1M times, update 1M times, delete 1M rows
     -i 500k -q 5m:            do ramdisk random mode test, insert 500K rows, query 5M times, updat 1M times, delete 500k rows
     -i 10k -q 0 -u 0 -d 0:    do ramdisk random mode test, insert 10K rows
     -r 10k -q 100k -u 0 -d 0: do ramdisk random mode test, query  100K times
     -r 10k -q 0 -u 100k -d 0: do ramdisk random mode test, update 100K times
     -r 10k -q 0 -u 0 -d 10k:  do ramdisk random mode test, delete 10K rows
     -V:  verify db driver is ok

```

> **Note**
> `ondisk` DB is stored in current folder `_benchmarkdb`, `ramdisk` DB is stored in `/tmp/_benchmarkdb`.
> If you don't delete all rows, you'd better remember to delete manually or do a simple default test.


## Build

Install `sqlite3` and `lmdb`
```
sudo apt install libsqlite3-dev
sudo apt install liblmdb-dev
```
Install [CrossDB Library](https://github.com/xxxdb-org/CrossDB/releases)
```
sudo cp libxxxdb.so /usr/lib/
```
Build
```
./build.sh
```

## Output
```
./crossdb-bench.bin
CrossDB Database Benchmark

Location: /tmp/_benchmarkdb/CrossDB
Type: RAMDISK
Key: Default
Access: Random

Insert rows: 1000000    Use time: 272466us    TPS: 3670182

Query Test: 1000000
  Round: 1      Use Time: 231543us      QPS: 4318852
  Round: 2      Use Time: 244874us      QPS: 4083732
  Round: 3      Use Time: 240435us      QPS: 4159128
  Round: 4      Use Time: 223147us      QPS: 4481350
  Round: 5      Use Time: 221954us      QPS: 4505438
  Round: 6      Use Time: 243468us      QPS: 4107315
  Round: 7      Use Time: 240375us      QPS: 4160166
  Round: 8      Use Time: 240878us      QPS: 4151479
  Round: 9      Use Time: 229140us      QPS: 4364144
  Round: 10     Use Time: 237540us      QPS: 4209817
Update Test: 1000000
  Round: 1      Use Time: 266616us      TPS: 3750712
  Round: 2      Use Time: 281096us      TPS: 3557503
  Round: 3      Use Time: 274047us      TPS: 3649009
  Round: 4      Use Time: 265904us      TPS: 3760755
  Round: 5      Use Time: 260426us      TPS: 3839862
  Round: 6      Use Time: 265945us      TPS: 3760175
  Round: 7      Use Time: 254995us      TPS: 3921645
  Round: 8      Use Time: 274223us      TPS: 3646667
  Round: 9      Use Time: 274394us      TPS: 3644394
  Round: 10     Use Time: 290548us      TPS: 3441772

Delete: 1000000 Use Time: 401207us      TPS: 2492478

CrossDB Benchmark Result: RAMDISK Access=Random Key=Default Rows=1000000
              DB            Rows          Insert           Query          Update          Delete
         CrossDB         1000000         3670182         4450310         3840754         2492478
```

## New Driver

To make a new xxxdb driver, following the simple template below.

```c
#include "benchmark.h"

const char* xxxdb_create (char *dbname, dbtype_e type, keytype_e key, uint32_t flags) 
{
	// credata database or table, Primary Key: prefix+mask
}

void xxxdb_close ()
{
	// close database
}

void xxxdb_begin ()
{
	// begin transaction
}

void xxxdb_commit ()
{
	// commit transaction
}

void xxxdb_insert (route_t *pRoute)
{
	// insert route
}

bool xxxdb_query (route_t *pRoute)
{
	// query route by Primary Key
}

void xxxdb_update (route_t *pRoute)
{
	// update route set birth by Primary Key
}

void xxxdb_delete (route_t *pRoute)
{
	// delete route by Primary Key
}

#define db_name		"xxxDB"
#define db_create	xxxdb_create
#define db_close	xxxdb_close
#define db_insert	xxxdb_insert
#define db_query	xxxdb_query
#define db_update	xxxdb_update
#define db_delete	xxxdb_delete
#define db_begin	xxxdb_begin
#define db_commit	xxxdb_commit

#include "benchmark.c"

```

Verify the driver can work
```
./xxxdb-bench.bin -V
```
