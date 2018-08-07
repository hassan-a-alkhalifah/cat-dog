$(document).ready(function() {
  $("#cat").click(function() {
    $("#cat_container").append("<li>Meow!!!</li>");
    $("#dog_container").append("<li>Bark!!!</li>");
    $("#cat_container").append("<img src='img/cat.jpg'>");
    $("img").click(function() {
      $("#cat_container li, #cat_container img").remove();
    });
  });

  $("#dog").click(function() {
    $("#dog_container").append("<li>Bark!!!</li>");
    $("#cat_container").append("<li>Meow!!!</li>");
    $("#dog_container").append("<img src='img/dog.png'>");
    $("img").click(function() {
      $("#dog_container li, #dog_container img").remove();
    });
  });
});
