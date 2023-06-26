---
template: overrides/blog.html
---

# Misc APIs

## cross_errMsg {#cross_errMsg}

Return error code message
```c
const char*
cross_errMsg (cross_ret ret);
```


## cross_fieldsCreate {#cross_fieldsCreate}

Create fields handle
```c
cross_ret	
cross_fieldsCreate (cross_tbl_h hTbl, cross_fields_h *phFlds, const char *FldsStr, uint32_t flags);
```

Parameters

 Arg     | Type   | Descritpion
 ----    | ----   | ----
hTbl     | in     | Table Handle
phFlds   | out    | Fields Handle
FldsStr  | in     | Cloumn list seperated by `,`
flags    | [in]   | Not used

Returns

- `CROSS_OK`:	Create handle successfully
- `Other`:		Decode with [cross_errMsg](#cross_errmsg)


## cross_fieldsFree {#cross_fieldsFree}

Free fields handle
```c
void		cross_fieldsFree (cross_fields_h hFlds);
```


## cross_matchCreate {#cross_matchCreate}

Create match handle
```c
cross_ret	
cross_matchCreate (cross_tbl_h hTbl, cross_match_h *phMatch, const char *MatchStr, uint32_t flags);
```

Parameters

 Arg     | Type   | Descritpion
 ----    | ----   | ----
hTbl     | in     | Table Handle
phMatch  | out    | Match Handle
MatchStr | in     | Match list seperated by `,`
flags    | [in]   | Not used

Returns

- `CROSS_OK`:	Create handle successfully
- `Other`:		Decode with [cross_errMsg](#cross_errmsg)

Description

- `MatchStr` cloumn list seperated by `,`, they are `AND` together. Refer [dml.md#cross_dbGetOneRow](#cross_dbGetOneRow)
	* `fld`: equal to match `dbRow.fld` = `pMatRow.fld`.
	* `fld!=`: unequal match `dbRow.fld` != `pMatRow.fld`.
	* `fld>`: greater than match `dbRow.fld` > `pMatRow.fld`.
	* `fld>=`: greater than or equal to match `dbRow.fld` >= `pMatRow.fld`.
	* `fld<`: less match `dbRow.fld` < `pMatRow.fld`.
	* `fld<=`: leas than or equal to match `dbRow.fld` < `pMatRow.fld`.


## cross_matchFree {#cross_matchFree}

Free match handle
```c
void		cross_matchFree (cross_match_h hMatch);
```
