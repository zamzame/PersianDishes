//header.js
let city = "";
let country = "";
let timezone = "";

export function loadLocationAndTime() {
  //loadLocation()
  fetch("https://geoapi.info/api/geo")
    .then(res => res.json())
    .then(data => {
      city = data.location.city || "";
      country = data.location.country || "";
      timezone = data.location.timezone || "";
      let location = city || country;
      console.log(location);
      document.querySelector(".current-location").textContent = `📍` + `${city}, ${country}`;
      
      
      let time = "";
      //loadTime()
      // const api= `https://timeapi.io/api/Time/current/zone?timeZone=${timezone}`;
      // console.log("API URL:", api);
      fetch(`https://timeapi.io/api/Time/current/zone?timeZone=${timezone}`)
        .then(res => res.json())
        .then(data => {

          let currentTime = new Date(
            data.year,
            data.month - 1,
            data.day,
            data.hour,
            data.minute,
            data.seconds
          );
          
          setInterval(() => {
            currentTime.setSeconds(currentTime.getSeconds() + 1);

            let hour = currentTime.getHours();
            const minute = currentTime.getMinutes().toString().padStart(2, "0");
            const second = currentTime.getSeconds().toString().padStart(2, "0");

            const ampm = hour >= 12 ? "PM" : "AM";
            hour = hour % 12 || 12;

            time = `${hour.toString().padStart(2, "0")}:${minute}:${second} ${ampm}`;
            document.querySelector(".current-time").textContent = "🕑"+ time;

          }, 1000);          
          document.querySelector(".current-time").textContent = "🕑"+ time;
        })
        .catch(() => {
          if (time===undefined || time === "" || time === null ) {
              document.querySelector(".current-time").textContent = "🕑"+ "--:--:--";
          }
        });      
    })        

    .catch(() => {
      if (location !== undefined || location !== "" || location !== null) {
          document.querySelector(".current-location").textContent = "📍" + "Location unavailable";
      }      
      
    });
}

// export function loadTime() {
//       console.log("Updated city:", city);
//       console.log("Updated country:", country);
//       console.log("Updated timezone:", timezone);
//       // console.log("Updated data:", data);
//       // console.log("data.location.timezone:", data.location.timezone);
//   const api= `https://timeapi.io/api/Time/current/zone?timeZone=${timezone}`;
//   console.log("API URL:", api);
//   fetch(api )
//     .then(res => res.json())
//     .then(data => {
//       const time = formatTime(data);
//       document.getElementById("current-time").textContent = time;
//     })
//     .catch(() => {
//       document.getElementById("current-time").textContent = "--:--:--";
//     });
// }



// document.addEventListener("DOMContentLoaded", () => {
//   loadTime();
//   loadLocation();
// });