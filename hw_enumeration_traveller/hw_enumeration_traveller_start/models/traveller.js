const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {

  return this.journeys.map((journey) => {
    return journey.startLocation;
  });

};

Traveller.prototype.getJourneyEndLocations = function () {

  return this.journeys.map((journey) => {
    return journey.endLocation;
  });

};

Traveller.prototype.getJourneysByTransport = function (transport) {

  return this.journeys.filter((journey) => {
    return journey.transport === transport
  });
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {

  return this.journeys.filter( (journey) => {
    return journey.distance > minDistance;
  });

};

Traveller.prototype.calculateTotalDistanceTravelled = function () {

  return this.journeys.reduce((sum, journey) => {
    return sum + journey.distance;
  }, 0);

};

Traveller.prototype.getUniqueModesOfTransport = function () {

  const transports = this.journeys.map((journey) => {
    return journey.transport;
  });

  let uniqueTransports = new Set(transports);
  return Array.from(uniqueTransports);
};


module.exports = Traveller;
