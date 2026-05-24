const taskArray = [];
        function arrayPush(){
            let input = document.querySelector('input');
            taskArray.push(input.value);
            console.log(taskArray);
                input.value="";
        }
        function enterKey(event){
             if(event.key === 'Enter'){
              arrayPush();
         }
        }
        function addTask(){
            let input2=document.querySelector('.input');
            let list=document.querySelector('#list');
            let newTask=document.createElement('li');
            newTask.classList.add('todo-grid', 'todo-row');
            list.appendChild(newTask);

            let taskName=document.createElement('span');
            taskName.innerText=input2.value;
            newTask.appendChild(taskName);

            let date=document.querySelector('.date');
            let dateValue=document.createElement('span');
            dateValue.innerText=date.value;
            newTask.appendChild(dateValue);

            let delBtn=document.createElement('button');
            delBtn.innerText='Delete';
            newTask.appendChild(delBtn);
            delBtn.classList.add('delete-btn');
            delBtn.addEventListener('click',function(){
                list.removeChild(newTask);
            })
            input2.value="";
            date.value="";
        }
        function enterKey2(event){
            if(event.key==='Enter'){
                addTask();
            }
        }
