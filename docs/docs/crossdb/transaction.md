---
template: overrides/blog.html
---

# Transaction

## ACID
-------------------------------------------------------------------------------

In the context of transaction processing, the acronym ACID refers to the four key properties of a transaction: atomicity, consistency, isolation, and durability.

**Atomicity**
All changes to data are performed as if they are a single operation. That is, all the changes are performed, or none of them are.
For example, in an application that transfers funds from one account to another, the atomicity property ensures that, if a debit is made successfully from one account, the corresponding credit is made to the other account.

**Consistency**
Data is in a consistent state when a transaction starts and when it ends.
For example, in an application that transfers funds from one account to another, the consistency property ensures that the total value of funds in both the accounts is the same at the start and end of each transaction.

**Isolation**
The intermediate state of a transaction is invisible to other transactions. As a result, transactions that run concurrently appear to be serialized.
For example, in an application that transfers funds from one account to another, the isolation property ensures that another transaction sees the transferred funds in one account or the other, but not in both, nor in neither.

**Durability**
After a transaction successfully completes, changes to data persist and are not undone, even in the event of a system failure.
For example, in an application that transfers funds from one account to another, the durability property ensures that the changes made to each account will not be reversed.

## API

|           | API                   | Descritpion
 ----       | ----                  | ----
cross_ret   | [**cross_dbTransBegin**](dml.md#cross_dbTransBegin) (cross_db_h hDb, uint32_t flags) | Begin Transaction
cross_ret   | [**cross_dbTransCommit**](dml.md#cross_dbTransCommit) (cross_db_h hDb, uint32_t flags) | Commit Transaction
cross_ret   | [**cross_dbTransRollback**](dml.md#cross_dbTransRollback)	(cross_db_h hDb, uint32_t flags) | Rollback Transaction


## AutoCommit

- For `on-disk` database, autocommit is enabled for single row and multiple rows DMLs by default.
- For `ramdisk` and `inmem` database, autocommit is enabled for single row DMLs only by default. For multiple rows DMLs, if process crashed, some rows may be updated/deleted, some may not, so if you need strict ACID, you have to call transaction APIs manually. This is to improve performance and let user to control the behavior by need.
