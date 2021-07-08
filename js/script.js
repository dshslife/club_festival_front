function reset() {
    $('#Login').hide();
    $('#User').hide();
    $('#User-inform').hide();  
    $('#Main').hide();
    $('#Map').hide();
}


$('#Map2').hide();
reset();
$('#Map').show();
$('#Map1').show();


$('#F1').on('click', function() {
    reset();
    $('#User-inform').show();
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
    $('#User-inform').show();
    $('#Login').show();         
});

$('#Lo-btn').on('click', function() {
    reset();
    $('#User-inform').show();
    $('#User').show();         
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