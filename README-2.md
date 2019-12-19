Mongoose API Workshop - Exercise 2 - Implement Mongoose
Replace dummy data by mongoose database calls
Setup a Mongoose connection

do this BEFORE all your routes
do NOT setup the mongoose connection WITHIN a route!
do not use any mongoose connection events
Setup schema and model for a flat

A flat document should be defined like this:
address_full: String (Street Nr, Zipcode, City, Country)
district: String,
area_sqm: Number,
rooms: Number,
rent: Number,
landlord: String
Make the field address required
Give the field rooms a default value 1
Adapt routes - Replace prototype dummy data by real database implementation

replace dummy routes with Mongoose CRUD
use a then() handler after each mongoose operation
use res.send() within then then() handler to send data back to the browser
use a catch(err) handler after each mongoose operation => call the next() function and pass the received error into it