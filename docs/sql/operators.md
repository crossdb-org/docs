---
template: overrides/blog.html
---

# Operators

## Comparison Operators

  **Operator**           | Description      | Note
   ::                    | ----				| ----
         =               | Equal to			|
      <\>, !=            | Not equal to		| TBD
      \>                 | Greater than     | TBD
       <                 | Less than        | TBD
     \>=                 | Greater than or equal to | TBD
      <=                 | Less than or equal to	| TBD
   IS NULL               | NULL value test			| TBD
   IS NOT NULL           | NOT NULL value test		| TBD
 BETWEEN ... AND ...     | Whether a value is within a range of values		| TBD
 NOT BETWEEN ... AND ... | Whether a value is not within a range of values	| TBD
     IN                  | Whether a value is not within a set of values	| TBD
     NOT IN              | Negation of simple pattern matching	| TBD
     LIKE                | Wildcard match			| TBD

LIKE is used together with wildcards to match strings. Its usage is described as follows:

- '%' matches 0 or any number of characters, '\_' matches any single ASCII character.
- `\_` is used to match the \_ in the string.

## Logical Operators

 **Operator** | Description		| Note
     ::       | ----            | ----
    AND       | Logical AND     |
    OR        | Logical OR      | TBD
