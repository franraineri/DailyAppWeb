#!/bin/bash

curl --header "Content-Type: application/json"   --request POST   --data '{"name":"sergio","email":"hotmail"}'   http://localhost:3000/devs
curl --header "Content-Type: application/json"   --request POST   --data '{"name":"sergio","email":"hotmail"}'   http://localhost:3000/devs
curl --header "Content-Type: application/json"   --request POST   --data '{"name":"sergio1","email":"hotmail"}'   http://localhost:3000/devs
curl --header "Content-Type: application/json"   --request POST   --data '{"name":"franco","email":"hotmail","nationality":"Arg","birthday":"2000-05-19", "proyects":["proyecto1"]}'   http://localhost:3000/devs

#