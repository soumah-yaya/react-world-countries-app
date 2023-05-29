
// get all countries
const getCountryList = async () => {
    try {
        let data = await fetch('https://restcountries.com/v3.1/all')
        return await data.json()
    } catch (error) {
        console.log('error')
        throw new Error('Something went wront')
    }
    
}
//search country by name

const getCountryByName = async (name) => {
    try {
        let data = await fetch(`https://restcountries.com/v3.1/name/${name}`)
        return await data.json()
    } catch (error) {
        console.log('error')
        throw new Error('Something went wront')
    }
    
}

//search country by region
const getCountryByRegion = async (region) => {
    try {
        let data = await fetch(`https://restcountries.com/v3.1/region/${region}`)
        return await data.json()
    } catch (error) {
        console.log('error')
        throw new Error('Something went wront')
    }
    
}


export { getCountryList, getCountryByName, getCountryByRegion }