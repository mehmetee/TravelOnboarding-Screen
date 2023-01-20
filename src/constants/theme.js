import { Dimensions } from "react-native";
const {width , heigth} =Dimensions.get("window");

export const COLORS= {
    black:"#1E1F20",
    white:"#FFFFFF",
    gray:"#6A6A6A",
    blue:"#0682FE"
}

export const SIZES={
    //global sizes
    base:8,
    font:14,
    radius:12,
    padding:24,

    //Font sizes
    h1:30,
    h2:22,
    h3:16,
    h4:14,
    body1:30,
    body2:22,
    body3:16,
    body4:14,

    // App dimensions
    width,
    heigth,
}

export const FONTS={
    h1:{fontFamily:'Roboto-Black' ,fontSize:SIZES.h1 ,lineHeigth:36 },
    h2:{fontFamily:'Roboto-Bold' ,fontSize:SIZES.h2 ,lineHeigth:30 },
    h3:{fontFamily:'Roboto-Bold' ,fontSize:SIZES.h3 ,lineHeigth:22 },
    h4:{fontFamily:'Roboto-Bold' ,fontSize:SIZES.h4 ,lineHeigth:22 },
    body1:{fontFamily:'Roboto-Regular' ,fontSize:SIZES.body1 ,lineHeigth:36 },
    body2:{fontFamily:'Roboto-Regular' ,fontSize:SIZES.body2 ,lineHeigth:30 },
    body3:{fontFamily:'Roboto-Regular' ,fontSize:SIZES.body3 ,lineHeigth:22 },
    body4:{fontFamily:'Roboto-Regular' ,fontSize:SIZES.body4 ,lineHeigth:22 },
}

const appTheme={COLORS,SIZES,FONTS}

export default appTheme;