document.getElementById("triangle").addEventListener("click", function () {
  console.log(this);
  document.getElementById("points").hidden = false;
  document.getElementById("p4").hidden = true;
});
document.getElementById("rectangle").addEventListener("click", function () {
  console.log(this);
  document.getElementById("points").hidden = false;
  document.getElementById("p4").hidden = false;
});
document.getElementById("square").addEventListener("click", function () {
  console.log(this);
  document.getElementById("points").hidden = false;
  document.getElementById("p4").hidden = false;
});

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
class Shape {
  constructor(eadge, points) {
    this.eadge = eadge;
    this.points = points.map((ele) => {
      return new Point(ele[0], ele[1]);
    });
  }
  perimeter() {
    console.log("shape perimeter");
  }

  area() {
    console.log("shape area");
  }
}
class Triangle extends Shape {
  constructor(eadge, points) {
    super(eadge, points);
  }
  perimeter() {
    console.log("Triangle perimeter");
    var x1 = this.points[0].x;
    var y1 = this.points[0].y;
    var x2 = this.points[1].x;
    var y2 = this.points[1].y;
    var x3 = this.points[2].x;
    var y3 = this.points[2].y;

    var l1 = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    var l2 = Math.sqrt(Math.pow(x2 - x3, 2) + Math.pow(y2 - y3, 2));
    var l3 = Math.sqrt(Math.pow(x1 - x3, 2) + Math.pow(y1 - y3, 2));

    var p = l1 + l2 + l3;
    document.getElementById('res').innerHTML="Perimeter of Triangle is: " + p.toFixed(2);
    // alert("Perimeter of Triangle is: " + p);
  }
  area() {
    console.log("Triangle area");
    var x1 = this.points[0].x;
    var y1 = this.points[0].y;
    var x2 = this.points[1].x;
    var y2 = this.points[1].y;
    var x3 = this.points[2].x;
    var y3 = this.points[2].y;

    var a = Math.abs((x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)) / 2);
    document.getElementById('res').innerHTML="Area of Triangle is: " + a.toFixed(2);
    // alert("Area of Triangle is: " + a);
  }
}
class Rectangle extends Shape {
  constructor(eadge, points) {
    super(eadge, points);
  }
  perimeter() {
    console.log("Rectangle perimeter");
    var x1 = this.points[0].x;
    var y1 = this.points[0].y;
    var x2 = this.points[1].x;
    var y2 = this.points[1].y;
    var x3 = this.points[2].x;
    var y3 = this.points[2].y;
    var x4 = this.points[3].x;
    var y4 = this.points[3].y;

    var l1 = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    var l2 = Math.sqrt(Math.pow(x2 - x3, 2) + Math.pow(y2 - y3, 2));
    var l3 = Math.sqrt(Math.pow(x4 - x3, 2) + Math.pow(y4 - y3, 2));
    var l4 = Math.sqrt(Math.pow(x1 - x4, 2) + Math.pow(y1 - y4, 2));

    var p = l1 + l2 + l3 + l4;
    document.getElementById('res').innerHTML="Perimeter of Rectangle is: " + p.toFixed(2);
    // alert("Perimeter of Rectangle is: " + p);
  }
  area() {
    console.log("Rectangle area");
    var x1 = this.points[0].x;
    var y1 = this.points[0].y;
    var x2 = this.points[1].x;
    var y2 = this.points[1].y;
    var x3 = this.points[2].x;
    var y3 = this.points[2].y;

    var l1 = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    var l2 = Math.sqrt(Math.pow(x2 - x3, 2) + Math.pow(y2 - y3, 2));

    var a = l1 * l2;
    document.getElementById('res').innerHTML="Area of Rectangle is: " + a.toFixed(2);
    // alert("Area of Rectangle is: " + a);
  }
}
class Square extends Shape {
  constructor(eadge, points) {
    super(eadge, points);
  }
  perimeter() {
    console.log("Square perimeter");
    var x1 = this.points[0].x;
    var y1 = this.points[0].y;
    var x2 = this.points[1].x;
    var y2 = this.points[1].y;
    var x3 = this.points[2].x;
    var y3 = this.points[2].y;
    var x4 = this.points[3].x;
    var y4 = this.points[3].y;

    var l1 = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    var l2 = Math.sqrt(Math.pow(x2 - x3, 2) + Math.pow(y2 - y3, 2));
    var l3 = Math.sqrt(Math.pow(x4 - x3, 2) + Math.pow(y4 - y3, 2));
    var l4 = Math.sqrt(Math.pow(x1 - x4, 2) + Math.pow(y1 - y4, 2));

    var p = l1 + l2 + l3 + l4;
    document.getElementById('res').innerHTML="Perimeter of Square is: " + p.toFixed(2);
    // alert("Perimeter of Square is: " + p);
  }
  area() {
    console.log("Square area");

    var x1 = this.points[0].x;
    var y1 = this.points[0].y;
    var x2 = this.points[1].x;
    var y2 = this.points[1].y;

    var l1 = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));

    var a = Math.pow(l1, 2);
    document.getElementById('res').innerHTML="Area of Square is: " + a.toFixed(2);
    // alert("Area of Square is: " + a);
  }
}
function peri() {
  if (document.getElementById("triangle").checked) {
    var a1 = document.getElementById("x1").value;
    var b1 = document.getElementById("y1").value;
    var a2 = document.getElementById("x2").value;
    var b2 = document.getElementById("y2").value;
    var a3 = document.getElementById("x3").value;
    var b3 = document.getElementById("y3").value;

    var p = new Triangle(3, [
      [a1, b1],
      [a2, b2],
      [a3, b3],
    ]);
    p.perimeter();
  }
  if (
    document.getElementById("square").checked ||
    document.getElementById("rectangle").checked
  ) {
    var a1 = document.getElementById("x1").value;
    var b1 = document.getElementById("y1").value;
    var a2 = document.getElementById("x2").value;
    var b2 = document.getElementById("y2").value;
    var a3 = document.getElementById("x3").value;
    var b3 = document.getElementById("y3").value;
    var a4 = document.getElementById("x4").value;
    var b4 = document.getElementById("y4").value;
    if (document.getElementById("square").checked) {
      var p = new Square(4, [
        [a1, b1],
        [a2, b2],
        [a3, b3],
        [a4, b4],
      ]);
      p.perimeter();
    } else {
      var p = new Rectangle(4, [
        [a1, b1],
        [a2, b2],
        [a3, b3],
        [a4, b4],
      ]);
      p.perimeter();
    }
  }
}
function area() {
  if (document.getElementById("triangle").checked) {
    var a1 = document.getElementById("x1").value;
    var b1 = document.getElementById("y1").value;
    var a2 = document.getElementById("x2").value;
    var b2 = document.getElementById("y2").value;
    var a3 = document.getElementById("x3").value;
    var b3 = document.getElementById("y3").value;

    var p = new Triangle(3, [
      [a1, b1],
      [a2, b2],
      [a3, b3],
    ]);
    p.area();
  }
  if (
    document.getElementById("square").checked ||
    document.getElementById("rectangle").checked
  ) {
    var a1 = document.getElementById("x1").value;
    var b1 = document.getElementById("y1").value;
    var a2 = document.getElementById("x2").value;
    var b2 = document.getElementById("y2").value;
    var a3 = document.getElementById("x3").value;
    var b3 = document.getElementById("y3").value;
    var a4 = document.getElementById("x4").value;
    var b4 = document.getElementById("y4").value;
    if (document.getElementById("square").checked) {
      var p = new Square(4, [
        [a1, b1],
        [a2, b2],
        [a3, b3],
        [a4, b4],
      ]);
      p.area();
    } else {
      var p = new Rectangle(4, [
        [a1, b1],
        [a2, b2],
        [a3, b3],
        [a4, b4],
      ]);
      p.area();
    }
  }
}
