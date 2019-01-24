import config from '@/config'
import axios from 'axios'

async function postStripeTransaction({
  token,
  metadata,
  email,
  // TODO: remove below 2 default values after hooked to API
  amount = config.DEFAULT_DONATION_AMOUNT,
  companyId = config.TEST_COMPANY_ID
}) {
  try {
    const payload = {
      token,
      amount,
      companyId,
      metadata,
      email
    }
    await axios.post(config.API_URL + '/stripe/charge/create', payload)
  } catch (e) {
    console.error(e)
    throw e
  }
}

async function getBusiness(name) {
  try {
    const { stories, business } = await import(`@/cms/${name}`);
    return { stories, business }
  } catch(e) {
    console.error(e)
  }
}

export default {
  postStripeTransaction,
  getBusiness
}
