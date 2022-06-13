$(document).ready(function() {
    let button = $('#button');
    let mode = $('#modeChange');
    let btn = $('.btn');

    mode.on("click", function(e) {
        if($('.inner').hasClass('dark-mode-card')) {
            $('body').removeClass("dark-mode-back");
            $('.inner').removeClass("dark-mode-card");
            $('.result').removeClass("dark-mode-card");
            $('.res').removeClass("dark-mode-card");
            $('body').addClass("light-mode-back");
            $('.inner').addClass("light-mode-card");
            $('.result').addClass("light-mode-card");
            $('.res').addClass("light-mode-card");
            localStorage.setItem('mode', 'light');
            $('#mode').text(localStorage.mode);
           }
           else {
            $('body').removeClass("light-mode-back");
            $('.inner').removeClass("light-mode-card");
            $('.result').removeClass("light-mode-card");
            $('.res').removeClass("light-mode-card");
            $('body').addClass("dark-mode-back");
            $('.inner').addClass("dark-mode-card");
            $('.result').addClass("dark-mode-card");
            $('.res').addClass("dark-mode-card");
            localStorage.setItem('mode', 'dark');
            $('#mode').text(localStorage.mode);
           }
    });

    $('#addCookie').on('click', function() {
        setCookie("cookie" , "value", 7);
        console.log("set");
    });

    function setCookie(cname, cvalue, exdays) {
        var date = new Date();
        date.setTime(date.getTime() + (exdays * 24* 60 * 60 * 1000));
        let expires = "expires=" + date.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"; 
    }

    button.on("click", function(e) {
        e.preventDefault();
        let name = $('#personName').val();
        let character = $('#character').val();
        let adverb = $('#adverb').val();
        let adjective = $('#adjective').val();
        
        $('.result').css("display", "block");
        

        $('[id=pname]').text(name);
        $('[id=pcharacter]').text(character);
        $('[id=padverb]').text(adverb);
        $('[id=padj]').text(adjective);

    });
});