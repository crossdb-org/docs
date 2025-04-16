---
template: overrides/blog.html
---

# SQL Statements

 Statement                 							| Description        						| Note
 ----                  								| ----               						| ----
[**BEGIN**](../transaction/#begin-transaction)      | Start a new transaction. 					|
[**COMMIT**](../transaction/#commit-transaction)    | Commit the open transaction if exists.	|
[**CLOSE DATABASE**](../database/#close-database)   | Close an opened database.					| Embedded Mode only
[**CREATE DATABASE**](../database/#create-database) | Create a database.						|
[**CREATE INDEX**](../indexes/#create-index) 		| Create an index on the specified table.	|
[**CREATE REPLICA**](../replication/#create-replication) | Create a CrossDB Replica.	     		|
[**CREATE SERVER**](../server/#create-server) 		| Create a CrossDB Server.					|
[**CREATE TABLE**](../table/#create-table) 			| Create a new table.						|
[**CREATE TRIGGER**](../trigger/#create-trigger) 	| Create a trigger  on the specified table.	|
[**DELETE**](../dml/#delete) 						| Delete rows in a table.					|
[**DESCRIBE**](../table/#show-table-columns) 		| Describe the specified table.				|
[**DROP DATABASE**](../database/#drop-database) 	| Drop a database.							|
[**DROP INDEX**](../indexes/#drop-index) 			| Drop the specified index on the specified table.	|
[**DROP REPLICA**](../replication/#drop-replication)    | Drop a CrossDB Replica.	     		    |
[**DROP SERVER**](../server/#drop-server) 			| Drop the specified server.				|
[**DROP TABLE**](../table/#drop-table) 				| Drop the specified table.					|
[**DUMP DATABASE**](../backup/#dump-database)  		| Dump database into file.		            |
[**EXPLAIN**](../dml/#explain) 				        | Return detailed information on how the query is executed.      |
[**HELP**](../misc/#help) 				            | SQL statements help.                      |
[**INSERT**](../dml/#insert) 						| Insert row into a table.					|
[**OPEN DATABASE**](../database/#open-database)     | Open a database on disk.					| Embedded Mode only
[**REPLACE**](../dml/#replace) 						| Insert or Modify row into a table.		|
[**ROLLBACK**](../transaction/#rollback-transaction) | Roll back the open transaction if exists.|
[**SELECT**](../dml/#select) 						| Retrieve data from a table.				|
[**SET AUTOCOMMIT**](../transaction/#set-auto-commit) | Set session transaction auto-commit.	|
[**SHELL**](../misc/#shell) 						| Enter interactive shell.					|
[**SHOW COLUMNS**](../table/#show-table-columns) 	| Show the list of columns within a given table.	|
[**SHOW CREATE TABLE**](../table/#show-create-table) | Show the `CREATE TABLE` statement.		|
[**SHOW DATABASE**](../database/#show-databases)    | Show the list of databases.				|
[**SHOW INDEXES**](../indexes/#show-index)          | Show the list of indexes associated with a given table.	       |
[**SHOW REPLICAS**](../replication/#show-replication)  | Show the list of servers.					|
[**SHOW SERVERS**](../server/#show-servers) 		| Show the list of servers.					|
[**SHOW TABLES**](../table/#show-all-tables)        | Show the list of tables in database.		|
[**SOURCE**](../backup/#source)        				| Load and execute SQL file.		        |
[**UPDATE**](../dml/#update) 						| Modify rows in a table.					|
[**USE**](../database/#use-database) 				| Use the database as the current default database.	|

<!--
[**REPLACE**](../transaction/#rollback-transaction) | Check if `PRIMARY KEY` exits will delete old row, then insert.  | TBD
[**RENAME INDEX**](../indexes/#rename-index) 			| Rename index.		    					| TBD
[**RENAME TABLE**](../table/#rename-table) 			| Rename table.			 					| TBD
[**CREATE SERVER**](../server/#create-server)       | Create a server.							| TBD
[**ALTER DATABASE**](../database/#modify-database)  | Modify database.   						| TBD
[**ALTER INDEX**](../indexes/#modify-index)           | Modify index.      						| TBD
[**ALTER SERVER**](../server/#modify-server)        | Modify server.     						| TBD
[**ALTER TABLE**](../table/#modify-table)           | Modify table.      						| TBD
[**LOCK TABLES**](../transaction/#lock-tables) 		| Lock tables manually.						| TBD
[**SET TRANSACTION**](../transaction/#set-isolation-level) | Set session transaction isolation level.	| TBD
[**SHOW CREATE DATABASE**](../database/#show-create-database) | Show the `CREATE DATABASE` statement.	|
[**SHOW SERVERS**](../server/#show-servers)         | Show the list of servers.					| TBD
[**DROP SERVER**](../server/#drop-server)           | Drop a server.							|
[**SHOW SESSIONS**](../status/#show-sessions) 		| Show the list of sessions.				| TBD
[**SHOW STATUS**](../status/#show-status) 			| Show CrossDB status.						| TBD
[**SHOW TABLE STATUS**](../table/#show-table-status) | Show the list of tables in database.		| TBD
[**START TRANSACTION**](../transaction/#begin-transaction) | Start a new transaction.			| TBD
[**TRUNCATE TABLE**](../table/#truncate-table) 		| Removes all rows from the table.			| TBD
-->