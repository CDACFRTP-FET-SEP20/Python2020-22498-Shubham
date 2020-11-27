$(document).ready(() => {
  $("body").css({
      'height':'600px',
      'display':'flex',
      'flex-direction' : 'column',
  })
  $("header,footer").css({
    "background-color": "#666",
    'flex': "1",
    'color': "white",
    "text-align": "center",
  });
  $("header").html("<h1>Cybage</h1>");
  $("footer").html("<h3>This is Footer</h3>");
  $("h1,h3").css({
    "padding-top": "20px",
    'margin': "0",
  });
  $("section").css({
    'flex': "6",
    'color': "black",
    'display': "flex",
    "flex-direction": "row",
  });

  $("aside").css({
    "border-style": "groove",
    'flex': "1",
  });
  $("div").css({
    "border-style": "groove",
    'flex': "2",
  });
  $("div,aside").html('<p class=para'+
    " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, illocupiditate, perferendis itaque aut reiciendis natus, obcaecati atexplicabo laudantium ipsam id quisquam maiores. Ratione porro deserunthic voluptas non!<br>" +
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, illocupiditate, perferendis itaque aut reiciendis natus, obcaecati atexplicabo laudantium ipsam id quisquam maiores. Ratione porro deserunthic voluptas non!"
    +'</p>'
      );
});
