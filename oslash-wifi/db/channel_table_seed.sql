CREATE TABLE channel (
    id SERIAL PRIMARY KEY, 
    channel INTEGER,
    frequecy TEXT
);

INSERT INTO channel
(channel, frequecy)
VALUES
(1,'2.4GHz'),(2,'2.4GHz'),(3,'2.4GHz'),(4,'2.4GHz'),(5,'2.4GHz'),(6,'2.4GHz'),(7,'2.4GHz'),(8,'2.4GHz'),(9,'2.4GHz'),(10,'2.4GHz'),(11,'2.4GHz'),(12,'2.4GHz'),(13,'2.4GHz'),
(36,'5GHz nonDFS'),(38,'5GHz nonDFS'),(40,'5GHz nonDFS'),(42,'5GHz nonDFS'),(44,'5GHz nonDFS'),(46,'5GHz nonDFS'),(48,'5GHz nonDFS')  ,(149'5GHz nonDFS'),(151'5GHz nonDFS'),
(153,'5GHz nonDFS'),(155,'5GHz nonDFS'),(157,'5GHz nonDFS'),(159,'5GHz nonDFS'),(161,'5GHz nonDFS'),(165,'5GHz nonDFS')



frequencys will be listed as ('2.4GHz','5GHz nonDFS','5GHz DFS')


2.4GHz channels: 1-11(North America) +12,13(world) +14(japan aka 11b(actually SpredSpectrum))
    recomend 1,6,11 beacuse all others overlap(see https://en.wikipedia.org/wiki/List_of_WLAN_channels)

5GHz(North America)
    non DFS channels: 36,38,40,42,44,46,48  ,149,151,153,155,157,159,161,165
        these all aplly for manual selection 
    DFS channels: 50,52,54,56,58,60,62,64,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,132,134,136,138,140,142,144
        no need to change dfs(dynamic frequency selection) will auto switch for you