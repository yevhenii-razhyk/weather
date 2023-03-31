const getCityName = city => {
    return `${city.name ? city.name + "," : ""} ${city.state ? city.state + "," : ""} ${city.country ? city.country : ""}`
}

export default getCityName