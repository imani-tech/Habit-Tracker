const habitInput = document.getElementById("habit-input")
const categorySelection = document.getElementById("category")
const saveBtn = document.getElementById("save-habit")
const displayHabit = document.getElementById("display-habit")
const totalHabits = document.getElementById("totalHabitsText")
const habitsCompletedToday = document.getElementById("completedTodayText")
const totalHabitsCompleted = document.getElementById("totalHabitsCompletedText")
const error = document.getElementById("error")
console.log(displayHabit)
 let habit;
 let category; 

function verify(){
  if(habitInput.value === "" || habitInput.value.length < 3){
   error.textContent = "Enter a habit"  
   return false     
  }
  if(categorySelection.value === ""){    
   error.textContent = "Give you're habit a category"
   return false
  } 
  return true
}

function displayHabitsAndCategory(){   
    habit = habitInput.value
    category = categorySelection.value   
    if(habit !== "" && category !== ""){    
    let habitDisplay = document.createElement("p")
    let categoryDisplay = document.createElement("p")     
    habitDisplay.textContent = habit
    categoryDisplay.textContent = category
    displayHabit.append(habitDisplay)
    displayHabit.append(categoryDisplay)   
    deleteBtn()
    checkHabit()   
   console.log(`${habit} this is habit before clean`)
    
    console.log(`${habitInput.value} this is input on display function`)
    
    }    
}

function deleteBtn(){
    let deleteBtn = document.createElement("button")
    deleteBtn.innerHTML= `<p><i class="fa-solid fa-trash"></i></p>`
    deleteBtn.classList.add("trashBtn")
    displayHabit.append(deleteBtn) 
    deleteBtn.addEventListener(("click"), () => {
    })   
}
function checkHabit(){
    let checkHabitBtn = document.createElement("button")
    checkHabitBtn.innerHTML= `<p><i class="fa-solid fa-check"></i></p>`
    checkHabitBtn.classList.add("checkBtn")
    displayHabit.append(checkHabitBtn)
    checkHabitBtn.addEventListener(("click"), () => {
    }) 
}  
 let count = 0
function countHabit(){  
  if(habit !== null){
    count++
   totalHabits.textContent = count   
  }  
}    
 saveBtn.addEventListener(("click"), (e) =>{ 
    e.preventDefault()
  if (!verify()) return;  
  displayHabitsAndCategory() 
  countHabit()   
  console.log(`${habit } this is habit`)
  console.log(habitInput.value)
 })
  