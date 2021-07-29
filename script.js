let reserva1 = {"name":"Juan", "lastN":"Martínez", "email":"email1@gmail.com", "from":"Madrid","to":"Canarias"};
let reserva2 = {"name":"María", "lastN":"Sánchez", "email":"email2@gmail.com","from":"Barcelona","to": "Mayorca"};
let reserva3 = {"name":"Ana", "lastN":"Pérez", "email":"email3@gmail.com", "from":"Palencia", "to": "Galicia"};
let reserva4 = {"name":"John", "lastN":"Jurado", "email":"email4@gmail.com", "from":"Lepe","to":"Los Angeles"};
let reserva5 = {"name":"Pedro", "lastN":"Johnson", "email":"email5@gmail.com", "from":"Toledo","to":"Tegucigalpa"};
let reserva6 = {"name":"Pablo", "lastN":"Mut", "email":"email6@gmail.com", "from":"Burgos","to":"Lima"};
let arrayReservas = [reserva1, reserva2, reserva3, reserva4, reserva5, reserva6];


function catcherInfo()
{
    let name = document.getElementById("name").value;
    let lastN = document.getElementById("lastN").value;
    let email = document.getElementById("email").value;
    let from = document.getElementById("origen").value;
    let to = document.getElementById("destino").value;

    let reservasJson = {}
    reservasJson.name = name;
    reservasJson.lastN = lastN;
    reservasJson.email = email;
    reservasJson.from = from;
    reservasJson.to = to;

    arrayReservas.push(reservasJson);
    console.log(reservasJson,'\n1.', arrayReservas);
};

function filterData()
{
    let county = document.getElementById("destinos").value;
    console.log(county);

    let arrayResultados = [];
    arrayResultados.push(arrayReservas.filter(a => a.to == county))
    alert(JSON.stringify(arrayResultados));
}