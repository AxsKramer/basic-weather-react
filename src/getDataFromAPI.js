
const getDataFromAPI = async (city, country) => {
        
        try{
			const appId = 'd4ded8a5e600be7f7b4755f520cdbd89';
			const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;
			const response = await fetch(url);
			const result = await response.json();
			return result;
        }catch(error){
			console.log("Error: ", error.message);
		}
}

export default getDataFromAPI;