import { meredithApi } from '@/services'

const statusOptions = {
  LOADING: 'loading',
  SUCCESSS: 'success',
  ERROR: 'error'
}

export const state = () => ({
  storeStatus: statusOptions.LOADING,
  businessData: null,
  stories: null,
  error: null,
  currentStory: null
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
  },
  async getStory({ commit }, { storyName, businessName }) {
    try {
      commit('updateStoreStatus', statusOptions.LOADING)
      const res =  await meredithApi.getStory({ storyName, businessName })
      if (!res) throw 'Empty response'
      commit('setCurrentStory', res)
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
    state.businessData = business
    state.stories = stories
    if(error) {
      state.error = error
    }
  },
  setCurrentStory(state, currentStory, error) {
    state.currentStory = currentStory
    if(error) {
      state.error = error
    }
  }
}
