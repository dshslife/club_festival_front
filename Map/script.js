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

$.Each (list, function (key, value) {
    var stat_c = stat(int(value.busy));
    var code = value.code;
    $('#' + code).css('color', stat_c);
});