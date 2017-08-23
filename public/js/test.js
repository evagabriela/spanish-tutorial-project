var questionNumber = 0;

var prepareTest = function() {
  $('#next').on('click', function() {
    if (questionNumber < 6) {
      questionNumber += 1;
    } else {
      questionNumber = 6;
      $("button").css("display", "none");
    }
    $(".container").hide();
    $('.container').eq(questionNumber).fadeIn();
    console.log(questionNumber);

  	$(".rightmessage").addClass("hide").removeClass("active");
    	$(".wrongmessage").addClass("hide").removeClass("active");
    	$(".result").css("background-color", "#d3cfcf");
  });


  $('#previous').on('click', function() {
    if (questionNumber > 0) {
      questionNumber -= 1;
    } else {
      questionNumber = 5;
    }
    $(".container").hide();
    $('.container').eq(questionNumber).fadeIn();
    console.log(questionNumber);

    $(".rightmessage").addClass("hide").removeClass("active");
    $(".wrongmessage").addClass("hide").removeClass("active");
    $(".result").css("background-color", "#d3cfcf");
  });

  $("input:checkbox").on('click', function() {
    var $box = $(this);
    if ($box.is(":checked")) {
       var group = "input:checkbox";
       $(group).prop("checked", false);
  	 $box.prop("checked", true);
    } else {
       $box.prop("checked", false);
    }
  });

  $(".check").on("click", function(){
  	$(".rightmessage").removeClass("hide").addClass("active");
  	$(".result").css("background-color", "#B5D99C");
    	$(".wrongmessage").addClass("hide").removeClass("active");
  });

  $(".wrong").on("click", function(){
  	$(".wrongmessage").removeClass("hide").addClass("active");
  	$(".result").css("background-color", "#F48668");
  	$(".rightmessage").addClass("hide").removeClass("active");
  });
};
