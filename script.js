const habitInput = document.getElementById("habit-input")
const categorySelection = document.getElementById("category")
const saveBtn = document.getElementById("save-habit")
const displayHabit = document.getElementById("display-habit")
const totalHabits = document.getElementById("totalHabitsText")
const habitsCompletedToday = document.getElementById("completedTodayText")
const totalHabitsCompleted = document.getElementById("totalHabitsCompletedText")
const error = document.getElementById("error")

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
 saveBtn.addEventListener(("click"), () =>{ 
  verify()
 })
  console.log("hi")