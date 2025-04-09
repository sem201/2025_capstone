const fontGenerator = (
  fontFamily: string,
  fontSize = "1rem",
  fontWeight = "400",
  lineHeight = "1.5",
  letterSpacing = "normal"
) => ({
  "font-family": fontFamily,
  "font-size": fontSize,
  "font-weight": fontWeight,
  "line-height": lineHeight,
  "letter-spacing": letterSpacing,
});

export const theme = {
  colors: {
    // Neutral
    B60: "#3F3F46",
    B50: "#52525B",
    B40: "#71717A",
    B30: "#A1A1AA",
    B20: "#D4D4D8",
    B10: "#E4E4E7",
    B00: "#F4F4F5",

    // Primary
    P60: "#1D3067",
    P50: "#1E378A",
    P40: "#3151B3",
    P30: "#578CFF",

    // B/W
    Black: "#272424",
    WHITE: "#ffffff",

    // Nuse Call
    N40: "#E58900",
    N30: "#FFA826",
    N20: "#FFD18C",
    N10: "#FFEED5",

    // Danger
    D30: "#E44237",
    D20: "#FFCAC6",
    D10: "#FFE7E6",
  },

  fonts: {
    default: fontGenerator("Pretendard", "1rem", "400", "1.5", "normal"),

    //Headlines
    headline1: fontGenerator("Pretendard", "1.75rem", "700", "2.7"), //28px
    headline2: fontGenerator("pretendard", "1.75rem", "500"), // 28px
    headline3: fontGenerator("pretendard", "1.5rem", "600"), // 24px
    headline4: fontGenerator("pretendard", "1.25rem", "500", "1.4"), // 20ㅔㅌ

    // Body
    body1: fontGenerator("pretendard", "1rem", "700", "1.75"), // 16px
    body2: fontGenerator("pretendard", "1rem", "500"),
    body3: fontGenerator("pretendard", "0.875rem", "600"),
    body4: fontGenerator("pretendard", "0.75rem", "600", "1.42"),

    small: fontGenerator("pretendard", "0.625rem", "500"),
  },
};
