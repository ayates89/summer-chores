const personsName = "Amber"


function mowYard(personsName) {
    return new Promise (resolve => {
    setTimeout(() => {

        const didMowYard = Math.random() > 0.2;

      if(didMowYard) {
        resolve(`${personsName} has mowed the yard`)
      } else {
        reject(`${personsName} fell asleep while mowing the yard`)
      }
    }, 2000);
});
}

function weedEat(personsName) { 
    return new Promise ((resolve, reject) => {
   setTimeout(() => {
   
        const didWeedEat = Math.random() > 0.4;
        
      if(didWeedEat) {
        resolve(`${personsName} has finished weed eating`)
      } else {
        reject(`${personsName} fell asleep while weed eating`)
      }
    }, 1500);
});
}


function trimHedges(personsName) {
    return new Promise ((resolve, reject) => {
   setTimeout(() => {
     const didTrimHedges = Math.random() > 0.4;
    if(didTrimHedges) {
        resolve(`${personsName} has finished trimming the hedges`)
       
    } else {
        reject(`${personsName} fell asleep while trimming the hedges`)
    }
    }, 1000);
});
}


function collectWood(personsName) {
   return new Promise ((resolve, reject) => {
    setTimeout(() => {
        const didCollectWood = Math.random() > 0.3;
        if(didCollectWood) {  
            resolve(`${personsName} has finished collecting the wood`)
           
    } else {
        reject(`${personsName} fell asleep while collecting the wood`)
    }
    }, 2500);
});
}


function waterGarden(personsName) {
   return new Promise ((resolve, reject) => {
    setTimeout(() => {
        const didWaterGarden = Math.random() > 0.2;
        if(didWaterGarden) {
            resolve(`${personsName} has finished watering the garden`)
    
    } else {
        reject(`${personsName} fell asleep while watering the garden`)
    }
    }, 500);
});
}

function doSummerChores(personsName) {
    mowYard(personsName).then((result) => {
        console.log(result);
        return weedEat(personsName);
    }).then((result) => {
        console.log(result);
        return trimHedges(personsName);
    }).then((result) => {
        console.log(result);
        return collectWood(personsName);
    }).then((result) => {
        console.log(result);
        return waterGarden(personsName);
    }).then((result) => {
        console.log(result);
        console.log(`${personsName} has finished all their chores!`)
                    })
    .catch((error) => {
        console.log(error);
    });
      
}

doSummerChores(personsName);