
// הגדרת משתנים 

const inpText = document.querySelector(".inpText")   /*אינפוט לרישום משימה */
const inpDate = document.querySelector(".inpDate")    /*אינפוא של התאריך */
const inpTime = document.querySelector(".inpTime")     /*אינפוא שך הזמן */
const restartBtn = document.querySelector(".restart")   /* כפתור איפוס */
const nots = document.querySelector(".nots")   /* הדיב התחתון של הפתקיות  */
const submitBtn = document.querySelector(".add-task")
const delbtn = document.querySelector("span")
// console.log(submitBtn)

// get all notes from local storage
for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);    /* מקבל את ה key  כסטרינג */
    const value = localStorage.getItem(key);   /* מקבך את ה value של אותו ה key  */
    const obg = JSON.parse(value);   /* עושה פרלס ומקבל אובייקט של הפתק */

    drawNote(obg)
}

function drawNote(obg) {

    const memo = document.createElement('div')    /*הדיב הגדול של הפתק */
    memo.className = "memo"

    const top = document.createElement('div')
    top.className = "top"
    const Xicon = document.createElement('span')
    Xicon.className = "material-icons delBtn"
    Xicon.textContent = "close"
    top.appendChild(Xicon)
  
    Xicon.addEventListener('click', function (e) {

        localStorage.removeItem(obg.id)
        memo.remove()
    })

    const text = document.createElement("div")
    text.className = "text"
    const p = document.createElement('p')
    p.textContent = obg.p
    text.appendChild(p)
  

    const TheTime = document.createElement("div")
    TheTime.className = "the-time"

    const dateHeder = document.createElement("h5")
    dateHeder.className = "date-heder"
    dateHeder.textContent = obg.dateHeder
    

    const timeHeder = document.createElement("h5")
    timeHeder.className = "time-heder"
    timeHeder.textContent = obg.timeHeder
  

    TheTime.appendChild(dateHeder)
    TheTime.appendChild(timeHeder)
    memo.appendChild(top)
    memo.appendChild(text)
    memo.appendChild(TheTime)
    nots.appendChild(memo)

}

function addNote() {

    const text = inpText.value
    const date = inpDate.value
    const time = inpTime.value
    const id = date + time

    // לוקך סטורג 

   
    let obg = { p: text, dateHeder: date, timeHeder: time, id: id }

    localStorage.setItem(id, JSON.stringify(obg))

  

    inpText.value = ""
    inpDate.value = ""
    inpTime.value = ""

    drawNote(obg);
}

restartBtn.addEventListener('click', function () {     /*כפתור איפוס כל השדות */

    inpText.value = ""
    inpDate.value = ""
    inpTime.value = ""
})

submitBtn.addEventListener('click', function () {

    if ((inpText.value == "") || (inpDate.value == "") || (inpTime.value == "")) {
        alert("somting is missing")

    } else {
        addNote()
    }
})

