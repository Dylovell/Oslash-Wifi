UPDATE users 
SET channel_id  = $2
///This needs to be the channel_id, not just the user input
WHERE id = $1;
