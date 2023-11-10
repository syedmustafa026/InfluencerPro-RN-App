import axios from "axios"
import { apiUrl } from '../utilities/constants'
import AsyncStorage from "@react-native-async-storage/async-storage"


export const getHeader = async () => {
  const USER_TOKEN = await getItem('token')
  if (USER_TOKEN != null) {
    const AuthStr = {
      Authorization: `Bearer ${USER_TOKEN}`
    }
    return AuthStr
  }
  else return null
}

export const login = async (payload) => {
  try {
    const { data: response } = await axios.post(`${apiUrl}/auth/login`, payload)
    const json = response
    return json
  } catch (error) {
    return error.message
  }
}
export const register = async (payload) => {
  try {
    const { data: response } = await axios.post(`${apiUrl}/auth/register`, payload)
    const json = response
    return json
  } catch (error) {
    return error.message
  }
}
export const completeProfile = async (payload) => {
  try {
    const { data: response } = await axios.post(`${apiUrl}/auth/complete-profile`, payload)
    const json = response
    return json
  } catch (error) {
    return error.message
  }
}
export const forgetPasswordCheck = async () => {
  try {
    const { data: response } = await axios.get(`${apiUrl}/forgot-password-check`)
    const json = response
    return json
  } catch (error) {
    return error.message
  }
}
export const getInfluencers = async () => {
  try {
    const { data: response } = await axios.post(`${apiUrl}/influencers`, null, {
      headers: await getHeader()
    })
    const json = response
    return json
  } catch (error) {
    return error.message
  }
}

export const getBrands = async () => {
  try {
    const { data: response } = await axios.post(`${apiUrl}/brands`, null, {
      headers: await getHeader()
    })
    const json = response
    return json
  } catch (error) {
    return error.message
  }
}

export const getCategories = async () => {
  try {
    const { data: response } = await axios.get(`${apiUrl}/categories`, {
      headers: await getHeader()
    })
    const json = response
    return json
  } catch (error) {
    return error.message
  }
}
export const getCountries = async () => {
  try {
    const { data: response } = await axios.get(`${apiUrl}/get-countries`, null, {
      headers: await getHeader()
    })
    const json = response
    return json
  } catch (error) {
    return error.message
  }
}

export const getCitiesByState = async (payload) => {
  try {
    const { data: response } = await axios.post(`${apiUrl}/get-cities-by-state`, payload, {
      headers: await getHeader()
    })
    const json = response
    return json
  } catch (error) {
    return error.message
  }
}

export const getStateByCountry = async (payload) => {
  try {
    const { data: response } = await axios.post(`${apiUrl}/get-states-by-nationality`, payload, {
      headers: await getHeader()
    })
    const json = response
    return json
  } catch (error) {
    return error.message
  }
}
export const getcitiesByCountry = async (payload) => {
  try {
    const { data: response } = await axios.post(`${apiUrl}/get-cities-by-country`, payload)
    const json = response
    return json
  } catch (error) {
    return error.message
  }
}

export const getInfluencerByCategories = async (payload) => {
  try {
    const { data: response } = await axios.post(`${apiUrl}/categories/influencers`, payload, {
      headers: await getHeader()
    })
    const json = response
    return json
  } catch (error) {
    return error.message
  }
}
export const filterInfluencer = async (payload) => {
  try {
    const { data: response } = await axios.post(`${apiUrl}/influencers/filter`, payload, {
      headers: await getHeader()
    })
    const json = response
    return json
  } catch (error) {
    return error.message
  }
}
export const getInfluencerDetail = async (payload) => {
  try {
    const { data: response } = await axios.post(`${apiUrl}/influencers/detail`, payload, {
      headers: await getHeader()
    })
    const json = response
    return json
  } catch (error) {
    return error.message
  }
}
export const updateInfluencerAddress = async (payload) => {
  try {
    const { data: response } = await axios.post(`${apiUrl}/influencers/update-address`, payload, {
      headers: await getHeader()
    })
    const json = response
    return json
  } catch (error) {
    return error.message
  }
}
export const updateInfluencerSocialMedia = async (payload) => {
  try {
    const { data: response } = await axios.post(`${apiUrl}/influencers/update-social-media-accounts`, payload, {
      headers: await getHeader()
    })
    const json = response
    return json
  } catch (error) {
    return error.message
  }
}
export const requestChat = async (payload) => {
  try {
    const { data: response } = await axios.post(`${apiUrl}/app/chats/send-chat-request`, payload, {
      headers: await getHeader()
    })
    const json = response
    return json
  } catch (error) {
    return error.message
  }
}
export const checkingRequest = async (payload) => {
  try {
    const { data: response } = await axios.post(`${apiUrl}/app/chats/accept-or-reject`, payload, {
      headers: await getHeader()
    })
    const json = response
    return json
  } catch (error) {
    return error.message
  }
}
export const getUserChats = async () => {
  try {
    const { data: response } = await axios.post(`${apiUrl}/app/chats/get-users-for-chat`, null, {
      headers: await getHeader()
    })
    const json = response
    return json
  } catch (error) {
    return error.message
  }
}
export const sendMessage = async (payload) => {
  try {
    const { data: response } = await axios.post(`${apiUrl}/app/chats/send-message`, payload, {
      headers: await getHeader()
    })
    const json = response
    return json
  } catch (error) {
    return error.message
  }
}
export const getNewMessages = async () => {
  try {
    const { data: response } = await axios.get(`${apiUrl}/app/chats/get-new-messages`, {
      headers: await getHeader()
    })
    const json = response
    return json
  } catch (error) {
    return error.message
  }
}
export const markReadMessage = async (payload) => {
  try {
    const { data: response } = await axios.post(`${apiUrl}/app/chats/mark-as-read`, payload, {
      headers: await getHeader()
    })
    const json = response
    return json
  } catch (error) {
    return error.message
  }
}
export const logout = async () => {
  try {
    const { data: response } = await axios.post(`${apiUrl}/auth/logout`, null, {
      headers: await getHeader()
    })
    const json = response
    return json
  } catch (error) {
    return error.message
  }
}
export const setItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value))
    return 'set'
  } catch (error) {
    return error.message
  }
}

export const getItem = async (key) => {
  try {
    return JSON.parse(await AsyncStorage.getItem(key))
  } catch (error) {
    return error.message
  }
}

export const removeItem = async (key) => {
  try {
    await AsyncStorage.removeItem(key)

    return 'removed'
  } catch (error) {
    return error.message
  }
}

export const clearStorage = async () => {
  try {
    await AsyncStorage.clear()

    return 'cleared'
  } catch (error) {
    return error.message
  }
}