function reset() {
    $('#Login').hide();
    $('#User').hide();
    $('#User-inform').hide();  
    $('#Main').hide();
    $('#Map').hide();
    $('#Box').hide();
}


reset();
$('#Map2').hide();
Login();




$('#Lo-btn').on('click', function() {
    Main();
});
$('.t-dot').on('click', function() {
    Menu();
});
$('#Back').on('click', function() {
    Main();
});
$('#Logout').on('click', function() {
    Login();
});
$('#Record').on('click', function() {
    alert('미구현');
});
$('#Maps').on('click', function() {
    Maps();
});
$('#List').on('click', function() {
    Open(this);
});
$('.close').on('click', function() {
    $('#Box').hide();
});


function Open(e) {
    $('#Box').show();
}

function Maps() {
    reset();
    $('.background').css('height', '80%');
    $('#Map').show();
}
function Login() {
    reset();
    $('.background').css('height', '');
    $('#Login').show();
}

function Main() {
    reset();
    $('#User').show();  
    $('.background').css('height', '80%');
}

function Menu() {
    reset();
    $('#Main').show();      
    $('.background').css('height', '80%');
}

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