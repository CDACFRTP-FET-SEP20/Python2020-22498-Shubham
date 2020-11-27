var flag = false;
document.getElementById("img").addEventListener("click", () => {
  if (!flag) {
    console.log("clicked");
    flag = true;
    document.getElementById("menu").style.display = "block";
  } else {
    console.log("clicked 2 times");
    flag=false;
    document.getElementById("menu").style.removeProperty('display');
  }
});
