  $(document).ready( function() {
    if (screen.width <= 480) {
        $('.box-item a').on('click', function (event) {
            event.preventDefault();
            $(".modal-background").css("display", "block");
             });
        $("#cerrar").on("click", function() {
            $(".modal-background").fadeOut()
        });
    }
});