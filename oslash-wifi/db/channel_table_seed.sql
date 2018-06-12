CREATE TABLE channel (
    id SERIAL PRIMARY KEY, 
    channel Integer,
    frequecy DECIMAL
);



2.4GHz channels: 1-11(North America) +12,13(world)
    recomend 1,6,11 beacuse all others overlap(see https://en.wikipedia.org/wiki/List_of_WLAN_channels)

5GHz(North America)
    non DFS channels: 36,38,40,42,44,46,48  ,149,151,153,155,157,159,161,165
        these all aplly for manual selection 
    DFS channels: 50,52,54,56,58,60,62,64,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,132,134,136,138,140,142,144
        no need to change dfs(dynamic frequency selection) will auto switch for you