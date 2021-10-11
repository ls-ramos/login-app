
import axios from 'axios'

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
    url: 'https://cms.trial-task.k8s.ext.fcse.io/graphql',
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
