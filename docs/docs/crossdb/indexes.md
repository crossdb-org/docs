---
template: overrides/blog.html
---

# Index

**CrossDB** Index is used to implement database Primary Key and accelerate query.


## Index Type
-------------------------------------------------------------------------------

**HASH Index**

- `HASH` index has highest O(1) performance. It's optimized a lot to achieve best performance.
- `HASH` index can dynamically scale with table rows number to get high performance.
- `HASH` index only supports exact match.

**RBTREE Index**

- Use flag `CROSS_RBTREE`
- `RBTREE` index is almost the same with popular RDBMS BTree, which is core index engine of RDBMS.
- `RBTREE` index can support exact match, range match and leftmost prefix match with multiple-column.


## Guide
-------------------------------------------------------------------------------

- Default index is `HASH` type.
- If one query matches both HASH index and RBTREE index, then Hash index is selected in most cases.
- You can create `HASH` index for high performance query and `RBTREE` index for normal performance queries.
- Index is not free, it occupies space and all inexes may be updated during INSERT/UPDATE/DELET row.
- If index is unique, please set `CROSS_UNIQUE`.
- For unique index, either `insert` `replace` `update` will check row is unique.
- You can do any query on any fields combination without index. 
- Create index only when the query calls frequency is high and requires performance.


## Example
-------------------------------------------------------------------------------

```c linenums="1"
#define CHECK(ret,str)	\
	if (ret < 0) {	printf (str": %s\n", cross_errMsg(ret)); return -1; }

// Create hash index
ret = cross_dbIdxCreate (hRtTbl, "idx_nexthop", "nexthop", 0);
CHECK (ret, "Failed to create index");

// Create rbtree index
ret = cross_dbIdxCreate (hRtTbl, "idx_nexthop", "nexthop", 0);
CHECK (ret, "Failed to create index");

// Create unique hash index
ret = cross_dbIdxCreate (hRtTbl, "idx_route", "vrf,ipAddr", CROSS_UNIQUE);
CHECK (ret, "Failed to create index");

// Create unique rbtree index
ret = cross_dbIdxCreate (hRtTbl, "idx_route", "vrf,ipAddr", CROSS_UNIQUE|CROSS_RBTREE);
CHECK (ret, "Failed to create index");
```
