---
template: overrides/blog.html
---

# Get Started

## Download

Choose the OS and CPU, then [**Download**](https://crossdb.org/products/download/) here.

Linux package file list

 File             | Descritpion
 ----             | ----
crossdb.h         | The only header file
libcrossdb.so     | The only shared library
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

## Run Examples

```sh
cd examples

./build.sh example.c
./example.bin

./build.sh tutorial.c
./tutorial.bin

```

## Build in your project

- You can check examples/build.sh to build the library in project folder.

- Yo can also install CrossDB globally and use it as common library.

	1\. Install `libcrossdb.so` to `/usr/lib` and `crossdb.h` to `/usr/include`

	```c
	#include <crossdb.h>
	// your code
	```

	2\. Build this way: `gcc my.c -lcrossdb -pthread -ldl`

<!--
=== "🛶 Windows MSVC Command Line"
	``` c linenums="1"
	start cl
	c1 example.c -llib
	```

=== "🛶 MacOS/FreeBSD clang"
	``` c linenums="1"
	clang example.c -llib
	```

=== "🛶 Linux gcc"
	``` c linenums="1"
	gcc example.c -llib
	```
-->
