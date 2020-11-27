$(document).ready(()=>{
    var flag = false;
    
    $('#btn').click(()=>{
        console.log("click");
      
        if(!flag)
        {
            console.log(flag);
            $('#navbarNav').addClass('dropdown-view');
            $('#navbarNav').removeClass('collapse');
            flag=true;
        }
        else
        {   $('#navbarNav').addClass('collapse');
            $('#navbarNav').removeClass('dropdown-view');
            flag=false;
        }

    })
})