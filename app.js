const addForm = document.querySelector('.add')
const list = document.querySelector('.todos')
const search = document.querySelector('search input')

const generaTemplet = todo =>{
  const html = ` <li class="list-group-item d-flex justify-content-between align-items-center">
  <span>${todo}</span>
  <i class="far fa-trash-alt delete"></i>
</li>
  `
  list.innerHTML += html
}

addForm.addEventListener('submit', e => {
    e.preventDefault()

    const todo = addForm.add.value.trim()
    if (todo.length){
    generaTemplet(todo)
    addForm.reset()
    }
})

// deleting t todos 

list.addEventListener('click',(e)=>{

  if( e.target.classList.contains('delete')){
    e.target.parentElement.remove()
  }
})

const filtreTodo = (term) =>{
  Array.from(list.children).forEach(todo => {
    if (todo.textContent.includes(term)) {
      todo.classList.remove('filtered')
    } else {
      todo.classList.add('filtered')
    }
  })
}


search.addEventListener('keyup',()=>{
 const term = search.value.trim()
 filtreTodo(term)
})