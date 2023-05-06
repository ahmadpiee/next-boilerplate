import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Token } from '@store/constants'
import qs from 'qs'

export const aboutApi = createApi({
  reducerPath: 'aboutApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api',
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Bearer ${Token}`)
      return headers
    },
  }),
  endpoints: (builder) => ({
    getAboutData: builder.query<AboutData, void | string>({
      query: (apiTarget = 'strapi') => {
        const queryParams = qs.stringify({
          populate: 'deep',
          target: apiTarget,
        })
        return `/about?$${queryParams}`
      },
      keepUnusedDataFor: 90,
    }),
  }),
})

export const { useGetAboutDataQuery } = aboutApi
