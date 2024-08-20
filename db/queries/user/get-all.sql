SELECT 
    *
FROM 
    public.user u
LIMIT $(limit)::integer
OFFSET ($(limit)::integer*$(page)::integer) - $(limit)::integer;