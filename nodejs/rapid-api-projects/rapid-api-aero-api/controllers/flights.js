import axios from "axios";

export const getFlightStatus = async (req, res) => {
    const HOST = process.env.RAPID_API_HOST;
    const KEY = process.env.RAPID_API_KEY;

    try {
        const options = {
            method: 'GET',
            url: 'https://'+ HOST +'/flights/number/KL1395/2022-04-08',
            headers: {
              'X-RapidAPI-Host': HOST,
              'X-RapidAPI-Key': KEY
            }
          };

        let response = await axios(options);
        res.status(200).json(response.data);
    } catch (error) {
        console.log(error.message);
    };
};

export const getFlightDepartures = async (req, res) => {
    const HOST = process.env.RAPID_API_HOST;
    const KEY = process.env.RAPID_API_KEY;
    try {
        const options = {
            method: 'GET',
            url: 'https://'+ HOST +'/flights/number/KL1395/dates/2020-04-01/2022-04-08',
            headers: {
                'X-RapidAPI-Host': HOST,
                'X-RapidAPI-Key': KEY 
            }
        }
        let response = await axios(options);
        res.status(200).json(response.data);
    } catch (error) {
        console.log(error.message);
    }
}