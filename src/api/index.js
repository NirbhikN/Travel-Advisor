import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'


export const getPlacesData= async(sw,ne)=>{
    try {
            const {data: { data }} = await axios.get(URL, {
                params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng ,
                tr_longitude: ne.lng,
                },
                headers: {
                "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
                "X-RapidAPI-Key":
                "316b144b62mshf5bfb7a0da4f48fp1b7dd6jsn83b2f486bf17",
                },
            });

            console.log(data)

        return data;
    } catch (error) {
        console.log(error);
        
    }
}

export default getPlacesData