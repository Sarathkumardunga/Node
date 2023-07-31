// //To create a server usig http request

// const http = require("http");


// //0)connection settings
// //a port is an end point of the communication
// const port = 3000;
// //hostname: IP which is associated with any device connected to the computer network
// const hostname = "127.0.0.1"; // localhost


// //2) defining call back function -respond which is to be executed when an user makes a request 
// //to our server
// const respond = (request, response)=>{
//     console.log(request.url);  //But before i log the request, i have to listen to one.\
//     //So step 3 where i listen to the http request from the server.listen() method on a port with hostname
// }


// //1) first  i need to create a server of http
// const server = http.createServer(respond);  // note that 'respond' is the callback function

// //3) Listen to the user request
// server.listen(port, hostname, ()=>{
//     console.log(`server started on https://${hostname}:${port}/`);
// })

const http = require("http");
const url = require("url");

//connection settings
const port = 3000;
const hostname = "127.0.0.1"; //local host

//creating an array of objects(cars)

const cars =[
    {
        make: 'Audi',
        model: 'A3',
        year: '2015',
        price: 10000,
        transmission: 'Automatic',
        url: `https://images.pexels.com/photos/2394/lights-clouds-dark-car.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`
    },
    {
        make: 'Mercedes',
        model: 'B Class',
        year: '2018',
        price: 20000,
        transmission: 'Manual',
        url: `https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`
    },
    {
        make: 'Ford',
        model: 'Focus',
        year: '2018',
        price: 13000,
        transmission: 'Manual',
        url: `https://images.pexels.com/photos/1007410/pexels-photo-1007410.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`
    }
];

//call back function when a request to my server is made
const respond = (request, response) => {
    if(request.url !== "/favicon.ico"){
        console.log(request.url);
        const query = url.parse(request.url, true).query; // query has:    { transmission: 'Automatic' }
        console.log(query);
        const pathname = url.parse(request.url, true).pathname; // pathname has: /cars
        console.log(pathname);
        //console.log(url.parse(request.url, true).path);   //output:   /cars?transmission=Automatic
        response.setHeader("Content-Type", "text/plain");
        response.writeHead(200,{"Content-Type":"text/html"});

        response.write(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Node practice</title>
        </head>
        <body>`);
        response.write('<p>This Node is really fun</p>');
        
        //function to check the match
        const checkMatch = (car) => (query.make === undefined || query.make.toLowerCase() === car.make.toLowerCase()) &&
                                    (query.model === undefined || query.model.toLowerCase() === car.model.toLowerCase()) &&
                                    (query.year === undefined || query.year.toLowerCase() === car.yaer.toLowerCase()) &&
                                    (query.transmission === undefined || query.transmission.toLowerCase() === car.transmission.toLowerCase()) &&
                                    (query.minprice === undefined || parseInt(query.minprice) <= car.price) &&
                                    (query.maxprice === undefined || parseInt(query.maxprice) >= car.price);

        if(pathname === "/cars"){
            cars.filter(checkMatch).forEach(car => {
                response.write(`
                    <img src="${car.url}" height="200" alt="car image">
                    <p>Make: ${car.make}</p>
                    <p>Model: ${car.model}</p>
                    <p>Year: ${car.year}</p>
                    <p>Price: ${car.price}</p>
                    <p>Transmission: ${car.transmission}</p>
                `)
            });
        }

        response.end(
            `</body>
            </html>`
        );
    }
}

const server = http.createServer(respond);

//listen to the request from the user
server.listen(port , hostname, ()=>{
    console.log(`Server is up and running on https://${hostname}:${port}/`);
})

