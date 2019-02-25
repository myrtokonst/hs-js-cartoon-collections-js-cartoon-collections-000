let dwarves = ["Doc", "Dopey", "Bashful", "Grumpy"]
function dwarfRollCall(dwarves) { let dwarfArray=[]
  for (let i=0;i<dwarves.length;i++){
    dwarfArray.push(`${i+1}. ${dwarves[i]} `)
  }
  return dwarfArray.join("")
}

planeteerCalls = ["earth", "wind", "fire", "water", "heart"]
function summonCaptainPlanet(planeteerCalls){
  let i =0;
  let capArray=[]
  while (i<planeteerCalls.length){
    capArray.push(`${planeteerCalls[i].toUpperCase()}!`)
    i++
  }
  return capArray
}

function longPlaneteerCalls(words) {
  for (let i=0;i<words.length;i++){
    if(words[i].length >4){return true}
    else {return false}
    }
  }

 
  
function findTheCheese (foods) {
  let cheese = ["cheddar", "gouda","camembert","swiss cheese"]
 for (let i=0;i<foods.length;i++){
   for (let j=0; j<cheese.length;j++){
     if (foods[i]===cheese[j]){return cheese[j]}
     }
   }
return "no cheese!" }




function wordsThatStartWithB(words){
  
}


