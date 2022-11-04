 //object
 let car = {
    Brand : "Toyota",
    Variant : "Wigo",
    Transmission : "Automatic",
    Lights : {
        Front : "LED",
        Rear : "LED/Bulb",
        Signal : "Buld"
    },

    displayBrand(){
        alert(this.Brand);
        document.writeLine(this.Transmission);
    }
 }

 //class

 class myCar {
    constructor (brand, variant, transmission){
        this.brand = brand;
        this.variant = variant;
        this.transmission = transmission;
    }
 }


 //abstraction
/* function vehicle(){
    this.vehicletype="vehicletype";
}
vehicle.prototype.display=function(){
    return "The brand is: " + this.vehicletype;
}

function MyCar(vehicletype){
    this.vehicletype = vehicletype;
}

MyCar.prototype=Object.create(vehicle.prototype);
var myCar = new MyCar("Toyota"); */