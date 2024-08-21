CREATE OR REPLACE FUNCTION uf_trg_create_assignment()
RETURNS trigger 
AS
$$
BEGIN
	INSERT INTO assignment_history (
        assignment,
        "user",
        bracelet,
        "date",
        "time"
	) VALUES (
        NEW.assignment,
        NEW.user,
        NEW.bracelet,
        NEW.date,
        NEW.time
	);
	RETURN NEW;
END;
$$
LANGUAGE plpgsql;