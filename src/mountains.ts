let fullName:string = "JJ"

let car = {
    make: "Chevrolet",
    model:"Escalade",
    year: 2020,
    isUsed: true,
}

interface Mountain{
    name:string,
    height:number,

}

let newMountain: Mountain = {
    name: "Kilimanjaro",
    height: 10000,
}

let Mountains: Mountain[] =[];

let numberArray:number[] = [1, 3, 5, 10,]

let mountains:Mountain[] = [{
    name: "kilimajaro", height: 19341 }, {name: "everest", height: 29029}, {name: "denali", height: 20310}]
}]

function findNameOfTallestMountain(mountains: Mountain[]) :string {
    let currentTallest = 0;
    let currentName = "";

    for (let mountain of mountains){
        if(mountain.height > currentTallest){
            currentTallest = mountain.height;
            currentName = mountain.name;
        }
    }

    return currentName;

}

console.log(findNameOfTallestMountain(mountains))


