function getSeatNo() {
    var seatNo = document.getElementById("sn").value;
    berthType(seatNo)
}

function berthType(sn) {
    if(((sn-1) % 4 == 0 && ((sn-1)/4) % 2 == 0) || sn % 4 == 0 && (sn/4) % 2 != 0) {
        console.log("Seat number " + sn + " is Lower Berth");
    }
    
    else if(((sn-2) % 4 == 0 && ((sn-2)/4) % 2 == 0) || ((sn-1) % 4 == 0 && ((sn-1)/4) % 2 != 0)) {
        console.log("Seat number " + sn + " is Middle Berth");
    }
    
    else if(((sn+1) % 4 == 0 && ((sn+1)/4) % 2 != 0) || ((sn-2) % 4 == 0 && ((sn-2)/4) % 2 != 0)) {
        console.log("Seat number " + sn + " is Upper Berth");
    }
    
    else if((sn+1) % 4 == 0 && ((sn+1)/4) % 2 == 0) {
        console.log("Seat number " + sn + " is Side Lower Berth");
    }
    
    else if((sn) % 4 == 0 && ((sn)/4) % 2 == 0) {
        console.log("Seat number " + sn + " is Side Upper Berth");
    }

    else {
        console.log("Seat number " + sn + " is Incorrect!")
    }
}