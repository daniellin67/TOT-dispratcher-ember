$(document).ready(function () {
    window.onload = function () {
        document.onkeydown = function (e) {
            return (e.which || e.keyCode) != 116;
        };
    }
    document.addEventListener("keydown", function (event) {
        if (event.which == 113) {
            event.preventDefault();
            $('#add-new-button').trigger('click')
        }
        if (event.which == 115) {
            event.preventDefault();
            $('.close-button').trigger('click')
            $('.close').trigger('click')
        }
        if (event.which == 114) {
            event.preventDefault();
            $('#set-time-button').trigger('click')
        }
        if (event.which == 116) {
            event.returnValue = 0;
            if ($('#add-new-modal').hasClass('show') == true)
            {
                $('#lenh-dieu-xe-button').trigger('click')
            }
        }
    })
})