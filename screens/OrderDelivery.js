import React, {useState, useEffect, useRef} from 'react';

import {
    View,
    Text,
    Image,
    TouchableOpacity,
    TouchableOpacityBase
} from 'react-native';

import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {icons, COLORS, SIZES, FONTS, GOOGLE_API_KEY} from "../constants";




const OrderDelivery = ({route, navigation}) => {

    const mapView = useRef();

    const [restaurant, setRestaurant] = useState(null);
    const [streetName, setStreetName] = useState("");
    const [fromLocation, setFromLocation] = useState(null);
    const [toLocation, setToLocation] = useState(null);
    const [region, setRegion] = useState(null);
    const [duration, setDuration] = useState(0);
    const [isReady, setIsReady] =useState(false);
    const [angle, setAngle] = useState(0);


    useEffect(() => {
        let {restaurant, currentLocation} = route.params;

        let fromLoc = currentLocation.gps;
        let toLoc = restaurant.location;
        let street = currentLocation.streetName;
        

        let mapRegion = {
            latitude: (fromLoc.latitude + toLoc.latitude) / 2,
            longitude: (fromLoc.longitude + toLoc.longitude) / 2,
            latitudeDelta: Math.abs(fromLoc.latitude - toLoc.latitude) * 2,
            longitudeDelta: (fromLoc.longitude - toLoc.longitude) * 2,
        }

        setRestaurant(restaurant);
        setStreetName(street);
        setFromLocation(fromLoc);
        setToLocation(toLoc);
        setRegion(mapRegion);
    }, [])


    const calculateAngle = (coordinates) => {
        let startLat = coordinates[0]["latitude"];
        let startLng = coordinates[0]["longitude"];
        let endLat = coordinates[1]["latitude"];
        let endLng = coordinates[1]["longitude"];
        let dx = endLat - startLat;
        let dy = endLng - startLng;

        return Math.atan2(dy, dx) * 180 / Math.PI
    }

    const zoomIn = () => {

        let newRegion = {
            latitude: region.latitude,
            longitude: region.longitude,
            latitudeDelta: region.latitudeDelta / 2,
            longitudeDelta: region.longitudeDelta / 2
        }
        setRegion(newRegion);
        mapView.current.animateToRegion(newRegion, 200);
    }

    const zoomOut = () => {

        let newRegion = {
            latitude: region.latitude,
            longitude: region.longitude,
            latitudeDelta: region.latitudeDelta * 2,
            longitudeDelta: region.longitudeDelta * 2
        }
        setRegion(newRegion);
        mapView.current.animateToRegion(newRegion, 200);
    }



    const renderMap = () => {
        
        const destinationMarker = () => (
            <Marker
                coordinate={toLocation}
            >
                <View
                    style={{
                        height: 30,
                        width: 30,
                        borderRadius: SIZES.radius,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: COLORS.primary
                    }}
                >
                    <Image
                        source={icons.pin}
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: COLORS.white
                        }}
                    />

                </View>

            </Marker>
        )

        const carIcon = () => (
            
            <Marker
                coordinate={fromLocation}
                anchor={{x: 0.5, y: 0.5}} //좌표 위치에 배치 될 이미지의 지점 (기본값은 하단 중앙)
                flat={true}
                rotation={angle}
            >
                <Image
                    source={icons.car}
                    style={{
                        width: 30,
                        height: 30,
                    }}
                />
                

            </Marker>
        )

        return (
            <View style={{flex: 1}}>
                <MapView
                    ref = {mapView}
                    style={{flex: 1}}
                    provider={PROVIDER_GOOGLE}
                    initialRegion={region}
                >
                    <MapViewDirections
                        origin={fromLocation}
                        destination={toLocation}
                        apikey={GOOGLE_API_KEY}
                        strokeWidth={5}
                        strokeColor={COLORS.primary}
                        // optimizeWaypoints={true}
                        onReady={result=>{
                            setDuration(result.duration);

                            if(!isReady) {
                                //경로에 대해서 맵 위치 최적화

                                const EDGE_PADDING = {
                                    top: (SIZES.height / 4),
                                    right: (SIZES.width / 20),
                                    bottom: (SIZES.height / 4),
                                    left: (SIZES.width / 20),
                                }


                                mapView.current.fitToCoordinates(result.coordinates,{
                                    edgePadding: EDGE_PADDING
                                });
                                
                                //car icon 경로에 대한 angle 변화
                                if(result.coordinates.length >=2 ) {
                                    let angle =calculateAngle(result.coordinates);
                                    setAngle(angle);
                                }
                                
                                let {latitude, longitude} = result.coordinates[0]

                                let nextLoc = {
                                    latitude: latitude,
                                    longitude: longitude
                                }
                                
                                setFromLocation(nextLoc);
                                setIsReady(true);
                            }
                        }}
                    />
                    {toLocation ? destinationMarker() : ''}
                    {fromLocation ? carIcon() : ''}
                </MapView>
            </View>
        )
    };

    const renderDestinationHeader = () => {
        return (
            <View
                style={{
                    position: 'absolute',
                    top: 20,
                    left: 0,
                    right: 0,
                    height: 50,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        width: SIZES.width * 0.9,
                        paddingVertical: SIZES.padding,
                        paddingHorizontal: SIZES.padding * 2,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.white
                    }}
                >
                    <Image 
                        source={icons.red_pin}
                        style={{
                            width: 20,
                            height: 20,
                            marginRight: SIZES.padding
                        }}
                    />
                    <View
                        style={{ flex: 1}}
                    >
                        <Text style={{...FONTS.body4}}>{streetName}</Text>
                    </View>
                    <Text style={{...FONTS.body4}}>{Math.ceil(duration)} mins</Text>
                </View>


            </View>
        )
    }

    const renderDeliveryInfo = () => {
        return (
            <View
                style={{
                    position: 'absolute',
                    bottom: 20,
                    left: 0,
                    right: 0,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <View
                    style={{
                        width: SIZES.width * 0.9,
                        paddingVertical: SIZES.padding,
                        paddingHorizontal: SIZES.padding * 2,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.white
                    }}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center'}}>


                        {/* 해당 이미지에 resizeMode가 없었을 때 꺼지는 오류가 발생해서 추가하였음 */}
                        <Image 
                            source={restaurant?.courier.avatar}
                            resizeMode="contain"
                            style={{
                                width: 40,
                                height: 40,
                                borderRadius: 25
                            }}
                        />



                        <View style={{flex: 1, marginLeft: SIZES.padding}}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                <View>
                                    <Text style={{...FONTS.h5}}> {restaurant?.courier.name}</Text>
                                    <Text style={{...FONTS.body5, color: COLORS.darkgray}}>{restaurant?.name}</Text>

                                </View>

                                <View style={{flexDirection: 'row'}}>
                                    <Image 
                                        source={icons.star}
                                        style={{ width: 20, height: 20,tintColor: COLORS.primary}}
                                    />
                                    <Text style={{...FONTS.body4, marginLeft: SIZES.padding}}>{restaurant?.rating}</Text>
                                </View>

                            </View>
                        </View>
                    </View>

                    {/* call & cancel button */}
                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: SIZES.padding,
                            justifyContent: 'space-around'
                        }}
                    >

                        <TouchableOpacity
                            style={{
                                height: 40,
                                width: SIZES.width * 0.3,
                                backgroundColor: COLORS.primary,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 10,
                                
                            }}
                            onPress={ () => navigation.navigate("Home")}
                        >
                            <Text style={{...FONTS.h5, color: COLORS.white}}>Call</Text>

                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{
                                height: 40,
                                width: SIZES.width * 0.3,
                                backgroundColor: COLORS.secondary,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 10
                            }}
                            onPress={ () => navigation.goBack()}
                        >
                            <Text style={{...FONTS.h5, color: COLORS.white}}>Cancle</Text>

                        </TouchableOpacity>


                    </View>
                </View>
            </View>
        )
    }

    const renderZoomButtons = () => {

        return (
            <View
                style={{
                    position: 'absolute',
                    bottom: SIZES.height * 0.35,
                    right: 0,
                    width: 60,
                    height: 120,
                    alignItems: 'center',
                    justifyContent: 'space-around'

                }}
            >
                <TouchableOpacity
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: 25,
                        backgroundColor: COLORS.white,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onPress={()=>zoomIn()}
                >
                    <Text style={{...FONTS.body2}}>+</Text>


                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: 25,
                        backgroundColor: COLORS.white,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onPress={()=>zoomOut()}
                >
                    <Text style={{...FONTS.body2}}>-</Text>
                </TouchableOpacity>


            </View>
        )
    }


    return (
        <View style= {{flex: 1}}>
            
            {renderMap()}
            {renderDestinationHeader()}
            {renderDeliveryInfo()}
            {renderZoomButtons()}
        </View>
    )
};

export default OrderDelivery;