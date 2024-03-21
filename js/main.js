const buttons = document.querySelectorAll(".num");
const opration = document.querySelectorAll(".opration button");
const values = document.querySelector(".values");
const result = document.querySelector(".active");
const clear = document.querySelector(".clear");

let num1 = [];
let x = 1;
let number1;
let ob = {};

buttons.forEach(num =>{
    num.addEventListener("click",()=>{
        num1.push(num.dataset.num);
        values.innerHTML +=  num.dataset.num;
    })
})


opration.forEach(e =>{
    e.addEventListener("click",()=>{
        values.innerHTML +=  e.innerHTML;
        number1 = +num1.join("")
        if(ob.Number1){
            switch (ob.Opration){
                case "+":
                    ob.Number1 = ob.Number1 + number1;
                    break;
                case "-":
                    ob.Number1 = ob.Number1 - number1;
                    break;
                case "/":
                    ob.Number1 = ob.Number1 / number1;
                    break;
                case "*":
                    ob.Number1 = ob.Number1 * number1;
                    break;
            }
            x = 1;
        }
        if(!ob.Number1){
            ob[`Number${x}`] = number1;
        }
        ob.Opration= e.innerHTML;
        x++;
        num1 = [];
    })
})
result.addEventListener("click",()=>{
    number1 = +num1.join("");
    num1 = [];
    if(ob.Number1){
        switch (ob.Opration){
            case "+":
                ob.Number1 = ob.Number1 + number1;
                break;
            case "-":
                ob.Number1 = ob.Number1 - number1;
                break;
            case "/":
                ob.Number1 = ob.Number1 / number1;
                break;
            case "*":
                ob.Number1 = ob.Number1 * number1;
                break;
        }
    }
    values.innerHTML =  ob.Number1;
    //num1.push(ob.Number1);
    x = 1;
})
clear.addEventListener("click",()=> {
    values.innerHTML = "";
    num1 = [];
    x = 1;
    ob  = {};
});