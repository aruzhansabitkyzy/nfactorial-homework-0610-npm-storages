$(document).ready(function() {
    let button  = $('#btn');

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