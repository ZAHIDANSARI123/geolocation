const showDetails = document.querySelector('.showDetails')
const fullAddress = document.querySelector('.fullAddress')
const formattedAddress = document.querySelector('.formattedAddress')


    // let apiEndPoint = ""
    // let apiKey = ""

    // api to get user address
    const getUserCurrentAddress = async (latitude, longitude) => {
        // console.log(latitude);
        let query = `${latitude}, ${longitude}`
        let apiUrl = `${apiEndPoint}?key=${apiKey}&q=${query}&pretty=1`
        try {
            const res = await fetch(apiUrl);
            const data = await res.json();
            const { city, state, postcode, country } = data.results[0].component
            fullAddress.textContent = `User address: ${city}, ${postcode}, ${state}, ${country}`
            formattedAddress.textContent = `User full address: ${data.results[0].formattedAddress}`
            // fullAddress,.textContent = data.apiUr
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

        // console.log(navigator.geolocation.getCurrentPosition);

        document.querySelector('.geo-btn').addEventListener('click', () => {
            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        // console.log(position);
                        const { latitude, longitude } = position.coords
                        showDetails.textContent = `the latitude ${latitude} & longitude ${longitude}` 
                        getUserCurrentAddress(latitude, longitude0);
                    },
                     (error) => {
                        showDetails.textContent = error.message
                        // console.log(error.message);
                    })


                    // document.querySelector('.geo-btn').addEventListener( () => {}, () => {} )
            }
        });