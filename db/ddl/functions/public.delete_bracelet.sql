CREATE OR REPLACE FUNCTION delete_bracelet (
    prm_bracelet integer
)
RETURNS void
AS 
$$
DECLARE
    bracelet_count integer;
BEGIN
    -- verify if bracelet exists
    SELECT 
        count(*) INTO bracelet_count
    FROM 
        bracelet b
    WHERE
        b.bracelet = prm_bracelet;
    IF bracelet_count = 0 THEN
        RAISE EXCEPTION 'B000';
    END IF;

    DELETE FROM
        bracelet
    WHERE 
        bracelet.bracelet = prm_bracelet;
END;
$$
LANGUAGE PLPGSQL;