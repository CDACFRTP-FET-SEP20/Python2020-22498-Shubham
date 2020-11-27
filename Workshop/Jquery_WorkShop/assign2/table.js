$("document").ready(() => {
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/users",
    method: "GET",
    success: (x) => {
      $.each(x, (i, v) => {
        $("tbody").append(
          "<tr><td>" +
            v.id +
            "</td><td>" +
            v.name +
            "</td><td>" +
            v.username +
            "</td><td>" +
            v.email +
            "</td><td>" +
            v.phone +
            "</td><td>" +
            v.website +
            "</td></tr>"
        );
      });
    },
    error: (e) => {
      alert(e);
    },
    async: false,
  });

  $("#table_id").DataTable();
});
