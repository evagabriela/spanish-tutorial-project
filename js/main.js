// classroom 
$(".close-button").on("click", function(event) {
event.preventDefault();
$(".container").addClass("box1");
$(".lesson").addClass("move");
});

$(".hamburger").on("click", function() {
$(".container").removeClass("box1");
$(".lesson").removeClass("move");
});