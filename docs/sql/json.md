---
template: overrides/blog.html
---

# JSON Type

```sql
CREATE TABLE example (student JSON);
INSERT INTO example VALUES ('{ "id":1, "name": "Tommy", "class": "1-2", "age": 11 }');
INSERT INTO example VALUES ('{ "id":2, "name": "Jack", "class": "1-3", "age": 9 }');
INSERT INTO example VALUES ('{ "id":3, "name": "Rose", "class": "1-2", "age": 12 }');
INSERT INTO example VALUES ('{ "id":4, "name": "Tommy", "class": "1-3", "age": 10 }');
```

## JSON Operators

Use `->'field'` to access the top field. `field` is case-sensitive.

## Filter with JSON Field

```sql
XDB> SELECT * FROM example WHERE student->'id'=1;
+--------------------------------------------------------+
| student                                                |
+--------------------------------------------------------+
| { "id":1, "name": "Tommy", "class": "1-2", "age": 11 } |
+--------------------------------------------------------+
```

```sql
XDB> SELECT * FROM example WHERE student->'name'='Tommy';
+--------------------------------------------------------+
| student                                                |
+--------------------------------------------------------+
| { "id":1, "name": "Tommy", "class": "1-2", "age": 11 } |
| { "id":4, "name": "Tommy", "class": "1-3", "age": 10 } |
+--------------------------------------------------------+
```

## Select with JSON Field

The return type is `VARCHAR`.

```sql
XDB> SELECT student->'id',student->'name',student->'class' FROM example;
+---------------+-----------------+------------------+
| student->'id' | student->'name' | student->'class' |
+---------------+-----------------+------------------+
| 1             | Tommy           | 1-2              |
| 2             | Jack            | 1-3              |
| 3             | Rose            | 1-2              |
| 4             | Tommy           | 1-3              |
+---------------+-----------------+------------------+
```

```sql
XDB> SELECT student->'id' AS id,student->'name' AS name,student->'class' AS class FROM example ;
+----+-------+-------+
| id | name  | class |
+----+-------+-------+
| 1  | Tommy | 1-2   |
| 2  | Jack  | 1-3   |
| 3  | Rose  | 1-2   |
| 4  | Tommy | 1-3   |
+----+-------+-------+
```

## Order by JSON Field

```sql
XDB> SELECT * FROM examtle ORDER BY student->'age' DESC;
+--------------------------------------------------------+
| student                                                |
+--------------------------------------------------------+
| { "id":3, "name": "Rose", "class": "1-2", "age": 12 }  |
| { "id":1, "name": "Tommy", "class": "1-2", "age": 11 } |
| { "id":4, "name": "Tommy", "class": "1-3", "age": 10 } |
| { "id":2, "name": "Jack", "class": "1-3", "age": 9 }   |
+--------------------------------------------------------+
```

```sql
XDB> SELECT * FROM example ORDER BY student->'name', student->'class' DESC;
+--------------------------------------------------------+
| student                                                |
+--------------------------------------------------------+
| { "id":2, "name": "Jack", "class": "1-3", "age": 9 }   |
| { "id":3, "name": "Rose", "class": "1-2", "age": 12 }  |
| { "id":4, "name": "Tommy", "class": "1-3", "age": 10 } |
| { "id":1, "name": "Tommy", "class": "1-2", "age": 11 } |
+--------------------------------------------------------+
```

## Update JSON Field

```sql
XDB> UPDATE example SET student->age=20 WHERE student->'id'=2;
XDB> UPDATE example SET student->'name'='Sophia', student->'class'='1-3' WHERE student->'id'=2;

XDB> SELECT * FROM example WHERE student->'id'=2;
+---------------------------------------------------------+
| student                                                 |
+---------------------------------------------------------+
| { "id":2, "name": "Sophia", "class": "1-3", "age": 20 } |
+---------------------------------------------------------+
```

## Index on JSON Field 

You can accelerate querying JSON data by using secondary indexes directly without extra generated column like MySQL.

```sql
CREATE INDEX idx_id ON example (student->'id');

CREATE INDEX idx_name ON example (student->'name');
```
