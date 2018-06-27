SELECT posts.id, comm, user_id
FROM posts 
JOIN users  
    ON posts.user_id = users.id
WHERE users.id = $1;