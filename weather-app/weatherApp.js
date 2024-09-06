//setting the date of the city
let currentDate = document.querySelector("#currentDate").addEventListener("submit", updateDate);

function updateDate(){
    let now = new Date();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[now.getDay()];
    let hour = now.getHours();
    let mins = now.getMinutes();
    let currentTime = `${day} ${hour.toString().padStart(2, '0')}: ${mins.toString().padStart(2, '0')}`;
    let today = document.querySelector("h7");
    today.innerHTML = currentTime;
}
updateDate();

//entering a city
document.querySelector("#weather-form").addEventListener("submit", lookUp);

function displayComments(response) {
    console.log(response);
    console.log(response.data.name);
    console.log(Math.round(response.data.main.temp));
    let city = response.data.name;
    let temperature = Math.round(response.data.main.temp);
    // Assuming we want to display these values somewhere in the HTML. Here's an example:
    document.querySelector("h1").innerHTML = city;
    document.querySelector("#temperature").innerHTML =` ${temperature}`;
}

function lookUp(event) {
    event.preventDefault();

    let cityInput = document.querySelector("#weather-input");
    let city = cityInput.value.trim();
    let apiKey = "97c383bf89d126e3dfb9d9bd2480663c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(displayComments).catch(error => {
        console.error("Error fetching data:", error);
    });
}




  

  

  
