CREATE TABLE users (
    id SERIAL PRIMARY KEY, 
    user_name VARCHAR (124),
    picture TEXT,
    auth_id TEXT,
    ssid TEXT,
    channel_id INTEGER referances tablename colomname
);