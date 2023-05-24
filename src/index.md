---
home: true
icon: home
title: Home
heroImage: /logocdb.png
heroText: CrossDB
tagline: High Performance Distributed Embedded Database Development Platform✨
actions:
  - text: Tutorial 🧭
    link: /docs/tutorial/
    type: primary

  - text: Docs 💡
    link: /docs/

  - text: Download 💡
    link: /download/

features:
  - title: 🌈 RDBMS
    details: CDB follows standard RDBMS model DB, Tabel, Record, Index, Cursor, Transaction, SQL
    link: https://theme-hope.vuejs.press/guide/markdown/

  - title: 🚊 C ORM
    details: CDB supports C Struct to access DB direclty. Almost all C data types are supported Enum, Union, Bitfield, Array, nested struct, etc
    link: https://theme-hope.vuejs.press/guide/layout/slides.html

  - title: 🚀 Trigger
    details: CDB Supports Foreign Key, Trigger and Cascade Trigger. They can be used to do Data-driven programming and unit test
    link: https://theme-hope.vuejs.press/guide/layout/

  - title: ⛽ PubSub
    details: CDB supports PubSbub to subscribe DB from other source.
    link: https://theme-hope.vuejs.press/guide/feature/comment.html

  - title: 💮 RPC
    details: CDB supports C struct serailization and a gRPC like RPC framework for C language in future
    link: https://theme-hope.vuejs.press/guide/feature/page-info.html

  - title: 🔱 Connector
    details: CDB supports C/C++ and Python Connectors now, will support more connectors later
    link: https://theme-hope.vuejs.press/guide/blog/

  - title: ♻️ Best Practice
    details: Use CDB to Manage Data, do Data-Driven Programming, ISSU, distribut provisioning.
    link: https://theme-hope.vuejs.press/guide/interface/theme-color.html

  - title: 🌄 Troubleshooting
    details: CDB supports CLI, WEB, Staticstics, Status, Log, DB backup and restore to do troubleshooting
    link: https://theme-hope.vuejs.press/guide/interface/darkmode.html

---

---

## 3 Steps to use CrossDB

::: code-tabs#language
@tab 🌄 Define Schema
``` c
typedef struct {
	uint32_t 			prefix;
	uint8_t 			mask;
	uint32_t			nexthop;
	uint8_t 			metric;
	char				intf[16];
	uint32_t			birth;
	uint32_t			flags;
} route_t;

#undef	CROSS_STRUCT_NAME
#define	CROSS_STRUCT_NAME	route_t
cross_field_t 	route_schema[] = {
	CROSS_FIELD (prefix,	UINT,	IPv4, 0),
	CROSS_FIELD (mask, 		UINT,	DFT,  0),
	CROSS_FIELD (nexthop,	UINT,	IPv4, 0),
	CROSS_FIELD (metric, 	UINT,	DFT,  0),
	CROSS_FIELD (type,		UINT,	DFT,  0),
	CROSS_FIELD (intf,		CHAR,	DFT,  0),
	CROSS_FIELD (birth, 	UINT,	TS,   0),
	CROSS_FIELD (flags, 	UINT,	HEX,  0),
	CROSS_END (route_t)
};
```
@tab ♻️ Create Database and Table
``` c
	// Open ondisk database (create if not exist)
	printf ("Open databse: mydb\n");
	ret = cross_dbOpen (&hDb, "mydb", CROSS_DB_CREATE|CROSS_DB_ONDISK);
	CHECK (ret, "Failed to open mydb");

	// Open table (create if not exist), PrimaryKey is ipAddr,mask
	printf ("Open table: route\n");
	ret = cross_tblOpen (hDb, &hRtTbl, "route", route_schema, "ipAddr,mask", CROSS_DB_CREATE);
	CHECK (ret, "Failed to open route table");

	// Create index on nexthop to accelarate lookup by nexthop
	printf ("Create index: idx_nexthpp[\n");
	ret = cross_idxCreate (hRtTbl, "idx_nexthop", "nexthop", 0);
	CHECK (ret, "Failed to create index idx_nexthop");
```
@tab 💮 Inert Rows
``` c
	printf ("Insert route 192.168.1.0/24->192.168.1.254\n");
	route.prefix	= IP4ADDR(192,168,1,0);
	route.mask		= 24;	
	route.nexthop	= IP4ADDR(10,1,2,254);
	route.metric	= 1;
	route.flags		= 0;
	strcpy (route.intf, "eth1");
	route.birth		= time (NULL);
	ret = cross_dbInsertRow (hRtTbl, &route, 0); 
	CHECK (ret, "Failed to insert row");

	printf ("Insert route 10.1.1.0/24->10.1.2.254\n");
	route.prefix	= IP4ADDR(100,1,0,0);
	route.mask		= 24;	
	route.nexthop	= IP4ADDR(10,1,1,254);
	route.metric	= 1;
	route.flags		= 0;
	strcpy (route.intf, "eth2");
	route.birth		= time (NULL);
	ret = cross_dbInsertRow (hRtTbl, &route, 0); 
	CHECK (ret, "Failed to insert row");

	printf ("Insert route 10.1.2.0/24->10.1.2.254\n");
	route.prefix	= IP4ADDR(10,1,1,0);
	route.mask		= 24;	
	route.nexthop	= IP4ADDR(10,1,2,254);
	route.metric	= 2;
	route.flags		= 0;
	strcpy (route.intf, "eth2");
	route.birth		= time (NULL);
	ret = cross_dbInsertRow (hRtTbl, &route, 0); 
	CHECK (ret, "Failed to insert row");
```
@tab 🌄 Query Rows
``` c
	// Get all rows count
	count = cross_dbGetRowsCount (hRtTbl, NULL, NULL, 0);
	printf ("Total %d routes\n", count);

	// Get rows count where nexthop=10.1.2.254
	route.nexthop	= IP4ADDR(10,1,2,254);
	count = cross_dbGetRowsCount (hRtTbl, "nexthop", &route, 0);
	printf ("There're %d routes where nexthop=10.1.2.254\n", count);

	// Get single route 192.168.1.0/24 by PK
	memset (&route, 0, sizeof(route));
	route.prefix	= IP4ADDR(192,168,1,0);
	route.mask		= 24;	
	ret = cross_dbGetRowByPk (hRtTbl, &route, &route, 0); 
	CHECK (ret, "Failed to get row by PK");
	printf ("Get single route: %d.%d.%d.%d/%d->%d.%d.%d.%d intf: %s metric: %d flags: 0x%x\n", 
		IP4STR(route.prefix), route.mask, IP4STR(route.prefix), route.intf, route.metric, route.flags);

	// Use cursor to get routes where nexthop=10.1.2.254
	cross_cursor_h hCursor = NULL;
	route.nexthop	= IP4ADDR(10,1,2,254);
	count = cross_dbQueryRowsCursor (hRtTbl, &hCursor, "nexthop", &route, 0);
	CHECK (count, "Failed to query rows");
	printf ("Get %d routes where nexthop=10.1.2.254\n", count);
	while (CROSS_OK == cross_cursorGetNextRow (hCursor, &route, 0)) {
		printf ("  route: %d.%d.%d.%d/%d->%d.%d.%d.%d intf: %s metric: %d flags: 0x%x\n", 
			IP4STR(route.prefix), route.mask, IP4STR(route.prefix), route.intf, route.metric, route.flags);
	}
	cross_cursorFree (hCursor);
```
@tab ♻️ Update Rows
``` c
	printf ("Update single route 192.168.1.0/24 by PK: set flags 0->0x10\n");
	route.prefix	= IP4ADDR(192,168,1,0);
	route.mask		= 24;	
	route.flags		= 0x10;
	ret = cross_dbUpdRowByPk (hRtTbl, &route, "flags", &route, 0); 
	CHECK (ret, "Failed to update row by PK");

	// Update routes where nexthop=10.1.2.254: set flags 0->0x20
	route.nexthop	= IP4ADDR(10,1,2,254);
	route.flags		= 0x20;
	count = cross_dbUpdateRows (hRtTbl, "nexthop", &route, "flags", &route, 0);
	CHECK (count, "Failed to update rows");
	printf ("Update %d routes where nexthop=10.1.2.254\n", count);	
```
@tab ♻️ Delete Rows
``` c
	printf ("Delete single route 192.168.1.0/24 by PK\n");
	route.prefix	= IP4ADDR(192,168,1,0);
	route.mask		= 24;	
	ret = cross_dbDelRowByPk (hRtTbl, &route, 0); 
	CHECK (ret, "Failed to delete row by PK");

	// Delete routes where nexthop=10.1.2.254
	route.nexthop	= IP4ADDR(10,1,2,254);
	count = cross_dbDeleteRows (hRtTbl, "nexthop", &route, 0);
	CHECK (count, "Failed to update rows");
	printf ("Update %d routes where nexthop=10.1.2.254\n", count);
```

:::

## Sponsors

<p align="center">
<a href="https://gitee.com/dromara/TLog" target="_blank">
<img src="https://oss.dev33.cn/sa-token/link/tlog2.png" title="一个轻量级的分布式日志标记追踪神器，10分钟即可接入，自动对日志打标签完成微服务的链路追踪" width="15%">
</a>
<a href="https://gitee.com/dromara/liteFlow" target="_blank">
<img src="https://oss.dev33.cn/sa-token/link/liteflow.png" title="轻量，快速，稳定，可编排的组件式流程引擎" width="15%">
</a>
<a href="https://hutool.cn/" target="_blank">
<img src="https://oss.dev33.cn/sa-token/link/hutool.jpg" title="小而全的Java工具类库，使Java拥有函数式语言般的优雅，让Java语言也可以“甜甜的”。" width="15%">
</a>
<a href="https://sa-token.dev33.cn/" target="_blank">
<img src="https://oss.dev33.cn/sa-token/link/sa-token.png" title="一个轻量级 java 权限认证框架，让鉴权变得简单、优雅！" width="15%">
</a>
<a href="https://gitee.com/dromara/hmily" target="_blank">
<img src="https://oss.dev33.cn/sa-token/link/hmily.png" title="高性能一站式分布式事务解决方案。" width="15%">
</a>
<a href="https://gitee.com/dromara/Raincat" target="_blank">
<img src="https://oss.dev33.cn/sa-token/link/raincat.png" title="强一致性分布式事务解决方案。" width="15%">
</a>
</p>
<p align="center">
<a href="https://gitee.com/dromara/myth" target="_blank">
<img src="https://oss.dev33.cn/sa-token/link/myth.png" title="可靠消息分布式事务解决方案。" width="15%">
</a>
<a href="https://cubic.jiagoujishu.com/" target="_blank">
<img src="https://oss.dev33.cn/sa-token/link/cubic.png" title="一站式问题定位平台，以agent的方式无侵入接入应用，完整集成arthas功能模块，致力于应用级监控，帮助开发人员快速定位问题" width="15%">
</a>
<a href="https://maxkey.top/" target="_blank">
<img src="https://oss.dev33.cn/sa-token/link/maxkey.png" title="业界领先的身份管理和认证产品" width="15%">
</a>
<a href="http://forest.dtflyx.com/" target="_blank">
<img src="https://oss.dev33.cn/sa-token/link/forest-logo.png" title="Forest能够帮助您使用更简单的方式编写Java的HTTP客户端" width="15%">
</a>
<a href="https://jpom.io/" target="_blank">
<img src="https://oss.dev33.cn/sa-token/link/jpom.png" title="一款简而轻的低侵入式在线构建、自动部署、日常运维、项目监控软件" width="15%">
</a>
<a href="https://su.usthe.com/" target="_blank">
<img src="https://oss.dev33.cn/sa-token/link/sureness.png" title="面向 REST API 的高性能认证鉴权框架" width="15%">
</a>
</p>
<p align="center">
<a href="https://easy-es.cn/" target="_blank">
<img src="https://oss.dev33.cn/sa-token/link/easy-es2.png" title="傻瓜级ElasticSearch搜索引擎ORM框架" width="15%">
</a>
<a href="https://gitee.com/dromara/northstar" target="_blank">
<img src="https://oss.dev33.cn/sa-token/link/northstar_logo.png" title="Northstar盈富量化交易平台" width="15%">
</a>
<a href="https://hertzbeat.com/" target="_blank">
<img src="https://oss.dev33.cn/sa-token/link/hertzbeat_brand.jpg" title="易用友好的云监控系统" width="15%">
</a>
<a href="https://plugins.sheng90.wang/fast-request/" target="_blank">
<img src="https://oss.dev33.cn/sa-token/link/fast-request.gif" title="Idea 版 Postman，为简化调试API而生" width="15%">
</a>
<a href="https://www.jeesuite.com/" target="_blank">
<img src="https://oss.dev33.cn/sa-token/link/mendmix.png" title="开源分布式云原生架构一站式解决方案" width="15%">
</a>
<a href="https://gitee.com/dromara/koalas-rpc" target="_blank">
<img src="https://oss.dev33.cn/sa-token/link/koalas-rpc2.png" title="企业生产级百亿日PV高可用可拓展的RPC框架。" width="15%">
</a>
</p>
<p align="center">
<a href="https://async.sizegang.cn/" target="_blank">
<img src="https://oss.dev33.cn/sa-token/link/gobrs-async.png" title="配置极简功能强大的异步任务动态编排框架" width="15%">
</a>
<a href="https://dynamictp.cn/" target="_blank">
<img src="https://oss.dev33.cn/sa-token/link/dynamic-tp.png" title="基于配置中心的轻量级动态可监控线程池" width="15%">
</a>
<a href="https://www.x-easypdf.cn" target="_blank">
<img src="https://oss.dev33.cn/sa-token/link/x-easypdf.png" title="一个用搭积木的方式构建pdf的框架（基于pdfbox）" width="15%">
</a>
<a href="http://dromara.gitee.io/image-combiner" target="_blank">
<img src="https://oss.dev33.cn/sa-token/link/image-combiner.png" title="一个专门用于图片合成的工具，没有很复杂的功能，简单实用，却不失强大" width="15%">
</a>
<a href="https://www.herodotus.cn/" target="_blank">
<img src="https://oss.dev33.cn/sa-token/link/dante-cloud2.png" title="Dante-Cloud 是一款企业级微服务架构和服务能力开发平台。" width="15%">
</a>
<a href="https://dromara.org/zh/projects/" target="_blank">
<img src="https://oss.dev33.cn/sa-token/link/dromara.png" title="让每一位开源爱好者，体会到开源的快乐。" width="15%">
</a>
</p>

![img](/images/cdb-arch.svg)

```card
title: Mr.Hope
desc: Where there is light, there is hope
logo: https://mrhope.site/logo.svg
link: https://mrhope.site
color: rgba(253, 230, 138, 0.15)
```

```card
title: Very Fast
desc: Where there is light, there is hope
logo: https://mrhope.site/logo.svg
link: https://mrhope.site
color: rgba(253, 230, 138, 0.15)
```

```card
title: Very Easy to Use
desc: Where there is light, there is hope
logo: https://mrhope.site/logo.svg
link: https://mrhope.site
color: rgba(253, 230, 138, 0.15)
```

```card:json
{
  "title": "Mr.Hope",
  "desc": "Where there is light, there is hope",
  "logo": "https://mrhope.site/logo.svg",
  "link": "https://mrhope.site",
  "color": "rgba(253, 230, 138, 0.15)"
}
```
