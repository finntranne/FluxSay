import { create } from "zustand";

const useAuthStore = create((set) => ({
  authUser: { name: "john", _id: 123, age: 25 },
  isLoading: false,
  isLoggedIn: false,

  login: () => {
    console.log("logged In");
    set({ isLoggedIn: true, isLoading: true });
  },
}));

export { useAuthStore };
