SELECT 
    a.*,
    u.username,
    u.id_card
FROM 
    assignment_history a
INNER JOIN 
    "user" u
ON 
    a."user"=a."user"
ORDER BY a."date" DESC
LIMIT $(limit)::integer
OFFSET ($(limit)::integer*$(page)::integer) - $(limit)::integer;