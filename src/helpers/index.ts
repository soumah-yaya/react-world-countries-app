// save data
export const saveData =(key:string,data:any)=>{
    localStorage.setItem(key, data)
}

// retrieve data from localstorage
export const getData =(key:string) =>{
    return localStorage.getItem(key) || ""
}
// remove data from localstorage
export const removeData =(key:string) =>{
    return localStorage.removeItem(key) 
}

//parse string to int
export const parseToCommaSeparatedNumber =(str:string) =>{
    return Number.parseInt(str).toLocaleString()
}

//parse string to int
export const capitalizeFirstCharacter =(str:string) =>{
    if(!str) return
    return str.at(0)?.toUpperCase()+str.slice(1)
}

