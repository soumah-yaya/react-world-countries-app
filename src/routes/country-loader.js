import { redirect } from 'react-router-dom'
import { getCountryList, getCountryByName, getCountryByRegion } from '../api'
import { removeData, saveData } from '../helpers';

export const countryLoader = async ({ request }) => {
    let country;
    let searchKey = ""
    let searchValue = ""
    let searchCountryValue=""
    let filterRegionValue =""

    const url = new URL(request.url);

    //get the search field name as key
    searchKey = url.search.slice(1).split("=")[0]
    //get search value
    searchValue = url.searchParams.get(searchKey);
    
    if (url.search) { //query search
        
        if(searchValue){

            if (searchKey === "search") { // from search input
                searchCountryValue = searchValue 
                saveData("search", searchValue) //persiste the search value
                removeData('region')  // clear localstorage
                country = await getCountryByName(searchValue)
            } else if (searchKey === "region") { //from select filter 
                filterRegionValue = searchValue
                removeData('search')  // clear localstorage
                country = await getCountryByRegion(searchValue)
            }else { //unknown search, redirect to home route
                return redirect('/')
            }
        } else { // not query search
            return redirect('/')
        }
    }

    else { // not query search
        removeData('region')
        removeData('search')
        country = await getCountryList()
    }


    return { country,filterRegionValue, searchCountryValue }
}