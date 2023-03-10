import { storeToRefs } from 'pinia'
import { index } from "~~/store";


export const useIndex = () => {
    const { darkMode } = storeToRefs(index())
    const { setMode } = index()

    return {
        darkMode,
        setMode
    }
}