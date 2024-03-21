const members = [
    {name : "a" ,money : 500},
    {name : "b" , money : 400},
    {name : "c" ,money : 5200},
    {name : "d" , money : 12000},
    ];
const result = members.filter((members)=>{
        return members.money > 450;
        });
        const newResult = result.map(element =>{ return (element.name)})
        console.log(newResult);