//'C' to 'F'
function celciusToFahrenheit(celcius){
   const fahrenheit= celcius*9/5+32;
   return `${fahrenheit} degree F`;
}
function fahrenheitToCelcius(fahrenheit){
    const celcius=(fahrenheit-32)*5/9;
    return `${celcius} degree C`;
}

function tempConvert(number,unit){
    if(unit==='C'){ console.log(celciusToFahrenheit(number))}
    else{console.log(fahrenheitToCelcius())};
}




tempConvert(30,'C');






