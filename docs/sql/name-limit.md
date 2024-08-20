---
template: overrides/blog.html
---

# Name and Limit

## Case Sensitive

| **Type**     | **Case-sensitive**  
| ::           | ----
  Keyword      | False
  Function     | False
  DB Name      | False
  Table Name   | False
  Column Name  | False
  Index Name   | False

## Limit

| **Type**   			| **Default Limit**    | **Configurable** 
| ::         			| ----                 | ----
  DB Name    			| 64                   | Yes
  Table Name 			| 64                   | Yes
  Column Name			| 64                   | Yes
  Index Name 			| 64                   | Yes
  Single SQL statement  | 1048576 (1M)         | Yes
  DB per process		| 1024                 | Yes
  Table per DB  		| 4095                 | Yes (at most 4095 now, will support more than 4K later)
  Rows per Table  		| 2,000,000,000 (2B)   | Not now, will support more than 2B later
  Row size				| 524288 (512K)        | Yes
  Index per Table    	| 16                   | Yes (at most 64)
  Filter Fields    		| 64                   | Yes