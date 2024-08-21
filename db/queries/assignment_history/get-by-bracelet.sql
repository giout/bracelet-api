SELECT 
    *
FROM 
    assignment_history a
WHERE
    a.bracelet = $(bracelet)::integer
LIMIT $(limit)::integer
OFFSET ($(limit)::integer*$(page)::integer) - $(limit)::integer;