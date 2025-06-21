import baseApi from "../api/baseApi";

const taskApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTask: builder.query({
      query: ({ selectedCategory, selectedItems }) => {
        const categoryParams =
          selectedCategory?.map((cat) => `category=${cat}`).join("&") || "";
        const statusParams =
          selectedItems?.map((stat) => `status=${stat}`).join("&") || "";

        const queryString = [categoryParams, statusParams]
          .filter(Boolean)
          .join("&");

        return `/tasks?${queryString}`;
      },
      providesTags: ["Task"],
    }),
    getATask: builder.query({
      query: (id) => `/task/${id}`,
      providesTags: ["Task"],
    }),
    updateTaskStatus: builder.mutation({
      query: ({ id, status }) => ({
        url: `/task/${id}`,
        method: "PATCH",
        body: { status } ,
      }),
      invalidatesTags: ["Task"],
    }),
  }),
});

export const {
  useGetTaskQuery,
  useGetATaskQuery,
  useUpdateTaskStatusMutation,
} = taskApi;
