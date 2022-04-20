// function change(){
//     const parent=document.getElementById("one");
// //     const child=document.createElement('h1');
// //     child.setAttribute("class","two");
// //     child.innerHTML="love"
// //     parent.appendChild(child)
// // // }


// // const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// // fruits.splice(2, 3,"chandu","sowmya");
// // console.log(fruits);




// let user1={
//     name:'chandu',
//     age:21
// }
// let user2={
//     name:"akhil",
//     age:22
// }



// function c(state,country){
//     console.log(this);
//      console.log(state,country);
// }


// c.call(user1,'ts','india');
// c.apply(user2,['ts','ind'])


// const r=c.bind(user1)
// r('ind','ind')



// function chandu(){
// let date=new Date()

 
// let hours=date.getHours()
// let min=date.getMinutes()
// let sec=date.getSeconds()



// let time=hours +':'+min+':'+sec;
 

// document.getElementById('p').innerHTML=time

// }

// setInterval('chandu()',1000)


class Atm{
    constructor(withDrawal){
        this.balance=1000;
        this.min=500;
        this.withDrawal=withDrawal;
    }
    getWithdrawl(){
        if(this.balance-this.min>=this.withDrawal){
            console.log("succ");
        }else{
            console.log("fail");
        }
    }
}

// let c=new Atm(600);
// c.getWithdrawl()



//  let str="chandu";

//  let str1=str.split('').reverse().join('')
//  document.write(str1)

