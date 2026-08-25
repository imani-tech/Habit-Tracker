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
    constructor(name, category, id, isCompleted){
        this.id = id
        this.name = name
        this.category = category  
       
        this.isCompleted = isCompleted     
         const today = new Date();
      const dayNum = today.getDay();
      const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
      const todayName = days[dayNum];
      this.date = todayName
    }   
    toggleCompleted() {
    this.isCompleted = !this.isCompleted
    } 
    
}
let biggestIdNum;

function displayHabitsAndCategory(){    
    displayHabit.textContent = ""
    habitArray.forEach((habit) => {
    let nameP = document.createElement("p")
    nameP.textContent = habit.name
    let categoryP = document.createElement("p")
    categoryP.textContent = habit.category
    let todaysdate = document.createElement('p')
    todaysdate.textContent = habit.date
    displayHabit.append(nameP)
    displayHabit.append(categoryP) 
    displayHabit.append(todaysdate)           
    checkHabit(habit,nameP, categoryP)       
    deleteBtn(habit)    
   })      
} 
function clear(){
  habitInput.value = ""
  categorySelection.value = ""
}

saveBtn.addEventListener(("click"), (e) =>{ 
   e.preventDefault() 
  if (!verify()) return;     
  const newHabit = new Habit(habitInput.value, categorySelection.value, idNum) 
  habitArray.push(newHabit)
  // LocalStorage  --SAVE habitArray to localStorage
localStorage.setItem("habits", JSON.stringify(habitArray))

  displayHabitsAndCategory();    
  countHabit()
  idNum++ 
    clear()
  console.log(idNum)
  console.log(habitArray)
 })

function deleteBtn(habit){
    let deleteBtn = document.createElement("button")
    deleteBtn.innerHTML= `<p><i class="fa-solid fa-trash"></i></p>`
    deleteBtn.classList.add("trashBtn")
    displayHabit.append(deleteBtn) 
    deleteBtn.addEventListener(("click"), () => {
      let habitObjId = habit.id
      const habitResultArray = habitArray.filter((habit) => habitObjId !== habit.id)      
      habitArray = habitResultArray 
      localStorage.setItem("habits", JSON.stringify(habitArray))
      displayHabitsAndCategory()
      countHabit() 
      countCompletedHabit()  
    })   
}
function checkHabit(habit,nameP, categoryP){
    let checkBox = document.createElement("input")    
    checkBox.type = "checkbox"
    displayHabit.append(checkBox)
    if(habit.isCompleted ===true){
      nameP.classList.toggle("completed-habit")
    categoryP.classList.toggle("completed-habit")  
     checkBox.checked = true
        }
    checkBox.addEventListener(("click"), () => {    
    habit.toggleCompleted()    
    nameP.classList.toggle("completed-habit")
    categoryP.classList.toggle("completed-habit")      
    localStorage.setItem("habits", JSON.stringify(habitArray))
    countCompletedHabit()     
    }) 
    
} 
let numberOfCompletedHabits = 0
function countCompletedHabit(){    
  let result =  habitArray.filter((eachHabit) => eachHabit.isCompleted === true)
  numberOfCompletedHabits = result.length
  totalHabitsCompleted.textContent = numberOfCompletedHabits  
}
  function countHabit(){
    let num = habitArray.length
    totalHabits.textContent = num    
}

function biggestId(){
 let allIds = habitArray.map((h)=> h.id)
 biggestIdNum = Math.max(...allIds) 
 idNum = biggestIdNum + 1
}

//get whats inside local storage
let savedHabit = localStorage.getItem("habits")
if(savedHabit === null){
    habitArray = []
}else{
   habitArray = JSON.parse(savedHabit)
   displayHabitsAndCategory()
   countHabit()      
   countCompletedHabit()   
   biggestId()
}