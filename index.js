// add solution here
function theBeatlesPlay(musicians,instruments){
 
 let newArray = [];
  
 for( var i=0; i<musicians.length; i++){
   newArray.push(musicians[i] + " plays " + instruments[i])
 }
 
 return newArray;
}

function johnLennonFacts(array) {
   var i = 0;
   while (i < array.length) {
     array[i] = array[i] + "!!!";
     i++;
   }
   return array;
}

