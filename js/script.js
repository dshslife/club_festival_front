function reset() {
    $('#Login').hide();
    $('#User').hide();
    $('#User-inform').hide();  
    $('#Main').hide();
    $('#Map').hide();
}


reset();;
$('#Login').show();


$('#F1').on('click', function() {
    reset();
    $('#Login').show();
});

$('#F2').on('click', function() {
    reset();
    $('#Main').show();
});

$('#F3').on('click', function() {
    reset();
    $('#Map').show();
});

$('#Logout').on('click', function() {
    reset();
    $('#Login').show();         
    $('.bottom-bar').css('bottom', '');
    $('.background').css('height', '');
    $('.title').css('text-align', '');
});


$('#Lo-btn').on('click', function() {
    reset();
    $('#Main').show();      
    $('.background').css('height', '78%');
});


function select(e) {
    console.log(e.value);
    if (e.value == 0) {
        reset();
        $('#Map').show();
        $('#Map1').show();
        $('#Map2').hide();
    } else {
        reset();
        $('#Map').show();
        $('#Map2').show();
        $('#Map1').hide();
    }
}