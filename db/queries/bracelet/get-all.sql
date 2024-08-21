SELECT 
    *
FROM 
    bracelet
LIMIT $(limit)::integer
OFFSET ($(limit)::integer*$(page)::integer) - $(limit)::integer;