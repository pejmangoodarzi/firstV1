$(document).ready(function () {

  //..............form-check-input
  $(".form-check-input").click(function () {

    $("input").prop('disabled', true);
    $("input").prop('disabled', false);
    alert("اکنون میتوانید کد ملی خود را تایپ کنید")
  });


  $("#NationalCode").keyup(function () {
    var codmeli = $(this).val();
    $("#ShowNationalCode").html(codmeli);
  });

  //................. timer-quick
  $(function () {
    $('.timer-quick').startTimer();
  });


  //...................image-box

  $(".image-box").click(function (event) {
    var previewImg = $(this).children("img");

    $(this)
      .siblings()
      .children("input")
      .trigger("click");

    $(this)
      .siblings()
      .children("input")
      .chane(function () {
        var reader = new FileReader();

        reader.onload = function (e) {
          var urll = e.target.result;
          $(previewImg).attr("src", urll);
          previewImg.parent().css("background", "transparent");
          previewImg.show();
          previewImg.siblings("p").hide();
        };
        reader.readAsDataURL(this.files[0]);
      });
  });


});
