async function FetchFunct(ApiUrl){
    const response = await fetch(ApiUrl).catch(()=>{
        throw new Error('Network Error')
    })

    if (response){
        if(response.ok){
            const data = await response.json().catch(()=>{
                throw new Error('Unexpected.Error')
            })
            if(data){
                return data
            }
        }
        else{
            throw new Error(response.statusText)
        }
    }
}
Const url = 'dummyUrl'
FetchFunct(url)
  .then((data)=>{
    console.log(data)
  })
  .catch((err)=>{
    console.log(err.message)
  })