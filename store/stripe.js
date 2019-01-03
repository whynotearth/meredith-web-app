import { meredithApi } from '@/services'

const transactionStatusOptions = {
  SUBMITTING: 'submitting',
  SUCCESSS: 'success',
  ERROR: 'error'
}

export const state = () => ({
  transactionStatus: null,
  error: null
})

export const actions = {
  async postStripeTransaction({ commit }, payload) {
    try {
      await meredithApi.postStripeTransaction(payload)
      commit('updateTransactionStatus', transactionStatusOptions.SUCCESSS)
    } catch (e) {
      console.error(e)
      commit('updateTransactionStatus', transactionStatusOptions.ERROR, e)
    }
  }
}

export const mutations = {
  updateTransactionStatus(state, status, error) {
    state.transactionStatus = status
    state.error = error
  }
}
