---
title: Schema and Format APIs


---

# Schema and Format APIs


**Module:** **[CalixDB APIs](./group__APIs.html)**

 [More...](#detailed-description)










## Functions

|                | Name           |
| -------------- | -------------- |
| cdb_schema_t * | **[cdb_table_get_schema](./group__Schema.html#function-cdb_table_get_schema)**(cdb_table_h hTbl, int flags)  |
| cdb_error | **[cdb_schema_expand](./group__Schema.html#function-cdb_schema_expand)**(cdb_schema_t ** ppSchema, cdb_schema_field_t * pSrcSchema, int schema_count, int rsvd_schema)  |
| cdb_error | **[cdb_schema_append](./group__Schema.html#function-cdb_schema_append)**(cdb_schema_t * pSchema, cdb_schema_field_entry * pField, cdb_bool bAdjRecSize)  |
| int | **[cdb_schema_sprintf](./group__Schema.html#function-cdb_schema_sprintf)**(cdb_schema_t * pSchema, char * buf, size_t size, cdb_dump_format format, const void * pRecord, const char * pTblName, cdb_dump_flag flags)  |
| int | **[cdb_schema_sprintf2](./group__Schema.html#function-cdb_schema_sprintf2)**(cdb_schema_t * pSchema, char buf[], size_t size, cdb_dump_format format, const void * pRecord, const void * pSelFlds, cdb_rec_id rec_id, const char * pTblName, cdb_dump_flag flags)  |
| int | **[cdb_schema_scanf](./group__Schema.html#function-cdb_schema_scanf)**(cdb_schema_t * pSchema, const char * str, cdb_dump_format format, void * pRecord, cdb_dump_flag flags)  |
| int | **[cdb_schema_scanf2](./group__Schema.html#function-cdb_schema_scanf2)**(cdb_schema_t * pSchema, const char * str, cdb_dump_format format, void * pRecord, cdb_fields_t * pSelFlds, cdb_rec_id * pRecId, cdb_dump_flag flags)  |
| int | **[cdb_record_sprintf](./group__Schema.html#function-cdb_record_sprintf)**(cdb_table_h hTbl, char * buf, size_t size, cdb_dump_format format, const void * pRecord, cdb_dump_flag flags)  |
| int | **[cdb_record_sprintf2](./group__Schema.html#function-cdb_record_sprintf2)**(cdb_table_h hTbl, char * buf, size_t size, cdb_dump_format format, const void * pRecord, const void * pSelFlds, cdb_rec_id rec_id, cdb_dump_flag flags)  |
| int | **[cdb_record_scanf](./group__Schema.html#function-cdb_record_scanf)**(cdb_table_h hTbl, const char * str, cdb_dump_format format, void * pRecord, cdb_dump_flag flags)  |
| int | **[cdb_record_scanf2](./group__Schema.html#function-cdb_record_scanf2)**(cdb_table_h hTbl, const char * str, cdb_dump_format format, void * pRecord, cdb_fields_t * pSelFlds, cdb_rec_id * pRecId, cdb_dump_flag flags)  |





## Detailed Description





























------------------





## Functions Documentation

### function cdb_table_get_schema

```cpp
cdb_schema_t * cdb_table_get_schema(
    cdb_table_h hTbl,
    int flags
)
```






























### function cdb_schema_expand

```cpp
cdb_error cdb_schema_expand(
    cdb_schema_t ** ppSchema,
    cdb_schema_field_t * pSrcSchema,
    int schema_count,
    int rsvd_schema
)
```






























### function cdb_schema_append

```cpp
cdb_error cdb_schema_append(
    cdb_schema_t * pSchema,
    cdb_schema_field_entry * pField,
    cdb_bool bAdjRecSize
)
```






























### function cdb_schema_sprintf

```cpp
int cdb_schema_sprintf(
    cdb_schema_t * pSchema,
    char * buf,
    size_t size,
    cdb_dump_format format,
    const void * pRecord,
    const char * pTblName,
    cdb_dump_flag flags
)
```






























### function cdb_schema_sprintf2

```cpp
int cdb_schema_sprintf2(
    cdb_schema_t * pSchema,
    char buf[],
    size_t size,
    cdb_dump_format format,
    const void * pRecord,
    const void * pSelFlds,
    cdb_rec_id rec_id,
    const char * pTblName,
    cdb_dump_flag flags
)
```






























### function cdb_schema_scanf

```cpp
int cdb_schema_scanf(
    cdb_schema_t * pSchema,
    const char * str,
    cdb_dump_format format,
    void * pRecord,
    cdb_dump_flag flags
)
```






























### function cdb_schema_scanf2

```cpp
int cdb_schema_scanf2(
    cdb_schema_t * pSchema,
    const char * str,
    cdb_dump_format format,
    void * pRecord,
    cdb_fields_t * pSelFlds,
    cdb_rec_id * pRecId,
    cdb_dump_flag flags
)
```






























### function cdb_record_sprintf

```cpp
int cdb_record_sprintf(
    cdb_table_h hTbl,
    char * buf,
    size_t size,
    cdb_dump_format format,
    const void * pRecord,
    cdb_dump_flag flags
)
```






























### function cdb_record_sprintf2

```cpp
int cdb_record_sprintf2(
    cdb_table_h hTbl,
    char * buf,
    size_t size,
    cdb_dump_format format,
    const void * pRecord,
    const void * pSelFlds,
    cdb_rec_id rec_id,
    cdb_dump_flag flags
)
```






























### function cdb_record_scanf

```cpp
int cdb_record_scanf(
    cdb_table_h hTbl,
    const char * str,
    cdb_dump_format format,
    void * pRecord,
    cdb_dump_flag flags
)
```






























### function cdb_record_scanf2

```cpp
int cdb_record_scanf2(
    cdb_table_h hTbl,
    const char * str,
    cdb_dump_format format,
    void * pRecord,
    cdb_fields_t * pSelFlds,
    cdb_rec_id * pRecId,
    cdb_dump_flag flags
)
```



































-------------------------------

Updated on  7 December 2020 at 00:47:40 PST