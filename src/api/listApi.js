
// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const listApi = createApi({
  reducerPath: 'listApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://apis.ccbp.in/' }),
  endpoints: (builder) => ({
    getLists: builder.query({
      query: () => `list-creation/lists`,

      transformResponse: (response ) => {
          const body = response.lists;
          const listOne= [];
          const listTwo = [];
          body.map((list) => {
                if (list.list_number === 1){
                    listOne.push(list)
                }else {
                    listTwo.push(list)
                }
          })
          return {listOne, listTwo, total: response.total}
      }
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetListsQuery } = listApi
