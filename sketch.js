var circulation;

function preload() {
  circulation = loadJSON("https://data.brla.gov/resource/m33w-s9q6.json");
}

function setup() {

  createCanvas(600, 600, WEBGL);
  background(0);

  noStroke();
  print(circulation);
  print(circulation[0].year);
  print(circulation[0].month);
  print(circulation[0].circulation_total);
  print(Object.keys(circulation).length);



}

function draw() {

  var i = 0;
  var x = 20;
  var y = 20 
      
      fill(random(200), random(255), random(255));
      noStroke();
      rotateX(frameCount * 0.01);
      rotateY(frameCount * 0.01);
      rotateZ(frameCount * 0.01);
      translate(x, y, cos(x));
      box(circulation[i].interlibrary_loan, circulation[i].interlibrary_loan / 2000, circulation[i].interlibrary_loan / 2000);
      i++;
      x = (circulation[i].interlibrary_loan);
      y = (circulation[i].interlibrary_loan);

}