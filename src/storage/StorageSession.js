import create from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create(
  persist(
    (set, get) => ({
      userSession: { email: "", password: "", role: 0 },
      addUserSession: (obj) => set({ userSession: obj }),
    }),
    {
      name: "authenticate-storage", // name of item in the storage (must be unique)
      getStorage: () => sessionStorage, // (optional) by default the 'localStorage' is used
    }
  )
);

export const useStoreLogin = create((set) => ({
  emailUser: "",
  passwordUser: "",
  setEmailUser: (newEmail) => set({ emailUser: newEmail }),
  setPasswordUser: (newPassword) => set({ passwordUser: newPassword }),
}));


