---
template: overrides/blog.html
---

# JSON Type

## JSON Operators

Use `->'field'` to access the top field. `field` is case-sensitive.

```sql
CREATE TABLE example (student JSON);
INSERT INTO example VALUES ('{ "id":1, "name": "Tommy", "class": "1-2" }');
INSERT INTO example VALUES ('{ "id":2, "name": "Jack", "class": "1-3" }');
INSERT INTO example VALUES ('{ "id":3, "name": "Rose", "class": "1-2" }');
INSERT INTO example VALUES ('{ "id":4, "name": "Tommy", "class": "1-3" }');
```

```sql
XDB> SELECT * FROM example WHERE student->'id'=1;
+---------------------------------------------+
| student                                     |
+---------------------------------------------+
| { "id":1, "name": "Tommy", "class": "1-2" } |
+---------------------------------------------+
```

```sql
XDB> SELECT * FROM example WHERE student->'name'='Tommy';
+---------------------------------------------+
| student                                     |
+---------------------------------------------+
| { "id":1, "name": "Tommy", "class": "1-2" } |
| { "id":4, "name": "Tommy", "class": "1-3" } |
+---------------------------------------------+
```

## Index on JSON Field 

```sql
CREATE IDX idx_id ON example (student->'id');

CREATE IDX idx_name ON example (student->'name');
```
