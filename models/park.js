const Park = function(name, ticketPrice, numberOfDinosaurs, addDinosaur) {
    this.name = name;
    this.ticketPrice = ticketPrice;
}

Park.prototype.collectionOfDinosaurs = function () {
    return this.dinosaurs.length;
};

Park.prototype.addDinosaur = function (dinosaur) {
    this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function (dinosaur) {
    const indexOfDinosaur = this.dinosaur.indexOf(dinosaur);
    this.dinosaur.splice(indexOfDinosaur, 1)
}

Park.prototype.removeAllDinosaurs = function () {
    this.dinosaurs.splice(0, this.numberOfDinosaurs());
}

module.exports = Park;