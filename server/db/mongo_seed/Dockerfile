FROM mongo:latest

COPY json json

CMD mongoimport --host mongodb --db malwarebytes --collection items --drop --jsonArray --file ./json/seedItem.json
