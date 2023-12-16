import React, { useEffect, useState } from "react";
import { View,StatusBar,ScrollView,TouchableOpacity,Text,Image} from "react-native";
import { COLOURS, Items } from "../dataBase/DataBase";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Home=({navigation})=>{
    const [products,setProducts] = useState([]);
    const [accesory,setAccesory] = useState([]);

    useEffect(() =>{
        const unsubscribe = navigation.addListener("focus",()=>{
            getDataFromDB()
        });
        return unsubscribe;
    },[navigation])

    const getDataFromDB=()=>{
        let productList=[]
        let accesoryList=[]
        for (let index = 0; index < Items.length; index++) {
            if(Items[index].category == "product"){
                productList.push(Items[index]);
            }else if(Items[index].category == "accessory"){
                accesoryList.push(Items[index]);
            }            
        }
        setProducts(productList);
        setAccesory(accesoryList);
    };

    const ProductCart = ({data}) => {
        return (
            <TouchableOpacity
            onPress={()=>navigation.navigate("ProductoInfo", {productID:data.id})}
            style={{
                width:"48%",
                marginVertical:14,                
            }}>
                <View style={{
                    width:"100%",
                    height:200,
                    borderRadius:10,
                    backgroundColor:COLOURS.backgroundLight,
                    position:"relative",
                    justifyContent:"center",
                    alignItems:"center", 
                    marginBottom:8,
                }}>
                    {
                        data.isOff ? (
                            <View style={{
                                position:"absolute",
                                width:"20%",
                                height:"24%",
                                backgroundColor:COLOURS.green,
                                top:0,
                                left:0,
                                borderTopLeftRadius:10,
                                borderBottomRightRadius:10,
                                alignItems:"center",
                                justifyContent:"center",
                            }}>
                                <Text style={{
                                    fontSize:12,
                                    color:COLOURS.white,
                                    fontWeight:"bold",
                                    letterSpacing:1,
                                }}>{data.ofPorcentage}%</Text>
                            </View>
                        ):null}
                        <Image source={data.productImage} style={{
                            width:"80%",
                            height:"80%",
                            resizeMode:"contain",

                        }}/>
                </View>
                <Text style={{
                    fontSize:12,
                    color:COLOURS.black,
                    fontWeight:"600",
                    marginBottom: 2,

                }}>{data.productName}</Text>
                {
                data.category == "accessory"?( data.isAviable ? (
                    <View style={{
                        flexDirection:"row",
                        alignItems:"center",

                    }}>
                        <FontAwesome name="circle" style={{
                            fontSize:12,
                            marginRight:6,
                            color:COLOURS.green,

                        }}/>
                        <Text style={{
                            fontSize:12,
                            color:COLOURS.green,
                        }}>Avalable</Text>
                    </View>
                ):(
                    <View style={{
                        flexDirection:"row",
                        alignItems:"center",

                    }}>
                        <FontAwesome name="circle" style={{
                            fontSize:12,
                            marginRight:6,
                            color:COLOURS.red,

                        }}/>
                        <Text style={{
                            fontSize:12,
                            color:COLOURS.red,
                        }}>Unavailable</Text>
                    </View>
                )
                ):null}
                <Text>
                    &#8377;{data.productPrice}
                </Text>
            </TouchableOpacity>
        );
    };

    return(
        <View style={{
            width: "100%",
            height: "100%",
            backgroundColor:COLOURS.white,
        }}>
            <StatusBar backgroundColor={COLOURS.white} barStyle="dark-content"/>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{
                    width:"100%",
                    flexDirection:"row",
                    justifyContent:"space-between",
                    padding:16
                }}>
                    <TouchableOpacity>
                        <Entypo name="shopping-bag" 
                        style={{
                            fontSize:18,
                            color:COLOURS.backgroundMedium,
                            padding:12,
                            borderRadius:10,
                            backgroundColor:COLOURS.backgroundLight,
                            }}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> navigation.navigate("MyCart")}>
                        <MaterialCommunityIcons name="cart" 
                        style={{
                            fontSize:18,
                            color:COLOURS.backgroundMedium,
                            padding:12,
                            borderRadius:10,
                            borderWidth:1,
                            backgroundColor:COLOURS.backgroundLight,
                            borderColor:COLOURS.backgroundLight
                            }}/>
                    </TouchableOpacity>
                </View>
                <View style={{
                    marginBottom:10,
                    padding:16,

                }}>
                    <Text
                    style={{
                        fontSize:14,
                        color:COLOURS.black,
                        fontWeight:"500",
                        letterSpacing:1,
                        marginBottom:10,
                    }}>
                        YU-GI-OH SHOP &amp; Service
                        </Text>
                </View>
                <View style={{
                    padding:16,                    
                    }}>                    
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    justifyContent:"space-between",
                    }}>
                        <View style={{
                            flexDirection:"row",
                            alignItems: "center",

                        }}>
                            <Text style={{
                                fontSize:18,
                                color:COLOURS.black,
                                fontWeight: "500",
                                letterSpacing:1,
                            }}>Productos</Text>
                            <Text style={{
                                fontSize:18,
                                color:COLOURS.black,
                                fontWeight: "400",
                                opacity: 0.5,
                                marginLeft:10,
                            }}
                            >41</Text>
                        </View>
                        <Text style={{
                            fontSize:14,
                            color: COLOURS.blue,
                            fontWeight:"400",

                        }}>SeeAll
                        </Text>
                </View>
                <View style={{
                    flexDirection:"row",
                    flexWrap: "wrap",
                    justifyContent: "space-around",


                }}>
                    {products.map(data =>{
                        return <ProductCart data={data} key={data.id}/>
                    })}
                </View>
                </View>

                <View style={{
                    padding:16,                    
                    }}>                    
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    justifyContent:"space-between",
                    }}>
                        <View style={{
                            flexDirection:"row",
                            alignItems: "center",

                        }}>
                            <Text style={{
                                fontSize:18,
                                color:COLOURS.black,
                                fontWeight: "500",
                                letterSpacing:1,
                            }}>Accesories</Text>
                            <Text style={{
                                fontSize:18,
                                color:COLOURS.black,
                                fontWeight: "400",
                                opacity: 0.5,
                                marginLeft:10,
                            }}
                            >78</Text>
                        </View>
                        <Text style={{
                            fontSize:14,
                            color: COLOURS.blue,
                            fontWeight:"400",

                        }}>SeeAll
                        </Text>
                </View>
                <View style={{
                    flexDirection:"row",
                    flexWrap: "wrap",
                    justifyContent: "space-around",


                }}>
                    {accesory.map(data =>{
                        return <ProductCart data={data} key={data.id}/>
                    })}
                </View>
                </View>


            </ScrollView>
        </View>
    );
};

export default Home