        $(function(){
            // definitioan variable
           const formSubmit = $('.task-form');
           const addTask = $('.task-form input');
           const addButton = $('.task-form button');
           const filtTask = $('.filter-form input');
           const filtForm = $('.filter-form');
           const filtButton = $('.filter-form button');
           const taskList = $('.task-list');
           const taskItem = $('.task-item');
           const removeTask = $('.remove-task');
           const clearAll = $('.clear-all');
        //    storage value definition
           let tasks ;
           if (localStorage.getItem('task')){
                tasks = JSON.parse(localStorage.getItem('task'));
           }else {
                tasks = [];
           }      
            // add tasks or add elements
            // submit form
           $(formSubmit).submit(function(event){
               event.preventDefault();
               if(addTask.val().trim()===""){
                   alert('plase fill first');
               }else { 
                        tasks.push(addTask.val());
                        localStorage.setItem('task' ,JSON.stringify(tasks));
                        let allTask = JSON.parse(localStorage.getItem('task')) ; 
                        const addList = $('<li/>');
                        const addIcon = $('<i/>');
                        addIcon.addClass('remove-task fa fa-times');
                        let addSpan = $("<span/>");
                        addSpan.append(addTask.val());
                        $(addList).addClass('task-item item+$');
                        $(addList).append(addSpan);
                        $(addList).append(addIcon);
                        $(taskList).append(addList);
                        addTask.val("");
                    }
           }) 
            // Get from localstorage 
           const allTask = JSON.parse(localStorage.getItem('task'));
           if (allTask){
                allTask.forEach((task) =>{
                    const addList = $('<li/>');
                    const addIcon = $('<i/>');
                    addIcon.addClass('remove-task fa fa-times');
                    let addSpan = $("<span/>");
                    addSpan.append(task);
                    $(addList).addClass('task-item item+$');
                    $(addList).append(addSpan);
                    $(addList).append(addIcon);
                    $(taskList).append(addList);
                })
             }
           // clear all tasks    
           $(clearAll).click(function(){
               taskList.html("");
               localStorage.removeItem('task');
           })
           // remove 1 task     
           $(taskList).click(function(event){
                if(event.target.classList.contains('remove-task')){
                    // remove frome localstorage
                    const taskValue = event.target.previousElementSibling.textContent;
                    const findTaskIndex = tasks.findIndex((n)=> n===taskValue);
                    tasks.splice(findTaskIndex,1);
                    localStorage.setItem('task', JSON.stringify(tasks));
                    // remove frome HTML
                    event.target.parentElement.remove();
                }
           })
          // filter task with pure js
          $(filtTask).keyup(function(){
            const lis = Array.from(document.querySelectorAll('.task-list li'));
            lis.forEach(function(arr){
                  if(arr.textContent.trim().startsWith(filtTask.val().trim())){
                    arr.style.display ="flex";
                  }else {
                    arr.style.display ="none";
                  }
              })
          })   
        })