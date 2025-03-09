$(document).ready(function () {
  let arrayBtn = [];
  let count = -1;
  let $btn = $(".btn");
  let score = 0;
  $btn.on("click", function () {
    let random = Math.floor(Math.random() * $btn.length);
    count += 1;
    if ($(this).attr("id") !== arrayBtn[count]) {
      $("#level-title").text("Game Over, Press Any Key to Restart");
      arrayBtn.length = 0;
      $("#wrong").trigger("play");
      $("body").css("backgroundColor", "red");
      setTimeout(function () {
        $("body").css("backgroundColor", "");
      }, "fast");
      score = 0;
    } else {
      $(this).fadeTo("fast", 0.1).fadeTo("fast", 1).children().trigger("play");
    }
    if (count === arrayBtn.length - 1) {
      arrayBtn.push($btn.eq(random).attr("id"));
      setTimeout(function () {
        $btn
          .eq(random)
          .fadeTo("fast", 0.1)
          .fadeTo("fast", 1)
          .children()
          .trigger("play");
        $("#level-title").text(`Level ${(score += 1)}`);
      }, 1000);

      count = -1;
    }
  });
  //randomly add item to an array, when any key is cliked
  let count1 = 0;
  $(document).keydown(function (event) {
    let random = Math.floor(Math.random() * $btn.length);
    if (event && arrayBtn.length === 0) {
      arrayBtn.push($btn.eq(random).attr("id"));
      $btn
        .eq(random)
        .fadeTo("fast", 0.1)
        .fadeTo("fast", 1)
        .children()
        .trigger("play");
      $("#level-title").text(`Level ${(score += 1)}`);
    }
    if (count1 > 0) {
      count = -1;
    }
    count1 += 1;
  });
  // console.log(arrayBtn);
  $("#red").click(function () {
    $("#red").addClass("pressed");
    setTimeout(function () {
      $("#red").removeClass("pressed");
    }, "fast");
  });
  $("#green").click(function () {
    $("#green").addClass("pressed");
    setTimeout(function () {
      $("#green").removeClass("pressed");
    }, "fast");
  });
  $("#blue").click(function () {
    $("#blue").addClass("pressed");
    setTimeout(function () {
      $("#blue").removeClass("pressed");
    }, "fast");
  });
  $("#yellow").click(function () {
    $("#yellow").addClass("pressed");
    setTimeout(function () {
      $("#yellow").removeClass("pressed");
    }, "fast");
  });
});
