#!/bin/bash

osascript -e 'tell app "Terminal" to do script "mongod --dbpath ~/Desktop/Learning/Mongo/data/db1 --port 30000 --replSet \"demo\" "'

osascript -e 'tell app "Terminal" to do script "mongod --dbpath ~/Desktop/Learning/Mongo/data/db2 --port 40000 --replSet \"demo\" "'

osascript -e 'tell app "Terminal" to do script "mongod --dbpath ~/Desktop/Learning/Mongo/data/db3 --port 50000 --replSet \"demo\" "'
