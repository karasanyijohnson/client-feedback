export const  CreatePerson = (primary_phone, primary_email, full_name) => {
  console.log(primary_phone, primary_email, full_name)
  // return async dispatch =>{
  //  const response= await fetch('https://api.proto.cx/case/person', {
  //   method:'POST',
  //   headers:{
  //     'X-SINITIC-TOKEN': 'gAAAAABi92-gD7db3AO6SXAfinsm6cC5_qg0e3mCVyW4z4mQ9z7Gkhtis07wYlwuKbmD5rthvyVtUYU5zFOn-GCozVzNCf9VPH43Cdp5BmoCpMP7_Mj5wNTyuodIAbttzHEEBgfaqpTO',
  //     'Content-Type': 'application/json'
  //     },
  //     body:JSON.stringify({ 
  //       casem_id: "casem_WACnAUiz",
  //       primary_phone: primary_phone,
  //       primary_email:primary_email, 
  //       full_name: full_name
  //   })
  // })
  // if(!response.ok){
  // const resData= await response.json()
  // console.log(resData)
  // }
  // const resData= await response.json()
  // console.log('yes')
  // dispatch(resData)
  // }

  return fetch('https://api.proto.cx/case/person', {
    method: 'POST',
    headers: {
      'X-SINITIC-TOKEN': 'gAAAAABi92-gD7db3AO6SXAfinsm6cC5_qg0e3mCVyW4z4mQ9z7Gkhtis07wYlwuKbmD5rthvyVtUYU5zFOn-GCozVzNCf9VPH43Cdp5BmoCpMP7_Mj5wNTyuodIAbttzHEEBgfaqpTO',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      casem_id: "casem_WACnAUiz",
      primary_phone: primary_phone,
      primary_email:primary_email, 
      full_name: full_name
    })
  })
    .then(data => console.log(data.json()))
    //.then(res => console.log(res))
}
export const CreateRepresentative = () => {

}

export const CreateCaseDetail = () => {

}