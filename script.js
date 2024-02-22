let submitForm = document.querySelector(".add"); //accessing the submit input 
let addTasks = document.querySelector(".tasks"); //accessing the ul tag in order to add new li tags
let clearBtn = document.querySelector(".clear"); //accessing the clear button
let taskLists = document.querySelectorAll("li");  //accessing the li tags
let message = document.querySelector(".message span");
let searchBar = document.querySelector(".search-input");


//adding new li tags
submitForm.addEventListener("submit", function(event){
    event.preventDefault();
    let value = submitForm.task.value.trim(); //controlling the spaces btw users' input by trimming it.
    if(value.length){
        addTasks.innerHTML += `<li>
                                    <span>${value}</span><div class="icon-div"><svg class="delete">
                                    <use xlink: href="/image/symbol-defs.svg#icon-bin"></use></svg></div> 
                               </li>`;
        submitForm.reset(); 
        update();
    }

});


//removing li  tags by clicking the li
addTasks.addEventListener("click", function(event){
//    console.log(event.target);
    if(event.target.classList.contains("icon-div")){
        event.target.parentElement.remove();
        update();
    }

});


//clearing the whole li tags by clicking the clear button
clearBtn.addEventListener("click", function(event){
    taskLists.forEach(function(list){ //iterating individual li 
        list.remove();
    });
    update();
});

//defining a function for updating the message 
function update(){
    let taskUpdate = addTasks.children.length;
    message.textContent = `you have ${taskUpdate} pending tasks`;
}
update();


//search input




//defining function for filtering the tasks using filter method and chain method

function filterTerm(term){
   Array.from(addTasks.children).filter((task)=>{
        return !task.textContent.toLowerCase().includes(term); //not includes term
    })
    .forEach((task)=>{
        task.classList.add("hide");
    });
 

 Array.from(addTasks.children).filter((task)=>{
    return task.textContent.toLowerCase().includes(term); //includes term
 })
    .forEach((task)=>{
        task.classList.remove("hide");
    })

}




searchBar.addEventListener("keyup", function(event){
    let term = searchBar.task.value.trim();
    filterTerm(term); //calling the function as your typing in the input box


})

searchBar.addEventListener("click", function(event){
    if(event.target.classList.contains("reset")){
        searchBar.reset();
        let term = searchBar.task.value.trim();
        filterTerm(term);
    }
})















