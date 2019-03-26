function map(num, in_min, in_max, out_min, out_max) {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

function customSigmoid(num,min,max){
  num = map(num,min,max,-2,2);
  num = 1.0/(Math.exp(-1*num)+1.0);
  return num;
}

function heatMapColorforValue(value){
  var h = (1.0 - value) * 240
  return "hsl(" + h + ", 100%, 50%)";
}
