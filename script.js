const buttons = Array.from(document.querySelectorAll('[data-input], [data-command]'))


function getLast() {
    let output = document.querySelector('p').innerText
    return output[output.length - 1]
}


buttons.map(btn => btn.addEventListener("click", function () {
    const btnValue = btn.innerHTML
    let output = document.querySelector('p')

    if (!btnValue.match(/[C=]/)) {
        if (btnValue.match(/[0-9]/)) {
            if (output.innerText === '0') {
                output.innerText = btnValue
            }
            else {
                output.innerText += btnValue
            }
        }
        else {
            if (!getLast().match(/[+-/*.]/)) {
                output.innerText += btnValue
            }
        }
    }
    else if (btnValue === '=') {
        if (!getLast().match(/[+-/*.]/)) {
            output.innerText = eval(output.innerText)
        }
    }
    else {
        output.innerText = '0'
    }
}))



