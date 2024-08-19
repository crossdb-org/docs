---
template: overrides/blog.html
---

# FAQ

## Why is `CrossDB` so fast?

* Use memory map to access DB data directly (so your DB must less than the main memory to get highest speed).
* Use high-performance hash as the main index, and use the super fast wyhash as the hash function.
* Hand-written SQL parser which is more than 10X faster than Flex/Bison parser tools.
* High-performance read-write lock and multi-core optimization.
* Execute multiple SQL statements in one API, which will imporve client-server DB performance dramatically.
* High-efficient client-server protocols.
* Avoid memory allocation/free as much as possible.
* High-performance implementation code
