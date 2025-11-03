

var guest = {
    name: "Jim",
    date: "August 20, 2025",
    member: "Gold",
    roomSize: "4",
    otherGuests: ["John", "Mike", "Tracy"],
    display: function(){return this.name + this.otherGuests}
};

var guest1 = {
    name: "Mandy",
    date: "September 5, 2025",
    member: "Platnum",
    roomSize: "2",
    otherGuests: ["Josh"]
}
var guestgroup = new Array();

function reservation(){
    var guest = {
        name: document.getElementById('guestname').value,
        checkin: document.getElementById('checkin').value,
        roomtype: document.getElementById('room').value,
        numberOfGuests: document.getElementById('guestnum').value,
    };

    guestgroup.push(guest);
    console.log(guestgroup);
}

document.getElementById('submit').addEventListener('click', reservation);

function showReservations(){

    var message = "";
    for (var i in guestgroup){
        var guest = guestgroup[i];
        message += " " + i + "." + guest.name + " " +guest.checkin + " " + guest.roomtype + " " + guest.numberOfGuests;


    }
    console.log(message);

}

document.getElementById('lists').addEventListener('click', showReservations);


