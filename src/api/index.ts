import requests from "../utils/request";
export const reqWeather = ()=>requests({url:'https://api.vvhan.com/api/weather?city=北京',method:'get'});
