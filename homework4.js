var house = {
    areas: [
        {
            livingRoom: {
                items: ['tv','sofa']
            }, 
            bedroomOne: {
                items: ['bed','washing machine'],
                windows: 3
            }, 
            bedroomTwo: {
                items: ['bed','bed','desk'],
                windows: 4}, 
            kitchen:{
                items: ['fridge','broken chair']
            }            
        }
    ], 
    garden: [true, 'Red Rose'], 
    garage: {
        car: {
            color: 'red', 
            wheels: 4, 
            honk: ()=>{alert("Beep")
        }
    }
    }
}

// Find total number of areas in the house
const areas=house.areas[0];
console.log(Object.keys(areas));
const areaNames=Object.keys(areas);
console.log(areaNames.length);

// Add a dining table to the living room
areas.livingRoom.items.push("dining table");
console.log(areas)

// Add a stove to the kitchen
areas.kitchen.items.push("stove");
console.log(areas)
// Remove the washing machine from bedroomOne
let washingMachineIndex = areas.bedroomOne.items.indexOf('washing machine');
areas.bedroomOne.items.splice(washingMachineIndex)
console.log(areas)
// Find the total number of beds in all rooms
let numberOfBeds = 0;
areaNames.forEach((area) => {
    console.log(area);
    console.log(areas[area].items)
    let items = areas[area].items;

    for (let i=0; i<items.length; i++){
        if (items[i] == "bed"){
            numberOfBeds = numberOfBeds + 1;
        }
    }
})
console.log(numberOfBeds)
// Change the color of the car to blue
house.garage.car.color = 'blue'
console.log(house.garage.car.color)
// Add a another car to the garage with a honk function
house.garage.newCar = {
    color: 'red',
    wheels: 4,
    honk: ()=>{
        alert("Beep")
    }
}
console.log(house.garage.newCar)
// Make the new car honk
house.garage.newCar.honk();

// Change the 'broken chair' in the kitchen to 'new chair'
let positionOfBrokenChair = house.areas[0].kitchen.items.indexOf('broken chair')
house.areas[0].kitchen.items[positionOfBrokenChair] = "new chair";
console.log(house.areas[0].kitchen.items);

// If the house has a garden, console.log the name of the flower
if(house.garden[0]) {
    console.log('name of the flower',house.garden[1]);
}
