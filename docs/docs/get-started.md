---
template: overrides/blog.html
---

# Get Started

## Download
-------------------------------------------------------------------------------

Choose the OS and CPU, then [**Download**](https://crossdb.org/products/download/) here.

**Linux/FreeBSD package file list**

 File             | Descritpion
 ----             | ----
crossdb.h         | The only header file
libcrossdb.so     | The only shared library
[crossdb-cli](../reference/crossdb-cli)       | CrossDB command line tool
examples/         | CrossDB example code

**Windows package file list**

 File             | Descritpion
 ----             | ----
crossdb.h         | The only header file
crossdb.dll       | The only shared library
crossdb.lib       | For build with MSCV compiler
[crossdb-cli.exe](../reference/crossdb-cli)       | CrossDB command line tool
examples/         | CrossDB example code

**MacOS package file list**

 File             | Descritpion
 ----             | ----
crossdb.h         | The only header file
libcrossdb.dylib  | The only shared library for X64 and AMD64
[crossdb-cli](../reference/crossdb-cli)       | CrossDB command line tool
examples/         | CrossDB example code

<!--
examples List
 File      | Descritpion
 ----      | ----
example.c  | Simple CrossDB example
tutorial.c | Complete CrossDB tutorial guide
schema.c   | CrossDB Schema Example
upgrade/   | `old.c` is old struct program, `new.c` is new struct program
-->

## Linux/FreeBSD
-------------------------------------------------------------------------------

### Run Examples

```sh
cd examples

./build.sh example.c
./example.bin

./build.sh tutorial.c
./tutorial.bin

```

### Build in your project

- You can check examples/build.sh to build the library in your project folder.

- Yo can also install CrossDB globally and use it as common library.

	1\. Install `libcrossdb.so` to `/usr/lib`

	```c
	#include "crossdb.h"
	// your code
	```

	2\. Build this way: `gcc my.c -lcrossdb -pthread -ldl`


## Windows
-------------------------------------------------------------------------------

### Run Examples with MSVC

Start `Visual Studio` command line from menu `x64 Native Tools Command Prompt for VS 20xx`

Enter CrossDB package folder

```sh
cd examples

build example.c
example.exe

build tutorial.c
tutorial.exe

```

### Run Examples with MINGW64

```sh
cd examples

./build.sh example.c
./example.bin

./build.sh tutorial.c
./tutorial.bin

```

>**Note**
>You can run in `git bash` or `MSYS2 MINGW64`
>If you only have MINGW64, you an run in commandline
>
>`gcc -o example.exe -Wall -O2 example.c -I.. crossdb.dll`

### Build in your project

- For `MINGW64`, you can just use `crossdb.h` and `crossdb.dll` to compile.
- For `Visual Studio`, You can add `crossdb.h` `crossdb.lib` and `crossdb.dll` to your project.


## MacOS
-------------------------------------------------------------------------------

### Run Examples

```sh
cd examples

./build.sh example.c
./example.bin

./build.sh tutorial.c
./tutorial.bin

```

### Build in your project

- You can check examples/build.sh to build the library in your project folder.

- Yo can also install CrossDB globally and use it as common library.

	1\. Install `libcrossdb.dylib` to `/usr/local/lib`

	```c
	#include "crossdb.h"
	// your code
	```

	2\. Build this way: `clang my.c -lcrossdb`


## Use CrossDB CLI
-------------------------------------------------------------------------------

```sql
../crossdb-cli db_data

CrossDB> insert into route set prefix=1.1.1.1 mask=24 nexthop=1.1.1.254 metric=5 intf='eth1'

CrossDB> select * from route
ID  prefix   mask  nexthop    metric  intf  birth                flags
==  =======  ====  =========  ======  ====  ===================  =====
1   1.1.1.1  24    1.1.1.254  5       eth1  1970-01-01T08:00:00  0x0

Qualified Rows: 1       Select Rows: 1    Use time 2us QPS 500000
```

More commands can be found [here](../reference/crossdb-cli)
