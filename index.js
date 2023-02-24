const headquarters = 42
const block = 264

function distanceFromHqInBlocks(someValue){
    if (someValue > 42) {
        return someValue - headquarters;
    } else {
        return headquarters - someValue;
    }
};
function distanceFromHqInFeet(someValue) {
    distanceFromHqInBlocks(someValue);
    const feet = distanceFromHqInBlocks(someValue)*block;
    return feet;
};

function distanceTravelledInFeet(start, destination){
   return Math.abs(start-destination)* block;
};

function calculatesFarePrice(start, destination) {
    const distanceTravelled = distanceTravelledInFeet(start, destination); 
    if (distanceTravelled <= 400) {
      return 0;
    } else if (distanceTravelled > 400 && distanceTravelled < 2000) {
        let discount = (distanceTravelled - 400);
      return (discount * .02);
    }
    else if ((distanceTravelled >= 2000) && (distanceTravelled <= 2500)) {
      return 25;
    }
    else {
      return 'cannot travel that far';
    }
  }