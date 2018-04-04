$(document).ready(function() {
  //changes some of the light lines in the main image to yellow upon hover
  $("#hyperspeed").hover(
    function() {
      $(this).css("background-color", "yellow");
    },
    function() {
      $(this).css("background-color", "white");
    }
  );
  $("#boots-main").hover(
    function() {
      $("#hyperspeed").css("background-color", "yellow");
    },
    function() {
      $("#hyperspeed").css("background-color", "white");
    }
  );

  //product name shows on product image hover
  $("#product1").hover(
    function() {
      $("#product1-name").css("visibility", "visible");
    },
    function() {
      $("#product1-name").css("visibility", "hidden");
    }
  );
  $("#product2").hover(
    function() {
      $("#product2-name").css("visibility", "visible");
    },
    function() {
      $("#product2-name").css("visibility", "hidden");
    }
  );
  $("#product3").hover(
    function() {
      $("#product3-name").css("visibility", "visible");
    },
    function() {
      $("#product3-name").css("visibility", "hidden");
    }
  );
  $("#product4").hover(
    function() {
      $("#product4-name").css("visibility", "visible");
    },
    function() {
      $("#product4-name").css("visibility", "hidden");
    }
  );
  $("#product5").hover(
    function() {
      $("#product5-name").css("visibility", "visible");
    },
    function() {
      $("#product5-name").css("visibility", "hidden");
    }
  );
});
