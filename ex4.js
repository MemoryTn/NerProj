const members = [
    {name : "a" ,money : 500},
    {name : "b" , money : 400},
    {name : "c" ,money : 5200},
    {name : "d" , money : 1200}
    ];
const isMoney100 = members.find((members)=>{
return members.money > 1000;});
const isNameMeber = members.filter((members)=>{
    return members.name ;});
const newResult = isNameMeber.map(element =>{ return (element.name)});

function DisplayMember(){
console.log(isMoney100.name);
console.log(newResult);
}
DisplayMember()