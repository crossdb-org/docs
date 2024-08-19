---
template: overrides/blog.html
---

# Glossary

## ACID
ACID refers to the four key properties of a transaction: atomicity, consistency, isolation, and durability. Each of these properties is described below.

**Atomicity** means that either all the changes of an operation are performed, or none of them are.

**Consistency** means that transactions always bring the database from one consistent state to another.

**Isolation** means that a transaction in process is invisible to other transactions until it completes. This allows concurrent transactions to read and write data without sacrificing consistency.

**Durability** means that once a transaction is committed, it remains committed even in the event of a system failure.

## CRUD
Acronym for “create, read, update, delete”, a common sequence of operations in database applications. Often denotes a class of applications with relatively simple database usage (basic DDL, DML and query statements in SQL) that can be implemented quickly in any language.

## DDL
Data definition language, a set of SQL statements for manipulating the database itself rather than individual table rows. Includes all forms of the CREATE, ALTER, and DROP statements.
DDL statements automatically commit the current transaction; they cannot be rolled back.

## DML
Data manipulation language, a set of SQL statements for performing SELECT, INSERT, UPDATE, and DELETE operations.

## Hash Index
A type of index intended for queries that use equality operators, rather than range operators such as greater-than or BETWEEN.

## IMDB
IMDB(In-Memory database) is a type of database system that maintains data in memory, to avoid overhead due to disk I/O and translation between disk blocks and memory areas.

## Index
A data structure that provides a fast lookup capability for rows of a table, typically by forming a tree structure (B-tree) representing all the values of a particular column or set of columns.

## INFORMATION_SCHEMA
The name of the database that provides a query interface to the CrpssDB data dictionary. (This name is defined by the ANSI SQL standard.) To examine information (metadata) about the database, you can query tables such as INFORMATION_SCHEMA.TABLES and INFORMATION_SCHEMA.COLUMNS, rather than using SHOW commands that produce unstructured output.

## MVCC
MVCC(Multi-Version Concurrency Control) is a concurrency control mechanism in many databases. It processes the memory read by transactions to achieve concurrent access to DB, thereby avoiding blocking caused by conflicts between concurrent reads and writes.

## OLTP
Acronym for “Online Transaction Processing”. A database system, or a database application, that runs a workload with many transactions, with frequent writes as well as reads, typically affecting small amounts of data at a time.

## SQL
The Structured Query Language that is standard for performing database operations. Often divided into the categories DDL, DML, and queries. 
