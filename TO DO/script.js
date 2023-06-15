document.querySelector('#save').onclick = function(){
    if(document.querySelector('#addtask input').value.length == 0){
        alert("Kindly Enter Task Name!!!!")
    }

    else{
        document.querySelector('#showtask').innerHTML += `
        <div class="tasks">
            <div class="t" id="taskname">
                ${document.querySelector('#addtask input').value}
            </div>
            <div class="t" id="describe">
                ${document.querySelector('#addtask textarea').value}
            </div>
            <button class="t" id ="delete">
                <i class="far fa-trash-alt"></i>
            </button>
            
            <hr id="line">
        </div>
    `;

    var current_tasks = document.querySelectorAll("#delete");
    for(var i=0; i<current_tasks.length; i++){
        current_tasks[i].onclick = function(){
           this.parentNode.remove();
           
        }  
        }
    
    }
    }
