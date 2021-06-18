#!/bin/bash

curl --header "Content-Type: application/json"   --request POST   --data '{"name":"sergio","email":"hotmail"}'   http://localhost:3000/devs
curl --header "Content-Type: application/json"   --request POST   --data '{"name":"sergio","email":"hotmail"}'   http://localhost:3000/devs
curl --header "Content-Type: application/json"   --request POST   --data '{"name":"sergio1","email":"hotmail"}'   http://localhost:3000/devs
curl --header "Content-Type: application/json"   --request POST   --data '{"name":"franco","email":"hotmail","nationality":"Arg","birthday":"2000-05-19", "proyects":["proyecto1"]}'   http://localhost:3000/devs
curl --header "Content-Type: application/json"   --request POST   --data '{"name":"Hernan","email":"some-mail","nationality":"NZ","birthday":"2000-05-19", "proyects":["proyecto34"]}'   http://localhost:3000/devs

curl --header "Content-Type: application/json"   --request POST   --data '{"name":"first task","start_descrip": " Create the repository and add every one in the Team"}'   http://localhost:3000/tasks
curl --header "Content-Type: application/json"   --request POST   --data '{"name":"connections","start_descrip": " Make the conection between front and backend"}'   http://localhost:3000/tasks
curl --header "Content-Type: application/json"   --request POST   --data '{"name":"first object","start_descrip": " Create one object in the db"}'   http://localhost:3000/tasks

#