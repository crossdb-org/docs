---
template: overrides/blog.html
---

# C++ STL Map and HashMap Benchmark vs. CrossDB 

## Test Tool

This tool will use auto-commit transaction to test single CRUD performance for CrossDB Prepared STMT.

[**Bench Tool**](../../../get-started/bench/)

[**Bench Test Framework**](https://github.com/crossdb-org/crossdb/blob/main/bench/basic/bench.h)

[**STL Map&HashMap Bench Driver**](https://github.com/crossdb-org/crossdb/blob/main/bench/basic/bench-stlmap.cpp)

[**CrossDB Bench Driver**](https://github.com/crossdb-org/crossdb/blob/main/bench/basic/bench-crossdb.c)

The test scripts will conduct five rounds of testing and select the average value.

```bash
crossdb/bench/basic$ ./bench-stlmap -q -r 5 -n 1000
crossdb/bench/basic$ ./bench-stlmap -q -r 5 -n 10000
crossdb/bench/basic$ ./bench-stlmap -q -r 5 -n 100000
crossdb/bench/basic$ ./bench-stlmap -q -r 5 -n 1000000
crossdb/bench/basic$ ./bench-stlmap -q -r 5 -n 10000000
```

```bash
crossdb/bench/basic$ ./bench-crossdb -q -r 5 -n 1000
crossdb/bench/basic$ ./bench-crossdb -q -r 5 -n 10000
crossdb/bench/basic$ ./bench-crossdb -q -r 5 -n 100000
crossdb/bench/basic$ ./bench-crossdb -q -r 5 -n 1000000
crossdb/bench/basic$ ./bench-crossdb -q -r 5 -n 10000000
```

> **NOTE**
> - To ensure fairness in testing, both STL Map and HashMap (unordered_map) use pthread read-write locks, as CrossDB is thread-safe with read-write locks by default. 
> - `std::shared_mutex` is not used because, in a single-threaded context, the compiler optimizes the code and omits the lock.
> - CrossDB will support a lockless mode in the future, and the benchmark tool will offer an option to configure the lock mode.
> - There is a macro `USE_STRING` that allows configuration to use either `C char array` or `C++ string`. By default, it uses `C char array`, which offers better performance.

> **NOTE**
> Test results will vary depending on the CPU, OS, compiler, and system load. Even on the same server, the results will differ each time.

## Test Server
```
CPU			: 11th Gen Intel(R) Core(TM) i7-11700 @ 2.50GHz, Cache size 16384 KB
OS			: Ubuntu 24.04
CrossDB		: 0.8.0
Compiler 	: gcc 13.2.0 with -O2 optimization
c++ std		: c++17
```

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>


## In-Memory DB Test with INT

### 1,000 Rows
-------------------------------------------------------------------------------

#### Sequential Access Test

  DB      | Access   | Insert QPS | Query QPS  | Update QPS | Delete QPS
 ::       | ::       | ----       | ----       | ----       | ---- 
      STL |      Map | 10,442,591 | 21,776,205 | 27,627,912 | 19,777,677
  CrossDB |     STMT | 17,773,584 | 28,868,027 | 22,767,213 | 23,593,441
      STL |  HashMap | 14,284,640 | 44,081,055 | 46,764,986 | 38,358,974

<div>
  <canvas id="row1k-sqlseq"></canvas>
</div>

<script>
  ctx = document.getElementById('row1k-sqlseq');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Insert', 'Query', 'Update', 'Delete'],
      datasets: [
        {label: 'STL Map', data:[10442591, 21776205, 27627912, 19777677], borderWidth: 1, borderRadius: 10},
        {label: 'CrossDB STMT', data:[17773584, 28868027, 22767213, 23593441], borderWidth: 1, borderRadius: 10},
        {label: 'STL HashMap', data:[14284640, 44081055, 46764986, 38358974], borderWidth: 1, borderRadius: 10},
	  ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
</script>

#### Random Access Test

  DB      | Access   | Insert QPS | Query QPS  | Update QPS | Delete QPS
 ::       | ::       | ----       | ----       | ----       | ---- 
      STL |      Map |  9,841,660 | 15,349,472 | 17,730,115 |  9,580,807
  CrossDB |     STMT | 20,171,189 | 28,834,741 | 22,076,943 | 21,973,314
      STL |  HashMap | 14,975,036 | 42,500,933 | 48,155,156 | 36,146,519

<div>
  <canvas id="row1k-sqlrand"></canvas>
</div>

<script>
  ctx = document.getElementById('row1k-sqlrand');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Insert', 'Query', 'Update', 'Delete'],
      datasets: [
        {label: 'STL Map', data:[9841660, 15349472, 17730115, 9580807], borderWidth: 1, borderRadius: 10},
        {label: 'CrossDB STMT', data:[20171189, 28834741, 22076943, 21973314], borderWidth: 1, borderRadius: 10},
        {label: 'STL HashMap', data:[14975036, 42500933, 48155156, 36146519], borderWidth: 1, borderRadius: 10},
	  ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
</script>


### 10,000 Rows
-------------------------------------------------------------------------------

#### Sequential Access Test

  DB      | Access   | Insert QPS | Query QPS  | Update QPS | Delete QPS
 ::       | ::       | ----       | ----       | ----       | ---- 
      STL |      Map |  8,113,054 | 16,625,624 | 19,813,725 | 22,953,185
  CrossDB |     STMT | 14,752,474 | 28,119,037 | 22,175,662 | 22,469,934
      STL |  HashMap | 18,570,206 | 44,608,531 | 46,079,259 | 39,167,902

<div>
  <canvas id="row10k-sqlseq"></canvas>
</div>

<script>
  ctx = document.getElementById('row10k-sqlseq');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Insert', 'Query', 'Update', 'Delete'],
      datasets: [
        {label: 'STL Map', data:[8113054, 16625624, 19813725, 22953185], borderWidth: 1, borderRadius: 10},
        {label: 'CrossDB STMT', data:[14752474, 28119037, 22175662, 22469934], borderWidth: 1, borderRadius: 10},
        {label: 'STL HashMap', data:[18570206, 44608531, 46079259, 39167902], borderWidth: 1, borderRadius: 10},
	  ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
</script>

#### Random Access Test

  DB      | Access   | Insert QPS | Query QPS  | Update QPS | Delete QPS
 ::       | ::       | ----       | ----       | ----       | ---- 
      STL |      Map |  8,629,238 |  8,951,170 |  9,888,694 |  6,962,080
  CrossDB |     STMT | 16,550,826 | 26,314,983 | 21,294,530 | 21,212,114
      STL |  HashMap | 19,087,491 | 30,989,837 | 43,464,636 | 29,057,718

<div>
  <canvas id="row10k-sqlrand"></canvas>
</div>

<script>
  ctx = document.getElementById('row10k-sqlrand');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Insert', 'Query', 'Update', 'Delete'],
      datasets: [
        {label: 'STL Map', data:[8629238, 8951170, 9888694, 6962080], borderWidth: 1, borderRadius: 10},
        {label: 'CrossDB STMT', data:[16550826, 26314983, 21294530, 21212114], borderWidth: 1, borderRadius: 10},
        {label: 'STL HashMap', data:[19087491, 30989837, 43464636, 29057718], borderWidth: 1, borderRadius: 10},
	  ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
</script>


### 100,000 Rows
-------------------------------------------------------------------------------

#### Sequential Access Test

  DB      | Access   | Insert QPS | Query QPS  | Update QPS | Delete QPS
 ::       | ::       | ----       | ----       | ----       | ---- 
      STL |      Map |  5,145,771 | 15,298,169 | 17,967,132 | 22,018,252
  CrossDB |     STMT | 19,700,788 | 28,480,655 | 21,548,692 | 23,305,607
      STL |  HashMap | 20,788,054 | 49,810,428 | 53,449,199 | 46,489,166

<div>
  <canvas id="row100k-sqlseq"></canvas>
</div>

<script>
  ctx = document.getElementById('row100k-sqlseq');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Insert', 'Query', 'Update', 'Delete'],
      datasets: [
        {label: 'STL Map', data:[5145771, 15298169, 17967132, 22018252], borderWidth: 1, borderRadius: 10},
        {label: 'CrossDB STMT', data:[19700788, 28480655, 21548692, 23305607], borderWidth: 1, borderRadius: 10},
        {label: 'STL HashMap', data:[20788054, 49810428, 53449199, 46489166], borderWidth: 1, borderRadius: 10},
	  ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
</script>

#### Random Access Test

  DB      | Access   | Insert QPS | Query QPS  | Update QPS | Delete QPS
 ::       | ::       | ----       | ----       | ----       | ---- 
      STL |      Map |  5,815,344 |  5,163,883 |  5,531,051 |  4,941,685
  CrossDB |     STMT | 20,411,675 | 22,748,379 | 18,789,522 | 19,783,731
      STL |  HashMap | 21,936,850 | 26,063,150 | 37,778,169 | 23,640,037

<div>
  <canvas id="row100k-sqlrand"></canvas>
</div>

<script>
  ctx = document.getElementById('row100k-sqlrand');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Insert', 'Query', 'Update', 'Delete'],
      datasets: [
        {label: 'STL Map', data:[5815344, 5163883, 5531051, 4941685], borderWidth: 1, borderRadius: 10},
        {label: 'CrossDB STMT', data:[20411675, 22748379, 18789522, 19783731], borderWidth: 1, borderRadius: 10},
        {label: 'STL HashMap', data:[21936850, 26063150, 37778169, 23640037], borderWidth: 1, borderRadius: 10},
	  ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
</script>


### 1,000,000 Rows 
-------------------------------------------------------------------------------

#### Sequential Access Test

  DB      | Access   | Insert QPS | Query QPS  | Update QPS | Delete QPS
 ::       | ::       | ----       | ----       | ----       | ---- 
      STL |      Map |  2,674,488 | 12,008,803 | 13,194,472 | 14,606,515
  CrossDB |     STMT | 18,477,686 | 27,987,661 | 21,844,773 | 23,105,578
      STL |  HashMap | 20,543,816 | 48,752,370 | 49,362,932 | 45,854,590

<div>
  <canvas id="row1m-sqlseq"></canvas>
</div>

<script>
  ctx = document.getElementById('row1m-sqlseq');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Insert', 'Query', 'Update', 'Delete'],
      datasets: [
        {label: 'STL Map', data:[2674488, 12008803, 13194472, 14606515], borderWidth: 1, borderRadius: 10},
        {label: 'CrossDB STMT', data:[18477686, 27987661, 21844773, 23105578], borderWidth: 1, borderRadius: 10},
        {label: 'STL HashMap', data:[20543816, 48752370, 49362932, 45854590], borderWidth: 1, borderRadius: 10},
	  ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
</script>

#### Random Access Test

  DB      | Access   | Insert QPS | Query QPS  | Update QPS | Delete QPS
 ::       | ::       | ----       | ----       | ----       | ---- 
      STL |      Map |  3,655,302 |  1,868,468 |  2,006,574 |  1,829,826
  CrossDB |     STMT | 18,610,416 |  6,568,603 |  6,631,045 |  6,341,988
      STL |  HashMap | 22,427,027 |  7,474,584 | 10,213,001 |  6,075,652

<div>
  <canvas id="row1m-sqlrand"></canvas>
</div>

<script>
  ctx = document.getElementById('row1m-sqlrand');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Insert', 'Query', 'Update', 'Delete'],
      datasets: [
        {label: 'STL Map', data:[3655302, 1868468, 2006574, 1829826], borderWidth: 1, borderRadius: 10},
        {label: 'CrossDB STMT', data:[18610416, 6568603, 6631045, 6341988], borderWidth: 1, borderRadius: 10},
        {label: 'STL HashMap', data:[22427027, 7474584, 10213001, 6075652], borderWidth: 1, borderRadius: 10},
	  ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
</script>


### 10,000,000 Rows 
-------------------------------------------------------------------------------

#### Sequential Access Test

  DB      | Access   | Insert QPS | Query QPS  | Update QPS | Delete QPS
 ::       | ::       | ----       | ----       | ----       | ---- 
      STL |      Map |  1,722,853 |  7,860,464 |  7,879,262 |  9,947,688
  CrossDB |     STMT | 17,671,148 | 26,329,139 | 20,146,554 | 20,992,326
      STL |  HashMap | 20,558,213 | 48,890,089 | 49,051,956 | 45,776,292

<div>
  <canvas id="row10m-sqlseq"></canvas>
</div>

<script>
  ctx = document.getElementById('row10m-sqlseq');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Insert', 'Query', 'Update', 'Delete'],
      datasets: [
        {label: 'STL Map', data:[1722853, 7860464, 7879262, 9947688], borderWidth: 1, borderRadius: 10},
        {label: 'CrossDB STMT', data:[17671148, 26329139, 20146554, 20992326], borderWidth: 1, borderRadius: 10},
        {label: 'STL HashMap', data:[20558213, 48890089, 49051956, 45776292], borderWidth: 1, borderRadius: 10},
	  ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
</script>

#### Random Access Test

  DB      | Access   | Insert QPS | Query QPS  | Update QPS | Delete QPS
 ::       | ::       | ----       | ----       | ----       | ---- 
      STL |      Map |  2,154,541 |  1,035,817 |  1,041,939 |  1,094,936
  CrossDB |     STMT | 18,768,313 |  4,923,951 |  4,299,394 |  4,622,262
      STL |  HashMap | 22,269,633 |  6,651,748 |  8,840,238 |  4,838,402

<div>
  <canvas id="row10m-sqlrand"></canvas>
</div>

<script>
  ctx = document.getElementById('row10m-sqlrand');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Insert', 'Query', 'Update', 'Delete'],
      datasets: [
        {label: 'STL Map', data:[2154541, 1035817, 1041939, 1094936], borderWidth: 1, borderRadius: 10},
        {label: 'CrossDB STMT', data:[18768313, 4923951, 4299394, 4622262], borderWidth: 1, borderRadius: 10},
        {label: 'STL HashMap', data:[22269633, 6651748, 8840238, 4838402], borderWidth: 1, borderRadius: 10},
	  ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
</script>
