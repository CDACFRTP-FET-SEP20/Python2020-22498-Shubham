"use strict";

function book(bid,bname,btype,bprice){
    this.bid = bid;
    this.bname = bname;
    this.btype=btype;
    this.bprice=bprice;
}

var barr = new Array();


function addbook(){
    document.getElementById("addb").hidden = false;
    document.getElementById("editbook").hidden = true;
    document.getElementById("listb").hidden = true;
    console.log(barr);
    
}

function add(){
    
    var bid= document.getElementById("bid").value;
    var bname= document.getElementById("bname").value;
    var btype= document.getElementById("btype").value;
    var bprice= document.getElementById("bprice").value;
    var newarr = new book(bid,bname,btype,bprice);
 
    barr.push(newarr);
    console.log(barr);
    
}

function reset(){
    
    document.getElementById("bid").Value ='';
    document.getElementById("bname").Value='';
    document.getElementById("btype").Value='';
    document.getElementById("bprice").Value='';
}

function showlist(){
    console.log(barr.length);
    document.getElementById("listtable").innerHTML="";
    document.getElementById("addb").hidden = true;
    document.getElementById("editbook").hidden = true;
    document.getElementById("listb").hidden = false;
    document.getElementById("listtable").innerHTML="<tr><th>Book Id</th><th>Book Name</th><th>Book Type</th><th>Book Price</th><th>Options</th></tr>";
    for(let i=0;i<barr.length;i++){
    document.getElementById("listtable").innerHTML+= "<tr><td>"+barr[i].bid+"</td><td>"+
    barr[i].bname+"</td><td>"+barr[i].btype+"</td><td>"+barr[i].bprice+"</td><td>"+
    "<button onclick='edit("+i+")'>Edit</button><button onclick='remove("+i+")'>Remove</button></td></tr>"
    }
}

function edit(i){
    document.getElementById("listb").hidden = true;
    document.getElementById("editbook").hidden = true;
    document.getElementById("addb").hidden = false;

    document.getElementById("bid").Value =barr[i].bid;
    document.getElementById("bname").Value=barr[i].bname;
    document.getElementById("btype").Value=barr[i].btype;
    document.getElementById("bprice").Value=barr[i].bprice;
    barr.splice(i,1);

}

function remove(i){
    barr.splice(i,1);
    showlist()
}