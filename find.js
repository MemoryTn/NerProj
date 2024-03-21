const members = [
{name : "Eve" ,age : 24},
{name : "adam" , age : 48},
{name : "chris" ,age : 18},
{name : "danny" , age : 30},
];
const result = members.find((members)=>{
return members.age > 25;
});
console.log(result);