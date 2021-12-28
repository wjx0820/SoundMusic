import { createStore, action } from "easy-peasy"

// import create from "zustand"

export const store = createStore({
  activeSongs: [],
  activeSong: null,
  changeActiveSongs: action((state: any, payload) => {
    state.activeSongs = payload
  }),
  changeActiveSong: action((state: any, payload) => {
    state.activeSong = payload
  }),
})

// export const useStore = create((set) => ({
//   activeSongs: [],
//   activeSong: null,
//   changeActiveSongs: () =>
//     set((state, payload) => (state.activeSongs = payload)),
//   changeActiveSong: () => set((state, payload) => (state.activeSong = payload)),
// }))
