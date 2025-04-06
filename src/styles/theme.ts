const fontGenerator = (
    fontFamily:any,
    fontSize = "1rem",
    fontWeight = "400",
    lineHeight = "1.5",
    letterSpacing = "normal",
)=>({
    "font-family": fontFamily,
  "font-size": fontSize,
  "font-weight": fontWeight,
  "line-height": lineHeight,
  "letter-spacing": letterSpacing,
})

export const theme = {
    colors:{
        // Neutral
        B60:"#3F3F46",
        B50:"#52525B",
        B40:"#71717A",
        B30:"#A1A1AA",
        B20:"#D4D4D8",
        B10:"#E4E4E7",
        B00:"#F4F4F5",

        // Primary
        P60:"#1D3067",
        P50:"#1E378A",
        P40:"#3151B3",
        P30:"#578CFF",

        // B/W
        Black:"#272424",
        WHITE:"#FF",

        // Nuse Call
        N40:"#E58900",
        N30:"#FFA826",
        N20:"#FFD18C",
        N10:"#FFEED5",

        // Danger
        D30:"#E44237",
        D20:"#FFCAC6",
        D10:"#FFE7E6",
    }
}