import { getUser } from '../services/userQuery'

document.getElementById("buttonPress").addEventListener('click', () =>{
    const user = document.getElementById("userName")
    getUser(user.value).then(data =>{
        console.log(data)
    })
    
})
