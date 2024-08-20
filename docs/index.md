---
hide:
  - navigation
  - toc
---

#

  <div class="xdb-container">
    <div class="xdb-col-md-4">
		<p align="center">
		<img src="/assets/favicon.png" width="200" height="200">
		</p>
    </div>
    <div class="xdb-col-md-8">
		<p class="xdb-description"><span class="xdb-accent">CrossDB</span><br>Super High-performance Lightweight Embedded and Server SQL RDBMS✨</p>
		<p>
			<a class="xdb-button xdb-button-primary" href="get-started/install/">Quick Learn🧭</a> 
			<a class=xdb-button href="get-started/bench/#bench-test">Benchmark 📜</a>
<!--
			<a class=xdb-button href="products/download/">Download 💾</a>
-->
		</p>
    </div>
  </div>

<div class="grid cards" markdown>

-   🌌 __Simple__

    ---

    CrossDB is easy to install and deploy. It has zero external dependencies and runs in-process in its host application or as a single binary with tiny footprint.

<!--
    [:octicons-arrow-right-24: Read more](get-started/install/)
-->

-   ♻️ __Portable__

    ---

    CrossDB runs on Linux, macOS, Windows, BSD and all popular hardware architectures. It has idiomatic client APIs for major programming languages.

    [:octicons-arrow-right-24: Read more](client/api-c/)

-   🚀 __Super Fast__

    ---

    The hand-writing SQL parser and memory-oriented design architecture make the database run SQL at blazing speed.

-   ⛽ __Hybrid Storage Mode__

    ---

    CrossDB supports On-Disk database and In-Memory database(IMDB). It can also support Hybrid mode with some tables On-Disk and some In-Memory.

-   🔱 __SQL__

    ---

    Most SQL statements are Standard, and also support many extensive statements from MySQL for convenient management.

    [:octicons-arrow-right-24: Read more](sql/statements/)

-   💮 __Server Mode__

    ---

    Besides the Embedded RDBMS mode, CrossDB can also run in Embedded Server mode or run CrossDB as Standalone RDBMS server.

</div>

=== "C"
	``` c linenums="1"
	xdb_res_t	*pRes;
	xdb_row_t	*pRow;
	xdb_conn_t	*pConn = xdb_open (":memory:");
	pRes = xdb_exec (pConn, "CREATE TABLE student (id INT, name CHAR(16), age INT, class CHAR(16), score INT)");
	pRes = xdb_exec (pConn, "INSERT INTO student (id,name,age,class,score) VALUES (1,'jack',10,'3-1',90),(2,'tom',11,'2-5',91),(3,'jack',11,'1-6',92),(4,'rose',10,'4-2',90),(5,'tim',10,'3-1',95)");
	pRes = xdb_exec (pConn, "SELECT * from student");
	while (NULL != (pRow = xdb_fetch_row (pRes))) {
		xdb_print_row (pRes->row_meta, pRow);
		printf ("\n");
	}
	xdb_free_result (pRes);
	pRes = xdb_exec (pConn, "UPDATE student set age=9 WHERE id = 2");
	pRes = xdb_exec (pConn, "DELETE FROM student WHERE id = 3");
	xdb_close (pConn);
	```

=== "SQL"
	``` sql linenums="1"
	CREATE TABLE student (id INT, name CHAR(16), age INT, class CHAR(16), score INT);
	INSERT INTO student (id,name,age,class,score) VALUES (1,'jack',10,'3-1',90),(2,'tom',11,'2-5',91),(3,'jack',11,'1-6',92),(4,'rose',10,'4-2',90),(5,'tim',10,'3-1',95);
	SELECT * FROM student;
	SELECT * FROM student WHERE id = 1;
	UPDATE student set age=9 WHERE id = 2;
	DELETE FROM student WHERE id = 3;
	```

<!--
=== "Python"
	``` python linenums="1"
	import crossdb
	conn = crossdb.connect()
	cursor = conn.cursor()
	cursor.execute('CREATE DATABASE school')
	cursor.execute('CREATE TABLE student (name CHAR(16), age INT, class CHAR(16))')
	cursor.execute('INSERT INTO student (name,age,class) VALUES (\'jack\',10,\'3-1\'), (\'tom\',11,\'2-5\')')
	cursor.execute('SELECT * from student')
	for row in cursor:
		print(row)
	```
-->

<br>

> **NOTE** 
> This project was redesigned and rewritten from scratch.
> It's still in early development stage, so please **DO NOT** use in your project now.
