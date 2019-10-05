var age = 21;
var counter = 0;
// repeat until counter = age
while(counter < age) {
    counter++;
    if(counter >= age/2 && counter < (3/4)*age) {
        console.log ("No age zone");
        continue;
    }
    console.log ('counter :' + counter);
   
}