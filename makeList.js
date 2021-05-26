console.log(document.getElementById('todo-form'))
const todos=document.querySelector('#todo-list')
const todoInput=document.querySelector('#todo-input')
const msg=document.querySelector('#msg')
// todos.firstElementChild.textContent='Hello'
// todos.lastElementChild.innerHTML='<h1>Hello</h1>'

// const button=document.querySelector('.submit')
button.addEventListener('click',onSubmit)

function onSubmit(e){
    e.prevemtDefault();

    if(todoInput.value===''){
        msg.style.display='block'
        setTimeout(()=>msg.style.display='none',2000)
        return;
    }

    const li=document.createElement('li');
    li.appendChild(document.createTextNode(todoInput.value));
    li.classList.add('item')
    todos.appendChild(li);
    todoInput.value='';
}
