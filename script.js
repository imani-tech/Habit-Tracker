const habitInput = document.getElementById("habit-input")
const categorySelection = document.getElementById("category")
const saveBtn = document.getElementById("save-habit")
const displayHabit = document.getElementById("display-habit")
const totalHabits = document.getElementById("totalHabitsText")
const habitsCompletedToday = document.getElementById("completedTodayText")
const totalHabitsCompleted = document.getElementById("totalHabitsCompletedText")
const error = document.getElementById("error")

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
class Habit{
    constructor(name, category, isCompleted, date){
        this.name = name
        this.category = category
        this.isCompleted = isCompleted
        this.date = date
    }    
}

function displayHabitsAndCategory(){    
    displayHabit.textContent = ""
   habitArray.forEach((habit) => {
    let nameP = document.createElement("p")
    nameP.textContent = habit.name
    let categoryP = document.createElement("p")
    categoryP.textContent = habit.category
    displayHabit.append(nameP)
    displayHabit.append(categoryP)    
    date()
    checkHabit()       
    deleteBtn()
   }) 
}  
function deleteBtn(){
    let deleteBtn = document.createElement("button")
    deleteBtn.innerHTML= `<p><i class="fa-solid fa-trash"></i></p>`
    deleteBtn.classList.add("trashBtn")
    displayHabit.append(deleteBtn) 
    deleteBtn.addEventListener(("click"), () => {
        
    })   
}
function checkHabit(habitPElement){
    let checkHabitBtn = document.createElement("button")
    checkHabitBtn.innerHTML= `<p><i class="fa-regular fa-face-frown"></i></p>`
    checkHabitBtn.classList.add("checkBtn")
    displayHabit.append(checkHabitBtn)
    checkHabitBtn.addEventListener(("click"), () => {
    habitPElement.classList.toggle('check')     
    }) 
} 
  let habitArray = []    
 saveBtn.addEventListener(("click"), (e) =>{ 
   e.preventDefault()
  if (!verify()) return;     
  const newHabit = new Habit(habitInput.value, categorySelection.value) 
  habitArray.push(newHabit)
  displayHabitsAndCategory();  
  console.log(habitArray)
  countHabit()
 })

  function countHabit(){
    let num = habitArray.length
    totalHabits.textContent = num
    console.log(num)
} 
function date(){
const today = new Date();
const dayNum = today.getDay();
const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const todayName = days[dayNum];
console.log(todayName);
displayHabit.append(todayName)
}