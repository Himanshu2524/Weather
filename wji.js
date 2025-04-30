const apikey="d134bbe939d6d1d97ef2022812c42eaa"
const url="https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchbox=document.querySelector(".search1")
const searchbtn=document.querySelector(".search img")
let weather = async (city) => {
    try {
        let response = await fetch(url+city+ `&appid=${apikey}`)
        let data = await response.json()
        console.log(data);
       

        
        let temperature=data.main.temp
        document.querySelector(".tem").innerHTML=Math.round(temperature)+"°C"
        document.querySelector(".speed1").innerHTML=data.wind.speed+"km/h"
        document.querySelector(".humidity1").innerHTML=data.main.humidity+"%"
        document.querySelector(".city1").innerHTML=data.name

        if(data.weather[0].main=="Clear"){
            document.querySelector(".cloudpic").src = "clear.jpeg";

        } 
       else if(data.weather[0].main=="Clody"){
            document.querySelector(".cloudpic").src = "clouds.jpeg";

        }   
        else if(data.weather[0].main=="Haze"){
            document.querySelector(".cloudpic").src = "haze.jpeg";

        }   
        else if(data.weather[0].main=="Rain"){
            document.querySelector(".cloudpic").src = "rainy.jpeg";

        }   
       else {
            document.querySelector(".cloudpic").src = "cloud.jpeg";

        }       
    }
    catch (e) {
        console.log("this have same error" + e);

    }

}
searchbtn.addEventListener("click",()=>{
    weather(searchbox.value)

})








