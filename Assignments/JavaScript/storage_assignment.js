function localkey(){
    if(typeof(Storage) !=="undefined")
    {   
        
        var entered_key = document.getElementById("key1").value;
        console.log(entered_key);
        var entered_value = document.getElementById("value1").value;
        console.log(entered_value);
        document.getElementById("detection").innerHTML = "browser supports";
        if (localStorage.localkey){
            localStorage.setItem(entered_key,entered_value);
        }
        else{
            localStorage.setItem(entered_key,entered_value);
        }
       
        location.reload();
    
    }
    else{
        document.getElementById("detection").innerHTML = "browser doesnt support";
    }
}

function sessionkey(){
    if(typeof(Storage) !=="undefined")
    {   
        
        var entered_key = document.getElementById("key1").value;
        console.log(entered_key);
        var entered_value = document.getElementById("value1").value;
        console.log(entered_value);
        document.getElementById("detection").innerHTML = "browser supports";
        if (sessionStorage.localkey){
            sessionStorage.setItem(entered_key,entered_value);
        }
        else{
            sessionStorage.setItem(entered_key,entered_value);
        }
        
        location.reload();
    
    }
    else{
        document.getElementById("detection").innerHTML = "browser doesnt support";
    }
}

function removelocal(r){
    var i = r.parentNode.parentNode.rowIndex;
    var n = i-1;
    console.log(i +" value of I");
    var keyname = localStorage.key(n);
    localStorage.removeItem(keyname);
    document.getElementById("localtable").deleteRow(i);
}

function removesession(r){
    var i = r.parentNode.parentNode.rowIndex;
    console.log(i +" value of I");
    var n = i-1;
    var keyname = sessionStorage.key(n);
    sessionStorage.removeItem(keyname);
    document.getElementById("sessiontable").deleteRow(i);
}

function pageload(){
    var table1 = document.getElementById("localtable");
        
    console.log(localStorage.length);
    for(var i=0; i < localStorage.length; i++)
    {   console.log(i);
        var keyname = localStorage.key(i);
        var valuestring = localStorage.getItem(keyname);
        if(keyname !==""){
        console.log(keyname);
        console.log(valuestring);
        var newrow= table1.insertRow(-1);
        var cell0 = newrow.insertCell(0);
        var celltext0 = document.createTextNode(keyname);
        cell0.appendChild(celltext0);
        var cell1 = newrow.insertCell(1);
        var celltext1 = document.createTextNode(valuestring);
        cell1.appendChild(celltext1);
        var cell2 = newrow.insertCell(2);
        cell2.innerHTML = "<button type='button' onclick='removelocal(this)'>Remove</button>";
        }
    }
    var table2 = document.getElementById("sessiontable");
        console.log(sessionStorage.length);
        for(var i=0; i < sessionStorage.length; i++)
        {   console.log(i);
            var keyname = sessionStorage.key(i);
            var valuestring = sessionStorage.getItem(keyname);
            if(keyname !==""){
            console.log(keyname);
            console.log(valuestring);
            var newrow= table2.insertRow(-1);
            var cell0 = newrow.insertCell(0);
            var celltext0 = document.createTextNode(keyname);
            cell0.appendChild(celltext0);
            var cell1 = newrow.insertCell(1);
            var celltext1 = document.createTextNode(valuestring);
            cell1.appendChild(celltext1);
            var cell2 = newrow.insertCell(2);
            cell2.innerHTML = "<button type='button' onclick='removesession(this)'>Remove</button>";
            }
        }
}
function removeall(){
    localStorage.clear();
    location.reload();
}

function removeallsession(){
    sessionStorage.clear();
    sessionStorage.removeItem(sessionStorage.key(0));
    location.reload();
}