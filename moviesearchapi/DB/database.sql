CREATE DATABASE bookings;

CREATE TABLE showBookings
(
    user_id SERIAL PRIMARY KEY,
    fname VARCHAR(255),
    title VARCHAR(255),
    ticket SERIAL
);