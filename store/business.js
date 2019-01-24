import { meredithApi } from '@/services'

const statusOptions = {
  LOADING: 'loading',
  SUCCESSS: 'success',
  ERROR: 'error'
}

export const state = () => ({
  storeStatus: statusOptions.LOADING,
  business: null,
  stories: null,
  error: null
})

export const actions = {
  async getBusiness({ commit }, businessName) {
    try {
      commit('updateStoreStatus', statusOptions.LOADING)
      const res =  await meredithApi.getBusiness(businessName)
      if (!res) throw 'Empty response'
      const { business, stories } = res
      commit('setBusinessAndStories', { business, stories })
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
  setBusinessAndStories(state, { business, stories }, error) {
    state.business = business
    state.stories = stories
    if(error) {
      state.error = error
    }
  }
}
