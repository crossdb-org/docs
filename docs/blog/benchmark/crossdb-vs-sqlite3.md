---
template: overrides/blog.html
---

# SQLite3 Benchmark vs. CrossDB 

## Test Tool

This tool will use auto-commit transaction to test single CRUD performance.

[**Bench Test**](../../../get-started/bench/)

## Test Server
```
CPU			: 11th Gen Intel(R) Core(TM) i7-11700 @ 2.50GHz, Cache size 16384 KB
OS			: Ubuntu 24.04
SQLite3		: v3.45.1
CrossDB		: v0.7.0
```

> **NOTE**
> Test result will vary with CPU/OS/SQLite Version/System Load. And even on the same server, it'll vary each time.

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

## IMDB Test

### 1000 Rows Sequential Access Test
-------------------------------------------------------------------------------

  DB      | Access        | Insert QPS | Query QPS  | Update QPS | Delete QPS
 ::       | ::            | ----       | ----       | ----       | ---- 
   SQLite |      SQL      |    463,229 |    372,635 |    447,530 |    567,210
   SQLite | Prepared STMT |  1,533,216 |  1,842,927 |  1,456,943 |  1,730,394
  CrossDB |      SQL      |  3,448,006 |  7,897,318 |  4,513,309 |  5,605,978
  CrossDB | Prepared STMT |  9,827,998 | 28,163,023 |  9,977,849 | 10,353,361
  
<div>
  <canvas id="row1k-sqlseq"></canvas>
</div>

<script>
  ctx = document.getElementById('row1k-sqlseq');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Insert', 'Query', 'Update', 'Delete'],
      datasets: [{
        label: 'SQLite SQL', data:[463229, 372635, 447530, 567210], borderWidth: 1, borderRadius: 10 }, {
        label: 'SQLite PSTMT', data:[1533216, 1842927, 1456943, 1730394], borderWidth: 1, borderRadius: 10 }, {
        label: 'CrossDB SQL', data:[3448006, 7897318, 4513309, 5605978], borderWidth: 1, borderRadius: 10 }, {
        label: 'CrossDB PSTMT', data:[9827998, 28163023, 9977849, 10353361], borderWidth: 1, borderRadius: 10
      }]
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

### 1000 Rows Random Access Test
-------------------------------------------------------------------------------

  DB      | Access        | Insert QPS | Query QPS  | Update QPS | Delete QPS
 ::       | ::            | ----       | ----       | ----       | ---- 
   SQLite |      SQL      |    466,234 |    363,376 |    432,519 |    522,592
   SQLite | Prepared STMT |  1,418,039 |  1,674,355 |  1,378,574 |  1,402,263
  CrossDB |      SQL      |  3,328,181 |  7,884,500 |  4,553,077 |  5,619,176
  CrossDB | Prepared STMT | 10,876,248 | 28,493,387 |  9,647,481 | 10,731,286
  
<div>
  <canvas id="row1k-sqlrand"></canvas>
</div>

<script>
  ctx = document.getElementById('row1k-sqlrand');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Insert', 'Query', 'Update', 'Delete'],
      datasets: [{
        label: 'SQLite SQL', data:[466234, 363376, 432519, 522592], borderWidth: 1, borderRadius: 10 }, {
        label: 'SQLite PSTMT', data:[1418039, 1674355, 1378574, 1402263], borderWidth: 1, borderRadius: 10 }, {
        label: 'CrossDB SQL', data:[3328181, 7884500, 4553077, 5619176], borderWidth: 1, borderRadius: 10 }, {
        label: 'CrossDB PSTMT', data:[10876248, 28493387, 9647481, 10731286], borderWidth: 1, borderRadius: 10
      }]
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

### 1,000,000 Rows Sequential Access Test
-------------------------------------------------------------------------------

  DB      | Access        | Insert QPS | Query QPS  | Update QPS | Delete QPS
 ::       | ::            | ----       | ----       | ----       | ---- 
   SQLite |      SQL      |    417,560 |    358,897 |    361,509 |    544,743
   SQLite | Prepared STMT |    998,523 |  1,566,015 |  1,289,689 |  1,409,279
  CrossDB |      SQL      |  3,298,896 |  7,566,397 |  4,429,345 |  5,432,556
  CrossDB | Prepared STMT | 10,892,641 | 27,723,942 | 10,028,380 | 10,521,420
  
<div>
  <canvas id="row1m-sqlseq"></canvas>
</div>

<script>
  ctx = document.getElementById('row1m-sqlseq');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Insert', 'Query', 'Update', 'Delete'],
      datasets: [{
        label: 'SQLite SQL', data:[417560, 358897, 361509, 544743], borderWidth: 1, borderRadius: 10 }, {
        label: 'SQLite PSTMT', data:[998523, 1566015, 1289689, 1409279], borderWidth: 1, borderRadius: 10 }, {
        label: 'CrossDB SQL', data:[3298896, 7566397, 4429345, 5432556], borderWidth: 1, borderRadius: 10 }, {
        label: 'CrossDB PSTMT', data:[10892641, 27723942, 10028380, 10521420], borderWidth: 1, borderRadius: 10
      }]
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

### 1,000,000 Rows Random Access Test
-------------------------------------------------------------------------------

  DB      | Access        | Insert QPS | Query QPS  | Update QPS | Delete QPS
 ::       | ::            | ----       | ----       | ----       | ---- 
   SQLite |      SQL      |    390,515 |    286,401 |    184,112 |    319,388
   SQLite | Prepared STMT |    416,147 |  1,160,695 |  1,009,338 |    877,970
  CrossDB |      SQL      |  3,481,398 |  4,139,445 |  3,131,573 |  3,398,787
  CrossDB | Prepared STMT |  6,447,545 |  6,510,163 |  3,755,417 |  4,880,108
  
<div>
  <canvas id="row1m-sqlrand"></canvas>
<,/di,v>

<script>
  ctx = document.getElementById('row1m-sqlrand');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Insert', 'Query', 'Update', 'Delete'],
      datasets: [{
        label: 'SQLite SQL', data:[390515, 286401, 184112, 319388], borderWidth: 1, borderRadius: 10 }, {
        label: 'SQLite PSTMT', data:[416147, 1160695, 1009338, 877970], borderWidth: 1, borderRadius: 10 }, {
        label: 'CrossDB SQL', data:[3481398, 4139445, 3131573, 3398787], borderWidth: 1, borderRadius: 10 }, {
        label: 'CrossDB PSTMT', data:[6447545, 6510163, 3755417, 4880108], borderWidth: 1, borderRadius: 10
      }]
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
