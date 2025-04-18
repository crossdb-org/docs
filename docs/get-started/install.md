---
template: overrides/blog.html
---

# Build and Install

## Download code

```bash
git clone https://github.com/crossdb-org/crossdb.git
cd crossdb
```

## Build

```bash
crossdb$ make
make build                Build crossdb library and tool
make debug                Build crossdb library and tool with debug
make run                  Run crossdb tool
make clean                Clean build result
make install              Install crossdb(lib&tool&header) to Linux/MacOS/FreeBSD
make uninstall            Uninstall crossdb from Linux/MacOS/FreeBSD
make example              Build and run example (need to install crossdb first)
make smoketest            Build and run smoke test (need to install crossdb first)
make bench                Build and run bench test (need to install crossdb first)
make bench-sqlite         Build and run sqlite bench test (need to install sqlite3 first)
make bench-stlmap         Build and run C++ STL Map and HashMap(unordered_map) bench test
make bench-boostmidx      Build and run C++ Boost MultiIndex Order and Hash bench test
```

### Linux/MacOS/FreeBSD

```bash
make build
sudo make install
```

### Windows

You need to install [MINGW64](https://www.mingw-w64.org/) to build, [Github Download](https://github.com/niXman/mingw-builds-binaries/releases).
Then set the `gcc` path to `system environment variables` `Path` and make sure `gcc` can run.

```
winbuild.bat
```

### CMake
```
cd build
cmake ..
make
sudo make install
```

**Windows**

You need to install [MINGW64](https://www.mingw-w64.org/) [CMAKE](https://cmake.org/download/) and [make](https://gnuwin32.sourceforge.net/packages/make.htm) to build.

```
cd build
cmake -G "MinGW Makefiles" -DCMAKE_C_COMPILER=gcc ..
make
```

## Build manually

There are dozens of source files, but only one needs to be built.

```bash
gcc -o build/xdb-cli src/xdb-cli.c -lpthread -O2
gcc -o build/libcrossdb.so src/crossdb.c -fPIC -shared -lpthread -O2
```

or clang

```bash
clang -o build/xdb-cli src/xdb-cli.c -lpthread -O2
clang -o build/libcrossdb.so src/crossdb.c -fPIC -shared -lpthread -O2
```

## Run Tests

```bash
crossdb$ make test
```

```
[==========] Running 2 test cases.
[ RUN      ] XdbTest.insert_one/0
[       OK ] XdbTest.insert_one/0 (637281ns)
[ RUN      ] XdbTest.update_one/0
[       OK ] XdbTest.update_one/0 (195417ns)
[==========] 2 test cases ran.
[  PASSED  ] 2 tests.
```
