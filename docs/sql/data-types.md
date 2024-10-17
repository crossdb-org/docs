---
template: overrides/blog.html
---

# Data Types

|     **Type**      |  **Bytes**   | **Description**	| Note
       ::           | ----         | ----				| ----
         BOOL       | 1            | Bool, the value range is {true, false}.			| TBD
       TINYINT      | 1            | Single-byte integer, the value range is [-128, 127].	|
      SMALLINT      | 2            | Short integer, the value range is [-32768, 32767].	|
        INT         | 4            | Integer, the value range is [-2^31, 2^31-1].		|
        BIGINT      | 8            | Long integer, the value range is [-2^63, 2^63-1].	|
  TINYINT UNSIGNED  | 1            | unsigned single-byte integer, the value range is [0, 255].	| TBD
  SMALLINT UNSIGNED | 2            | unsigned integer, the value range is [0, 65535].	| TBD
    INT UNSIGNED    | 4            | Unsigned integer, the value range is [0, 2^32-1].	| TBD
   BIGINT UNSIGNED  | 8            | unsigned long integer, the value range is [0, 2^64-1].	| TBD
      TIMESTAMP     | 8            | Default precision is microsecond.	| TBD
        FLOAT       | 4            | Floating point number.				|
       DOUBLE       | 8            | Double precision floating point number.			|
          CHAR [COLLATE collation_name]  | User-defined, max 65535 | Fixed-length UTF-8 string. 	|
        VARCHAR [COLLATE collation_name] | User-defined, max 65535 | Variable-Length UTF-8 string.	|
         BINARY     | User-defined, max 65535 | Fixed-length binary data. 		| TBD
       VARBINARY    | User-defined, max 65535 | Variable-Length binary data.	| TBD

## Collation 
|     **Type**      |  **Description**
        ::          |----            
	NOCASE          | Case insensitive [**Default**].
	BINARY          | Case sensitive.

## Escape Characters
| **Escape Character**	| **Actual Meaning**
       ::           	| ----
		\n				| Line Break
		\r				| Carriage Return
		\t				| tab
		\'				| Single quote '
		\"				| Double quote "
		\`				| backtick  `
		\\				| Back Slash \
		\%				| % see below for details
		\_				| _ see below for details
