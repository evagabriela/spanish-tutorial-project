$(".titlesLink").on("click", function() {
	$(".lesson-intro").addClass("noShow");
	$(".lesson-titulos").addClass("show");
});

$(".imageLink").on("click", function() {
	$(".lesson-titulos").removeClass("show");
	$(".lesson-images").addClass("show");
});

$(".enlaceLink").on("click", function() {
	$(".lesson-titulos").removeClass("show");
	$(".lesson-images").removeClass("show");
	$(".lesson-enlaces").addClass("show");
});

$(".listLink").on("click", function() {
	$(".lesson-titulos").removeClass("show");
	$(".lesson-images").removeClass("show");
	$(".lesson-enlaces").removeClass("show");
	$(".lesson-list").addClass("show");
});

$(".boldLink").on("click", function() {
	$(".lesson-titulos").removeClass("show");
	$(".lesson-images").removeClass("show");
	$(".lesson-enlaces").removeClass("show");
	$(".lesson-list").removeClass("show");
	$(".lesson-negritas").addClass("show");
});

$(".introLink").on("click", function() {
	$(".lesson-titulos").removeClass("show");
	$(".lesson-images").removeClass("show");
	$(".lesson-enlaces").removeClass("show");
	$(".lesson-list").removeClass("show");
	$(".lesson-negritas").removeClass("show");
	$(".lesson-intro").removeClass("noShow");
	$(".lesson-color").removeClass("show");
	$(".lesson-multipleChanges").removeClass("show");
});

$(".colorLink").on("click", function() {
	$(".lesson-titulos").removeClass("show");
	$(".lesson-images").removeClass("show");
	$(".lesson-enlaces").removeClass("show");
	$(".lesson-list").removeClass("show");
	$(".lesson-negritas").removeClass("show");
	$(".lesson-color").addClass("show");
});

$(".multipleChangesLink").on("click", function() {
	$(".lesson-titulos").removeClass("show");
	$(".lesson-images").removeClass("show");
	$(".lesson-enlaces").removeClass("show");
	$(".lesson-list").removeClass("show");
	$(".lesson-negritas").removeClass("show");
	$(".lesson-color").removeClass("show");
	$(".lesson-multipleChanges").addClass("show");
});

