import axios from "axios";

export const getAirportsByCode = async (req, res) => {
    const HOST = process.env.RAPID_API_HOST;
    const KEY = process.env.RAPID_API_KEY;
    try {
        const options = {
            method: 'GET',
            url: 'https://' + HOST + '/airports/iata/DME',
            headers: {
                'X-RapidAPI-Host': HOST,
                'X-RapidAPI-Key': KEY
            }
        };
        let response = await axios(options);
        res.status(200).json(response.data);
    } catch (error) {
        console.log(error.message);
    }
};