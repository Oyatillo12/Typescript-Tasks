// let enterValue: string | null = prompt("ENter any value");

// function pushValue(value: string | null): string[] {
//     let res:Array<string>  = []
//     if (value) {
//         res.push(value)
//      }
//      return res
// }
// console.log(pushValue(enterValue));


// 2 Masala

// let arr:Array<number> = [1,4,6,83,24,3]

// function findMax(arr:number[]):number{
//     let max:number = arr[0]
//     for(let i:number = 0; i < arr.length; i++){
//         if(max < arr[i]){
//             max = arr[i]
//         }
//     }
//     return max
// }

// console.log(findMax(arr));

// 3 Masala

// let enterStr:string | null = prompt("Malumot kiriting");

// let arr:Array<string> = ["salom", "yahshi", "qnaday"];

// function findEnteredValue(arr:string[],value:string | null ):boolean{
//     if(!value) return false;
//     for(let i:number = 0; i < arr.length; i++){
//         if(arr[i].includes(value)){
//             return true
//         }
//     }
//     return false;
// }

// console.log(findEnteredValue(arr,enterStr));


//  4 Masala

// let arr:Array<number> = [1,3,4,6,5,7,4];

// function createEvenNums(arr:number[]):number[]{
//     let res:number[] = [];

//     for(let i:number = 0; i < arr.length; i++){
//         if(arr[i] % 2 === 0){
//             res.push(arr[i])
//         }
//     }
//     return res
// }

// console.log(createEvenNums(arr));

// 5 Masala

// let arr:Array<number> = [1,3,4,6,5,7,4];

// function totalValueofArr(arr:number[]):number{
//     let res:number = 0;
//     for(let i:number = 0; i < arr.length; i++){
//         res += arr[i]
//     }
//     return res
// }

// console.log(totalValueofArr(arr));


// 6 masala

// type UserType = {
//     id:number
//     name:string
//     email:string
//     address:string
//     password:string | number
// }

// type ResultType = {
//     name:string
//     email:string
// }

// const userList:Array<UserType> = [ 
//     {
//         id:1,
//         name:"Hello",
//         email:"hello@gmail.com",
//         address:"Chilonzor",
//         password:123
//     },
//     {
//         id:2,
//         name:"Salom",
//         email:"salom@gmail.com",
//         address:"Bunyodkor",
//         password:162
//     }
// ]

// function namesAndEmails(arr:Array<UserType>):ResultType[]{
//     let res:Array<ResultType> = [];
//     arr.forEach((item:UserType) => {
//         const data:ResultType = {name:item.name,email:item.email}
//         return res.push(data)
//     })
//     return res
// }

// console.log(namesAndEmails(userList));


// 7 Masala 
// type UserType = {
//     id: number
//     name: string
//     email: string
//     address: string
//     password: string | number
// }

// const userList: Array<UserType> = [
//     {
//         id: 1,
//         name: "Hello",
//         email: "hello@gmail.com",
//         address: "Chilonzor",
//         password: 123
//     },
//     {
//         id: 2,
//         name: "Salom",
//         email: "salom@gmail.com",
//         address: "Bunyodkor",
//         password: 162
//     },
//     {
//         id: 3,
//         name: "Salom",
//         email: "bilmadim@gmail.com",
//         address: "Bunyodkor",
//         password: 162
//     },
//     {
//         id: 4,
//         name: "Salom",
//         email: "qanday@gmail.com",
//         address: "Bunyodkor",
//         password: 162
//     },
//     {
//         id: 5,
//         name: "Salom",
//         email: "yaxshi@gmail.com",
//         address: "Bunyodkor",
//         password: 162
//     },
//     {
//         id: 6,
//         name: "Salom",
//         email: "hjca@gmail.com",
//         address: "Bunyodkor",
//         password: 162
//     },
//     {
//         id: 7,
//         name: "Oyatillo",
//         email: "Oyatillo@gmail.com",
//         address: "Bunyodkor",
//         password: 162
//     }
// ]

// function findEmailById(id:number, arr:Array<UserType>):string{
//     let res:string = '';
//     arr.forEach((item:UserType) => {
//         if(id ===  item.id){
//            res = item.email
//         }
//     })
//     return res
// }
// console.log(findEmailById(4, userList));


// 8 Masala 


// function findEmailById(arr:Array<UserType>):string[]{
//     let res:Array<string>= [];
//     arr.forEach((item:UserType) => {
//         return res.push(item.name)
//     })
//     return res
// }
// console.log(findEmailById( userList));



// 9  Masala 

// let arr1:Array<number> = [1,56,34,23,35];
// let arr2:Array<number> = [1,3,4,6,5,7,4];

// function findMaxesOfArrays(arr1:number[],arr:number[]):string[]{
//     let maxArr1 = arr1.sort((a,b) => b-a)
//     let maxArr2 = arr2.sort((a,b) => b-a)
//     return [String(maxArr1[0]), String(maxArr2[0])]
// }

// console.log(findMaxesOfArrays(arr1,arr2));


//  10 Masala


// let arr: Array<number> = [1, 3, 4, 6, 5, 7, 4, -2, -5, -6, -8];

// function MergeToOddAndEven(arr: number[]): void {
//     let even: number[] = []
//     let odd: number[] = []
//     for (let i:number = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             even.push(arr[i])
//         }
//         else {
//             odd.push(arr[i])
//         }
//     }
//     console.log(even);
//     console.log(odd);
// }

// MergeToOddAndEven(arr)


// 2chi Rasm 

// 1 Masala

// function reverseNums(num:number):number{
//     return Number(String(num).split("").reverse().join(""))
// }
// console.log(reverseNums(123));


// 2 Masala 

// function factorial(n:number):number{
//     if(n > 0 && n <= 1){
//         return 1
//     }
//     else{
//         return n * factorial(n-1)
//     }
// }

// console.log(factorial(1));


// 3 Masala

// type Users = {
//     age:number
//     name:string
// }

// let obj1:Users = {
//     age:25,
//     name:"Oyatillo"
// }
// let obj2:Users = {
//     age:20,
//     name:"Islom"

// }

// const findNameByMaxAge = (obj1:Users,obj2:Users):string => obj1.age > obj2.age ? obj1.name : obj2.name 
// const res = findNameByMaxAge(obj1,obj2)
// console.log(res);

// 4 Masala

// function loopToEnteredNum(n:number):number{
//     console.log(n);
//     if(n <= 1){
//         return n
//     }
//     else{
//         return loopToEnteredNum(n-1) + n
//     }
// }
// loopToEnteredNum(4)


// 5 Masala

// type UserType = {
//     name?:string
//     age?:number
//     job?:string
// }

// let user:UserType = {name: "Shaxzod"}
// let age:UserType = {age:25}
// let job:UserType = {job:"Developer"}

// let userData:UserType = Object.assign(user, age,job)
// console.log(userData);


// 6 Masala 

// let salaries:{[key:string]: number} = {
//     user1:150,
//     user2:180,
//     user3:210
// };

// let totalSalaries = Object.keys(salaries).reduce((total:number, key:string) => total += salaries[key],0);
// console.log(totalSalaries);


// 7 Masala

// let nums:Array<number> = [1,3,5,7,8,12,3,5];

// let res:number = 0;

// for(let num of nums){
//     if(res < num){
//         res = num
//     }
// }
// console.log(res);

// 8 Masala

// let nums:Array<number | null | undefined | boolean> = [1,3,5,null,undefined,false,true]
// let total:number = 0

// nums.forEach((item:number| null | undefined | boolean) => {
//     total += item ? (item === true ? 1 : item) : 0;
// })
// console.log(total);

// Qoshimcha Masalalar 3chi Rasm 

// 1 Masala
// type DataType = {
//     id:number
//     name:string
// }
// let size: number = Number(prompt("Size kiriting"))

// function pushObjBySize(size: number): Array<{ id: number; name: string }> {
//     let arr: Array<{ id: number; name: string }> = []
//     if (size <= 0) {
//         return arr
//     } else {
//         const data:DataType = {
//             id:size,
//             name:`user${size}`
//         }
//         arr.push(data)
//         return arr.concat(pushObjBySize(size - 1))
//     }
// }
// console.log(pushObjBySize(2));


// 2 Masala

// let arr:Array<number> = [1,1,2,2,3,3,4,4,5,5]

// 1 usuli

// let res:number[] = arr.reduce((prev:number[], item: number) => {
//     if(!prev.includes(item)){
//         prev.push(item)
//     }
//     return prev
// },[])

// console.log(res);

// 2 usuli

// let res:number[] = arr.filter((item, index, self) => self.indexOf(item) === index)

// console.log(res);

// 3 usuli

// let res:number[] = [...new Set(arr)]

// console.log(res);


// 3 Masala

// let EnterNum = Number(prompt("Enter number"))

// let arr:number[] = [88,75,342,21,45,67]

// function FindNum(num: number, arr: number[]): number | string {
//     for (let i: number = 0; i < arr.length; i++) {
//         if (arr[i] === num) {
//             return i
//         }
//     }
//     return "Bunday son topilmadi!"
// }

// console.log(FindNum(EnterNum, arr));

// 4 Masala

// let EnterNum = Number(prompt("Enter number"))
// let arr:number[] = [88,75,342,21,45,67]

// function deleteNum(num: number, arr: number[]): number[] | string {
//     let index:number = arr.indexOf(num)
//     index == -1? console.log("Bunday son topilmadi!") : arr.splice(index, 1)
//     return arr;
// }

// console.log(deleteNum(EnterNum, arr));

// 5 Masala

// let nums:number[] = [1,2,3,4,5,6]

// function addTwoMaxNums(nums:number[]):number{
//     let max1:number = Math.max(...nums)
//     let max2:number = nums.filter((num:number) => num !== max1).reduce((a:number, b:number) => a > b ? a : b)
//     return max1 + max2
// }

// console.log(addTwoMaxNums(nums));


// 4chi Rasm 

// 1 Masala


// let person: any = {
//     name: "Islom",
//     age: 25,
//     job: "Developer",
//     interests: "JavaScript, React, Node.js",
//     hobby: "Reading",
//     number: "05555555555",
//     username: "islom123"
// }

// for (let key in person) {
//     console.log(`${key}: ${person[key]}`)
// }


// 2 Masala

// type PersonType = {
//     name: string
//     age: number
//     hobby: string
//     interests: string
// }

// let person1: { [key: string]: number | string } = {
//     name: "Abdulloh",
//     age: 19
// }
// let person2: { [key: string]: string } = {
//     hobby: "Volleyball",
//     interests: "Sleeping"
// }

// let userInfo:{ [key: string]: number | string } = Object.assign({},person1, person2)

// console.log(userInfo);


// 3 Masala

// let arr:number[] = [1,2,3,4,5,6,7,8,9,10]

// function LastNumPlusOne(arr: number[]): number[]{
//     let lastNum: number = arr[arr.length - 1]
//     return [...arr.slice(0, -1), lastNum + 1]
// }

// console.log(LastNumPlusOne(arr));


// 4 Masala

// let arr: number[] = [2, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function totalAddFsOrLs(arr: number[]): number[] {
//     let total: number = arr.reduce((a: number, b: number) => a + b, 0)
//     let firstNum: number = arr[0]
//     firstNum % 2 != 0 ? arr.push(total) : arr.unshift(total)
//     return arr
// }

// console.log(totalAddFsOrLs(arr));

// 5 Masala

// let arr: number[] = [2, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function changeFirstAndLast(arr: number[]): number[] {
//     let firstNum: number = arr[0]
//     let lastNum: number = arr[arr.length - 1]
//     arr[0] = lastNum
//     arr[arr.length - 1] = firstNum
//     return arr
// }

// console.log(changeFirstAndLast(arr));

// 6 Masala


// function pushValuetoArr(size: number): string[] {
//     let arr: string[] = [];

//     function addToArr(count: number): void {
//         if (count <= 0) return;
//         let enterStr:string | null = prompt("Ihtiyoriy soz kiriting");

//         if (enterStr !== null) {
//             arr.push(enterStr);
//         } else {
//             return;
//         }

//         addToArr(count - 1);
//     }

//     addToArr(size);
//     return arr;
// }


// console.log(pushValuetoArr(6));

// 7 Masala


// function pushValuetoArr(size: number): string[] {
//     let arr: string[] = [];

//     function addToArr(count: number): void {
//         if (count <= 0) return;

//         let enterStr: string | null = prompt(`${count}chi savolni kiriting`);

//         if (enterStr !== null) {
//             arr.push(enterStr);
//         } else {
//             return;
//         }

//         addToArr(count - 1);
//     }

//     addToArr(size);
//     return arr;
// }

// let questions: string[] = pushValuetoArr(3);
// let answers: string[] = [];

// for (let i: number = 0; i < questions.length; i++) {
//     let answer: string | null = prompt(`Savol ${i + 1}: ${questions[i]}`);
//     if (answer !== null) {
//         answers.push(answer);
//     }
// }
// console.log("Javoblar: ",answers);




















