const habitInput = document.getElementById("habit-input")
const categorySelection = document.getElementById("category")
const saveBtn = document.getElementById("save-habit")
const displayHabit = document.getElementById("display-habit")
const totalHabits = document.getElementById("totalHabitsText")
const habitsCompletedToday = document.getElementById("completedTodayText")
const totalHabitsCompleted = document.getElementById("totalHabitsCompletedText")
const error = document.getElementById("error")
let idNum = 0
let habitArray = []  


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
    constructor(name, category, id, date){
        this.id = id
        this.name = name
        this.category = category        
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
    checkHabit(nameP, categoryP)       
    deleteBtn(habit)      
   })   
} 

saveBtn.addEventListener(("click"), (e) =>{ 
   e.preventDefault()
  if (!verify()) return;     
  const newHabit = new Habit(habitInput.value, categorySelection.value, idNum) 
  habitArray.push(newHabit)
  // LocalStorage  --SAVE habitArray to localStorage
localStorage.setItem("habits", JSON.stringify(habitArray))

  displayHabitsAndCategory();  
  console.log(habitArray)
  countHabit()
  idNum++   
 })

function deleteBtn(habit){
    let deleteBtn = document.createElement("button")
    deleteBtn.innerHTML= `<p><i class="fa-solid fa-trash"></i></p>`
    deleteBtn.classList.add("trashBtn")
    displayHabit.append(deleteBtn) 
    deleteBtn.addEventListener(("click"), () => {
        let habitObjId = habit.id
        const habitResultArray = habitArray.filter((habit) => habitObjId !== habit.id)
      console.log(habitResultArray)
      habitArray = habitResultArray     
      displayHabitsAndCategory()
      countHabit()      
    })   
}
function checkHabit(nameP, categoryP){
    let checkBox = document.createElement("input")    
    checkBox.type = "checkbox"
    displayHabit.append(checkBox)
    checkBox.addEventListener(("click"), () => {        
    nameP.classList.toggle("completed-habit")
    categoryP.classList.toggle("completed-habit")      
    
    }) 
    checkIfHabitCompleted = false;
} 
   
function countCompletedHabit(checkIfHabitCompleted){   
    let complete = 0    
    totalHabitsCompleted.textContent = 0   
}
  function countHabit(){
    let num = habitArray.length
    totalHabits.textContent = num
    console.log("number of habits"+ " "+ num)
} 
function date(){
const today = new Date();
const dayNum = today.getDay();
const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const todayName = days[dayNum];
console.log(todayName);
displayHabit.append(todayName)
}

//get whats inside local storage
let savedHabit = localStorage.getItem("habits")
if(savedHabit === null){
    habitArray = []
}else{
   habitArray = JSON.parse(savedHabit)
   displayHabitsAndCategory()
}