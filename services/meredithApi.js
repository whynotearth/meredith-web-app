import config from '@/config'
import axios from 'axios'

async function postStripeTransaction({
  token,
  // TODO: remove below 2 default values after hooked to API
  amount = config.DEFAULT_DONATION_AMOUNT,
  companyId = config.TEST_COMPANY_ID
}) {
  try {
    const payload = {
      token,
      amount,
      companyId
    }
    await axios.post(config.API_URL + '/stripe/charge/create', payload)
  } catch (e) {
    throw e
  }
}

export default {
  postStripeTransaction
}
