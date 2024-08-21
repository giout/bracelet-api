CREATE TABLE assignment_history (
    assignment_history uuid DEFAULT uuid_generate_v4(),
    assignment uuid NOT NULL,
    "user" uuid NOT NULL,
    bracelet integer NOT NULL,
    "date" timestamp without time zone DEFAULT NOW(),
    "time" integer NOT NULL
);

ALTER TABLE assignment_history ADD CONSTRAINT pk_assignment_history PRIMARY KEY (assignment_history);