let cities = ["Pune", "Delhi", "Mumbai", "Chennai", "Bangalore"];

function populateDropdown() {
    let dropdown = document.getElementById("cityDropdown");
    dropdown.innerHTML = "";  

    let sortedCities = cities.slice().sort(); 

    sortedCities.forEach(city => {
        let option = document.createElement("option");
        option.value = city;
        option.textContent = city;
        dropdown.appendChild(option);
    });
}
