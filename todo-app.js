const newTodo = document.querySelector('#newtodo')
const tasks = document.querySelectorAll('li')
const input = document.querySelector('.plus')


tasks.forEach(initialList)

listItem(newTodo, 'keydown', function(event){
    if(event.key === 'Enter'){
        if(newTodo.value !== ''){
            newTodoItem()
        }
    }
})

input.addEventListener('click', function(){
    newTodo.classList.toggle('hidden');
})


function initialList(task){
    listItem(task, 'click', function(){
        this.classList.toggle('cancel')
    })
    deleteListItem(task, 'click', function(){
        this.closest('li').remove()
    })
}

function deleteListItem(elem, event, cb){
    elem.querySelector('span').addEventListener(event, cb)
}

function listItem(elem, event, cb){
    elem.addEventListener(event, cb)
}
function newTodoItem(){
    var newEntry = newTodo.value
    var ul = document.getElementById('list')
    var li = document.createElement('li')
    var icon = document.createElement('span')
    icon.classList.add('fas','fa-trash', "hide")
    li.appendChild(icon)
    li.appendChild(document.createTextNode(newEntry))
    listItem(li, 'click', function(){
        this.classList.toggle('cancel')
    })
    deleteListItem(li, 'click', function(){
        this.closest('li').remove()
    })
    ul.appendChild(li)
    newTodo.value = '';
}