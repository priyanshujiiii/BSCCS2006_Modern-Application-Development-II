function PromiseConstructor(t){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(t)
        },t*1000)
    })
}
async function test(){
    const x1 = await PromiseConstructor(1)
    console.log(2)
    const x2 = await PromiseConstructor(3)
    console.log(x1)
    console.log(x2)
}
test()
console.log(4)