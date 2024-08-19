---
template: overrides/blog.html
---

# Backup and Restore

## Source
Load and execute SQL file into current database

```sql
SOURCE '[path/]sqlfile'
```

<!--
SOURCE 'file.csv' [CSV [DELIMITER '-'] [NOHEADER] INTO tbl_name]
DUMP TABLE tbl_name [CSV] [NOHEADER] [QUOTE] [DELIMITER '-'] INTO '[path/]file'
-->

## Dump Database

Dump current database to console

```sql
DUMP DATABASE
```

Dump specified database with options

```sql
DUMP DATABASE db_name [dump_option] ...

dump_option:
    NODROP		: Don't add DROP statement
  | NOCREATE	: Don't add CREATE statement
  | NODATA		: Don't dump ROW data
  | INTO '[path/]outfile' : Dump into file instead of console
```

<!--
// run with embedded mode, or with native libary or crossdb client  
dump
source

// run on server side (can only use datadir folder)
backup
load

select * from table >> {file.cvs | file.sql | file.html}
// default all dbs, for csv, html will create file/db/tbl.csv
dump tables {* | {[db_name.]tbl_name, [db_name.]tbl_name, ...}} [nocreate] [nodrop] [nodata] [replace] [csv] [zip | clz] [into 'file']
dump databases {* | {db_name [except] [(tbl_name, ...)], db_name [(tbl_name, ...)] ...}} addcreate={1|0} adddrop={1|0} dumpdata={1|0} replace={0|1}

dump tables
dump tables * addcreate=0
dump tables *,-tbla,-tblb addcreate=0
dump tables tbla,tblb,tblc addcreate=0

dump databases
dump databases dba,dbb,dbc addcreate=0

source wjc.file, wjc.file 

load data
-->