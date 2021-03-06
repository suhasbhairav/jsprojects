import axios from "axios";

export const getTSIntraDay = async (req, res) => {
  const HOST = process.env.RAPID_API_HOST;
  const KEY = process.env.RAPID_API_KEY;
  try {
    const options = {
      method: "GET",
      url: "https://" + HOST + "/query",
      params: {
        symbol: "MSFT",
        function: "TIME_SERIES_INTRADAY",
        interval: "5min",
        output_size: "compact",
        datatype: "json",
      },
      headers: {
        "X-RapidAPI-Host": HOST,
        "X-RapidAPI-Key": KEY,
      },
    };

    let response = await axios(options);
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error.message);
    res.status(400).json(error.message);
  }
};

export const getTSDailyAdjusted = async (req, res) => {
  const HOST = process.env.RAPID_API_HOST;
  const KEY = process.env.RAPID_API_KEY;
  try {
    const options = {
      method: "GET",
      url: "https://" + HOST + "/query",
      params: {
        function: "TIME_SERIES_DAILY_ADJUSTED",
        symbol: "MSFT",
        outputsize: "compact",
        datatype: "json",
      },
      headers: {
        "X-RapidAPI-Host": HOST,
        "X-RapidAPI-Key": KEY,
      },
    };

    let response = await axios(options);
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error.message);
    res.status(400).json(error.message);
  }
};

export const getTSDaily = async (req, res) => {
  const HOST = process.env.RAPID_API_HOST;
  const KEY = process.env.RAPID_API_KEY;
  try {
    const options = {
      method: "GET",
      url: "https://" + HOST + "/query",
      params: {
        function: "TIME_SERIES_DAILY",
        symbol: "MSFT",
        outputsize: "compact",
        datatype: "json",
      },
      headers: {
        "X-RapidAPI-Host": HOST,
        "X-RapidAPI-Key": KEY,
      },
    };

    let response = await axios(options);
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error.message);
    res.status(400).json(error.message);
  }
};

export const getTSWeeklyAdjusted = async (req, res) => {
  const HOST = process.env.RAPID_API_HOST;
  const KEY = process.env.RAPID_API_KEY;
  try {
    const options = {
      method: "GET",
      url: "https://" + HOST + "/query",
      params: {
        function: "TIME_SERIES_WEEKLY_ADJUSTED",
        symbol: "MSFT",
        datatype: "json",
      },
      headers: {
        "X-RapidAPI-Host": HOST,
        "X-RapidAPI-Key": KEY,
      },
    };
    let response = await axios(options);
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error.message);
    res.status(400).json(error.message);
  }
};

export const getTSWeekly = async (req, res) => {
  const HOST = process.env.RAPID_API_HOST;
  const KEY = process.env.RAPID_API_KEY;
  try {
    const options = {
      method: "GET",
      url: "https://" + HOST + "/query",
      params: {
        function: "TIME_SERIES_WEEKLY",
        symbol: "MSFT",
        datatype: "json",
      },
      headers: {
        "X-RapidAPI-Host": HOST,
        "X-RapidAPI-Key": KEY,
      },
    };

    let response = await axios(options);
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error.message);
    res.status(400).json(error.message);
  }
};

export const getTSMonthlyAdjusted = async (req, res) => {
  const HOST = process.env.RAPID_API_HOST;
  const KEY = process.env.RAPID_API_KEY;
  try {
    const options = {
      method: "GET",
      url: "https://" + HOST + "/query",
      params: {
        symbol: "MSFT",
        function: "TIME_SERIES_MONTHLY_ADJUSTED",
        datatype: "json",
      },
      headers: {
        "X-RapidAPI-Host": HOST,
        "X-RapidAPI-Key": KEY,
      },
    };

    let response = await axios(options);
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error.message);
    res.status(400).json(error.message);
  }
};

export const getTSMonthly = async (req, res) => {
  const HOST = process.env.RAPID_API_HOST;
  const KEY = process.env.RAPID_API_KEY;
  try {
    const options = {
      method: "GET",
      url: "https://" + HOST + "/query",
      params: {
        symbol: "MSFT",
        function: "TIME_SERIES_MONTHLY",
        datatype: "json",
      },
      headers: {
        "X-RapidAPI-Host": HOST,
        "X-RapidAPI-Key": KEY,
      },
    };

    let response = await axios(options);
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error.message);
    res.status(400).json(error.message);
  }
};

export const getFXMonthly = async (req, res) => {
  const HOST = process.env.RAPID_API_HOST;
  const KEY = process.env.RAPID_API_KEY;
  try {
    const options = {
      method: "GET",
      url: "https://" + HOST + "/query",
      params: {
        function: "FX_MONTHLY",
        to_symbol: "USD",
        from_symbol: "EUR",
        datatype: "json",
      },
      headers: {
        "X-RapidAPI-Host": HOST,
        "X-RapidAPI-Key": KEY,
      },
    };

    let response = await axios(options);
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error.message);
    res.status(400).json(error.message);
  }
};

export const getFXWeekly = async (req, res) => {
  const HOST = process.env.RAPID_API_HOST;
  const KEY = process.env.RAPID_API_KEY;
  try {
    const options = {
      method: "GET",
      url: "https://" + HOST + "/query",
      params: {
        to_symbol: "USD",
        from_symbol: "EUR",
        function: "FX_WEEKLY",
        datatype: "json",
      },
      headers: {
        "X-RapidAPI-Host": HOST,
        "X-RapidAPI-Key": KEY,
      },
    };

    let response = await axios(options);
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error.message);
    res.status(400).json(error.message);
  }
};

export const getFXDaily = async (req, res) => {
  const HOST = process.env.RAPID_API_HOST;
  const KEY = process.env.RAPID_API_KEY;
  try {
    const options = {
      method: "GET",
      url: "https://" + HOST + "/query",
      params: {
        function: "FX_DAILY",
        from_symbol: "EUR",
        datatype: "json",
        outputsize: "compact",
        to_symbol: "USD",
      },
      headers: {
        "X-RapidAPI-Host": HOST,
        "X-RapidAPI-Key": KEY,
      },
    };
    let response = await axios(options);
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error.message);
    res.status(400).json(error.message);
  }
};

export const getCurrencyExchangeRate = async (req, res) => {
  const HOST = process.env.RAPID_API_HOST;
  const KEY = process.env.RAPID_API_KEY;
  try {
    const options = {
      method: "GET",
      url: "https://" + HOST + "/query",
      params: {
        from_currency: "USD",
        function: "CURRENCY_EXCHANGE_RATE",
        to_currency: "JPY",
      },
      headers: {
        "X-RapidAPI-Host": HOST,
        "X-RapidAPI-Key": KEY,
      },
    };

    let response = await axios(options);
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error.message);
    res.status(400).json(error.message);
  }
};

export const getCryptoMonthly = async (req, res) => {
    const HOST = process.env.RAPID_API_HOST;
    const KEY = process.env.RAPID_API_KEY;
    try {
        const options = {
            method: 'GET',
            url: 'https://'+HOST+'/query',
            params: {market: 'CNY', function: 'DIGITAL_CURRENCY_MONTHLY', symbol: 'BTC'},
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

export const getCryptoWeekly =  async (req, res) => {
    const HOST = process.env.RAPID_API_HOST;
    const KEY = process.env.RAPID_API_KEY;
    try {
        const options = {
            method: 'GET',
            url: 'https://'+ HOST +'/query',
            params: {symbol: 'BTC', function: 'DIGITAL_CURRENCY_WEEKLY', market: 'CNY'},
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

export const getCryptoDaily = async(req, res) => {
    const HOST = process.env.RAPID_API_HOST;
    const KEY = process.env.RAPID_API_KEY;

    try {
        const options = {
            method: 'GET',
            url: 'https://'+ HOST +'/query',
            params: {function: 'DIGITAL_CURRENCY_DAILY', symbol: 'BTC', market: 'CNY'},
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

export const getCryptoCurExchangeRate = async (req, res) => {
    const HOST = process.env.RAPID_API_HOST;
    const KEY = process.env.RAPID_API_KEY;
    try {
        const options = {
            method: 'GET',
            url: 'https://'+ HOST +'/query',
            params: {
                to_currency: 'USD',
                function: 'CURRENCY_EXCHANGE_RATE',
                from_currency: 'BTC'
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
        res.status(400).json(error.message);
    }    
};

export const getTechIndicators = async (req, res) => {
    const HOST = process.env.RAPID_API_HOST;
    const KEY = process.env.RAPID_API_KEY;
    try {
        const options = {
            method: 'GET',
            url: 'https://' + HOST + '/query',
            params: {
              symbol: 'MSFT',
              function: 'SMA',
              series_type: 'close',
              interval: '5min',
              time_period: '60',
              datatype: 'json'
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
        res.status(400).json(error.message);
    }
};
