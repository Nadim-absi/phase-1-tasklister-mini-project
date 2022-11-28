document.addEventListener("DOMContentLoaded", () => {

  const tasks = document.getElementById(`tasks`)
  const button = document.getElementById(`button`)
  const priority = document.getElementById(`priority`)
  const sort = document.getElementById(`sort`)

  button.addEventListener((`click`) , (e)=>{
    e.preventDefault()
    const toDo = document.getElementById(`new-task-description`).value
    const newElmenet = document.createElement("li")
    newElmenet.innerHTML=`${toDo}`
   
    newElmenet.style.color=(`${priority.value}`)



    tasks.appendChild(newElmenet)
    debugger;
  })



  const remover = document.getElementById(`delete`)
  remover.addEventListener(`click`,(e)=>{
    e.preventDefault()
    tasks.innerHTML=``})
});
