import { Colors } from '@/constants/theme';
import { popularTours } from '@/data/mockData';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons } from '@expo/vector-icons';
import * as Location from 'expo-location';
import React, { useEffect, useRef, useState } from 'react';
import {
    Pressable,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

export default function MapScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const mapRef = useRef<MapView>(null);
  
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      // Konum izni iste
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Konum iznine ihtiyacımız var');
        return;
      }

      // Mevcut konumu al
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  const goToUserLocation = async () => {
    if (location) {
      mapRef.current?.animateToRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      });
    }
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]} edges={['bottom', 'left', 'right']}>
      <StatusBar barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'} />
      
       {/* Header */}
       <View style={[styles.header, { backgroundColor: colors.card }]}>
         <Text style={[styles.title, { color: colors.text }]}>
           Harita
         </Text>
         <Pressable style={styles.filterButton}>
           <Ionicons name="options-outline" size={20} color={colors.icon} />
         </Pressable>
       </View>

       {/* Harita */}
       <View style={styles.mapContainer}>
         <MapView
           ref={mapRef}
           provider={PROVIDER_GOOGLE}
           style={styles.map}
           initialRegion={{
             latitude: 41.0082,
             longitude: 28.9784,
             latitudeDelta: 0.5,
             longitudeDelta: 0.5,
           }}
           showsUserLocation
           showsMyLocationButton={false}
         >
           {/* Turların konumlarını işaretle */}
           {popularTours.map((tour) => (
             <Marker
               key={tour.id}
               coordinate={{
                 latitude: tour.location.latitude,
                 longitude: tour.location.longitude,
               }}
               title={tour.title}
               description={`₺${tour.price} - ${tour.duration}`}
             >
               <View style={[styles.markerContainer, { backgroundColor: colors.primary }]}>
                 <Ionicons name="location" size={24} color="#FFF" />
               </View>
             </Marker>
           ))}
         </MapView>
       </View>

       {/* Konum butonları */}
       <View style={styles.controls}>
         <Pressable
           style={[styles.controlButton, { backgroundColor: colors.card }]}
           onPress={goToUserLocation}
         >
           <Ionicons name="locate" size={24} color={colors.primary} />
         </Pressable>
         <Pressable
           style={[styles.controlButton, { backgroundColor: colors.card }]}
           onPress={() => {
             mapRef.current?.animateCamera({ zoom: 12 });
           }}
         >
           <Ionicons name="add" size={24} color={colors.text} />
         </Pressable>
         <Pressable
           style={[styles.controlButton, { backgroundColor: colors.card }]}
           onPress={() => {
             mapRef.current?.animateCamera({ zoom: 8 });
           }}
         >
           <Ionicons name="remove" size={24} color={colors.text} />
         </Pressable>
       </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    // gölge
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Montserrat_700Bold',
  },
  filterButton: {
    padding: 8,
  },
  mapContainer: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  markerContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  controls: {
    position: 'absolute',
    right: 16,
    bottom: 100,
    gap: 12,
  },
  controlButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    // gölge
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
});

