
import axios from 'axios'
import config from './config'
interface ApiCallInput {
  query: string,
  authorization?: string | null,
  variables?: object
}

interface authorizationHeader {
  Authorization?: string
}

export const callApi = async ({ query, authorization, variables }: ApiCallInput) => {
  const authorizationHeader: authorizationHeader = {}
  if (authorization) authorizationHeader.Authorization = `Bearer ${authorization}`

  return axios({
    url: config.API_URL_GRAPHQL,
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      ...authorizationHeader
    },
    data: {
      query,
      variables: { ...variables }
    }
  })
}
