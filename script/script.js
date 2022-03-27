function getSeatNo() {
    var seatNo = parseInt((document.getElementById("sn") || {}).value || "0");
    console.log(berthType(seatNo));
}

function berthType(sn) {
    if((((sn-1)/4) % 2 == 0) || (sn/4) % 2 == 1) {
        return ("Seat number " + sn + " is Lower Berth");
    }
    
    else if((((sn-2)/4) % 2 == 0) || (((sn-1)/4) % 2 == 1)) {
        return ("Seat number " + sn + " is Middle Berth");
    }
    
    else if((((sn+1)/4) % 2 == 1) || (((sn-2)/4) % 2 == 1)) {
        return ("Seat number " + sn + " is Upper Berth");
    }
    
    else if(((sn+1)/4) % 2 == 0) {
        return ("Seat number " + sn + " is Side Lower Berth");
    }
    
    else if(((sn)/4) % 2 == 0) {
        return ("Seat number " + sn + " is Side Upper Berth");
    }

    else {
        return ("Seat number " + sn + " is Incorrect!");
    }
}