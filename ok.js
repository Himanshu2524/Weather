let url = "https://api.openweathermap.org/data/2.5/weather?lat=28.644800&lon=77.216721&appid=d134bbe939d6d1d97ef2022812c42eaa&units=metric"
let weather = async () => {
   try {     
   let response = await fetch(url)
   let data = await response.json()
   let temperature=(data.main.temp)
   
   
} 
catch(e){
   console.log("this have same error");
   
}

        
}
weather()
let a=document.getElementById("temp")[0]
console.log(a);

a.innerHTML=temperature


