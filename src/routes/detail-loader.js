import { getCountryDetail } from "../api"

const detailLoader = async ({ params }) => {
    let data;
    try {
        data = await getCountryDetail(params.countryId)
    } catch (error) {
        throw new Error("Something went wrong " + error)
    }
    return data
}

export {
    detailLoader
}