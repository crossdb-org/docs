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
			<a class="cdb-button cdb-button-primary" href="/tutorial/getting-started/">Start 🧭</a> 
			<a class=cdb-button href="/tutorial/introduction/">Docs 💡</a>
			<a class=cdb-button href="/tutorial/introduction/">Download 💡</a>
			</p>
    </div>
  </div>

---

  <div class="cdb-container">

    <div class="cdb-card"> 
		<a href="Troubleshooting/Overview">
			<h2>🌈 RDBMS</h2>
			<p>CDB follows standard RDBMS model DB, Tabel, Record, Index, Cursor, Transaction, SQL.</p>
		</a>
    </div>

    <div class="cdb-card"> 
		<a href="Troubleshooting/Overview">
			<h2>🚊 C ORM</h2>
			<p>CDB supports C Struct to access DB direclty. Almost all C data types are supported Enum, Union, Bitfield, Array, nested struct, etc.</p>
		</a>
    </div>

    <div class="cdb-card"> 
		<a href="Troubleshooting/Overview">
			<h2>🚀 Trigger</h2>
			<p>CDB Supports Foreign Key, Trigger and Cascade Trigger. They can be used to do Data-driven programming and unit test.</p>
		</a>
    </div>

    <div class="cdb-card"> 
		<a href="Troubleshooting/Overview">
			<h2>⛽ PubSub</h2>
			<p>CDB supports PubSbub to subscribe DB from other source.</p>
		</a>
    </div>

    <div class="cdb-card"> 
		<a href="Troubleshooting/Overview">
			<h2>💮 RPC</h2>
			<p>CDB supports C struct serailization and a gRPC like RPC framework for C language in future.</p>
		</a>
    </div>

    <div class="cdb-card"> 
		<a href="Troubleshooting/Overview">
			<h2>🔱 Connector</h2>
			<p>CDB supports C/C++ and Python Connectors now, will support more connectors later.</p>
		</a>
    </div>

    <div class="cdb-card"> 
		<a href="Troubleshooting/Overview">
			<h2>♻️ Best Practice</h2>
			<p>Use CDB to Manage Data, do Data-Driven Programming, ISSU, distribut provisioning, etc.</p>
		</a>
    </div>

    <div class="cdb-card"> 
		<a href="Troubleshooting/Overview">
			<h2>🌄 Troubleshooting</h2>
			<p>CDB supports CLI, WEB, Staticstics, Status, Log, DB backup and restore to do troubleshooting.</p>
		</a>
    </div>
	
  </div>

---

## 3 Steps to use CrossDB


=== "🌄 Define Schema"
	``` c	
	typedef struct {
		char 	name[20];
		char 	age;
		int		id;
		bool	sex;
	} student_t;
	```
=== "♻️ Create Database and Table"
	``` c
	cross_dbCreate ();
	cross_tblCreate ();
	```
=== "💮 CRUD Operation"
	``` c
	cross_tblGetByPk ();
	cross_tblDelByPk ();
	```

## Sponsors

<a href="Troubleshooting/Overview">Want to be first sponsor? </a>
