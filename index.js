$(document).ready(function() {
    let button = $('#button');
    

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