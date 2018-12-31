import config from '@/config'
import axios from 'axios'

async function postStripeTransaction ({ token }) {
  try {
    const payload = {
      token,
      amount: config.DEFAULT_DONATION_AMOUNT
      //companyId
    }
    const result = await axios.post(config.API_URL + '/stripe/charge/create', payload)
  } catch(e) {
    console.error(e)
  }
}

export default {
  postStripeTransaction
}
