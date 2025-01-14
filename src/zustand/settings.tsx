import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface ISettings {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
    drawerMode: 'default' | 'mini';
    toggleDrawerMode: () => void;
    drawerDirection: 'left' | 'right';
    toggleDrawerDirection: () => void;
    fontFamily: 'Roboto' | 'Public Sans' | 'Inter' | 'Poppins';
    setFontFamily: (fontFamily: 'Roboto' | 'Public Sans' | 'Inter' | 'Poppins') => void;
    primaryColor: 'blue' | 'cyan' | 'geekblue' | 'gold' | 'green' | 'grey' | 'lime' | 'magenta' | 'orange' | 'purple' | 'red' | 'volcano' | 'yellow';
    setPrimaryColor: (primaryColor: 'blue' | 'cyan' | 'geekblue' | 'gold' | 'green' | 'grey' | 'lime' | 'magenta' | 'orange' | 'purple' | 'red' | 'volcano' | 'yellow') => void;
  }

export const useSettingsStore = create(
  persist<ISettings>(
    (set, get) => ({
        theme: 'light',
        toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
        drawerMode: 'default',
        toggleDrawerMode: () => set((state) => ({ drawerMode: state.drawerMode === 'default' ? 'mini' : 'default' })),
        drawerDirection: 'left',
        toggleDrawerDirection: () => set((state) => ({ drawerDirection: state.drawerDirection === 'left' ? 'right' : 'left' })),
        fontFamily: 'Public Sans',
        setFontFamily: (fontFamily) => set({ fontFamily }),
        primaryColor: 'blue',
        setPrimaryColor: (primaryColor) => set({ primaryColor }),
    }),
    {
      name: 'settings',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)