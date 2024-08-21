SELECT 
    *
FROM 
    assignment_history a
WHERE
    a.bracelet = $(bracelet)::integer;