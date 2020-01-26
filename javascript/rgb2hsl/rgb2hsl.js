var HSL = [];

for (var color = 0; color <= 82; color++) {
  var R = Math.random(255);
  var G = Math.random(255);
  var B = Math.random(255);
  console.log(R, G, B);
  var h, s, l;
  var r = R / 255;
  var g = G / 255;
  var b = B / 255;

  var max = Math.max(Math.max(r, g, b), b);
  var min = Math.min(Math.min(r, g, b), b);

  // Luminosity is the average of the max and min rgb color intensities.
  var l = (max - min) / 2;

  //Saturation

  var delta = max - min;
  if (delta == 0) {
    //it's gray
    HSL[(0, 0, l)];
  }

  // it's not gray
  if (l < 0.5) {
    s = delta / (max + min);
  } else {
    s = delta / (2 - max - min);
  }

  // hue
  r2 = ((max - r) / 6 + delta / 2) / delta;
  g2 = ((max - g) / 6 + delta / 2) / delta;
  b2 = ((max - b) / 6 + delta / 2) / delta;

  switch (max) {
    case r == max:
      h = b2 - g2;
      break;
    case g == max:
      h = 1.0 / 3.0 + r2 - g2;
      break;
    case b == max:
      h = 2.0 / 3.0 + g2 - r2;
      break;
  }

  //fix wraparounds
  switch (h) {
    case h < 0:
      h += 1;
      break;
    case h > 1:
      h -= 1;
      break;
  }
  console.log(h + "values", s + "values", l + "values");
}
