
export const careerDetailsLoader = async ({params}) => {
     const {id} = params;
     const response = await fetch("http://localhost:4000/careers/" + id);
     if(!response.ok){
        throw Error('Could not find that career')
     }
     return response.json();
}
