var flag = false;
function product(pic, name, price, desc) {
  this.pic = pic;
  this.name = name;
  this.price = price;
  this.desc = desc;
}
var arr = new Array();
for (let i = 0; i < 10; i++) {
  var obj = new product(
    "../shopping-cart-20380.png",
    "product" + i + 1,
    i,
    "desc"
  );
  arr.push(obj);
}
document.getElementById("img").addEventListener("click", () => {
  if (!flag) {
    console.log("clicked");
    flag = true;
    document.getElementById("menu").style.display = "block";
  } else {
    console.log("clicked 2 times");
    flag = false;
    document.getElementById("menu").style.removeProperty("display");
  }
});

document.getElementById("new-product").addEventListener("click", () => {
  document.getElementById("new-product").style.display = "none";
  document.getElementById("form").style.display = "block";
  document.getElementById("list").style.display = "none";
  document.getElementById("show-list").style.display = "block";
});

document.getElementById("form-obj").addEventListener("submit", (e) => {
  document.getElementById("show-list").style.display = "block";
  e.preventDefault();

  var pic = document.getElementById("picture").value;
  var name = document.getElementById("name").value;
  var price = document.getElementById("price").value;
  var desc = document.getElementById("desc").value;
  console.log(pic);
  if (pic != "" && name != "" && price != "" && desc != "") {
    var obj = new product(pic, name, price, desc);
    arr.push(obj);
    console.log(arr);
  } else {
    alert("Enter the details");
  }
});

document.getElementById("show-list").addEventListener("click", () => {
  document.getElementById("form").style.display = "none";
  document.getElementById("new-product").style.display = "block";
  document.getElementById("list").style.display = "grid";
  document.getElementById("show-list").style.display = "none";
  console.log(arr);
  document.getElementById("list").innerHTML = "";
  arr.forEach((ele) => {
    document.getElementById("list").innerHTML +=
      "<div class='prd-div'>" +
      "<img class='prd-img' src=" +
      ele.pic +
      ">" +
      "<br>" +
      ele.name +
      "<br><br>" +
      ele.price +
      "<p class='prd-para'>" +
      ele.desc +
      "</p><p><button>Add to Cart</button></p><br>";
  });
});
