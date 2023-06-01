import {defineStore} from "pinia";
import {reqWeather} from "../api";

export const useStroe = defineStore('main',{
    state:()=>{
        return {
            weatherObj:{}
        }
    },
    getters:{

    },
    actions:{
        async getWeather(){
            this.weatherObj = await reqWeather();
        }
    }

})