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
            url: 'https://'+HOST+'/near_fifty_two_week_low',
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

export const getEquityStockIndex = async (req, res) => {
    const HOST = process.env.RAPID_API_HOST;
    const KEY = process.env.RAPID_API_KEY;
    const {symbol} = req.query;
    try {
        const options = {
            method: 'GET',
            url: 'https://'+ HOST +'/equity_stock_indices',
            params: {
                symbol: symbol
            },
            headers: {
              'X-RapidAPI-Host': HOST,
              'X-RapidAPI-Key': KEY
            }
          };

          let response = await axios(options);
          res.status(200).json(response.data);
    } catch (error) {
        console.log(error.message);
        res.status(200).json(error.message);
    }
};