---
template: overrides/blog.html
---

# SQLite3 Benchmark vs. CrossDB 

## Test Tool

This tool will use auto-commit transaction to test single CRUD performance.

[**Bench Tool**](../../../get-started/bench/)

[**Bench Test Framework**](https://github.com/crossdb-org/crossdb/blob/main/bench/basic/bench.h)

[**SQLite Bench Driver**](https://github.com/crossdb-org/crossdb/blob/main/bench/basic/bench-sqlite.c)

[**CrossDB Bench Driver**](https://github.com/crossdb-org/crossdb/blob/main/bench/basic/bench-crossdb.c)

The test scripts will conduct five rounds of testing and select the average value.

```bash
crossdb/bench/basic$ ./bench-sqlite -q -r 5 -n 1000
crossdb/bench/basic$ ./bench-sqlite -q -r 5 -n 10000
crossdb/bench/basic$ ./bench-sqlite -q -r 5 -n 100000
crossdb/bench/basic$ ./bench-sqlite -q -r 5 -n 1000000
crossdb/bench/basic$ ./bench-sqlite -q -r 5 -n 10000000
```

```bash
crossdb/bench/basic$ ./bench-crossdb -q -r 5 -n 1000
crossdb/bench/basic$ ./bench-crossdb -q -r 5 -n 10000
crossdb/bench/basic$ ./bench-crossdb -q -r 5 -n 100000
crossdb/bench/basic$ ./bench-crossdb -q -r 5 -n 1000000
crossdb/bench/basic$ ./bench-crossdb -q -r 5 -n 10000000
```

## Test Server
```
CPU			: 11th Gen Intel(R) Core(TM) i7-11700 @ 2.50GHz, Cache size 16384 KB
OS			: Ubuntu 24.04
SQLite3		: 3.45.1
CrossDB		: 0.8.0
Compiler 	: gcc 13.2.0 with -O2 optimization

```

> **NOTE**
> Test results will vary depending on the CPU, OS, compiler, SQLite, and system load. Even on the same server, the results will differ each time.

<!--
cat /proc/cpuinfo
sudo lshw -class disk
-->

## SQLite3 Config

=== "IMDB"

	```
	PRAGMA synchronous = OFF
	PRAGMA journal_mode = OFF
	PRAGMA temp_store = memory
	PRAGMA optimize
	```
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>


## In-Memory DB Test with INT

### 1,000 Rows
-------------------------------------------------------------------------------

#### Sequential Access Test

  DB      | Access   | Insert QPS | Query QPS  | Update QPS | Delete QPS
 ::       | ::       | ----       | ----       | ----       | ---- 
   SQLite |      SQL |    444,031 |    347,166 |    476,283 |    547,431
   SQLite |     STMT |  1,465,141 |  1,717,823 |  1,511,057 |  1,659,559
  CrossDB |      SQL |  4,215,446 |  8,381,424 |  7,118,192 |  8,141,135
  CrossDB |     STMT | 17,773,584 | 28,868,027 | 22,767,213 | 23,593,441

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
        {label: 'SQLite SQL', data:[444031, 347166, 476283, 547431], borderWidth: 1, borderRadius: 10},
        {label: 'SQLite STMT', data:[1465141, 1717823, 1511057, 1659559], borderWidth: 1, borderRadius: 10},
        {label: 'CrossDB SQL', data:[4215446, 8381424, 7118192, 8141135], borderWidth: 1, borderRadius: 10},
        {label: 'CrossDB STMT', data:[17773584, 28868027, 22767213, 23593441], borderWidth: 1, borderRadius: 10},
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
   SQLite |      SQL |    479,327 |    342,898 |    455,207 |    513,080
   SQLite |     STMT |  1,436,354 |  1,585,270 |  1,362,022 |  1,264,225
  CrossDB |      SQL |  4,139,391 |  8,242,617 |  7,076,336 |  8,017,873
  CrossDB |     STMT | 20,171,189 | 28,834,741 | 22,076,943 | 21,973,314

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
        {label: 'SQLite SQL', data:[479327, 342898, 455207, 513080], borderWidth: 1, borderRadius: 10},
        {label: 'SQLite STMT', data:[1436354, 1585270, 1362022, 1264225], borderWidth: 1, borderRadius: 10},
        {label: 'CrossDB SQL', data:[4139391, 8242617, 7076336, 8017873], borderWidth: 1, borderRadius: 10},
        {label: 'CrossDB STMT', data:[20171189, 28834741, 22076943, 21973314], borderWidth: 1, borderRadius: 10},
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
   SQLite |      SQL |    465,746 |    365,272 |    492,969 |    567,567
   SQLite |     STMT |  1,455,917 |  1,754,636 |  1,497,556 |  1,590,700
  CrossDB |      SQL |  3,996,073 |  8,349,983 |  7,177,796 |  7,938,875
  CrossDB |     STMT | 14,752,474 | 28,119,037 | 22,175,662 | 22,469,934

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
        {label: 'SQLite SQL', data:[465746, 365272, 492969, 567567], borderWidth: 1, borderRadius: 10},
        {label: 'SQLite STMT', data:[1455917, 1754636, 1497556, 1590700], borderWidth: 1, borderRadius: 10},
        {label: 'CrossDB SQL', data:[3996073, 8349983, 7177796, 7938875], borderWidth: 1, borderRadius: 10},
        {label: 'CrossDB STMT', data:[14752474, 28119037, 22175662, 22469934], borderWidth: 1, borderRadius: 10},
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
   SQLite |      SQL |    480,618 |    351,898 |    458,791 |    488,328
   SQLite |     STMT |  1,440,440 |  1,446,238 |  1,234,900 |  1,133,192
  CrossDB |      SQL |  4,013,831 |  8,214,870 |  7,085,060 |  7,879,357
  CrossDB |     STMT | 16,550,826 | 26,314,983 | 21,294,530 | 21,212,114

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
        {label: 'SQLite SQL', data:[480618, 351898, 458791, 488328], borderWidth: 1, borderRadius: 10},
        {label: 'SQLite STMT', data:[1440440, 1446238, 1234900, 1133192], borderWidth: 1, borderRadius: 10},
        {label: 'CrossDB SQL', data:[4013831, 8214870, 7085060, 7879357], borderWidth: 1, borderRadius: 10},
        {label: 'CrossDB STMT', data:[16550826, 26314983, 21294530, 21212114], borderWidth: 1, borderRadius: 10},
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
   SQLite |      SQL |    443,883 |    333,024 |    463,052 |    533,732
   SQLite |     STMT |  1,345,829 |  1,555,415 |  1,347,454 |  1,487,578
  CrossDB |      SQL |  4,239,776 |  8,341,312 |  7,169,947 |  8,196,762
  CrossDB |     STMT | 19,700,788 | 28,480,655 | 21,548,692 | 23,305,607

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
        {label: 'SQLite SQL', data:[443883, 333024, 463052, 533732], borderWidth: 1, borderRadius: 10},
        {label: 'SQLite STMT', data:[1345829, 1555415, 1347454, 1487578], borderWidth: 1, borderRadius: 10},
        {label: 'CrossDB SQL', data:[4239776, 8341312, 7169947, 8196762], borderWidth: 1, borderRadius: 10},
        {label: 'CrossDB STMT', data:[19700788, 28480655, 21548692, 23305607], borderWidth: 1, borderRadius: 10},
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
   SQLite |      SQL |    477,014 |    316,785 |    424,871 |    447,925
   SQLite |     STMT |  1,324,866 |  1,090,353 |    943,368 |    870,952
  CrossDB |      SQL |  4,365,528 |  7,832,824 |  6,781,819 |  7,585,048
  CrossDB |     STMT | 20,411,675 | 22,748,379 | 18,789,522 | 19,783,731

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
        {label: 'SQLite SQL', data:[477014, 316785, 424871, 447925], borderWidth: 1, borderRadius: 10},
        {label: 'SQLite STMT', data:[1324866, 1090353, 943368, 870952], borderWidth: 1, borderRadius: 10},
        {label: 'CrossDB SQL', data:[4365528, 7832824, 6781819, 7585048], borderWidth: 1, borderRadius: 10},
        {label: 'CrossDB STMT', data:[20411675, 22748379, 18789522, 19783731], borderWidth: 1, borderRadius: 10},
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
   SQLite |      SQL |    409,641 |    347,039 |    450,932 |    526,749
   SQLite |     STMT |    971,797 |  1,530,663 |  1,317,463 |  1,410,394
  CrossDB |      SQL |  4,186,583 |  8,375,044 |  7,140,896 |  8,163,019
  CrossDB |     STMT | 18,477,686 | 27,987,661 | 21,844,773 | 23,105,578

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
        {label: 'SQLite SQL', data:[409641, 347039, 450932, 526749], borderWidth: 1, borderRadius: 10},
        {label: 'SQLite STMT', data:[971797, 1530663, 1317463, 1410394], borderWidth: 1, borderRadius: 10},
        {label: 'CrossDB SQL', data:[4186583, 8375044, 7140896, 8163019], borderWidth: 1, borderRadius: 10},
        {label: 'CrossDB STMT', data:[18477686, 27987661, 21844773, 23105578], borderWidth: 1, borderRadius: 10},
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
   SQLite |      SQL |    418,170 |    280,799 |    348,489 |    313,792
   SQLite |     STMT |    974,462 |    727,507 |    667,852 |    459,427
  CrossDB |      SQL |  4,147,156 |  4,302,668 |  4,083,974 |  4,255,194
  CrossDB |     STMT | 18,610,416 |  6,568,603 |  6,631,045 |  6,341,988

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
        {label: 'SQLite SQL', data:[418170, 280799, 348489, 313792], borderWidth: 1, borderRadius: 10},
        {label: 'SQLite STMT', data:[974462, 727507, 667852, 459427], borderWidth: 1, borderRadius: 10},
        {label: 'CrossDB SQL', data:[4147156, 4302668, 4083974, 4255194], borderWidth: 1, borderRadius: 10},
        {label: 'CrossDB STMT', data:[18610416, 6568603, 6631045, 6341988], borderWidth: 1, borderRadius: 10},
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
   SQLite |      SQL |    243,287 |    340,278 |    445,961 |    518,552
   SQLite |     STMT |    277,805 |  1,475,522 |  1,251,100 |  1,321,721
  CrossDB |      SQL |  4,113,196 |  8,186,354 |  6,983,995 |  7,503,637
  CrossDB |     STMT | 17,671,148 | 26,329,139 | 20,146,554 | 20,992,326

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
        {label: 'SQLite SQL', data:[243287, 340278, 445961, 518552], borderWidth: 1, borderRadius: 10},
        {label: 'SQLite STMT', data:[277805, 1475522, 1251100, 1321721], borderWidth: 1, borderRadius: 10},
        {label: 'CrossDB SQL', data:[4113196, 8186354, 6983995, 7503637], borderWidth: 1, borderRadius: 10},
        {label: 'CrossDB STMT', data:[17671148, 26329139, 20146554, 20992326], borderWidth: 1, borderRadius: 10},
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
   SQLite |      SQL |    249,471 |    251,937 |    312,320 |    140,818
   SQLite |     STMT |    274,652 |    588,801 |    556,308 |    128,117
  CrossDB |      SQL |  4,067,964 |  3,445,369 |  3,050,205 |  3,360,645
  CrossDB |     STMT | 18,768,313 |  4,923,951 |  4,299,394 |  4,622,262

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
        {label: 'SQLite SQL', data:[249471, 251937, 312320, 140818], borderWidth: 1, borderRadius: 10},
        {label: 'SQLite STMT', data:[274652, 588801, 556308, 128117], borderWidth: 1, borderRadius: 10},
        {label: 'CrossDB SQL', data:[4067964, 3445369, 3050205, 3360645], borderWidth: 1, borderRadius: 10},
        {label: 'CrossDB STMT', data:[18768313, 4923951, 4299394, 4622262], borderWidth: 1, borderRadius: 10},
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
