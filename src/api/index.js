import axios from "axios";

export const getPlacesData= async(type, sw,ne)=>{
    try {
            const {
              data: { data },
            } = await axios.get(
              `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
              {
                params: {
                  bl_latitude: sw.lat,
                  tr_latitude: ne.lat,
                  bl_longitude: sw.lng,
                  tr_longitude: ne.lng,
                },
                headers: {
                  "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
                  "X-RapidAPI-Key":
                    "316b144b62mshf5bfb7a0da4f48fp1b7dd6jsn83b2f486bf17",
                },
              }
            );

            // console.log(data)


        return data;
    } catch (error) {
        console.log({error});
        
    }
}

export default getPlacesData