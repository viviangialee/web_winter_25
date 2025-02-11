//alert('This is a test')

function askQuestion() {
    var p = prompt('How much wood would a woodchuck chuck if a woodchuck could chuck wood?');
    if (p != null) {
        document.getElementById('question').innerHTML = 'Yikes' + p +
    }
}
