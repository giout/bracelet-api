SELECT 
    *
FROM 
    "admin" a
WHERE
    a.username=$(username)::text;