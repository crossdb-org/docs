---
hide:
  - navigation
  - toc
---

#

  <div class="cdb-container">
    <div class="cdb-col-md-4">
		<p align="center">
		<img src="/assets/favicon.png" width="200" height="200">
		</p>
    </div>
    <div class="cdb-col-md-8">
		<p class="cdb-description"><span class="cdb-accent">CrossDB</span><br>High Performance Embedded Database Development Framework✨</p>
		<p>
			<a class="cdb-button cdb-button-primary" href="#lean-in-5m">Quick Learn🧭</a> 
			<a class=cdb-button href="docs/introduction">Docs 📜</a>
			<a class=cdb-button href="products/download/">Download 💾</a>
		</p>
    </div>
  </div>

---

  <div class="cdb-container">

    <div class="cdb-card"> 
		<a href="docs/crossdb/ddl">
			<h2>🌌 RDBMS Model</h2>
			<p>Follows standard RDBMS model: DB, Table, Column, Row, Index, Cursor, Transaction, etc.</p>
		</a>
    </div>

    <div class="cdb-card"> 
		<a href="docs/crossdb/ddl">
			<h2>⛽ Storage Mode</h2>
			<p>Supports On-Disk database, In-Memory database and optimized On-RamDisk database.</p>
		</a>
    </div>

    <div class="cdb-card"> 
		<a href="docs/crossdb/transaction">
			<h2>🔱 Transaction</h2>
			<p>Support the ACID (Atomic, Consistent, Isolated and Durable) principles.</p>
		</a>
    </div>

    <div class="cdb-card"> 
		<a href="docs/crossdb/schema">
			<h2>🚊 C Struct ORM</h2>
			<p>Supports using C Struct to access DB directly. Almost all C data types are supported.</p>
		</a>
    </div>

    <div class="cdb-card"> 
		<a href="docs/crossdb/dml">
			<h2>🚀 Native APIs</h2>
			<p>Well desgined high Performance Native APIs to define and manipulate DB.</p>
		</a>
    </div>

    <div class="cdb-card"> 
		<a href="docs/crossdb/ddl/#table">
			<h2>💮 Auto-Upgrade</h2>
			<p>Change your struct, existing table will be upgraded automatically for you.</p>
		</a>
    </div>

    <div class="cdb-card"> 
		<a href="docs/crossdb/ddl">
			<h2>♻️ ISSU</h2>
			<p>Put all your program ISSU data into CrossDB, then you get In-Service Software Upgrade feature easily.</p>
		</a>
    </div>

    <div class="cdb-card"> 
		<a href="docs/get-started">
			<h2>🌄 Out-of-the-Box</h2>
			<p>No complex configuration or provisioning, single header file and library. Very easy to learn and use.</p>
		</a>
    </div>

  </div>

## CrossDB Model

![img](images/crossdb_model.png)

## Learn CrossDB in 5 Minutes {#lean-in-5m}

=== "🛶 Schema"
	``` c linenums="1"
	typedef struct {
		uint32_t 			prefix;
		uint8_t 			mask;
		uint32_t			nexthop;
		uint8_t 			metric;
		char				intf[16];
		uint32_t			birth;
		uint32_t			flags;
	} route_t;

	#undef	CROSS_STRUCT_NAME
	#define	CROSS_STRUCT_NAME	route_t
	cross_field_t 	route_schema[] = {
		CROSS_FIELD (prefix,	UINT,	IPv4, 0),
		CROSS_FIELD (mask, 		UINT,	DFT,  0),
		CROSS_FIELD (nexthop,	UINT,	IPv4, 0),
		CROSS_FIELD (metric, 	UINT,	DFT,  0),
		CROSS_FIELD (intf,		CHAR,	DFT,  0),
		CROSS_FIELD (birth, 	UINT,	TS,   0),
		CROSS_FIELD (flags, 	UINT,	HEX,  0),
		CROSS_END (route_t)
	};
	```
=== "⚙️ Create DB"
	``` c linenums="1"
	#define CHECK(ret,str)		if (ret < 0) {	printf (str": %s\n", cross_errMsg(ret)); return -1; }

	// Create database
	ret = cross_dbCreate (&hDb, "mydb", 0);
	CHECK (ret, "Failed to create mydb");

	// Create table: route (PrimaryKey: prefix,mask)
	ret = cross_dbTblCreate (hDb, &hRtTbl, "route", route_schema, "prefix,mask", 0);
	CHECK (ret, "Failed to create route table");

	// Create index on nexthop: idx_nexthop
	ret = cross_dbIdxCreate (hRtTbl, "idx_nexthop", "nexthop", 0);
	CHECK (ret, "Failed to create index idx_nexthop");
	```
=== "⚜️ Insert Rows"
	``` c linenums="1"
	#define IP4ADDR(a,b,c,d)	((a)<<24|(b)<<16|(c)<<8|(d))

	// Insert route 192.168.1.0/24->192.168.1.254
	route.prefix	= IP4ADDR(192,168,1,0);
	route.mask		= 24;	
	route.nexthop	= IP4ADDR(192,168,1,254);
	route.metric	= 1;
	route.flags		= 0;
	strcpy (route.intf, "eth1");
	route.birth		= time (NULL);
	ret = cross_dbInsertRow (hRtTbl, &route, 0); 
	CHECK (ret, "Failed to insert route 192.168.1.0/24");
	```
=== "🚀 Query Rows"
	``` c linenums="1"
	#define IP4STR(ip)				ip>>24,(ip>>16)&0xff,(ip>>8)&0xff,ip&0xff

	// Get single route 192.168.1.0/24 by PrimaryKey
	route.prefix	= IP4ADDR(192,168,1,0);
	route.mask		= 24;	
	ret = cross_dbGetRowByPk (hRtTbl, &route, &route, 0); 
	CHECK (ret, "Failed to get route 192.168.1.0/24 by PrimaryKey");
	printf ("Get single route: %d.%d.%d.%d/%d->%d.%d.%d.%d intf: %s metric: %d flags: 0x%x\n",
			IP4STR(route.prefix), route.mask, IP4STR(route.nexthop), route.intf, route.metric, route.flags);

	// Get one row where nexthop=10.1.2.254
	route.nexthop	= IP4ADDR(10,1,2,254);
	ret = cross_dbGetOneRow (hRtTbl, "nexthop", &route, &route, 0);
	CHECK (ret, "Failed to get one route where nexthop=10.1.2.254");
	printf ("Get one route where nexthop=10.1.2.254: "
			"%d.%d.%d.%d/%d->%d.%d.%d.%d intf: %s metric: %d flags: 0x%x\n",
			IP4STR(route.prefix), route.mask, IP4STR(route.nexthop), route.intf, route.metric, route.flags);
	```
=== "🔫 Update Rows"
	``` c linenums="1"
	// Update single route 192.168.1.0/24 by PrimaryKey: set flags 0->1 metric 1->3
	route.prefix	= IP4ADDR(192,168,1,0);
	route.mask		= 24;	
	route.metric	= 3;
	route.flags		= 1;
	ret = cross_dbUpdRowByPk (hRtTbl, &route, "flags,metric", &route, 0); 
	CHECK (ret, "Failed to update route 192.168.1.0/24 by PrimaryKey");

	// Update routes where nexthop=10.1.2.254: set flags 0->3
	route.nexthop	= IP4ADDR(10,1,2,254);
	route.flags		= 3;
	count = cross_dbUpdateRows (hRtTbl, "nexthop", &route, "flags", &route, 0);
	CHECK (count, "Failed to update routes where nexthop=10.1.2.254");
	```
=== "🎡 Cursor Query"
	``` c linenums="1"
	// Use cursor to get routes where nexthop=10.1.2.254
	cross_cursor_h hCursor;
	route.nexthop	= IP4ADDR(10,1,2,254);
	count = cross_dbQueryRows (hRtTbl, &hCursor, "nexthop", &route, 0);
	printf ("Query %d routes where nexthop=10.1.2.254\n", count);
	while (CROSS_OK == cross_cursorGetNextRow (hCursor, &route, 0)) {
		printf ("route: %d.%d.%d.%d/%d->%d.%d.%d.%d intf: %s metric: %d flags: 0x%x\n",
				IP4STR(route.prefix), route.mask, IP4STR(route.nexthop), route.intf, route.metric, route.flags);
	}
	cross_cursorClose (hCursor, 0);
	```
=== "✂️ Delete Rows"
	``` c linenums="1"
	// Delete single route 192.168.1.0/24 by PrimaryKey
	route.prefix	= IP4ADDR(192,168,1,0);
	route.mask		= 24;	
	ret = cross_dbDelRowByPk (hRtTbl, &route, 0); 
	CHECK (ret, "Failed to delete route 192.168.1.0/24 by PrimaryKey");

	// Delete routes where nexthop=10.1.2.254
	route.nexthop	= IP4ADDR(10,1,2,254);
	count = cross_dbDeleteRows (hRtTbl, "nexthop", &route, 0);
	printf ("Update %d rows where nexthop=10.1.2.254\n", count);
	```

=== "🌄 Transaction"
	``` c linenums="1"
	ret = cross_dbTransBegin (hDb, 0);
	CHECK (ret, "Failed to begin transaction");
	// Update single route 192.168.1.0/24 by PrimaryKey: set flags 0->5
	route.prefix	= IP4ADDR(192,168,1,0);
	route.mask		= 24;	
	route.flags		= 5;
	ret = cross_dbUpdRowByPk (hRtTbl, &route, "flags", &route, 0); 
	CHECK (ret, "Failed to update route 192.168.1.0/24 by PrimaryKey");
	ret = cross_dbTransCommit (hDb, 0);
	CHECK (ret, "Failed to commit transaction");
	```

## Want to Lean More?
<p>
	<a class="cdb-button cdb-button-primary" href="docs/get-started">Get Started 🧭</a> 
	<a class=cdb-button href="docs/tutorial">Tutorial 📜</a>
</p>
