# Get Started

## Download

Choose the OS and CPU, then [**Download**](https://crossdb.org/products/download/) here.

Linux package file list

 File             | Descritpion
 ----             | ----
crossdb.h         | The only header file
libcrossdb.so     | The only shared library
crossdb-cli       | Command Line Tool
install.sh        | Install script
uninstall.sh      | Uninstall script
examples/         | CrossDB example code

Windows package file list

 File             | Descritpion
 ----             | ----
crossdb.h         | The only header file
crossdb.dll       | The only shared library
crossdb-cli.exe	  | Command Line Tool
install.bat       | Install script
uninstall.bat     | Uninstall script
examples/         | CrossDB example code

examples List
 File      | Descritpion
 ----      | ----
example.c  | Simple CrossDB example
tutorial.c | Complete CrossDB tutorial guide
schema.c   | CrossDB Schema Example
upgrade/   | `old.c` is old struct program, `new.c` is new struct program


## Install

Run the `install.sh` or `install.bat`

## Compile

=== "🛶 Windows MSVC Command Line"
	``` c linenums="1"
	start cl
	c1 example.c -llib
	```

=== "🛶 Linux gcc"
	``` c linenums="1"
	gcc example.c -llib
	```

=== "🛶 MacOS/FreeBSD clang"
	``` c linenums="1"
	clang example.c -llib
	```
