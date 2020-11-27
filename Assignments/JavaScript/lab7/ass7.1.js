
var flag = false;

document.getElementById("read").addEventListener('click',()=>{
    if(flag == false)
    {
    document.getElementById("fwritertag").hidden= false;
    document.getElementById("fwriter").hidden= false;
    flag = true;
    }
    else{
    document.getElementById("fwritertag").hidden= true;
    document.getElementById("fwriter").hidden= true;
    flag = false;
    }
});
function valthisform(){

if(document.getElementById('fname').value==""){
    document.getElementById('fname').style.borderColor="red";
}
var ok= false;

    var cb = document.getElementsByName("hobby");
    for(let i =0; i<cb.length;i++){
        if (cb[i].checked){
            
                ok = true;
                break;
        }
    }
    if(!ok){
        alert("check atleast one hobby");
    }

}

setInterval('increment()', 1000);
var sec = 0;
var min = 0;
var para = document.getElementById('para');
var a,b;
function increment(){
    if(sec<10){
        a = "0"+sec;
    }
    else
    {
        a = sec;
    }
    if(min<10){
        b ="0"+min;
    }
    else{
        b = min;
    }
    para.innerHTML = "Welcome! You are using “"+window.navigator.appCodeName+"” and you are on this page since "+b+":"+a+" minutes";
    if(sec<60)
    {
        sec+=1;
    }
    else{
        sec=0;
        min= min+1;
    }
}


