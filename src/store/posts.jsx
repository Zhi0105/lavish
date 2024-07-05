import { create } from "zustand";
import { persist } from 'zustand/middleware';


const postStore = persist(
  (set) => ({
    posts: [],
    setPosts: (data) => set(() => ({
      posts: [ ...data ] 
    })),
    resetPosts: () => set(() => ({ posts: [] })),
  }),
  {
    name: 'posts', // name of the item in the storage (must be unique)
  }
);

export const UsePostStore = create(postStore);