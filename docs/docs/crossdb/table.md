---
template: overrides/blog.html
---

# Table
**CrosDB** Table is a collection of rows(record or tuple) and columns.

- Table schema is mapped from C Struct, so this is a kind of C Struct ORM(Object Relational Mapping).
- The C struct is expanded into each single fields for composite data type like array, nested struct etc.
- Each table can have only one Primary key.
- Each table can hve many secondray indexes.

## Primary Key(PK)
-------------------------------------------------------------------------------

- Each table can have only one Primray Key, which is used to identify the row uniquely.
- Primay Key column list shouldn't change during the row lifecycle.
- Primary Key is implemented with unique `HASH` index for high performance. You can change to `RBTREE` as well.


## Guide
-------------------------------------------------------------------------------

- If table exists and pFields is different with table schema, table will be upgraded automatically.
- If you want to know if table exists, you can use `CROSS_OPEN` to get handle first.
- Primary Key is `HASH` type by default to achieve highest performance.
- If you don't care about performance, you can set `CROSS_RBTREE` to create `RBTREE` type Primary Key.
- If you need both exact match and range match for Primary Key, you can create another `RBTREE` index with same column list.


## Example
-------------------------------------------------------------------------------

```c linenums="1"
// Create table with PrimaryKey="prefix,mask", HASH Type
ret = cross_dbTblCreate (hDb, &hRtTbl, "route", route_schema, "prefix,mask", 0);
CHECK (ret, "Failed to create route table");

// Create table with PrimaryKey="prefix,mask", RBTREE Type
ret = cross_dbTblCreate (hDb, &hRtTbl, "route", route_schema, "prefix,mask", CROSS_RBTREE);
CHECK (ret, "Failed to create route table");

// Get table handle
ret = cross_dbTblCreate (hDb, &hRtTbl, "route", NULL, NULL, CROSS_OPEN);
CHECK (ret, "Failed to get route table");
```
