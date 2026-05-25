const array=[];

 let todoListhtml='';

function addTask(){
    
    let input=document.querySelector('input');
   array.push((input.value));
   for(let i=0;i<array.length;i++){
   
    const list=array[i]; 
   const html= `<p>${list}
   <button onclick="array.splice(${i},1)">Delete</button>
   </p>`;
   todoListhtml+=html;
   console.log(todoListhtml);
   document.querySelector('.js-todo-list')
   .innerHTML=todoListhtml;
   
} todoListhtml='';
}
