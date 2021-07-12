//json
list = {}

function stat(i) {
    if (i == 0) {
        return 'green';
    } else if (i == 1) {
        return 'orange';
    } else {
        return 'red';
    }
}

var html1 = '<div class="box blur shadow List" data-boothid="';
var html2 = '" data-message="';
var html3 = '" data-locate="';
var html4 = '">';
var html5 = '<div class="status" style="color:';
var html6 = ';"></div>';
var html7 = '<h2 class="f3 b4">';
var html8 = '</h2><br><h3 class="f4 b9">';
var html9 = '</h3></div>';


function add_html(id, mss, loc, name, club, stat_c) {
    $('#Add').append(html1 + id + html2 + mss + html3 + loc + html4 + html5 + stat(stat_c) + html6 + html7 + club + html8 + html9);
}

$.Each (list, function (key, value) {
    var id = value.id;
    var mss = value.message;
    var locate = value.code;
    var name = value.name;
    var club = value.club;
    var stat_c = value.busy;
    add_html(id, mss, locate, name, club, stat_c);
});



$(document).on('click', '.close',function() {
    $('.booth-full').hide();
});

$(document).on('click', '.List',function() {
    $('.bth-name').text($('.name').text());
    $('#sex').text($(this).data('message'));
    $('#sb').text($('.club_name').text());
    $('.booth-full').show();
});


