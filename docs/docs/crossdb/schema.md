---
template: overrides/blog.html
---

## Schema Definition

Schem is used to define CrossDB table and it's defined based on C struct with some CrossDB macro.

### Basic Types

CrossDB Type and C Type Map

 CrossDB Type | Description      | C Type
 ----         | ----             | ----
 INT          | integer          | `char`, `short`, `int`, `long long`, `int8_t`, `int16_t`, `int32_t`, `int64_t`
 UINT         | unsinged integer | `unsigned char`, `unsigned short`, `unsigned int`, `unsigned long long`, `uint8_t` `uint16_t`, `uint32_t`, `uint64_t`
 FLOAT        | floating-point   | `float`, `double`
 CHAR         | charater string  | `char []`
 BYTE         | byte array       | `unsiged char []`, `uint8_t []`, `struct`

CrossDB Format

 CrossDB Type | CrossDB Formt | Description
 ----         | ----          | ----
 INT/UINT	  | DFT           | default decimal
 FLOAT   	  | DFT           | default floating-point
 CHAR   	  | DFT           | default charater string
 BYTE         | DFT			  | default hexadecimal string
 INT/UINT	  | BOOL          | boolean
 UINT		  | HEX           | hexadecimal
 INT/UINT	  | TIMESTAMP/TS  | Timestamp: `time_t`, `uin32_t`, `uint64_t`
 BTYE         | MAC			  | MAC addrss: `uint8_t [6]`, `struct ether_addr`
 UINT		  | IPv4		  | Host endian IPv4 address: `uint32_t`
 BYTE		  | IPv4		  | Network endian IPv4 address: `struct in_addr`, `uint32_t`
 BYTE		  | IPv6		  | Network endian IPv4 address: `uint8_t [16]`, `struct in_addr6`

Example

```c linenums="1"
typedef struct {
	char			val_char;
	int64_t			val_int64;
	uint16_t 		val_u16;
	uint8_t 		val_u8;
	float 			val_float;
	double 			val_double;
	char 			val_str[16];
	uint8_t			val_byte[64];

	char			val_bool;
	uint16_t 		flags;
	time_t			birth;
	unsigned char 	mac[6];
	uint32_t		ipAddrHost;
	struct in_addr 	ipAddrNet;
	uint8_t			ip6Addr[16];
} basic_types_t;
```

Set `CROSS_STRUCT_NAME` to the struct name `basic_types_t` for `CROSS_FIELD` to define the schema entry. 
`CROSS_END` is used to mark the end of schema definition.

```c linenums="1"
#undef	CROSS_STRUCT_NAME
#define	CROSS_STRUCT_NAME	basic_types_t
cross_field_t 	basic_types_schema[] = {
	CROSS_FIELD (val_char,		INT,	DFT,  0),
	CROSS_FIELD (val_int64, 	INT,	DFT,  0),
	CROSS_FIELD (val_u16,		UINT,	DFT,  0),
	CROSS_FIELD (val_u8, 		UINT,	DFT,  0),
	CROSS_FIELD (val_float,		FLOAT,	DFT,  0),
	CROSS_FIELD (val_double, 	FLOAT,	DFT,  0),
	CROSS_FIELD (val_str, 		CHAR,	DFT,  0),
	CROSS_FIELD (val_byte,		BYTE,	DFT,  0),
	CROSS_FIELD (val_bool, 		UINT,	BOOL, 0),
	CROSS_FIELD (flags, 		UINT,	HEX,  0),
	CROSS_FIELD (birth,			UINT,	TS,   0),
	CROSS_FIELD (mac, 			BYTE,	MAC,  0),
	CROSS_FIELD (ipAddrHost, 	UINT,	IPv4, 0),
	CROSS_FIELD (ipAddrNet, 	BYTE,	IPv4, 0),
	CROSS_FIELD (ip6Addr, 		BYTEE,	IPv6, 0),
	CROSS_END (basic_types_t)
};
```

To keep struct and schema in header file, you can define them together like following way.

Define macro `ROUTE_SCHEMA()` in header file
```c linenums="1"
// In header file
typedef struct {
	uint32_t 			prefix;
	uint8_t 			mask;
	uint32_t			nexthop;
	uint8_t 			metric;
	char				intf[16];
	uint32_t			birth;
	uint32_t			flags;
} route_t;

#dfine ROUTE_SCHEMA()	\	
	CROSS_FIELD (prefix,	UINT,	IPv4, 0), \
	CROSS_FIELD (mask, 		UINT,	DFT,  0), \
	CROSS_FIELD (nexthop,	UINT,	IPv4, 0), \
	CROSS_FIELD (metric, 	UINT,	DFT,  0), \
	CROSS_FIELD (intf,		CHAR,	DFT,  0), \
	CROSS_FIELD (birth, 	UINT,	TS,   0), \
	CROSS_FIELD (flags, 	UINT,	HEX,  0), \
	CROSS_END (route_t)

```

Define schema in source file. `CROSS_END` can be define in `route_schema` also then you can reuse the macro `ROUTE_SCHEMA()` or combine them.
```c linenums="1"
	// In source file
	#undef	CROSS_STRUCT_NAME
	#define	CROSS_STRUCT_NAME	route_t
	cross_field_t 	route_schema[] = {
		ROUTE_SCHEMA()
	}
```
