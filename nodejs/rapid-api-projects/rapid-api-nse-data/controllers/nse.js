import axios from "axios";

export const get52WeekLow  = async (req, res) => {
    const HOST = process.env.RAPID_API_HOST;
    const KEY = process.env.RAPID_API_KEY;

    try {
        const options = {
            method: 'GET',
            url: 'https://'+ HOST +'/near_fifty_two_week_low',
            headers: {
              'X-RapidAPI-Host': HOST,
              'X-RapidAPI-Key': KEY
            }
          };

          let response = await axios(options);
          res.status(200).json(response.data);
    } catch (error) {
        console.log(error.message);
        res.status(400).json(error.message);
    }
};

export const get52WeekHigh = async(req, res) => {
    const HOST = process.env.RAPID_API_HOST;
    const KEY = process.env.RAPID_API_KEY;
    
    try {
        const options = {
            method: 'GET',
            url: 'https://nse-data1.p.rapidapi.com/near_fifty_two_week_low',
            headers: {
              'X-RapidAPI-Host': 'nse-data1.p.rapidapi.com',
              'X-RapidAPI-Key': '768a7a35f5mshbe332da2ffe63acp19162djsn465cb64e6088'
            }
          };

          let response = await axios(options);
          res.status(200).json(response.data);
    } catch (error) {
        console.log(error.message);
        res.status(400).json(error.message);
    }
};