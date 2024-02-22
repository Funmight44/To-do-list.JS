let submitForm = document.querySelector(".add");
let taskUL= document.querySelector(".tasks");
let taskLists = document.querySelectorAll("li");
let message = document.querySelector(".messageSpan");
let clearBtn = document.querySelector(".clear");
let searchBar = document.querySelector(".search-input");



submitForm.addEventListener("submit", function(event){
    event.preventDefault();
    let value = submitForm.task.value.trim();
    if(value.length){
        taskUL.innerHTML +=`<li>
                                <span>${value}</span><div class="icon-div"><svg class="delete">
                                <use xlink: href="/image/symbol-defs.svg#icon-bin"></use></svg></div> 
                            </li>`;
        submitForm.reset();
        update(); 
    }
});


taskUL.addEventListener("click", function(event){
    if(event.target.classList.contains("icon-div")){
        event.target.parentElement.remove();
        update();
    }
});


// clearBtn.addEventListener("click", function(){
//     taskLists.forEach((list)=>{               //this method will just clear the default li tags only not the new ones
//         list.remove();
//     })
// })



//adding event to searchBar
searchBar.addEventListener("keyup", function(event){
    let term = searchBar.task.value.trim(); 
    filterTerm(term);
 })
 
 function filterTerm(term){
     Array.from(taskUL.children).filter((task)=> {
         return !task.textContent.toLowerCase().includes(term);
     })
 
     .forEach((task)=>{
         task.classList.add("hide");
     })
 
     Array.from(taskUL.children).filter(()=>{
         return task.textContent.toLowerCase().includes(term).forEach((task)=>{
             task.classList.remove("hide");
         })
     });
 
 }
 
 
 // RESET BUTTON
 
 searchBar.addEventListener("click", function(event){
    if( event.target.classList.contains("reset")){
         searchBar.reset();
     let term = searchBar.task.value.trim(); 
    filterTerm(term);
    }
 })
 

 

clearBtn.addEventListener("click", function(){
    let listElements = taskUL.querySelectorAll("li");    //while method will clear everything.
    listElements.forEach((element)=>{
        element.remove();
    })
    update();
});


function update(){
    let listLength = taskUL.children.length;
    message.textContent = `you have ${listLength} pending tasks`;
}
update();








