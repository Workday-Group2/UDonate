CREATE TABLE users (
id          SERIAL PRIMARY KEY,
username    TEXT NOT NULL,
password    TEXT NOT NULL,
first_name  TEXT NOT NULL,
last_name   TEXT NOT NULL,
email       TEXT NOT NULL UNIQUE CHECK (POSITION('@' IN EMAIL) > 1),
created_at  TIMESTAMP NOT NULL DEFAULT NOW(),
updated_at  TIMESTAMP DEFAULT NOW()
);

CREATE TABLE donation (
id          SERIAL PRIMARY KEY,
name        TEXT NOT NULL,
category    TEXT NOT NULL,
quantity    INTEGER NOT NULL DEFAULT 1,
image_url   TEXT NOT NULL,
expiration_date TIMESTAMP NOT NULL,
user_id     INTEGER NOT NULL,
created_at  TIMESTAMP NOT NULL DEFAULT NOW(),
FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE rating (
  rating      INTEGER NOT NULL CHECK (rating > 0 AND rating <= 10),
  donation_id INTEGER NOT NULL REFERENCES donation(id) ON DELETE CASCADE,
  user_id     INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  created_at  TIMESTAMP NOT NULL DEFAULT NOW(),  
  PRIMARY KEY (donation_id, user_id)
);

CREATE TABLE booking (
  id             SERIAL PRIMARY KEY,  
  donation_id    INTEGER NOT NULL REFERENCES donation(id) ON DELETE CASCADE,
  user_id        INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  created_at     TIMESTAMP NOT NULL DEFAULT NOW()
);