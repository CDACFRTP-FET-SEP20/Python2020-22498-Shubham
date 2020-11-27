function addNumbers(){
    
    var sum = headParam + bodyParam;
    console.log(sum);
    document.body.innerHTML="<p><code>The script is located in external script file called math.js:</code></p>";
    
    document.body.innerHTML+="Addition of "+headParam+" and "+bodyParam+" is:"+sum;
    
}