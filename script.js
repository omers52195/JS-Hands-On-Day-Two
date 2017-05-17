var bing = "bing";
var bong = "bong";

for (var counter = 1; counter <= 100; counter++){
  if ((counter % 3 === 0) && (counter % 5 === 0)){
    console.log(bing + " " + bong);
  } else if (counter % 3 === 0){
    console.log(bing);
  } else if (counter % 5 === 0){
    console.log(bong);
  } else {
    console.log(counter);
  }
}
