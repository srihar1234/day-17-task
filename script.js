document.head.innerHTML += `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous"></link>
                            <link rel="stylesheet" href="./style.css"/>`;
document.body.innerHTML += ` <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
                             <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" crossorigin="anonymous"></script>`
function countryCards(data){                             
document.body.innerHTML += `<div class="container">
                                  <div class="row">
                                  <div class="col-sm-6 col-md-4 col-lg-4 col-xl-4">
                                  <div class="card h-100 " style="width: 23rem;">
                                    <div class="card-header">
                                    <h1 class="text-center" id="title">${data.name.common}</h1>
                                    </div>
                                    <div class="card-body">
                                        <img src="${data.flags.png}" class="card-img-top" alt="${data.name.common}">
                                        <div class="card-text">
                                        <p class="card-text">Capital:${data.capital}</p>
                                        <p class="card-text">Region:${data.region}</p>       
                                        <p class="card-text">Country Code:${data.cca2}</p>
                                        <p class="card-text">Latitude:${data.latlng[0]}</p>
                                        <p class="card-text">Longitude:${data.latlng[1]}</p>
                                        <p class="card-text">Population:${data.population}</p>
                                        <p class="card-text">Native Name:${data.name.official}</p>
                                        <a href="https://api.openweathermap.org/data/2.5/weather?q=${data.name.common}&appid=8bcd81337fcf930c20193f86b769a035" target="_blank" class="btn btn-primary" id="button">click for weather</a>
                                        </div>
                                    </div>
                                    </div> 
                                  </div>
                                  </div>
                            </div>`
};   
fetch("https://restcountries.com/v3.1/all")
.then((response)=>response.json())
.then((data)=>{
    console.log(data);
    data.forEach((v,i,a)=>{
        countryCards(data[i]);
    })
});
 
