FROM mongo:latest

COPY seed.js /seed.js
CMD mongoimport --host mongo --db myapp_db --collection items --drop --file /seed.js --jsonArray