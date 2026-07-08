const habitInput = document.getElementById("habit-input")
const categorySelection = document.getElementById("category")
const saveBtn = document.getElementById("save-habit")
const displayHabit = document.getElementById("display-habit")
const totalHabits = document.getElementById("totalHabitsText")
const habitsCompletedToday = document.getElementById("completedTodayText")
const totalHabitsCompleted = document.getElementById("totalHabitsCompletedText")
const error = document.getElementById("error")
console.log(displayHabit)

function verify(){
  if(habitInput.value === ""){
   error.textContent = "Enter a habit"  
   return  
  }else{
    error.textContent = ""    
  }
  if(categorySelection.value === ""){    
   error.textContent = "Give your habit a category"
  }else{
    error.textContent = ""
  } 
}
function displayHabitsAndCategory(){    
    let habit = habitInput.value
    let category = categorySelection.value
    if(habit !== "" && category !== ""){
    let habitDisplay = document.createElement("p")
    let categoryDisplay = document.createElement("p")   
    habitDisplay.textContent = habit
    categoryDisplay.textContent = category
    displayHabit.append(habitDisplay)
    displayHabit.append(categoryDisplay)
    deleteBtn()
    }
}


 saveBtn.addEventListener(("click"), () =>{ 
  verify()
  displayHabitsAndCategory()
 })
  console.log("hi")