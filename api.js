let api = "http://localhost:3000/data"

import { get } from "./dom.js";

async function getData (){
    try {
        let { data } = await axios.get ( api ) 
        get( data )
    } catch (error) {
        console.log(error);
    }
}
export { getData }

let inpchat = document . querySelector ( ".inpchat" )
let inpAdd = document . querySelector ( ".inpAdd" )

async function addUser () {
    inpchat.innerHTML = inpAdd.value
  
    inpchat.style.display="block"
    inpchat.style.background = "#ebebfe"
    inpAdd.value = ""
}

export { addUser }



async function Search(inp){
    try {
        const response = await fetch(`${api}?q=${inp}`)
        const data = await response.json()
        get(data)
    } catch (error) {
        console.log(error);
    }
}

async function deleteUser ( id ){
    try {
        let { data } = await axios . delete ( `${api}/${id}`)
    } catch (error) {
        console.log(error);
    }
}

export { deleteUser }
export {Search}