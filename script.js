function clean() {
    document.getElementById('textarea').value = '';
}

function back() {
    var currentText = document.getElementById('textarea').value;
    document.getElementById('textarea').value = currentText.substring(0, currentText.length - 1);
}

function insert(num) {
    var currentText = document.getElementById('textarea').value;
    document.getElementById('textarea').value = currentText + num;
}

function equal() {
    var exp = document.getElementById('textarea').value;
    if (exp) {
        try {
            var result = eval(exp);
            document.getElementById('textarea').value = numberWithCommas(result);
        } catch (error) {
            document.getElementById('textarea').value = 'Error';
        }
    }
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}