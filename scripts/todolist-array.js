const array={
    name:'',
    dueDate:''
};

 let todoListhtml='';

function renderTodoList(){
   for(let i=0;i<array.length;i++){
   
    const list=array[i]; 
    const name=array.name;
    const date=array.dueDate;
   const html=`<p>${list}<button onclick="array.splice(${i},1);renderTodoList();">Delete</button></p>`
   console.log(array);
   todoListhtml+=html; }
   console.log(todoListhtml);
   document.querySelector('.js-todo-list')
   .innerHTML=todoListhtml;
   
 todoListhtml='';
}
function addTask(){
     let input=document.querySelector('input');
   array.push((input.value));
   input.value='';
   renderTodoList();
}
