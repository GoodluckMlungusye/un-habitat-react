export const careersLoader = async () => {
  const response =  await fetch('http://localhost:4000/careers');
  if(!response.ok){
      throw Error("Could not fetch the careers")
  }
  return response.json();
}

