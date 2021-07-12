function ckbox() {
    var a = $('#cb1').prop("checked");
    var b = $('#cb2').prop("checked");
    var c = $('#cb3').prop("checked");
    var d = $('#cb4').prop("checked");
    sum = a + b + c + d;
    if (sum > 2) {
        alert('2개까지 선택할 수 있습니다.');
        $('#sub').attr('disabled', true);
    } else {
        $('#sub').attr('disabled', false);
    }
    console.log(a, b, c, d);
}