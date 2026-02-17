const personsName = "Amber"

function staysAwake() {
    return Math.random() > 0.2;
}

function mowYard(personsName,callback) {
    setTimeout(() => {
        console.log(`${personsName} has mowed the yard`)
        callback()
    }, 2000)
}

function weedEat(personsName, callback) { 
   setTimeout(() => {
    if(staysAwake()) {
        console.log(`${personsName} has finished using the weedeater`)
        } 
        else {
        console.log(`${personsName} fell asleep while using the weedeater`)
    }
     callback()  
    }, 1500)
}

function trimHedges(personsName, callback) {
   setTimeout(() => {
    if(staysAwake()) {
        console.log(`${personsName} has finished trimming the hedges`)
        callback()
    } else {
        console.log(`${personsName} fell asleep while trimming the hedges`)
    }
    }, 1000)
}
function collectWood(personsName, callback) {
   setTimeout(() => {
    if(staysAwake()) {  
        console.log(`${personsName} has finished collecting the wood`)
        callback()      
    } else {
        console.log(`${personsName} fell asleep while collecting the wood`)
    }
    }, 2500)
}
function waterGarden(personsName, callback) {
   setTimeout(() => {
    if(staysAwake()) {
        console.log(`${personsName} has finished watering the garden`)
        callback()  
    } else {
        console.log(`${personsName} fell asleep while watering the garden`)
    }
    }, 500)
}

function doSummerChores(personsName) {
    mowYard(personsName, () => {
        weedEat(personsName, () => {
            trimHedges(personsName, () => {
                collectWood(personsName, () => {
                    waterGarden(personsName, () => {
                        console.log(`${personsName} has finished all their chores!`)
                    })
                })
            })
        })
    })
}

doSummerChores(personsName);


