# Getting Started

``` c
int main (int argc, char *argv[])
{
	cdb_error ret;
	pthread_t 		pid;

	if (argc < 2) {
		printf ("Add TCP port to /etc/services\n");
		printf ("Start publiser:   %s node host\n", argv[0]);
		printf ("Start subscriber: %s node host pubnode pubhost\n", argv[0]);
		printf ("Insert 1000 record into node's mac talbe: %s node @m1000\n", argv[0]);
		printf ("Insert 1000 record into node's route talbe: %s node @r1000\n", argv[0]);
		printf ("Insert 1000 record into node's arp talbe: %s node @a1000\n", argv[0]);
		return -1;
	}

	if (argc > 1) strcpy (g_node, argv[1]);
	if (argc > 2) strcpy (g_host, argv[2]);

	cdb_signal_register (SIGSEGV);

	dl_init_daemon_context();
	dl_cdb_init ();

	// Create DB and Tables fisrt
	fib_db_init (g_node);

	uint32_t	ts_beg = time(NULL);
	srand (time(NULL));
	char	*l3if[] = {"v100", "1.x1", "lo1", "v200", "1.x2", "lo2", "v300", "1.x3"};

	if ((3 == argc) && ('@' == argv[2][0]) && ('m' == argv[2][1])) {
		mac_t		mac = {};
		int			count = atoi(&argv[2][2]), fail = 0;
		char		buf[1024];
		cdb_error 	ret;

		uint64_t ts = cdb_timestamp_us ();
		for (int i = 0; i < count; i++) {

	#if 0
			sprintf (buf, "replace into mact set mac=00:00:00:%02x:%02x:%02x vlan=%d port=%d bStatic=%c", rand()%256, rand()%256, rand()%256, rand () % 4094 + 1, rand () % 128 + 1, rand ()%2?'T':'F');
			ret = cdb_sql_execute2 (&g_hDb, CDB_DUMP_FLAG_IGNORE_FLDERR|CDB_DUMP_FLAG_QUITE|CDB_DUMP_FLAG_NO_PRIVATE, NULL, NULL, buf);
	#else
			mac.mac[3]		= rand ();
			mac.mac[4]		= rand ();
			mac.mac[5]		= rand ();
			mac.vlan		= rand () % 4094 + 1;
			mac.cvlan		= rand () % 4094 + 1;
			mac.port		= rand () % 128 + 1;
			mac.vsi			= rand () % 0xff + 1;
			mac.logif		= ((rand () % 0xf)<<24) + (rand ()&0xffff);
			mac.timestamp	= ts_beg + rand ()%100;
			mac.bStatic 	= rand () % 2;

		#if 1
			//cdb_schema_print (cdb_table_get_schema(hMacTbl,0), NULL, 0, &mac, CDB_DUMP_RECORD);
			//printf ("\n");
			int len = cdb_record_dump2 (hMacTbl, buf, sizeof(buf), CDB_DUMP_REPLACE, NULL, &mac, NULL, NULL, 0, NULL, CDB_DUMP_FLAG_SQL | CDB_DUMP_FLAG_NO_ZERO | CDB_DUMP_FLAG_NO_PRIVATE | CDB_DUMP_FLAG_BINARY);			
			#if 0
			mac_t		key = {.vlan = 3333, .mac={0,0,0,0x11,0xd2,0xc3}};
			mac_t		mac2 = {.port = 111};
			//mac.vlan = 2827;
			//int len = cdb_record_dump2 (hMacTbl, buf, sizeof(buf), CDB_DUMP_UPDATE, "port", &mac2, NULL, &key, 0, NULL, CDB_DUMP_FLAG_SQL | CDB_DUMP_FLAG_NO_ZERO | CDB_DUMP_FLAG_NO_PRIVATE | CDB_DUMP_FLAG_BINARY);
			int len = cdb_record_dump2 (hMacTbl, buf, sizeof(buf), CDB_DUMP_DELETE, NULL, &key, NULL, NULL, 0, NULL, CDB_DUMP_FLAG_SQL | CDB_DUMP_FLAG_NO_ZERO | CDB_DUMP_FLAG_NO_PRIVATE | CDB_DUMP_FLAG_BINARY);
			#endif
			(void)len;
			ret = cdb_binrec_exec (g_hDb, buf, 0);
			continue;

			//cdb_schema_print (cdb_table_get_schema(hMacTbl,0), NULL, 0, &mac, CDB_DUMP_RECORD);
			//cdb_schema_dump2 (cdb_table_get_schema(hMacTbl,0), buf, sizeof(buf), CDB_DUMP_RECORD, &mac, CDB_DUMP_FLAG_NO_ZERO|CDB_DUMP_FLAG_BINARY);		
//			cdb_schema_dump2 (cdb_table_get_schema(hMacTbl,0), buf, sizeof(buf), CDB_DUMP_RECORD, &mac, CDB_DUMP_FLAG_NO_ZERO);		
			//memset (&mac, 0xcc, sizeof(mac));
//			cdb_schema_scanf2 (cdb_table_get_schema(hMacTbl,0), buf, CDB_DUMP_RECORD, &mac, sizeof(mac), CDB_DUMP_FLAG_IGNORE_FLDERR|CDB_DUMP_FLAG_MEMSET);
			//cdb_schema_print (cdb_table_get_schema(hMacTbl,0), NULL, 0, &mac, CDB_DUMP_RECORD);
		#endif

#endif

			ret = cdb_record_insert (hMacTbl, &mac, NULL, NULL, 0);
			if (ret != CDB_ERROR_OK) {
				fail++;
			}
		}

		ts = cdb_timestamp_us () - ts;
		if (0 == ts) {
			ts = 1;
		}
		printf ("insert %d mac, fail %d, use time %ds%dms%dus, TPS %d\n", count, fail, 
			(int)(ts/1000000), (int)((ts/1000)%1000), (int)(ts%1000), (int)((int64_t)count*1000000/ts));
		cdb_shell_loop (NULL, NULL, NULL);
		(void)buf;
		return 0;
	}
	if ((3 == argc) && ('@' == argv[2][0]) && ('r' == argv[2][1])) {
		route_t		route = {};
		int			count = atoi(&argv[2][2]), fail = 0;
		cdb_error 	ret;
		for (int i = 0; i < count; i++) {
			route.vrf		= rand();
			route.ip		= rand() + 1;
			route.mask		= (rand()%4)*4+16;
			route.gw		= rand() + 1;
			route.metric	= rand();
			route.type		= rand()%4;
			route.port		= rand();
			strcpy (route.l3if,	l3if[rand()%8]);
			ret = cdb_record_insert (hRouteTbl, &route, NULL, NULL, 0);
			if (ret != CDB_ERROR_OK) {
				fail++;
			}
		}
		printf ("insert %d route, fail %d\n", count, fail);
		cdb_shell_loop (NULL, NULL, NULL);
		return 0;
	}
	if ((3 == argc) && ('@' == argv[2][0]) && ('a' == argv[2][1])) {
		arp_t		arp = {};
		int			count = atoi(&argv[2][2]), fail = 0;
		cdb_error 	ret;
		for (int i = 0; i < count; i++) {
			arp.vrf			= rand();
			arp.ip			= rand() + 1;
			arp.mac[3]		= rand ();
			arp.mac[4]		= rand ();
			arp.mac[5]		= rand ();
			arp.port		= rand () % 128 + 1;
			strcpy (arp.l3if,	l3if[rand()%8]);
			arp.bStatic		= rand () % 2;
			arp.flags		= rand ();
			arp.hwtype		= rand ();
			ret = cdb_record_insert (hArpTbl, &arp, NULL, NULL, 0);
			if (ret != CDB_ERROR_OK) {
				fail++;
			}
		}
		printf ("insert %d route, fail %d\n", count, fail);
		cdb_shell_loop (NULL, NULL, NULL);
		return 0;
	}
	
	printf ("mate card: %s\n", dl_card_get_mate_card_str ());

	if (argc <= 3) {
		// Publisher only, run in default main thread eventloop
		cdb_pubsub_init (NULL, NULL, NULL, NULL, NULL);
		s_my_hEvtLoop = cdb_eventloop_get (NULL, NULL);
#if 0
		void *pTimer = cdb_eventloop_timer_create (s_my_hEvtLoop);
		if (NULL == pTimer) {
			printf ("Failed to create timer\n");
			return -1;
		}
		cdb_eventloop_timer_start (s_my_hEvtLoop, pTimer, 5, 0, pub_timer_cb, pTimer);
#endif

#if 0
		cdb_pub_h hPub = cdb_publication_get ("Hal", NULL, "Hal", NULL); 
		if (NULL != hPub) {
			cdb_pubsub_sync (hPub, NULL, CDB_SYNC_CHECK, my_pub_cb, hPub, 0); 
		}
#endif
	} else {
		// Publisher & Subscriber
		cdb_pub_h	hPub;
		const char *pubnode = argv[3];
		const char *pubhost = argc>4?argv[4]:NULL; // NULL means local
		const char *pubdb = pubnode;
		const char *subdb = g_node;
		const char *pubname = g_node;
		/* Init pubsub, run publisher and subscriber in default main event loop (NULL) or new oshal event loop
		   if cdb_pubsub_init is called in thread which has no main event loop, must give an eventloop name
		 */
		const char *dftevtloop = "oshal"; // NULL

		cdb_pubsub_init (NULL, NULL, NULL, dftevtloop, dftevtloop);

if (argc <= 6) {
		// Get default event loop
		s_my_hEvtLoop = cdb_eventloop_get (dftevtloop, NULL);
		if (NULL == s_my_hEvtLoop) {
			printf ("Failed to get eventloop\n");
			return -1;
		}

		// Create Publication
		ret = cdb_pubsub_create (&hPub, pubnode, pubhost, pubname, NULL, pubdb, subdb, NULL, 0);
		if (CDB_ERROR_OK != ret) {
			printf ("Failed to create publication %s\n", cdb_errmsg(ret));
			return -1;
		}
		// Create Subscriptions
		cdb_bool bFilter = 0;
		ret = cdb_pubsub_subscribe (hPub, "mact", "mact", "mact", !bFilter?NULL:"vlan=100", NULL, 0);
		if (CDB_ERROR_OK != ret) {
			printf ("Failed to subscribe %s %s\n", "mact", cdb_errmsg(ret));
		}
		ret = cdb_pubsub_subscribe (hPub, "arp", "arp", "arp",  NULL, NULL, 0);
		if (CDB_ERROR_OK != ret) {
			printf ("Failed to subscribe %s %s\n", "arp", cdb_errmsg(ret));
		}
		ret = cdb_pubsub_subscribe (hPub, "route", "route", "route",  !bFilter?NULL:"hostOnly!='T'", NULL, 0);
		if (CDB_ERROR_OK != ret) {
			printf ("Failed to subscribe %s %s\n", "mact", cdb_errmsg(ret));
		}
		ret = cdb_pubsub_subscribe (hPub, "salready", "salready", "salready",  NULL, NULL, 0);
		if (CDB_ERROR_OK != ret) {
			printf ("Failed to subscribe %s %s\n", "salready", cdb_errmsg(ret));
		}

		s_my_hPub = hPub;
		//cdb_eventloop_addfd (s_my_hEvtLoop, fd, CPE_READABLE, my_fd_cb, NULL);
#if 0

		void *pTimer = cdb_eventloop_timer_create (s_my_hEvtLoop);
		if (NULL == pTimer) {
			printf ("Failed to create timer\n");
			return -1;
		}
		cdb_eventloop_timer_start (s_my_hEvtLoop, pTimer, 20, 0, sub_timer_cb, pTimer);
#endif

		printf ("Begin sync ...\n");
		if ((argc>5) && ('A' == argv[5][0])) {
			printf ("I'm Active, don't sync data from standby ...\n");
			ret = cdb_pubsub_sync (hPub, NULL, CDB_SYNC_STOP, my_sub_cb, hPub, 0);
		} else {
			if (argc>5) {
				printf ("I'm Standby, sync with active ...\n");
			}
			cdb_pubsub_sync (hPub, NULL, CDB_SYNC_FULL, my_sub_cb, hPub, 0);
#if 0
			cdb_trigger_create2 (hMacTbl, "trig_ins", CDB_TRIG_AFT_INSERT, mac_trigger, NULL, 0);
			cdb_trigger_create2 (hMacTbl, "trig_del", CDB_TRIG_AFT_DELETE, mac_trigger, NULL, 0);
			cdb_trigger_create2 (hMacTbl, "trig_upd", CDB_TRIG_AFT_UPDATE, mac_trigger, NULL, 0);
#endif
	}
}
	}

	// Create shell thread
	pthread_create (&pid, NULL, shell_thread, NULL);
	pthread_detach (pid);

	// Main Event Loop
	while (!s_bailout) {
		dl_poll_fds (-1);
	}

	return 0;
}
```

##TBD
