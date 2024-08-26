---
template: overrides/blog.html
---

# Bench Test

```bash
make bench
make bench-sqlite

crossdb/bench/basic$ ./bench-crossdb -h
Usage:
  -h                        show this help
  -n <row count>            default 1000000
  -r <round count>          test round, default 1
  -q                        quite mode

bench/basic$ ./bench-sqlite -h
Usage:
  -h                        show this help
  -n <row count>            default 1000000
  -r <round count>          test round, default 1
  -j                        Charts output
  -q                        quite mode
```

## Test with 1000 rows

```bash
crossdb/bench/basic$ ./bench-crossdb -n 1000
******************** Sequential Test *********************

[============= SQL Test =============]

------------ INSERT 1000 ------------
Use time     440us, QPS  2,272,727
------------ Sequential LKUP 2000000 ------------
Use time  233250us, QPS  8,574,490
Use time  228780us, QPS  8,742,022
Use time  228706us, QPS  8,744,851
Use time  233798us, QPS  8,554,393
Use time  230729us, QPS  8,668,177
------------ Sequential UPDATE 1000000 ------------
Use time  233156us, QPS  4,288,973
------------ Sequential DELETE 1000 ------------
Use time     253us, QPS  3,952,569

[============= Prepared STMT Test =============]

------------ INSERT 1000 ------------
Use time     114us, QPS  8,771,929
------------ Sequential LKUP 10000000 ------------
Use time  332693us, QPS 30,057,740
Use time  328084us, QPS 30,479,999
Use time  337989us, QPS 29,586,761
Use time  331483us, QPS 30,167,459
Use time  326260us, QPS 30,650,401
------------ Sequential UPDATE 1000000 ------------
Use time   95963us, QPS 10,420,682
------------ Sequential DELETE 1000 ------------
Use time     103us, QPS  9,708,737


*********************     Random Test *********************

[============= SQL Test =============]

------------ INSERT 1000 ------------
Use time     281us, QPS  3,558,718
------------ Random LKUP 2000000 ------------
Use time  238836us, QPS  8,373,946
Use time  232736us, QPS  8,593,427
Use time  230396us, QPS  8,680,706
Use time  234262us, QPS  8,537,449
Use time  240881us, QPS  8,302,854
------------ Random UPDATE 1000000 ------------
Use time  231788us, QPS  4,314,287
------------ Random DELETE 1000 ------------
Use time     242us, QPS  4,132,231

[============= Prepared STMT Test =============]

------------ INSERT 1000 ------------
Use time     145us, QPS  6,896,551
------------ Random LKUP 10000000 ------------
Use time  320446us, QPS 31,206,505
Use time  320016us, QPS 31,248,437
Use time  321470us, QPS 31,107,101
Use time  320841us, QPS 31,168,086
Use time  319414us, QPS 31,307,331
------------ Random UPDATE 1000000 ------------
Use time   96081us, QPS 10,407,885
------------ Random DELETE 1000 ------------
Use time     104us, QPS  9,615,384

####################### 1000 Rows Sequential Test Result ###############################

     Rows |       DB |     Access | INSERT QPS |  QUERY QPS | UPDATE QPS
  CrossDB |      SQL |  2,272,727 |  8,656,786 |  4,288,973 |  3,952,569
  CrossDB |    PSTMT |  8,771,929 | 30,188,472 | 10,420,682 |  9,708,737

####################### 1000 Rows Random Test Result ###############################

     Rows |       DB |     Access | INSERT QPS |  QUERY QPS | UPDATE QPS
  CrossDB |      SQL |  3,558,718 |  8,497,676 |  4,314,287 |  4,132,231
  CrossDB |    PSTMT |  6,896,551 | 31,207,492 | 10,407,885 |  9,615,384
```

## Test with 1000,1000 rows

```bash
crossdb/bench/basic$ ./bench-crossdb -n 1000000
******************** Sequential Test *********************

[============= SQL Test =============]

------------ INSERT 1000000 ------------
Use time  283026us, QPS  3,533,244
------------ Sequential LKUP 2000000 ------------
Use time  239741us, QPS  8,342,336
Use time  241488us, QPS  8,281,985
Use time  250842us, QPS  7,973,146
Use time  248089us, QPS  8,061,623
Use time  244100us, QPS  8,193,363
------------ Sequential UPDATE 1000000 ------------
Use time  232698us, QPS  4,297,415
------------ Sequential DELETE 1000000 ------------
Use time  182755us, QPS  5,471,806

[============= Prepared STMT Test =============]

------------ INSERT 1000000 ------------
Use time  114352us, QPS  8,744,927
------------ Sequential LKUP 10000000 ------------
Use time  340243us, QPS 29,390,758
Use time  345961us, QPS 28,904,992
Use time  335192us, QPS 29,833,647
Use time  330887us, QPS 30,221,797
Use time  331956us, QPS 30,124,474
------------ Sequential UPDATE 1000000 ------------
Use time  101290us, QPS  9,872,642
------------ Sequential DELETE 1000000 ------------
Use time   91695us, QPS 10,905,720


*********************     Random Test *********************

[============= SQL Test =============]

------------ INSERT 1000000 ------------
Use time  286132us, QPS  3,494,890
------------ Random LKUP 2000000 ------------
Use time  509310us, QPS  3,926,881
Use time  521360us, QPS  3,836,120
Use time  520938us, QPS  3,839,228
Use time  507936us, QPS  3,937,503
Use time  511362us, QPS  3,911,123
------------ Random UPDATE 1000000 ------------
Use time  349326us, QPS  2,862,655
------------ Random DELETE 1000000 ------------
Use time  321771us, QPS  3,107,800

[============= Prepared STMT Test =============]

------------ INSERT 1000000 ------------
Use time  166302us, QPS  6,013,156
------------ Random LKUP 10000000 ------------
Use time 1693871us, QPS  5,903,637
Use time 1696559us, QPS  5,894,283
Use time 1684474us, QPS  5,936,571
Use time 1615879us, QPS  6,188,582
Use time 1658627us, QPS  6,029,083
------------ Random UPDATE 1000000 ------------
Use time  218351us, QPS  4,579,782
------------ Random DELETE 1000000 ------------
Use time  224281us, QPS  4,458,692

####################### 1000000 Rows Sequential Test Result ###############################

     Rows |       DB |     Access | INSERT QPS |  QUERY QPS | UPDATE QPS
  CrossDB |      SQL |  3,533,244 |  8,170,490 |  4,297,415 |  5,471,806
  CrossDB |    PSTMT |  8,744,927 | 29,695,133 |  9,872,642 | 10,905,720

####################### 1000000 Rows Random Test Result ###############################

     Rows |       DB |     Access | INSERT QPS |  QUERY QPS | UPDATE QPS
  CrossDB |      SQL |  3,494,890 |  3,890,171 |  2,862,655 |  3,107,800
  CrossDB |    PSTMT |  6,013,156 |  5,990,431 |  4,579,782 |  4,458,692
```

## Maximum performance

This will build with `-O3` and `-march=native` flags

```bash
make fast
```