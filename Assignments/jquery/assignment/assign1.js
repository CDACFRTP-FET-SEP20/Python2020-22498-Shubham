$("document").ready(function () {
  //$.getJSON("https://jsonplaceholder.typicode.com/photos", function (data) {
  $.ajax({ 
    url:"https://jsonplaceholder.typicode.com/photos",
    method:"GET",
    data:"JSON",
    success:(data)=>{
    $.each(data, function (i, v) {
      console.log(v.title);
      let ele = "<div class='div1'>"+"<img src="+v.thumbnailUrl+
      "width='70' height='100'>"+"<br>"+"<span>"+v.title+"</span>"+"<br>"+"<button>Add to cart</button>"+"</div>";
      $('.article1').append(ele);
    })
  },
  async : false
  });
});
