CREATE OR REPLACE FUNCTION delete_assignment (
    prm_assignment uuid
)
RETURNS void
AS 
$$
DECLARE
    assignment_count integer;
BEGIN
    -- verify if assignment exists
    SELECT 
        count(*) INTO assignment_count
    FROM 
        "assignment" a
    WHERE
        a."assignment" = prm_assignment;
    IF assignment_count = 0 THEN
        RAISE EXCEPTION 'AS000';
    END IF;

    DELETE FROM
        "assignment"
    WHERE 
        "assignment"."assignment" = prm_assignment;
END;
$$
LANGUAGE PLPGSQL;