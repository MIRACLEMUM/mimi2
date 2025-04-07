const monthNameEl = document.getElementById("month-name");

const dayNameEl = document.getElementById("day-name");

const dayNumEl = document.getElementById("day-number");

const yearEL = document.getElementById("year");

const date = new Date();

const month = date.getMonth()
monthNameEl.innerText = date.toLocaleDateString("en",{
    month: "long"
    

})

dayNumEl.innerText = date.getDate()

yearEL.innerText = date.getFullYear()



