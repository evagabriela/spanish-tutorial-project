
$(".titlesLink").on("click", function() {
	$(".lesson-titulos").addClass("show");
	$(".lesson-images").removeClass("show");
	$(".lesson-enlaces").removeClass("show");
	$(".lesson-list").removeClass("show");
	$(".lesson-negritas").removeClass("show");
	$(".lesson-intro").addClass("noShow");
	$(".lesson-color").removeClass("show");
	$(".lesson-multipleChanges").removeClass("show");
});

$(".imageLink").on("click", function() {
	$(".lesson-images").addClass("show");
	$(".lesson-titulos").removeClass("show");
	$(".lesson-enlaces").removeClass("show");
	$(".lesson-list").removeClass("show");
	$(".lesson-negritas").removeClass("show");
	$(".lesson-intro").addClass("noShow");
	$(".lesson-color").removeClass("show");
	$(".lesson-multipleChanges").removeClass("show");
});

$(".enlaceLink").on("click", function() {
	$(".lesson-enlaces").addClass("show");
	$(".lesson-images").removeClass("show");
	$(".lesson-titulos").removeClass("show");
	$(".lesson-list").removeClass("show");
	$(".lesson-negritas").removeClass("show");
	$(".lesson-intro").addClass("noShow");
	$(".lesson-color").removeClass("show");
	$(".lesson-multipleChanges").removeClass("show");
});

$(".listLink").on("click", function() {
	$(".lesson-list").addClass("show");
	$(".lesson-enlaces").removeClass("show");
	$(".lesson-images").removeClass("show");
	$(".lesson-titulos").removeClass("show");
	$(".lesson-negritas").removeClass("show");
	$(".lesson-intro").addClass("noShow");
	$(".lesson-color").removeClass("show");
	$(".lesson-multipleChanges").removeClass("show");
});

$(".boldLink").on("click", function() {
	$(".lesson-negritas").addClass("show");
	$(".lesson-list").removeClass("show");
	$(".lesson-enlaces").removeClass("show");
	$(".lesson-images").removeClass("show");
	$(".lesson-titulos").removeClass("show");
	$(".lesson-intro").addClass("noShow");
	$(".lesson-color").removeClass("show");
	$(".lesson-multipleChanges").removeClass("show");
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
	$(".lesson-color").addClass("show");
	$(".lesson-titulos").removeClass("show");
	$(".lesson-images").removeClass("show");
	$(".lesson-enlaces").removeClass("show");
	$(".lesson-list").removeClass("show");
	$(".lesson-negritas").removeClass("show");
	$(".lesson-intro").addClass("noShow");
	$(".lesson-multipleChanges").removeClass("show");
});


$(".multipleChangesLink").on("click", function() {
	$(".lesson-multipleChanges").addClass("show");
	$(".lesson-titulos").removeClass("show");
	$(".lesson-images").removeClass("show");
	$(".lesson-enlaces").removeClass("show");
	$(".lesson-list").removeClass("show");
	$(".lesson-negritas").removeClass("show");
	$(".lesson-color").removeClass("show");
	$(".lesson-intro").addClass("noShow");
});

$(".classLink").on("click", function() {
	$(".lesson-divSpan").addClass("noShow");
	$(".lesson-classes").addClass("show");
	$(".lesson-identificadores").removeClass("show");
	$(".lesson-universal").removeClass("show");
	$(".lesson-box").removeClass("show");
});

$(".idLink").on("click", function() {
	$(".lesson-divSpan").addClass("noShow");
	$(".lesson-classes").removeClass("show");
	$(".lesson-universal").removeClass("show");
	$(".lesson-box").removeClass("show");
	$(".lesson-identificadores").addClass("show");
});

$(".divsLink").on("click", function() {
	$(".lesson-divSpan").removeClass("noShow");
	$(".lesson-classes").removeClass("show");
	$(".lesson-identificadores").removeClass("show");
	$(".lesson-box").removeClass("show");
	$(".lesson-universal").removeClass("show");
});

$(".universalLink").on("click", function() {
	$(".lesson-divSpan").addClass("noShow");
	$(".lesson-classes").removeClass("show");
	$(".lesson-identificadores").removeClass("show");
	$(".lesson-box").removeClass("show");
	$(".lesson-universal").addClass("show");
});

$(".boxLink").on("click", function() {
	$(".lesson-divSpan").addClass("noShow");
	$(".lesson-classes").removeClass("show");
	$(".lesson-identificadores").removeClass("show");
	$(".lesson-universal").removeClass("show");
	$(".lesson-box").addClass("show");
});

