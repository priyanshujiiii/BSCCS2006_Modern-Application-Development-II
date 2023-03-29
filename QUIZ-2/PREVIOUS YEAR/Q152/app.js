async function test(){
    let a = await new Promise(r => r(2 && 4)).catch(e => e);
    let b = await new Promise((res,rej)=>{
        if(a<=2) res(a && 5);
        else rej(5 && a);
    }).catch(e => e);
    console.log(a,b);
}
test();