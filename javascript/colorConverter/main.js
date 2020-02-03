//RGB to HSL Converter
for (var color = 0; color <= 82; color++) {
  var R = Math.floor(Math.random() * 255);
  var G = Math.floor(Math.random() * 255);
  var B = Math.floor(Math.random() * 255);
  var min = R / 255;
  var max = B / 255;
  
 var l = (min + max) / 2;
 l = l.toFixed(2)
 if (l < 0.5) {
    var s = (max-min)/(min+max);
  //console.log("Condition one " + s,l);
  } else {
    s = (max-min)/(2.0-min-max);
  //console.log("Condition two" + s,l);
  }
  
  //Two done, one to go. We still need to calculate the Hue.
  //The Hue formula is depending on what RGB color channel is the max value. The three different formulas are:
    if((R > G) && (R > B)){
      var h = (G-B)/(max-min)
      console.log(h+","+s + "," + l);
  } else if((G > R) && (G > B)){
      h = 2.0 + (B-R)/(max-min)
      console.log(h+","+s + "," + l);
  } else if((B > R) && B > G){
    h = 4.0 + (R-G)/(max-min);
      console.log(h+","+s + "," + l);
  }
}
