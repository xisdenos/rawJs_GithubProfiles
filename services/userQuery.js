

export async function getUser(name){
    
    console.log(name)
    const res = await fetch(`https://api.github.com/users/${name}`)
    const data = await res.json()
    return data
  
}