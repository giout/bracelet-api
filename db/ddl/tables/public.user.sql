CREATE TABLE "user" (
    "user" uuid DEFAULT uuid_generate_v4(),
    id_card integer NOT NULL,
    username text NOT NULL
);

ALTER TABLE "user" ADD CONSTRAINT pk_user PRIMARY KEY ("user");
ALTER TABLE "user" ADD CONSTRAINT unq_user_id_card UNIQUE (id_card);
ALTER TABLE "user" ADD CONSTRAINT unq_user_username UNIQUE (username);