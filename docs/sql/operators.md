---
template: overrides/blog.html
---

# Operators

## Comparison Operators

  **Operator**           | Description      | Note
   ::                    | ----				| ----
         =               | Equal to			|
      <\>, !=            | Not equal to		|
      \>                 | Greater than     |
       <                 | Less than        |
     \>=                 | Greater than or equal to |
      <=                 | Less than or equal to	|
   IS NULL               | NULL value test			| TBD
   IS NOT NULL           | NOT NULL value test		| TBD
 BETWEEN ... AND ...     | Value is within a range		| TBD
 NOT BETWEEN ... AND ... | Value is not within a range	| TBD
     IN                  | Value is within a list of values		| TBD
     NOT IN              | Value is not within a list of values	| TBD
     LIKE                | Simple pattern matching		|
     NOT LIKE            | Negation of LIKE	            | TBD
     REGEXP              | Regular expression pattern matches 	|
     NOT REGEXP          | Negation of REGEXP	| TBD
     RLIKE               | Synonym for REGEXP 	|

LIKE is used together with wildcards to match strings. Its usage is described as follows:

- `%` matches 0 or any number of characters.
- `_` matches any single ASCII character.
- `\_` is used to match the `_` in the string.
- `\%` is used to match the `%` in the string.

## Logical Operators

 **Operator** | Description		| Note
     ::       | ----            | ----
    AND       | Logical AND     |
    OR        | Logical OR      |

## JSON Operators

Use `->'field'` to access the top field.

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