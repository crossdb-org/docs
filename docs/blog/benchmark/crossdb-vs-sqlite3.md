---
template: overrides/blog.html
---

# CrossDB vs. SQLite3 Benchmark

Test tool: [CrossBench](../../../docs/reference/crossbench)  

DB Driver: [SQLite3](https://github.com/crossdb-org/CrossBench/blob/main/sqlite-bench.c) [CrossDB](https://github.com/crossdb-org/CrossBench/blob/main/crossdb-bench.c) 

Test Config: Random Access, Single Thread, Bind CPU Core

## SQLite3 Config
=== "On-Disk"
	```
	PRAGMA synchronous = NORMAL
	PRAGMA journal_mode = WAL
	PRAGMA temp_store = memory
	PRAGMA optimize
	```
=== "RamDisk"
	```
	PRAGMA synchronous = OFF
	PRAGMA journal_mode = WAL
	PRAGMA temp_store = memory
	PRAGMA optimize
	```  
=== "In-Memory"
	```
	PRAGMA synchronous = OFF
	PRAGMA journal_mode = OFF
	PRAGMA temp_store = memory
	PRAGMA optimize
	```

## Test Server
```
CPU			: Intel(R) Xeon(R) Gold 5318Y CPU @ 2.10GHz	cache size 36864 KB
HDD			: DELL PERC H755 Front SCSI Disk
OS			: Ubuntu 20.04
SQLite3		: v3.31.1
CrossDB		: v0.5.0
```

<!--
cat /proc/cpuinfo
sudo lshw -class disk
-->

## On-Disk Database Test
-------------------------------------------------------------------------------

**Test Script**

=== "CrossDB"
	```
	loop="1 2 3"
	./crossdb-bench.bin -H -r 0
	for i in $loop; do ./crossdb-bench.bin -s d -i 1k   -q 30m -u 1m  -Q -H -c $cpu; done
	for i in $loop; do ./crossdb-bench.bin -s d -i 10k  -q 30m -u 1m  -Q -H -c $cpu; done
	for i in $loop; do ./crossdb-bench.bin -s d -i 100k -q 20m -u 1m  -Q -H -c $cpu; done
	for i in $loop; do ./crossdb-bench.bin -s d -i 1m   -q 10m -u 1m  -Q -H -c $cpu; done
	for i in $loop; do ./crossdb-bench.bin -s d -i 10m  -q 5m  -u 1m  -Q -H -c $cpu; done
	for i in $loop; do ./crossdb-bench.bin -s d -i 100m -q 5m  -u 1m  -Q -H -c $cpu; done
	```

=== "SQLite3"
	```
	loop="1 2 3"
	./sqlite-bench.bin -H -r 0
	for i in $loop; do ./sqlite-bench.bin -s d -i 1k   -q 1k  -u 1k  -Q -H -c $cpu; done
	for i in $loop; do ./sqlite-bench.bin -s d -i 10k  -q 1m  -u 1m  -Q -H -c $cpu; done
	for i in $loop; do ./sqlite-bench.bin -s d -i 100k -q 1m  -u 1m  -Q -H -c $cpu; done
	for i in $loop; do ./sqlite-bench.bin -s d -i 1m   -q 1m  -u 1m  -Q -H -c $cpu; done
	for i in $loop; do ./sqlite-bench.bin -s d -i 10m  -q 1m  -u 1m  -Q -H -c $cpu; done
	# This test is very very very slow
	for i in $loop; do ./sqlite-bench.bin -s d -i 100m -q 1m  -u 1m  -Q -H -c $cpu; done
	```

**Small Data Set Test**
<figure class="cdb-figure">
	<img src="../../../images/benchmark/crossdb-vs-sqlite-ondisk-small.png">
</figure>

**Large Data Set Test**
<figure class="cdb-figure">
	<img src="../../../images/benchmark/crossdb-vs-sqlite-ondisk-large.png">
</figure>


## RamDisk Database Test
-------------------------------------------------------------------------------

**Test Script**

=== "CrossDB"
	```
	loop="1 2 3"
	./crossdb-bench.bin -H -r 0
	for i in $loop; do ./crossdb-bench.bin -s r -i 1k   -q 40m -u 30m -Q -H -c $cpu; done
	for i in $loop; do ./crossdb-bench.bin -s r -i 10k  -q 40m -u 30m -Q -H -c $cpu; done
	for i in $loop; do ./crossdb-bench.bin -s r -i 100k -q 40m -u 30m -Q -H -c $cpu; done
	for i in $loop; do ./crossdb-bench.bin -s r -i 1m   -q 10m -u 10m -Q -H -c $cpu; done
	for i in $loop; do ./crossdb-bench.bin -s r -i 10m  -q 10m -u 10m -Q -H -c $cpu; done
	for i in $loop; do ./crossdb-bench.bin -s r -i 100m -q 10m -u 10m -Q -H -c $cpu; done
	```

=== "SQLite3"
	```
	loop="1 2 3"
	./sqlite-bench.bin -H -r 0
	for i in $loop; do ./sqlite-bench.bin -s r -i 1k   -q 1m -u 500k  -Q -H -c $cpu; done
	for i in $loop; do ./sqlite-bench.bin -s r -i 10k  -q 1m -u 500k  -Q -H -c $cpu; done
	for i in $loop; do ./sqlite-bench.bin -s r -i 100k -q 1m -u 300k  -Q -H -c $cpu; done
	for i in $loop; do ./sqlite-bench.bin -s r -i 1m   -q 500k -u 250k -Q -H -c $cpu; done
	for i in $loop; do ./sqlite-bench.bin -s r -i 10m  -q 500k -u 250k -Q -H -c $cpu; done
	for i in $loop; do ./sqlite-bench.bin -s r -i 100m -q 500k -u 250k -Q -H -c $cpu; done
	```

**Small Data Set Test**
<figure class="cdb-figure">
	<img src="../../../images/benchmark/crossdb-vs-sqlite-ramdisk-small.png">
</figure>

**Large Data Set Test**
<figure class="cdb-figure">
	<img src="../../../images/benchmark/crossdb-vs-sqlite-ramdisk-large.png">
</figure>


## In-Memory Database Test
-------------------------------------------------------------------------------

**Test Script**

=== "CrossDB"
	```
	loop="1 2 3"
	./crossdb-bench.bin -H -r 0
	for i in $loop; do ./crossdb-bench.bin -s m -i 1k   -q 40m -u 30m -Q -H -c $cpu; done
	for i in $loop; do ./crossdb-bench.bin -s m -i 10k  -q 40m -u 30m -Q -H -c $cpu; done
	for i in $loop; do ./crossdb-bench.bin -s m -i 100k -q 40m -u 30m -Q -H -c $cpu; done
	for i in $loop; do ./crossdb-bench.bin -s m -i 1m   -q 10m -u 10m -Q -H -c $cpu; done
	for i in $loop; do ./crossdb-bench.bin -s m -i 10m  -q 10m -u 10m -Q -H -c $cpu; done
	for i in $loop; do ./crossdb-bench.bin -s m -i 100m -q 10m -u 10m -Q -H -c $cpu; done
	```

=== "SQLite3"
	```
	loop="1 2 3"
	./sqlite-bench.bin -H -r 0
	for i in $loop; do ./sqlite-bench.bin -s m -i 1k   -q 2m -u 1m  -Q -H -c $cpu; done
	for i in $loop; do ./sqlite-bench.bin -s m -i 10k  -q 2m -u 1m  -Q -H -c $cpu; done
	for i in $loop; do ./sqlite-bench.bin -s m -i 100k -q 2m -u 1m  -Q -H -c $cpu; done
	for i in $loop; do ./sqlite-bench.bin -s m -i 1m   -q 1m -u 1m  -Q -H -c $cpu; done
	for i in $loop; do ./sqlite-bench.bin -s m -i 10m  -q 1m -u 1m  -Q -H -c $cpu; done
	for i in $loop; do ./sqlite-bench.bin -s m -i 100m -q 1m -u 1m  -Q -H -c $cpu; done
	```

**Small Data Set Test**
<figure class="cdb-figure">
	<img src="../../../images/benchmark/crossdb-vs-sqlite-inmem-small.png">
</figure>

**Large Data Set Test**
<figure class="cdb-figure">
	<img src="../../../images/benchmark/crossdb-vs-sqlite-inmem-large.png">
</figure>
