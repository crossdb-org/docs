---
template: overrides/blog.html
---

# Data Types

|     **Type**      |  **Bytes**   | **Description**	| Note
       ::           | ----         | ----				| ----
         BOOL       | 1            | Bool, the value range is {`true`, `false`}.			|
       TINYINT      | 1            | Single-byte integer, the value range is [-128, 127].	 |
      SMALLINT      | 2            | Short integer, the value range is [-32768, 32767].	 |
        INT         | 4            | Integer, the value range is [-2^31, 2^31-1].		 |
        BIGINT      | 8            | Long integer, the value range is [-2^63, 2^63-1].	 |
  TINYINT UNSIGNED  | 1            | unsigned single-byte integer, the value range is [0, 255].	| TBD
  SMALLINT UNSIGNED | 2            | unsigned integer, the value range is [0, 65535].	| TBD
    INT UNSIGNED    | 4            | Unsigned integer, the value range is [0, 2^32-1].	| TBD
   BIGINT UNSIGNED  | 8            | unsigned long integer, the value range is [0, 2^64-1].	| TBD
      TIMESTAMP     | 8            | Default precision is millisecond.	|
        FLOAT       | 4            | Floating point number.				|
       DOUBLE       | 8            | Double precision floating point number.			|
          CHAR [COLLATE collation_name]  | User-defined, max 65535 | Fixed-length UTF-8 string. 	|
        VARCHAR [COLLATE collation_name] | User-defined, max 65535 | Variable-length UTF-8 string.	|
         BINARY     | User-defined, max 65535 | Fixed-length binary data. 		|
       VARBINARY    | User-defined, max 65535 | Variable-length binary data.	|
        INET        | 18           | IPv4 or IPv6 address, and optionally subnet. |
         MAC        | 6            | MAC addresses.	|

## Collation

|     **Type**      |  **Description**
        ::          |----            
	NOCASE          | Case insensitive [**Default**].
	BINARY          | Case sensitive.

## Literals

|     **Type**      |  Literals
        ::          | ----
        Boolean     | `true`, `false`
        Integer     | `123`, `-123`
    Floating-Point  | `1.23`, `-1.23`
        Character   | `'abc'`, `"abc"`
        Binary      | `x'a23f5fde'`, `X'A23F5FDE'`, `0xa23f5fde`, `0XA23F5FDE`
      Timestamp     | `'2024-11-01'`, `'2024-11-01T19:05:12'`, `'2024-11-01T19:05:12.561'`, `'2024-11-01T19:05:12.561288'`, `1730459112561288`(*millisecond*)
      Inet Address  | `'10.1.1.1'`, `'10.1.1.0/24'`, `'2001:4f8:3:ba:​2e0:81ff:fe22:d1f1'`, `'2001:4f8:3:ba::/64'`
      Mac Address   | `'08:00:2b:01:02:03'`, `'08-00-2b-01-02-03'`, `'0800.2b01.0203'`, `'0800-2b01-0203'`, `'08002b:010203'`, `'08002b-010203'`, `'08002b010203'`

## Escape Characters
| **Escape Character**	| **Actual Meaning**
       ::           	| ----
		\n				| Line Break
		\r				| Carriage Return
		\t				| tab
		\'				| Single quote '
		\"				| Double quote "
		\\`				| backtick
		\\\\			| Back Slash `\`
		\%				| Percent sign `%`
		\\_				| Unserscore  `_`
