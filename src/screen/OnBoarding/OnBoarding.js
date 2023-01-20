import React from "react";
import { Animated, Image, SafeAreaView,StyleSheet,Text, TouchableOpacity, View } from "react-native";
import { images,theme } from "../../constants";

//theme
const {COLORS,FONTS,SIZES}=theme;
const {onboarding1,onboarding2,onboarding3}=images
//Dummy Data
const onBoardings=[
    {
        title: "Let's Travelling",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
        img: onboarding1
    },
    {
        title: "Navigation",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
        img: onboarding2
    },
    {
        title: "Destination",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
        img: onboarding3
    }
]


function OnBoarding(){
    const [complited,setComplited]=React.useState(false)
    const scrollX=new Animated.Value(0);

    React.useEffect(()=>{
        scrollX.addListener(({value})=>{
            if(Math.floor(value/SIZES.width)===onBoardings.length-1){
                setComplited(true)
            }
        })
    },[])

    // Render
    const renderContent =()=>{
        return(        
        <Animated.ScrollView
        horizontal  pagingEnabled scrollEnabled snapToAlignment='center' 
        showsHorizontalScrollIndicator={false}
        decelerationRate={0}
        scrollEventThrottle={16}
        onScroll={Animated.event([
            {nativeEvent:{contentOffset:{x:scrollX}}},
        ],{useNativeDriver:false})}
        >

            {onBoardings.map((item,index)=>(
                <View key={index} style={{width:SIZES.width}}>

                    <View style={styles.image_container}>
                        <Image source={item.img}  style={styles.image}/>
                    </View>
                    
                    <View style={styles.inner_container}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.description}>{item.description}</Text>
                    </View>
                <TouchableOpacity 
                style={styles.button}
                onPress={()=>console.log('button on pressed')}
                >
                    <Text style={styles.buttonText}>{complited ? "Let's go" : 'Skip'}</Text>
                </TouchableOpacity>
                </View>
            ))}

        </Animated.ScrollView>
    )}

    const renderDots=()=>{
        const dotPosition=Animated.divide(scrollX,SIZES.width)
        return(
            <View style={styles.dotContainer}>
                {onBoardings.map((item,index)=>{
                    const opacity=dotPosition.interpolate({
                        inputRange:[index-1,index,index+1],
                        outputRange:[0.3,1,0.3],
                        extrapolate:'clamp'
                    })

                    const dotSize=dotPosition.interpolate({
                        inputRange:[index-1,index,index+1],
                        outputRange:[SIZES.base,17,SIZES.base],
                        extrapolate:'clamp'
                    })

                   return( 
                    <Animated.View 
                    style={[styles.dot,{width:dotSize,height:dotSize}]} 
                    key={`dot-${index}`}
                    opacity={opacity}
                    >

                    </Animated.View>
                    )
                })}
            </View>
        )
    }
    return(
        <SafeAreaView style={styles.container}>
            <View>
                {renderContent()}
            </View>
            <View style={styles.dotsRootContainer}>
                {renderDots()}
            </View>
        </SafeAreaView>
    )
}

export default OnBoarding;

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:COLORS.white
    },
    image_container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    image:{
        width: "100%",
        height:"100%",
        resizeMode:'cover'
    },
    inner_container:{
        position:'absolute',
        bottom:'7%',
        left:40,
        right:40
    },
    title:{
        ...FONTS.h1,
        color:COLORS.gray,
        textAlign:'center'
    },
    description:{
        ...FONTS.body3,
        marginTop:SIZES.base,
        color:COLORS.gray,
        textAlign:'center'
    },
    button:{
        backgroundColor:COLORS.blue,
        position:'absolute',
        bottom:0,
        right:0,
        width:150,
        height:60,
        paddingLeft:20,
        justifyContent:'center',
        borderTopLeftRadius:30,
        borderBottomLeftRadius:30,
        
    },
    buttonText:{
        ...FONTS.h2,
        color:COLORS.white,
    },
    dotsRootContainer:{
      position:'absolute',  
      bottom:SIZES.heigth >700 ? '30%' :'27%',
      alignItems:'center',
      justifyContent:'center'

    },
    dotContainer:{
      flexDirection:'row',
      height:SIZES.padding,
    },
    dot:{
        borderRadius:SIZES.radius,
        backgroundColor:COLORS.blue,
        marginHorizontal:SIZES.radius/2
    },
})