// this, call, bind, apply, Map, Set, WeakMap, WeakSet.


// 1. Globalda this kalit so'zi window objecti ya'ni brauzerga teng
// 2. Objectlar ichida this kalit so'zi o'sha objectga teng.

// const myObject = {
//     name: "Muhammadislom",
//     country: "Uzbekistan",
//     age: 17,
//     myFunction: function() {
//         console.log(this.name)
//     }
// }

// myObject.myFunction()

// const userData = {
//     name:"Abdulloh",
//     username:"AbdullohDev",
//     skills: ["React" , "JavaScript" , "HTML" , "CSS"],
//     showSkills(){
//         console.log(this)
//         this.skills.forEach((item) => {
//             console.log(`${this.username} ${item}`)
//         })
//     }
// }

// userData.showSkills()

// // const userOneData1 = {name:"Abdulloh", age:21}
// // const userTwoData = {name:"Muhammadislom", age:22}

// // function sayHello(text1, text2){
// //     console.log(`${text1} ${this.name} ${text2}`)
// // }

// // sayHello.call(userOneData1, "Hello my name is", "!")

// // // userOneData === this

// // sayHello.apply(userTwoData, ["Hello my name is", "!"])


// const myCar = {
//     brand: "Chevrolet",
//     model: "Malibu",
//     year: 2023,
//     getCarInfo() {
//         return this?.model
//     }
// }

// const bindGetModel = myCar.getCarInfo

// const boundGetModel = bindGetModel.bind(myCar)

// console.log(boundGetModel())

// const numbers = new Set([1, 2, 2, 3, 4, 4, 5]);

// console.log(numbers)


// const myArr = [1, 2, 2, 3, 4, 4, 5, "Muhammadislom", 2, true, true, "true", null, undefined, "Muhammadislom"]

// const filteredArr = new Set(myArr)

// filteredArr.add(7)
// filteredArr.add("AbdullohDev")

// filteredArr.clear()

// console.log(filteredArr)


// const myMap = new Map()

// const myObj = {name: "Abdulloh"} /// 

// myMap.set(myObj, true)

// console.log(myMap.get(myObj))


// const employeeUsers = new WeakSet()

// const userOneData = { name: "Abdulloh" }

// employeeUsers.add(userOneData)

// console.log(employeeUsers.has(userOneData))

// const cache = new WeakMap();

// const userOneData = { name: "Abdulloh" }

// cache.set(userOneData, 22)

// console.log(cache.get(userOneData))