---
template: overrides/blog.html
---

# NodeJS

> [@croosdb/crossdb-nodejs](https://www.npmjs.com/package/@croosdb/crossdb-nodejs)

## APIs List

|          | API                                              | Description                                  |
| -------- | ------------------------------------------------ | -------------------------------------------- |
| new      | [**new**](#new) (`:memory:` \| `[path/]db_name`) | Open a connection for local DB direct access |
| exec     | [**exec**](#exec) (`statement`)                  | Execute SQL statement                        |
| begin    | [**begin**](#begin) ()                           | Begin transaction                            |
| commit   | [**commit**](#commit) ()                         | Commit transaction                           |
| rollback | [**rollback**](#rollback) ()                     | Rollback transaction                         |
| close    | [**close**](#close) ()                           | Close a connection                           |
| version  | [**version**](#version) ()                       | Get CrossDB version info                     |

### new

Open a connection and create/open a local Database.

```javascript
const CrossDB = require("@croosdb/crossdb-nodejs");

const db = new CrossDB(":memory:");
// or
const db = new CrossDB("[path/]db_name");
```

- If path is :memory:, a memory database is created or opened, becoming the default database for this connection.
- If path specifies [path/]db_name, a database at the given path is created or opened.
- All databases opened are shared across all active connections.

### exec

Execute SQL statement and return result set.

```javascript
// Create tables if they do not already exist
db.exec(
  "CREATE TABLE IF NOT EXISTS student (id INT PRIMARY KEY, name CHAR(16), age INT, class CHAR(16), score FLOAT, info VARCHAR(255))"
);
// Clean (empty) a table
db.exec("DELETE FROM student");
// Insert sample data into the table
db.exec(
  "INSERT INTO student (id,name,age,class,score) VALUES (1,'jack',10,'3-1',90),(2,'tom',11,'2-5',91),(3,'jack',11,'1-6',92),(4,'rose',10,'4-2',90),(5,'tim',10,'3-1',95)"
);
// Query to select all records from the table

let res = db.exec("SELECT * FROM student");
res.forEach((element, i) => {
  console.log(i, "Select all records: ", element);
});
// Execute multiple statements
res = db.exec(
  "SELECT COUNT(*) as Count FROM student; SELECT id, name, age FROM student WHERE id=2;SELECT MIN(score) as min, MAX(score) as max, SUM(score) as sum, AVG(score) as avg FROM student"
);
res.forEach((element, i) => {
  console.log(i, "Multi-statement result: ", element);
});
```

In SQL, the behavior of statements regarding result sets is as follows:

- SELECT Statements: These retrieve data and return a result set comprising the selected rows.
- Non-SELECT Statements: Statements like INSERT, UPDATE, and DELETE modify data and typically do not return a result set. Instead, they provide the number of rows affected.

When executing multiple statements sequentially:

- Multiple SELECT Statements: Each SELECT returns its own result set in the order of execution.
- Mixed Statements: Only SELECT statements return result sets, each corresponding to its position in the sequence. Non-SELECT statements do not return result sets but indicate the number of rows affected.

### begin

Begin a transaction.

```javascript
begin();
```

### commit

Commit a transaction.

```javascript
commit();
```

### rollback

Rollback a transaction.

```javascript
rollback();
```

### close

Close connection.

```javascript
close();
```

### version

Get CrossDB version string.

```javascript
version();
```

Return this object:

- "CroosDB": CroosDB version.
- "Package": Node.js package version,
- "Platform": Platform information

```json
{
  "CroosDB": "0.11.0",
  "Package": "1.4.1",
  "Platform": "darwin"
}
```
