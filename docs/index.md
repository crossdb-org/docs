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
		<p class="cdb-description"><span class="cdb-accent">CrossDB</span><br>The Fastest Embedded Database in the world ✨</p>
		<p>
			<a class="cdb-button cdb-button-primary" href="#lean-in-5m">Quick Learn🧭</a> 
			<a class=cdb-button href="blog/benchmark/crossdb-vs-sqlite3">Benchmark 📜</a>
			<a class=cdb-button href="products/download/">Download 💾</a>
		</p>
    </div>
  </div>

---

  <div class="cdb-container">

    <div class="cdb-card"> 
		<a href="docs/crossdb/database">
			<h2>🌌 RDBMS Model</h2>
			<p>Follows standard RDBMS model: DB, Table, Column, Row, Index, Cursor, Transaction, etc.</p>
		</a>
    </div>

    <div class="cdb-card"> 
		<a href="docs/crossdb/database/#storage-mode">
			<h2>⛽ Storage Mode</h2>
			<p>Supports On-Disk database, In-Memory database and optimized On-RamDisk database.</p>
		</a>
    </div>

    <div class="cdb-card"> 
		<a href="docs/crossdb/dml/#use-transaction">
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
		<a href="docs/api/api/">
			<h2>🚀 Native APIs</h2>
			<p>Well desgined high Performance Native APIs to define and manipulate DB.</p>
		</a>
    </div>

    <div class="cdb-card"> 
		<a href="docs/crossdb/table">
			<h2>💮 Auto-Upgrade</h2>
			<p>Change your struct, existing table will be upgraded automatically for you.</p>
		</a>
    </div>

    <div class="cdb-card"> 
		<a href="docs/crossdb/database/#storage">
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

<figure class="cdb-figure">
	<a href="docs/crossdb/database">
		<img src="../images/crossdb-model.png">
	</a>
</figure>


## CrossDB CLI

<figure class="cdb-figure">
	<a href="docs/reference/crossdb-cli">
		<img src="../images/crossdb-cli.gif">
	</a>
</figure>


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

	cross_db_h 		hDb;
	cross_tbl_h 	hRtTbl;
	cross_ret 		ret;
	route_t 		route;	
	cross_rowid 	count;

	// Create database
	ret = cross_dbCreate (&hDb, "db_data/example", 0);
	CHECK (ret, "Failed to create db: example");

	// Create table: route (Primary Key: prefix,mask)
	ret = cross_dbTblCreate (hDb, &hRtTbl, "route", route_schema, "prefix,mask", 0);
	CHECK (ret, "Failed to create table: route table");

	// Create index on nexthop: idx_nexthop
	ret = cross_dbIdxCreate (hRtTbl, "idx_nexthop", "nexthop", 0);
	CHECK (ret, "Failed to create index: idx_nexthop");
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

	// Get single route 192.168.1.0/24 by Primary Key
	route.prefix	= IP4ADDR(192,168,1,0);
	route.mask		= 24;	
	ret = cross_dbGetRowByPK (hRtTbl, &route, &route, 0); 
	CHECK (ret, "Failed to get route 192.168.1.0/24 by Primary Key");
	printf ("Get single route: %d.%d.%d.%d/%d->%d.%d.%d.%d intf: %s metric: %d flags: 0x%x\n",
			IP4STR(route.prefix), route.mask, IP4STR(route.nexthop), route.intf, route.metric, route.flags);

	// Get one row where nexthop=192.168.1.254
	route.nexthop	= IP4ADDR(192,168,1,254);
	ret = cross_dbGetOneRow (hRtTbl, "nexthop", &route, &route, 0);
	CHECK (ret, "Failed to get one route where nexthop=192.168.1.254");
	printf ("Get one route where nexthop=192.168.1.254: "
			"%d.%d.%d.%d/%d->%d.%d.%d.%d intf: %s metric: %d flags: 0x%x\n",
			IP4STR(route.prefix), route.mask, IP4STR(route.nexthop), route.intf, route.metric, route.flags);
	```
=== "🔫 Update Rows"
	``` c linenums="1"
	// Update single route 192.168.1.0/24 by Primary Key: set flags 0->1 metric 1->3
	route.prefix	= IP4ADDR(192,168,1,0);
	route.mask		= 24;	
	route.metric	= 3;
	route.flags		= 1;
	ret = cross_dbUpdRowByPK (hRtTbl, &route, "flags,metric", &route, 0); 
	CHECK (ret, "Failed to update route 192.168.1.0/24 by Primary Key");

	// Update routes where nexthop=192.168.1.254: set flags 0->3
	route.nexthop	= IP4ADDR(192,168,1,254);
	route.flags		= 3;
	count = cross_dbUpdateRows (hRtTbl, "nexthop", &route, "flags", &route, 0);
	printf ("Update %d routes where nexthop=10.1.2.254\n", count);
	```
=== "🎡 Cursor Query"
	``` c linenums="1"
	// Use cursor to get routes where nexthop=192.168.1.254
	cross_cursor_h hCursor;
	route.nexthop	= IP4ADDR(192,168,1,254);
	count = cross_dbQueryRows (hRtTbl, &hCursor, "nexthop", &route, 0);
	printf ("Query %d routes where nexthop=192.168.1.254\n", count);
	while (CROSS_OK == cross_cursorGetNextRow (hCursor, &route, 0)) {
		printf ("  route: %d.%d.%d.%d/%d->%d.%d.%d.%d intf: %s metric: %d flags: 0x%x\n",
				IP4STR(route.prefix), route.mask, IP4STR(route.nexthop), route.intf, route.metric, route.flags);
	}
	cross_cursorClose (hCursor, 0);
	```
=== "✂️ Delete Rows"
	``` c linenums="1"
	// Delete single route 192.168.1.0/24 by Primary Key
	route.prefix	= IP4ADDR(192,168,1,0);
	route.mask		= 24;	
	ret = cross_dbDelRowByPK (hRtTbl, &route, 0); 
	CHECK (ret, "Failed to delete route 192.168.1.0/24 by Primary Key");

	// Delete routes where nexthop=192.168.1.254
	route.nexthop	= IP4ADDR(192,168,1,254);
	count = cross_dbDeleteRows (hRtTbl, "nexthop", &route, 0);
	printf ("Delete %d routes where nexthop=192.168.1.254\n", count);
	```

=== "🌄 Transaction"
	``` c linenums="1"
	ret = cross_dbTransBegin (hDb, 0);
	CHECK (ret, "Failed to begin transaction");
	// Update single route 192.168.1.0/24 by Primary Key: set flags 0->5
	route.prefix	= IP4ADDR(192,168,1,0);
	route.mask		= 24;	
	route.flags		= 5;
	ret = cross_dbUpdRowByPK (hRtTbl, &route, "flags", &route, 0); 
	CHECK (ret, "Failed to update route 192.168.1.0/24 by Primary Key");
	ret = cross_dbTransCommit (hDb, 0);
	CHECK (ret, "Failed to commit transaction");
	```

## Want to Lean More?
<p>
	<a class="cdb-button cdb-button-primary" href="docs/get-started">Get Started 🧭</a> 
	<a class=cdb-button href="docs/crossdb/dml">Tutorial 📜</a>
</p>
