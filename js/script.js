function reset() {
    $('#Login').hide();
    $('#User').hide();
    $('#User-inform').hide();  
    $('#Main').hide();
    $('#Map').hide();
}


$('#Map1').hide();
reset();
$('#Map').show();
$('#Map2').show();

$('#F1').on('click', function() {
    reset();
    $('#User-inform').show();
    $('#User').show();
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
    if (e.value == 1) {
        reset();
        $('#Map1').show();
    } else {
        $('#Map2').show();
    }
}