$('textarea').bind('keyup blur', function() {
    var text = $(this).val();
    $('.result').html('> ');
    if(text.match(/.*printf\(\".+\"\)\;/)) {
        $('.result').append(text.substring(text.indexOf('("')+2,text.indexOf('")'))+'<br>');
    }
    if(text.match(/.*for\([a-z]=[0-9]\;\s[a-z0-9][\<|\>][a-z0-9]\;\s[a-z]\+\+\)\{\n.+\n\}/)) {
        console.log("test");
        for(var i=text.charAt(text.indexOf('{')-12); i < text.charAt(text.indexOf('{')-7); i++) {
            $('.result').append(i+'<br>');
        }
        console.log(text.length);
    }
});
