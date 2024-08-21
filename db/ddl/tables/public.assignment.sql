CREATE TABLE assignment (
    assignment uuid DEFAULT uuid_generate_v4(),
    "user" uuid NOT NULL,
    "bracelet" integer NOT NULL,
    "date" timestamp without time zone DEFAULT NOW(),
    "time" integer NOT NULL
);

ALTER TABLE assignment ADD CONSTRAINT pk_assignment PRIMARY KEY (assignment);

ALTER TABLE assignment ADD CONSTRAINT fk_assignment_user FOREIGN KEY ("user") REFERENCES "user" ("user");

ALTER TABLE assignment ADD CONSTRAINT fk_assignment_bracelet FOREIGN KEY (bracelet) REFERENCES bracelet (bracelet);

CREATE TRIGGER trg_create_assignment
	AFTER INSERT ON assignment
	FOR EACH ROW 
	EXECUTE PROCEDURE uf_trg_create_assignment();