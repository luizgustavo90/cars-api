#  CARS-API
An API responsible to create, check and show the logs(registers) of a external API about cars.
** Please check all swagger and postman documents in: src>documents **

START DE APPLICATION :

with a command "npm run dev" , will be turned on the connection of database and the server localhost.
P.s. Aplication is only in localhost, just according with the test scope.

FUNCTIONS:

### cars-controller:

# carsList:
Is just a view about all cars registered in an especific external API , for this function, we have a GET endpoint to get all cars data.

URL/Endpoint: [GET] listCars - http://localhost:8080/api/listCars 
Parameter necessary: N/A

# createCars:
In this method, will be create a new car register based on the payload which the external API need to receive.
the car register will be added in the external API and a log register will be added in a MongoDB database.

URL/Endoint: [POST] createCar - http://localhost:8080/api/createCar 
Parameter necessary: a car object like the payload which external API need to receive in the req.body:
Parameter Example:
{
    "title":
    "brand":
    "price":
    "year":
}

### logs-controller:

# insertLog:
Here in this method, will be the responsible to add an especific log in the database in every car object which will be created.

URL/Endpoint: N/A (is just a function working with the POST car's endpoint)
Parameter necessary: N/A
Log Model:
{
    "data_hora": "xxxx-xx-xxTxx:xx:xx.xxxZ"
    "car_id": "(car MongoDB id created)"
}

# logList
The responsible method to show de logs List , all the logs registered in the dataBase.

URL/endpoint: [GET] logs - http://localhost:8080/api/logs 
Parameter necessary: N/A

### webhook-controller:

# webhookProcessor:
When a car is created, besides the log process creation, we have in parallel a message sent in a queue to allert this creation, and after that, a webhook link responsible to receive it. In this method, is here the responsability to process this webhook.

URL/Endpoint: N/A
Parameter necessary: The queue will send automatically the message after creation.

--

Api created by: Luiz Gustavo Rolim Oliveira Carvalho de Souza




