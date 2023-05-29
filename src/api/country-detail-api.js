const getCountryDetail = async( code) => {
    try {
        let data = await fetch(`https://restcountries.com/v3.1/alpha/${code}`)
        return await data.json()
    } catch (error) {
        console.log('error')
        throw new Error('Something went wront')
    }
    
}

export {
    getCountryDetail
}