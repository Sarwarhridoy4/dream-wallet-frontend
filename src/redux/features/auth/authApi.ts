// src/redux/features/auth/authApi.ts
import { baseApi } from "@/redux/baseApi";


export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // -------------------
    // LOGIN
    // -------------------
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        data: credentials,
      }),
      invalidatesTags: ["USER"],
    }),

    // -------------------
    // LOGOUT
    // -------------------
    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
      invalidatesTags: ["USER"],
    }),

    // -------------------
    // REGISTER (User / Agent)
    // -------------------
    register: builder.mutation({
      query: (userInfo) => {
        const formData = new FormData();
        Object.entries(userInfo).forEach(([key, value]) => {
          if (value !== undefined && value !== null) {
            // convert File and string automatically
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            formData.append(key, value as any);
          }
        });
        return {
          url: "/auth/register",
          method: "POST",
          data: formData,
          headers: { "Content-Type": "multipart/form-data" },
        };
      },
    }),

    // -------------------
    // REFRESH TOKEN
    // -------------------
    refreshToken: builder.mutation({
      query: () => ({
        url: "/auth/refresh-token",
        method: "POST",
      }),
      invalidatesTags: ["USER"],
    }),

    // -------------------
    // FORGOT PASSWORD
    // -------------------
    forgotPassword: builder.mutation({
      query: (data) => ({
        url: "/auth/forgot-password",
        method: "POST",
        data,
      }),
      invalidatesTags: ["USER"], // Ensure tags are invalidated if necessary
    }),

    // -------------------
    // RESET PASSWORD
    // -------------------
    resetPassword: builder.mutation({
      query: (data) => ({
        url: "/auth/reset-password",
        method: "POST",
        data,
      }),
    }),

    // -------------------
    // GET CURRENT USER INFO
    // -------------------
    getUserInfo: builder.query({
      query: () => ({
        url: "/user/me",
        method: "GET",
      }),
      providesTags: ["USER"],
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useRefreshTokenMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useGetUserInfoQuery,
} = authApi;
