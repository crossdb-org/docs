---
template: overrides/blog.html
---

# Build and Install

## Build

```bash
crossdb$ make
make build                Build crossdb library and tool
make debug                Build crossdb library and tool with debug
make run                  Run crossdb tool
make clean                Clean build result
make install              Install crossdb(lib&tool&header) to Linux/FreeBSD
make uninstall            Uninstall crossdb from Linux/FreeBSD
make installmac           Install crossdb(lib&tool&header) to MacOS
make uninstallmac         Uninstall crossdb from MacOS
make example              Build and run example (need to install crossdb first)
make bench                Build and run bench test (need to install crossdb first)
make bench-sqlite         Build and run sqlite bench test (need to install sqlite3 first)
```

## Linux/FreeBSD

```bash
make build
sudo make install
```

## MacOS

```bash
make build
sudo make installmac
```

## Windows

You need to install [MINGW64](https://www.mingw-w64.org/) to build.
Then set `gcc` path to `system environment variables` `Path` and make sure `gcc` can run.

```
winbuild.bat
```

### CMake
```
mkdir -p build;
cd build
cmake ..
make
sudo make install
```

## Build manually

Though there're dozens of files, only one file need to build.

```bash
gcc -o build/xdb-cli src/xdb-cli.c -lpthread -O2
gcc -o build/libcrossdb.so src/crossdb.c -fPIC -shared -lpthread -O2
```

or clang

```bash
clang -o build/xdb-cli src/xdb-cli.c -lpthread -O2
clang -o build/libcrossdb.so src/crossdb.c -fPIC -shared -lpthread -O2
```
