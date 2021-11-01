import { atom } from "recoil";

export const modalState = atom({
    key: 'modalState',
    default: false,
})

export const sidebarState = atom({
    key: 'sidebarState',
    default: false,
})