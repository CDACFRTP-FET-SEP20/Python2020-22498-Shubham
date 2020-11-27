var mainInp = document.getElementById("mainInp");
var flag = false;

function scifiCal() {
  if (flag) {
    hideCal();
    return;
  }

  document.getElementById("hdnBtn1").hidden = false;
  document.getElementById("hdnBtn2").hidden = false;
  document.getElementById("hdnBtn3").hidden = false;
  document.getElementById("hdnBtn4").hidden = false;
  document.getElementById("hdnBtn5").hidden = false;
  document.getElementById("hdnBtn6").hidden = false;

  console.log("huiqefhuiqef");
  flag = true;
}
function hideCal() {
  document.getElementById("hdnBtn1").hidden = true;
  document.getElementById("hdnBtn2").hidden = true;
  document.getElementById("hdnBtn3").hidden = true;
  document.getElementById("hdnBtn4").hidden = true;
  document.getElementById("hdnBtn5").hidden = true;
  document.getElementById("hdnBtn6").hidden = true;

  console.log("huiqefhuiqef");
  flag = false;
}
function getval(e) {
  if (e.value == "x^2") {
    var sq = mainInp.value.slice(-1);
    mainInp.value = mainInp.value.substring(0, mainInp.value.length - 1);

    mainInp.value += Math.pow(sq, 2);

    return;
  }
  if (e.value == "x^3") {
    var sq = mainInp.value.slice(-1);
    mainInp.value = mainInp.value.substring(0, mainInp.value.length - 1);

    mainInp.value += Math.pow(sq, 3);

    return;
  }
  if (e.value == "√x") {
    var sq = mainInp.value.slice(-1);
    mainInp.value = mainInp.value.substring(0, mainInp.value.length - 1);

    mainInp.value += Math.sqrt(sq);

    return;
  }

  mainInp.value += e.value;
}
function result(e) {
  if (e.value == "=" && mainInp.value == "") {
    mainInp.value = " ";
    console.log("in undefined");
    return;
  }

  mainInp.value = eval(mainInp.value);
}
function clearOne() {
  mainInp.value = mainInp.value.substring(0, mainInp.value.length - 1);
}
function clearAll() {
  mainInp.value = "";
}
