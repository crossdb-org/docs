---
template: overrides/blog.html
---

# Bench Test

## Test with 1000 rows

```bash
crossdb/bench/c$ ./a.out 1000
********************** INSERT 1000 with SQL **********************
Use time 763ns, QPS 1310615
********************** Random LKUP 5000000 with SQL **********************
Use time 951987ns, QPS 5252172
Use time 921033ns, QPS 5428687
Use time 915605ns, QPS 5460870
Use time 926288ns, QPS 5397889
********************** UPDATE 1000 with SQL **********************
Use time 760ns, QPS 1315789
********************** DELETE 1000 with SQL **********************
Use time 438ns, QPS 2283105

********************** INSERT 1000 with SQL **********************
Use time 687ns, QPS 1455604
********************** Random LKUP 10000000 with Prepared STMT **********************
Use time 294717ns, QPS 33930855
Use time 297268ns, QPS 33639678
Use time 298728ns, QPS 33475268
Use time 295278ns, QPS 33866390
********************** UPDATE 1000 with Prepared SMTT **********************
Use time 576ns, QPS 1736111
********************** DELETE 1000 with Prepared SQL **********************
Use time 252ns, QPS 3968253
```

## Test with 1000,1000 rows

```bash
crossdb$ make bench
or
crossdb/bench/c$ ./a.out

********************** INSERT 1000000 with SQL **********************
Use time 539342ns, QPS 1854111
********************** Random LKUP 1000000 with SQL **********************
Use time 336044ns, QPS 2975800
Use time 333927ns, QPS 2994666
Use time 329699ns, QPS 3033069
Use time 331632ns, QPS 3015390
********************** UPDATE 1000000 with SQL **********************
Use time 579945ns, QPS 1724301
********************** DELETE 1000000 with SQL **********************
Use time 405004ns, QPS 2469111

********************** INSERT 1000000 with SQL **********************
Use time 527486ns, QPS 1895784
********************** Random LKUP 10000000 with Prepared STMT **********************
Use time 1678936ns, QPS 5956153
Use time 1668971ns, QPS 5991715
Use time 1670993ns, QPS 5984465
Use time 1652815ns, QPS 6050283
********************** UPDATE 1000000 with Prepared SMTT **********************
Use time 381320ns, QPS 2622469
********************** DELETE 1000000 with Prepared SQL **********************
Use time 232181ns, QPS 4306984
```

## Maximum performance

This will build with `-O3` and `-march=native` flags

```bash
crossdb/bench/c$ make fast
```