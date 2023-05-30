# Table
**CrosDB** Table is a collection of rows(record or tuple) and columns.

- Table schema is mapped from C Struct, so this is a kind of C Struct ORM(Object Relational Mapping).
- The C struct is expanded into each single fields for composite data type like array, nested struct etc.
- Each table can have only one Primary key.
- Each table can hve many secondray indexes.

## Primary Key(PK)
-------------------------------------------------------------------------------

- Each table can have only one Primray Key, which is used to identify the row uniquely.
- Primay Key column list shouldn't change during the row lifecycle.
- Primary Key is implemented with unique `HASH` index for high performance. You can change to `RBTREE` as well.

## Example
-------------------------------------------------------------------------------
