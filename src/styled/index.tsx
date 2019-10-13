import styled, { CreateStyled } from '@emotion/styled'

export const colorsList = ["gray", "blue", "indigo", "violet", "fuschia", "pink", "red", "orange", "yellow", "lime", "green", "teal", "cyan"] as const
export type colors = typeof colorsList[number]

type ColorGroups = Record<colors, string[]>

type ColorSingles = {
    base: string,
    black: string,
}

type Theme = {
    colors: ColorGroups & ColorSingles
}

export const theme: Theme = {
    colors: {
        base: "#1778F2",
        black: "#393f48",
        gray: ["#f8f9fa", "#ebedf0", "#dde1e5", "#ced3d9", "#bdc4cc", "#abb3be", "#96a0ad", "#7d8a9a", "#616d7b", "#393f48"],
        blue: ["#e6f0fd", "#cae0fc", "#abcffa", "#86b9f8", "#589ff5", "#177af2", "#146eda", "#1260be", "#0e4f9d", "#0a386f"],
        indigo: ["#ecebfd", "#d7d5fc", "#bebbfb", "#a09cf9", "#7872f7", "#2217f2", "#1e14da", "#1a12be", "#160e9d", "#0f0a6e"],
        violet: ["#f4eafd", "#e9d2fc", "#dcb7fb", "#cc96f9", "#b76bf6", "#8f17f2", "#8114da", "#7012bf", "#5d0f9d", "#420a70"],
        fuschia: ["#fdeafc", "#fcd4fa", "#fbbaf7", "#f99af4", "#f670f0", "#f217e7", "#db14d1", "#c012b7", "#9f0f98", "#730a6e"],
        pink: ["#fdeaf3", "#fcd4e6", "#fbb9d7", "#f999c4", "#f66eac", "#f2177a", "#da146e", "#c01260", "#9f0f50", "#720a39"],
        red: ["#fdebea", "#fcd5d3", "#fbbcb8", "#f99d98", "#f6746d", "#f22217", "#da1e14", "#c01a12", "#9f160f", "#72100a"],
        orange: ["#fdf1e3", "#fbe2c4", "#f9d2a2", "#f7bf7c", "#f5aa4f", "#f28f17", "#da8114", "#bf7112", "#9f5e0f", "#72430a"],
        yellow: ["#fcfde2", "#f8fbc3", "#f5f9a1", "#f1f77a", "#ecf54d", "#e7f217", "#d1db14", "#b8c012", "#99a00f", "#6f740b"],
        lime: ["#effde4", "#defbc6", "#cbf9a5", "#b5f77f", "#9bf551", "#7af217", "#6edb14", "#61c012", "#50a00f", "#3a740b"],
        green: ["#e8fde9", "#d0fcd2", "#b3fab7", "#90f896", "#63f66a", "#17f222", "#14db1e", "#12c01b", "#0fa016", "#0b7410"],
        teal: ["#e2f6f5", "#c3edeb", "#9fe3e0", "#76d7d2", "#43c8c1", "#00b5ac", "#00a39b", "#008f88", "#007771", "#005551"],
        cyan: ["#e6fcfd", "#cbf9fc", "#acf6fa", "#87f2f8", "#58edf5", "#17e7f2", "#14d1db", "#12b7c0", "#0f99a0", "#0b6f74"]
    }
}

export default styled as CreateStyled<Theme>
