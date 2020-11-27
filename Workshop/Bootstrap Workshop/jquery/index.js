$(function () {
  $("#Cpassword").blur(() => {
    if (
      $("#Cpassword").val() == $("#password").val() &&
      $("#password").val() != "" &&
      $("#Cpassword").val() != ""
    ) {
      console.log("pass and confirm pass works");
    } else {
      alert("password and confirm password should be same and not null");
    }
  });
  
});
