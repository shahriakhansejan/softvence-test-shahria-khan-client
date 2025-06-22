import baseApi from "../api/baseApi";

const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createUser: builder.mutation({
            query: (data) => ({
                url: '/auth/sign-up',
                method: 'POST',
                body: data
            })
        }),
        signInUser: builder.mutation({
            query: (data) => ({
                url: '/auth/sign-in',
                method: 'POST',
                body: data
            })
        }),
        logoutUser: builder.mutation({
            query: (data) => ({
                url: '/auth/logout',
                method: 'POST',
                body: data
            })
        })
    })
})

export const {useCreateUserMutation, useSignInUserMutation , useLogoutUserMutation} = userApi;