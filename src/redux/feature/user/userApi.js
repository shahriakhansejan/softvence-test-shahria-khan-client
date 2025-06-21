import baseApi from "../api/baseApi";

const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createUser: builder.mutation({
            query: (data) => ({
                url: '/sign-up',
                method: 'POST',
                body: data
            })
        }),
        signInUser: builder.mutation({
            query: (data) => ({
                url: '/sign-in',
                method: 'POST',
                body: data
            })
        })
    })
})

export const {useCreateUserMutation, useSignInUserMutation} = userApi;