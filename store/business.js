import { meredithApi } from '@/services'

const statusOptions = {
  LOADING: 'loading',
  SUCCESSS: 'success',
  ERROR: 'error'
}

export const state = () => ({
  storeStatus: statusOptions.LOADING,
  error: null
})

export const actions = {
  async getBusiness({ commit }, businessName) {
    try {
      commit('updateStoreStatus', statusOptions.LOADING)
      await meredithApi.getBusiness(businessName)
      commit('updateStoreStatus', statusOptions.SUCCESSS)
    } catch (e) {
      console.error(e)
      commit('updateStoreStatus', statusOptions.ERROR, e)
    }
  }
}

export const mutations = {
  updateStoreStatus(state, status, error) {
    state.storeStatus = status
    if(error) {
      state.error = error
    }
  },
  setBusiness(state, business, error) {
    state.business = business
    if(error) {
      state.error = error
    }
  }
}
