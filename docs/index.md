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
		<p class="xdb-description"><span class="xdb-accent">CrossDB</span><br>Ultra High-performance Lightweight Embedded and Server OLTP RDBMS✨</p>
		<p>
			<a class="xdb-button xdb-button-primary" href="get-started/install/">Quick Learn🧭</a> 
			<a class=xdb-button href="blog/benchmark/crossdb-vs-sqlite3">Benchmark 📜</a>
<!--
			<a class=xdb-button href="products/download/">Download 💾</a>
-->
		</p>
    </div>
  </div>

<div class="grid cards" markdown>

-   🌌 __Simple__

    ---

    _CrossDB is easy to install and deploy, with zero external dependencies. It runs in-process within its host application with a tiny footprint._

    [:octicons-arrow-right-24: Read more](get-started/install/)

-   ♻️ __Portable__

    ---

    _CrossDB runs on Linux, macOS, Windows, BSD, and all popular hardware architectures. It offers idiomatic client APIs for major programming languages._

    [:octicons-arrow-right-24: Read more](client/api-c/)

-   🚀 __Ultra Fast__

    ---

    _The hand-written SQL parser and memory-oriented design architecture enable the database to execute SQL at blazing speed._

    [:octicons-arrow-right-24: Read more](faq/#why-is-crossdb-so-fast)

-   ⛽ __Hybrid Storage Mode__

    ---

    _CrossDB supports both On-Disk and In-Memory databases (IMDB). It can also operate in Hybrid mode, with some tables stored On-Disk and others In-Memory._

-   🔱 __SQL__

    ---

    _Most SQL statements are standard, and CrossDB also supports many extended statements from MySQL for convenient management._

    [:octicons-arrow-right-24: Read more](sql/statements/)

-   💮 __Server Mode__

    ---

    _In addition to the Embedded RDBMS mode, CrossDB can also operate in Embedded Server mode or as a Standalone RDBMS server. [**Replication**](develop/replication/) is aslo supported_

    [:octicons-arrow-right-24: Read more](develop/server/)

</div>

<br>

<figure class="xdb-figure">
	<a href="blog/benchmark/crossdb-vs-sqlite3">
		<img src="images/crossdb-vs-sqlite.png">
	</a>
</figure>

<br>

=== "C"
	``` c linenums="1"
	xdb_res_t	*pRes;
	xdb_row_t	*pRow;

	xdb_conn_t	*pConn = xdb_open (":memory:");
	pRes = xdb_exec (pConn, "CREATE TABLE student (id INT PRIMARY KEY, name CHAR(16), age INT, class CHAR(16), score INT)");

	pRes = xdb_exec (pConn, "INSERT INTO student (id,name,age,class,score) VALUES (1001,'Jack',10,'3-1',90),(1002,'Tom',11,'2-5',91),(1003,'David',11,'1-6',92),(1004,'Rose',10,'4-2',90),(1005,'Tim',10,'3-1',95)");
	pRes = xdb_bexec (pConn, "INSERT INTO student (id,name,age,class,score) VALUES (?,?,?,?,?)", 1006, "Wendy", 10, "4-3", 99);

	pRes = xdb_bexec (pConn, "SELECT * FROM student WHERE id = ?", 1001);
	while (NULL != (pRow = xdb_fetch_row (pRes))) {
		xdb_print_row (pRes, pRow);
		printf ("\n");
	}
	xdb_free_result (pRes);

	pRes = xdb_bexec (pConn, "UPDATE student set age = age + ? WHERE id = ?", 2, id);
	pRes = xdb_bexec (pConn, "DELETE FROM student WHERE id = ?", id);

	xdb_close (pConn);
	```

=== "Python"
	``` python linenums="1"
	import crossdb

	conn = crossdb.connect(database=":memory:")
	cursor = conn.cursor()
	
	cursor.execute("CREATE TABLE student (name CHAR(16), age INT, class CHAR(16))")
	cursor.execute("INSERT INTO student (name,age,class) VALUES ('jack',10,'3-1'), ('tom',11,'2-5')")

	cursor.execute("SELECT * FROM student")
	for row in cursor:
		print (row)
	
	cursor.close()
	conn.close()
	```

=== "SQL"
	``` sql linenums="1"
	CREATE TABLE student (id INT, name CHAR(16), age INT, class CHAR(16), score INT);

	INSERT INTO student (id,name,age,class,score) VALUES (1,'jack',10,'3-1',90),(2,'tom',11,'2-5',91),(3,'jack',11,'1-6',92),(4,'rose',10,'4-2',90),(5,'tim',10,'3-1',95);

	SELECT * FROM student WHERE id = 1001;

	UPDATE student set age = age + 2 WHERE id = 1002;
	DELETE FROM student WHERE id = 1003;
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

<figure class="xdb-figure">
	<a href="blog/benchmark/crossdb-vs-stlmap">
		<img src="images/crossdb-vs-stlmap.png">
	</a>
</figure>

<br>
