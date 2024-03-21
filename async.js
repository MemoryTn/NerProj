const taskOne  = async () => {
    await new Promise((resolve) => {
        setTimeout(funtion (){
            console.log("this is task 1"),
            resolve(),
        }, 500);
    }) ;

};

const tasktwo = async () => {
    console.log("this is task two");
} ;

await taskOne();
await tasktwo();