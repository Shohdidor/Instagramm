let box = document . querySelector ( ".box" )
let click = document . querySelector ( ".click" )
let btnDel = document . querySelector ( ".delete" )
let Trash = document . querySelector ( ".Trash" )
let mychat = document . querySelector ( ".mychat" )
let block = document . querySelector ( ".block" )
let Chat = document . querySelector ( ".Chat" )
let inpAdd = document . querySelector ( ".inpAdd" )
let btnAdd = document . querySelector ( ".btnAdd" )
let zapros = document . querySelector ( ".zapros" )
let Doc = document . querySelector ( ".Doc" )
let Ad = document . querySelector ( ".Ad" )
let Del = document . querySelector ( ".Del" )
let Vibirat = document . querySelector ( ".Vibirat" )

Vibirat.onclick = () => {
    box.style.display="block"
}


Del.onclick = () => {
    box.style.display="none"
}
setTimeout(() => {
    Doc.style.display="block"
    Chat.style.paddingBottom="7%"
    Ad.style.marginTop="5%"
}, 5000);

import { addUser } from "./api.js"

btnAdd.onclick = () => {
    addUser ()
    Chat.style.paddingBottom="5%"
}

block . onclick = () => {
    Chat.style.background="black"
    inpAdd.style.display="none"
    btnAdd.style.display="none"
    zapros.style.display="block"
    clickdialog.close()
}
Trash . onclick = () =>{
    mychat.style.display = "none"
    clickdialog.close()
}

import { deleteUser } from "./api.js"


let clickdialog = document . querySelector ( ".clickdialog" )
click . onclick = () => {
    clickdialog.showModal()
}

import { Search } from "./api.js"

let inpSearch = document . querySelector ( ".inpSearch" )
inpSearch .oninput = () => {
    Search (inpSearch.value)
}

function get ( data ){
    box . innerHTML = ""
    data.forEach (( elem ) =>{
        let div = document . createElement ( "div" )
        div.style.display = "flex"
        div.style.width="140%"
        div.onclick = () => {
            chatUser(elem.id)

        }
        let div2 = document . createElement ( "div" )
        div2.style.marginLeft="6%"
        div2.style.marginTop="4%"

        let IMG = document . createElement ( "img" );
        IMG.src = elem.img
        IMG.style.width="24%"
        IMG.style.height="10vh"
        IMG.style.marginTop="4%"
        IMG.style.borderRadius="10px"

        let Name = document . createElement ( "h3" )
        Name.innerHTML = elem.name 
        Name.style.fontSize="90%"

        let Money = document . createElement ( "h3" )
        Money.innerHTML = elem.money 

        Money . style . marginTop = "7%"
        Money . style . marginLeft = "4%"
        if ( elem.money > "100$" ){
            Money.style.background='red'
            Money.style.height="2vh"
            Money.style.padding="2%"
            Money.style.paddingInline="5%"
            Money.style.color="white"
            Money.style.borderRadius="4px"
        }
        if ( elem.money < "300$" ){
            Money.style.background='orange'
            Money.style.height="2vh"
            Money.style.padding="2%"
            Money.style.paddingInline="5%"
            Money.style.color="white"
            Money.style.borderRadius="4px"
        }
        if ( elem.money == "0$" ){
            Money.style.background='green'
            Money.style.height="2vh"
            Money.style.padding="2%"
            Money.style.paddingInline="5%"
            Money.style.color="white"
            Money.style.borderRadius="4px"
        }
        let Message = document . createElement ( "h3" )
        Message.innerHTML = elem.message 
        Message.style.color="gray"
        Message.style.overflowX="hidden"
        div.style.cursor="pointer"
        
        btnDel.onclick = () =>{
                deleteUser (elem.id)
        }

        div2.append ( Name , Message  )
        
        div.append ( IMG , div2 , Money ,)
        box.appendChild ( div )
    })
}



export { get }