$(document).ready(function() {
    var t = $('#lessons').DataTable();

    $('#addLesson').on( 'click', function (event) {
        event.preventDefault();
        var title = $('#title').val();
        var type = $('#lessonType').val();
        var lesson = $('#lessonText').val();

        t.row.add([title, type, lesson]).draw(false);
    } );
 } );