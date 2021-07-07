function reset() {
    $('#Login').hide();
    $('#User').hide();
    $('#User-inform').hide();  
    $('#Main').hide();
  
}

reset();
$('#Main').show();


$('#F1').on('click', function() {
    reset();
    $('#User-inform').show();
    $('#User').show();
            
});

$('#F2').on('click', function() {
    reset();
    $('#Main').show();
});