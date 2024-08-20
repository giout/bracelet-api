CREATE TABLE "admin" (

    "admin" uuid DEFAULT uuid_generate_v4(),
    username text NOT NULL,
    "password" text NOT NULL
);

ALTER TABLE "admin" ADD CONSTRAINT pk_admin PRIMARY KEY ("admin");
ALTER TABLE "admin" ADD CONSTRAINT unq_admin_username UNIQUE (username);