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



var html1 = '<div class="box blur shadow List">';
var html2 = '<div class="status" style="color:';
var html3 = ';"></div><h2 class="f3 b4">';
var html4 = '</h2><br><h3 class="f4 b9">';
var html5 = '</h3></div>';


$.Each (list, function (key, value) {
    var name = value.name;
    var club = value.club;
    var stat_c = stat(value.busy);
    $('#Add').append(html1 + html2 + stat_c + html3 + club + html4 + name + html5);    
});
