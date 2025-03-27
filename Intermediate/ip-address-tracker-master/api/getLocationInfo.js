import axios from 'axios'

const URL = 'https://geo.ipify.org/api/v2/country,city?apiKey='

const apiKey = import.meta.env.VITE_APP_API_KEY

const getLocationInfo = async(address) => {
  try {
    const res = await axios.get(`${URL}${apiKey}&ipAddress=${address}`)
    return res.data
  } catch(err) {
    console.log(err)
  }
}

export default getLocationInfo