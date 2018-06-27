CREATE TABLE channel (
    id SERIAL PRIMARY KEY, 
    channel INTEGER,
    frequecy TEXT
);

INSERT INTO channel
(channel, frequecy)
VALUES
(1,2),(2,2),(3,2),(4,2),(5,2),(6,2),(7,2),(8,2),(9,2),(10,2),(11,2),(12,2),(13,2),
(36,5),(38,5),(40,5),(42,5),(44,5),(46,5),(48,5),(149,5),(151,5),
(153,5),(155,5),(157,5),(159,5),(161,5),(165,5)



frequencys will be listed as ('2.4GHz','5GHz nonDFS','5GHz DFS')


2.4GHz channels: 1-11(North America) +12,13(world) +14(japan aka 11b(actually SpredSpectrum))
    recomend 1,6,11 beacuse all others overlap(see https://en.wikipedia.org/wiki/List_of_WLAN_channels)

5GHz(North America)
    non DFS channels: 36,38,40,42,44,46,48  ,149,151,153,155,157,159,161,165
        these all aplly for manual selection 
    DFS channels: 50,52,54,56,58,60,62,64,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,132,134,136,138,140,142,144
        no need to change dfs(dynamic frequency selection) will auto switch for you