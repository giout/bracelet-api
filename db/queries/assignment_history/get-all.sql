SELECT 
    *
FROM 
    assignment_history a
LIMIT $(limit)::integer
OFFSET ($(limit)::integer*$(page)::integer) - $(limit)::integer;