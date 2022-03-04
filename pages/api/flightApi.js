import axisosClient from "./axisosClient";

const flightApi = {
    getflightAll: ()=>{
        // const url = `/flights`;
        return axisosClient.get();
    },
    getflightById: (id)=>{
        const url = `/flights/${id}`;
        return axisosClient.get(url);
    },

}



export default flightApi;