$(document).ready(function() {
    let button  = $('#btn');
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

    button.on('click', function(e) {
        e.preventDefault();
        let v1 = $('#v1').val();
        let v2 = $('#v2').val();
        let v3 = $('#v3').val();
console.log('vse robit brat');
        let res = ((Number(v1) * Number(v2) * Number(v3)) / (1024 * 8));
        console.log(res);
        $('.res').css("display" , "block");
        if(res < 1000) {
            $('#txt').text(`File is ${res.toFixed(1)}KB which is OK`);
            $('#txt').css("color" , "green");
        }
        else {
            $('#txt').text(`File is ${res.toFixed(1)}KB which is not OK`);
            $('#txt').css("color" , "red");
        }
        
    })
});