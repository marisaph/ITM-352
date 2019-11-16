function isNonNegInt(q, sendArrayBack = false)
{
    errors = []; // assume no errors at first
    if(Number(q) != q) errors.push('Not a number!'); // Check if string is a number value
    if(q < 0) errors.push('Negative value!'); // Check if it is non-negative
    if(parseInt(q) != q) errors.push('Not an integer!'); // Check that it is an integer

   if (sendArrayBack)
   {
       return (errors);
   } else
    return(errors.length = 0);
}

console.log(isNonNegInt("-3",true));

attributes  =  ("Marisa; 21; 21.5 ; 20.5; mis ");
separator = ";" ; 
pieces = attributes.split(separator);
console.log(pieces)

for (i=0; i<pieces.length; i++)
{
    console.log ($(typeof(pieces[1]) $(isNonNegInt()));
}

recon= pieces.join (separator);
console.log(recon);

pieces.forEach(isNonNegInt);