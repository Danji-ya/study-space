import { useTheme } from '@react-navigation/native';
import React, {useState, useEffect} from 'react';

import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
    Animated,
    TouchableOpacityBase
} from 'react-native';

import {icons, COLORS, SIZES, FONTS} from "../constants";
import OrderDelivery from './OrderDelivery';


const Restaurant = ({route, navigation}) => {

    // typeof null 은 object
  
    const [restaurant, setRestaurant] = useState(null);
    const [currentLocation, setCurrentLocation] = useState(null);
    const [orderItems, setOrderItems] = useState([]);
    const scrollX = new Animated.Value(0);
    

    // []이 없어 리렌더랑 될때 마다
    useEffect( () => {
        //route객체 안에는 key값, name, params가 들어있다.
        let {item, currentLocation} = route.params;

        setRestaurant(item);
        setCurrentLocation(currentLocation);
    })

    const editOrder = (action, menuId, price) => {
        let orderList = orderItems.slice();
        let item = orderList.filter( i => i.menuId === menuId);

        if(action === '+'){

            if(item.length > 0) {
                let newQty = item[0].qty + 1;
                item[0].qty = newQty;
                item[0].total =item[0].qty * price;
            } else {
                const newItem = {
                    menuId: menuId,
                    qty: 1,
                    price: price,
                    total: price
                }
                orderList.push(newItem);
            }

            setOrderItems(orderList);

        } 
        // - button
        else {
            if(item.length > 0) {
                if(item[0]?.qty > 0) {
                    let newQty = item[0].qty -1;
                    item[0].qty =newQty;
                    item[0].total = newQty * price;
                }
            }

            setOrderItems(orderList);

        }
    }


    const getOrderQty = (menuId) => {
        let orderItem = orderItems.filter( i => i.menuId === menuId);

        if(orderItem.length > 0){
            return orderItem[0].qty
        } else {
            return 0
        }
    }


    const getBasketItemCount = () => {
        let itemCount = orderItems.reduce((acc, cur) => acc + (cur.qty || 0 ), 0);

        return itemCount
    }

    const getBasketItemTotalPrice = () => {
        let totalPrice = orderItems.reduce((acc, cur) => acc + (cur.total || 0 ), 0);
        
        return totalPrice.toFixed(2)
    }


    // header part
    const renderHeader = () => {
        return (
            <View style= {{ flexDirection: 'row', justifyContent: 'space-between', height: 50}}>

                {/* header left */}
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingLeft: SIZES.padding * 2,
                        justifyContent: 'center',
                    }}
                    onPress={() => navigation.goBack()}                
                >
                    <Image
                        source={icons.back}
                        resizeMode='contain'
                        style= {{
                            width: 30,
                            height: 30
                        }}
                    />

                </TouchableOpacity>

                <View
                    style={{
                        flex:1,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <View
                        style={{
                            height: 50,
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingHorizontal: SIZES.padding * 3,
                            borderRadius: SIZES.radius,
                            backgroundColor: COLORS.lightGray3
                        }}
                    >
                        <Text style={{...FONTS.h3}}>{restaurant?.name}</Text>

                    </View>
                </View>

                {/*  header right */}
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingRight: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                    onPress={() => navigation.goBack()}                
                >
                    <Image
                        source={icons.list}
                        resizeMode='contain'
                        style= {{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>
            </View>
            
        )
    }

    const renderFoodInfo = () => {
        return (
            <Animated.ScrollView
                horizontal
                pagingEnabled
                scrollEventThrottle={16}
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event([
                    {nativeEvent: {contentOffset: {x: scrollX}}}] , {useNativeDriver: false}
                )}
            >

                {
                    restaurant?.menu.map((item, index)=> (
                        
                        <View
                            key={`menu-${index}`}
                            style={{alignItems: 'center'}}
                        >

                            {/* image & button */}
                            <View style={{ height: SIZES.height * 0.3}}>
                                <Image
                                    source={item.photo}
                                    resizeMode= 'cover'
                                    style={{
                                        width: SIZES.width,
                                        height: "100%"
                                    }}
                                />

                                <View
                                    style={{
                                        position: 'absolute',
                                        bottom: -12,
                                        width: SIZES.width,
                                        height: 30,
                                        justifyContent: 'center',             
                                        flexDirection: 'row',
                                    }}
                                >
                                    <TouchableOpacity
                                        style={{
                                            width: 35,
                                            backgroundColor: COLORS.white,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderTopLeftRadius: 25,
                                            borderBottomLeftRadius: 25
                                        }}
                                        onPress={() => editOrder("-", item.menuId, item.price)}
                                    >
                                        <Text style={{...FONTS.body1}}>-</Text>
                                    </TouchableOpacity>
                                    
                                    
                                    <View
                                        style={{
                                            width: 35,
                                            backgroundColor: COLORS.white,
                                            alignItems: 'center',
                                            justifyContent: 'center'

                                        }}
                                    >
                                        <Text style={{...FONTS.h4}}>{getOrderQty(item.menuId)}</Text>
                                    </View>

                                    <TouchableOpacity
                                        style={{
                                            width: 35,
                                            backgroundColor: COLORS.white,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderTopRightRadius: 25,
                                            borderBottomRightRadius: 25
                                        }}
                                        onPress={() => editOrder("+", item.menuId, item.price)}
                                    >
                                        <Text style={{...FONTS.body1}}>+</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>


                            <View
                                style={{
                                    width: SIZES.width,
                                    alignItems: 'center',
                                    marginTop: 10,
                                    paddingHorizontal: SIZES.padding * 2,
                                }}
                            >
                                <Text style={{ marginVertical: 10, textAlign: 'center', ...FONTS.h3}}>
                                    {`${item.name} - ${item.price.toFixed(2)}`}
                                </Text>
                                <Text style={{...FONTS.body4}}>{item.description}</Text>

                            </View>

                            <View
                                style={{
                                    flexDirection: 'row',
                                    marginTop: 10
                                }}
                            >
                                <Image
                                    source={icons.fire}
                                    style={{
                                        width: 20,
                                        height: 20,
                                        marginRight: 10

                                    }}
                                />

                                <Text style={{
                                    ...FONTS.body4,
                                    color: COLORS.darkgray
                                }}>
                                    {`${item.calories.toFixed(2)} cal`}
                                </Text>
                            </View>
                        </View>
                    ))
                }
            </Animated.ScrollView>
        )
    }

    const renderDots = () => {


        const dotPosition =Animated.divide(scrollX, SIZES.width);
 
        return (
            <View style={{height: 30}}>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: SIZES.padding
                    }}
                >
                    {/* interpolate를 이용하여 animated되는 사이에 추가적인 효과가 가능 */}
                    {restaurant?.menu.map((item, index) => {
                        
                        const opacity = dotPosition.interpolate({
                            inputRange: [index - 1, index, index +1],
                            outputRange: [0.3 , 1, 0.3],
                            extrapolate: 'clamp' //clamp기능은 inputRange범위 바깥을 벗어나도 최대값에 머물게한다

                        })

                        const dotSize =dotPosition.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: [SIZES.base * 0.8, 10, SIZES.base * 0.8],
                            extrapolate: 'clamp'
                        })

                        const dotColor =dotPosition.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: [COLORS.darkgray, COLORS.primary, COLORS.darkgray],
                            extrapolate: 'clamp'
                        })

                        return (
                            <Animated.View
                                key={`dot-${index}`}
                                opacity={opacity}
                                style={{
                                    borderRadius: SIZES.radius,
                                    marginHorizontal: 6,
                                    width: dotSize,
                                    height: dotSize,
                                    backgroundColor: dotColor
                                }}
                            />
                        )
                    })}
                </View>
            </View>
        )

    }

    const renderOrder = () => {
        return (
            <View>
                {renderDots()}
                <View
                    style={{
                        backgroundColor: COLORS.white,
                        borderTopLeftRadius: 40,
                        borderTopRightRadius: 40,
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingVertical: SIZES.padding * 1.5,
                            paddingHorizontal: SIZES.padding * 3,
                            borderBottomColor: COLORS.lightGray2,     
                        }}
                    >
                        <Text style={{...FONTS.h4}}>{`${getBasketItemCount()} items in Cart`}</Text>
                        <Text style={{...FONTS.h4}}>{getBasketItemTotalPrice()}</Text>
                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingVertical: SIZES.padding * 1.5,
                            paddingHorizontal: SIZES.padding * 3
                        }}
                    >
                        <View style={{flexDirection: 'row'}}>
                            <Image
                                source={icons.pin}
                                resizeMode="contain"
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: COLORS.darkgray
                                }} 
                            />
                            <Text style={{ marginLeft: SIZES.padding, ...FONTS.h5}}>Location</Text>
                        </View>

                        <View style={{ flexDirection: 'row'}}>
                            <Image
                                source={icons.master_card}
                                resizeMode="contain"
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: COLORS.darkgray
                                }} 
                            />
                            <Text style={{ marginLeft: SIZES.padding, ...FONTS.h5}}>7777</Text>
                        </View>
                    </View>

                    <View
                        style={{
                            padding: SIZES.padding * 2,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                width: SIZES.width * 0.9,
                                padding: SIZES.padding,
                                backgroundColor: COLORS.primary,
                                alignItems: 'center',
                                borderRadius: SIZES.radius
                            }}
                        >
                            <Text style={{ color: COLORS.white, ...FONTS.h3}}>Order</Text>


                        </TouchableOpacity>


                    </View>
                </View>
            </View>

        )
    }

























    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderFoodInfo()}
            {renderOrder()}
            
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray2
    }

})

export default Restaurant;