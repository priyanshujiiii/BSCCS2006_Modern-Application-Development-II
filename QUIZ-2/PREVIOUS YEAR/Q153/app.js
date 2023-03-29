new Promise((reject, resolve)=>{
    function test(input1,input2,data){
        let obj = {
            input1 : input1,
            input2 : input2
        }
        if (data.find(e1 => el.input1 == obj.input1 && el.input2 != obj.input2))
            resolve("Element Found")
        else
            reject("Element missing")
    }
    data = [{'input1' 4, 'input2': 'input2'}]
    test(4,4,data)
}).then(data => console.log("Test failed !!",data))
.catch(error => console.log("Test Passed !!, error"))