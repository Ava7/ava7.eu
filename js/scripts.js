$(document).ready(function() {

    var page = null;
    var chart = function(show) {
            $('.chart-column').each(function() {
                $(this).animate({ height: (show == true ? $(this).attr('data-height') + '%' : 0) }, { queue: false, duration: 1500 });
            });
    }
    var close = function() {
        if ($('#about').is(':visible') || $('#skills').is(':visible') || $('#projects').is(':visible')) {
            chart(false);
            $('#about, #skills, #projects').animate(
                { height: '0px' },
                { queue: false, complete: function() {
                        $(this).hide();
                    }
                }
            );
        }
    }

    $('li a').mouseenter(function() {

        $('body').animate(
            { backgroundColor: $(this).attr('data-colour') },
            { queue: false, duration: 1000 }
        );

    });

    $('#page-about, #page-skills, #page-projects').click(function() {
        // Clicking the same page returns nothing
        if (page == $(this).attr('data-for')) {
            return false;
        }
        page = $(this).attr('data-for');

        // A page is already opened? Close it and open the new one
        close();

        // Move the menu to the top and load the page content
        $('nav').animate(
            { marginTop: '2%', marginBottom: '50px' },
            { queue: false, complete: function() {
                if (page == 'skills') {
                    chart(true);
                }

                $('#' + page).animate(
                    { height: page == 'projects' ? '1120px' : '542px' }
                ).show()
            }
        });
    });

    $(document).keyup(function(e) {
        if (e.keyCode == 27) {
            close();
            $('nav').animate({ marginTop: '24%' });
            page = null;
        }
    });

    $('.chart-level').hover(function(event) {
        parentOffset = $(this).parent().offset();
        $(this).find('span').css({ display: 'block', left: '111px', top: '-20px' });
    }, function() {
        $(this).find('span').css({ display: 'none' });
    });

});
