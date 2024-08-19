---
template: overrides/blog.html
---

# Functions

##Aggregate Functions

|  **Function**    |  **Return Type**   | **Description** |
  ::               | ----               | ----
COUNT(*)           | BIGINT             | The number of rows.
COUNT(col_name)    | BIGINT             | The number of rows in the specified column.
MIN(col_name)      | Same with column   | The minimum value of a specific column
MAX(col_name)      | Same with column   | The maximum value of a specific column.
SUM(col_name)      | DOUBLE or BIGINT   | The sum of a specific column in a table
AVG(col_name)      | DOUBLE             | The average value of the specified column.
