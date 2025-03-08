console.log('alge')
// wii zin cv
var inpu = document.getElementById('input')
let check = document.getElementById('list')
let list = document.getElementById('ul')




function add(dz) {
    dz.toggle('chked')

}

function task() {
    if (inpu.value === '') {
        alert('Please write something')
    }
    else {
        var newtask = document.createElement('li')

        var div = document.createElement('div')
        div.setAttribute('class', 'dz')
        
        var p = document.createElement('p')
        p.innerHTML = inpu.value

        var input = document.createElement('input')
        input.setAttribute('type', 'checkbox')
        input.setAttribute('id', 'input')
        input.setAttribute('onclick', 'add()')
        var icon = document.createElement('i')
        icon.setAttribute('class', 'fa-solid fa-delete-left')
        icon.setAttribute('onclick', 'del()')

        var span = document.createElement('span')
        
        div.appendChild(input)
        div.appendChild(p)
        span.appendChild(icon)
        newtask.appendChild(div)
        newtask.appendChild(span)

        
        list.appendChild(newtask)
        inpu.value = ''
    }
    inpu.value = '';
    savdata();
}

list.addEventListener('click', function (e) {
    if (e.target.tagName === 'INPUT') {
        e.target.parentElement.classList.toggle('chked')
        savdata()
    }
    if (e.target.tagName === 'I') {
        e.target.parentElement.parentElement.remove()
        savdata()
    }
}, false)
onload = function () {
    list.innerHTML = localStorage.getItem('list')
}


function savdata() {
    localStorage.setItem('list', list.innerHTML)
}