---
template: overrides/blog.html
---

# Bench Test

## Quick Test

```bash
crossdb$ make bench
crossdb$ make bench-sqlite
crossdb$ make bench-stlmap
```

## Bench Tools

Build all benchmark tools.

```bash
crossdb/bench/basic$ make build
```

Detailed output example

```bash
******************** Sequential Test *********************

[============= SQL Test =============]

------------ INSERT   1,000 ------------
Use time     424us, QPS  2,358,490
------------ Sequential LKUP  2,000,000 ------------
Use time  307601us, QPS  6,501,929
Use time  267009us, QPS  7,490,384
Use time  269925us, QPS  7,409,465
Use time  312344us, QPS  6,403,196
Use time  279971us, QPS  7,143,597
------------ Sequential UPDATE  1,000,000 ------------
Use time  155097us, QPS  6,447,577
------------ Sequential DELETE   1,000 ------------
Use time     163us, QPS  6,134,969

[============= STMT Test =============]

------------ INSERT   1,000 ------------
Use time     171us, QPS  5,847,953
------------ Sequential LKUP 10,000,000 ------------
Use time  390880us, QPS 25,583,299
Use time  399394us, QPS 25,037,932
Use time  394197us, QPS 25,368,026
Use time  394975us, QPS 25,318,058
Use time  392603us, QPS 25,471,022
------------ Sequential UPDATE  1,000,000 ------------
Use time   51747us, QPS 19,324,791
------------ Sequential DELETE   1,000 ------------
Use time      52us, QPS 19,230,769


*********************     Random Test *********************

[============= SQL Test =============]

------------ INSERT   1,000 ------------
Use time     338us, QPS  2,958,579
------------ Random LKUP  2,000,000 ------------
Use time  268122us, QPS  7,459,290
Use time  269225us, QPS  7,428,730
Use time  269999us, QPS  7,407,434
Use time  273119us, QPS  7,322,815
Use time  272693us, QPS  7,334,255
------------ Random UPDATE  1,000,000 ------------
Use time  158065us, QPS  6,326,511
------------ Random DELETE   1,000 ------------
Use time     138us, QPS  7,246,376

[============= STMT Test =============]

------------ INSERT   1,000 ------------
Use time      61us, QPS 16,393,442
------------ Random LKUP 10,000,000 ------------
Use time  397232us, QPS 25,174,205
Use time  414939us, QPS 24,099,927
Use time  498385us, QPS 20,064,809
Use time  431194us, QPS 23,191,417
Use time  407655us, QPS 24,530,546
------------ Random UPDATE  1,000,000 ------------
Use time   51968us, QPS 19,242,610
------------ Random DELETE   1,000 ------------
Use time      52us, QPS 19,230,769
#######################   1,000 Rows Sequential Test Result ###############################
       DB |   Access | INSERT QPS |  QUERY QPS | UPDATE QPS | DELETE QPS
  CrossDB |      SQL |  2,358,490 |  6,989,714 |  6,447,577 |  6,134,969
  CrossDB |     STMT |  5,847,953 | 25,355,667 | 19,324,791 | 19,230,769
#######################   1,000 Rows Random Test Result ###############################
       DB |   Access | INSERT QPS |  QUERY QPS | UPDATE QPS | DELETE QPS
  CrossDB |      SQL |  2,958,579 |  7,390,504 |  6,326,511 |  7,246,376
  CrossDB |     STMT | 16,393,442 | 23,412,180 | 19,242,610 | 19,230,769
```

## CrossDB Test

```bash
crossdb/bench/basic$ make 

crossdb/bench/basic$ ./bench-crossdb -h
Usage:
  -h                        show this help
  -n <row count>            default 1000000
  -r <round count>          test round, default 1
  -c <cpu core>             bind cpu core
  -q                        quite mode
```

```bash
./bench-crossdb -q -n 1000

./bench-crossdb -q -n 1000000

#######################  1,000,000 Rows Sequential Test Result ###############################
       DB |   Access | INSERT QPS |  QUERY QPS | UPDATE QPS | DELETE QPS
  CrossDB |      SQL |  3,264,389 |  7,009,289 |  6,011,674 |  6,387,082
  CrossDB |     STMT | 15,284,910 | 18,752,608 | 17,713,536 | 19,351,342
#######################  1,000,000 Rows Random Test Result ###############################
       DB |   Access | INSERT QPS |  QUERY QPS | UPDATE QPS | DELETE QPS
  CrossDB |      SQL |  3,645,989 |  2,510,993 |  2,162,218 |  2,290,567
  CrossDB |     STMT | 17,229,793 |  4,548,306 |  5,023,661 |  3,877,532
```

* Maximum performance

This will build with `-O3` and `-march=native` flags.

```bash
crossdb/bench/basic$ make fast
```


## SQLite Test

```bash
crossdb/bench/basic$ make sqlite
crossdb/bench/basic$ ./bench-sqlite -h
Usage:
  -h                        show this help
  -n <row count>            default 1000000
  -r <round count>          test round, default 1
  -c <cpu core>             bind cpu core
  -q                        quite mode
```

```bash

./bench-sqlite -q -n 1000

./bench-sqlite -q -n 1000000

#######################  1,000,000 Rows Sequential Test Result ###############################
       DB |   Access | INSERT QPS |  QUERY QPS | UPDATE QPS | DELETE QPS
   SQLite |      SQL |    376,208 |    265,398 |    341,315 |    385,447
   SQLite |     STMT |    730,936 |  1,190,511 |  1,226,903 |  1,185,077
#######################  1,000,000 Rows Random Test Result ###############################
       DB |   Access | INSERT QPS |  QUERY QPS | UPDATE QPS | DELETE QPS
   SQLite |      SQL |    383,971 |    212,220 |    272,373 |    261,880
   SQLite |     STMT |    855,666 |    556,285 |    451,552 |    397,380
```


## C++ STL Map and HashMap Test

```bash
crossdb/bench/basic$ make stlmap
crossdb/bench/basic$ ./bench-stlmap -h
Usage:
  -h                        show this help
  -n <row count>            default 1000000
  -r <round count>          test round, default 1
  -c <cpu core>             bind cpu core
  -q                        quite mode
```

```bash
./bench-stlmap -q -n 1000

./bench-stlmap -q -n 1000000

#######################  1,000,000 Rows Sequential Test Result ###############################
       DB |   Access | INSERT QPS |  QUERY QPS | UPDATE QPS | DELETE QPS
      STL |      Map |  2,376,887 | 10,532,768 | 11,597,765 | 12,824,772
      STL |  HashMap | 18,233,311 | 42,200,012 | 41,266,471 | 37,572,742
#######################  1,000,000 Rows Random Test Result ###############################
       DB |   Access | INSERT QPS |  QUERY QPS | UPDATE QPS | DELETE QPS
      STL |      Map |  3,208,118 |  1,287,031 |  1,391,215 |  1,314,713
      STL |  HashMap | 19,734,531 |  5,906,412 |  8,522,950 |  5,002,691

```
