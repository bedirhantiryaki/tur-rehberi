import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Destination } from '@/types/tour';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

interface DestinationCardProps {
  destination: Destination;
  onPress?: () => void;
}

export function DestinationCard({ destination, onPress }: DestinationCardProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  return (
    <Pressable
      style={[styles.container, { backgroundColor: colors.card, borderColor: colors.border }]}
      onPress={onPress}
    >
      <Image
        source={{ uri: destination.image }}
        style={styles.image}
        contentFit="cover"
      />
      <View style={styles.content}>
        <Text style={[styles.name, { color: colors.text }]} numberOfLines={1}>
          {destination.name}
        </Text>
         <View style={styles.infoRow}>
           <View style={styles.tourInfo}>
             <Ionicons name="map-outline" size={12} color={colors.textSecondary} />
             <Text style={[styles.tourCount, { color: colors.textSecondary }]}>
               {destination.tourCount} tur
             </Text>
           </View>
           {destination.distance && (
             <View style={styles.distanceInfo}>
               <Ionicons name="location-outline" size={12} color={colors.textSecondary} />
               <Text style={[styles.distance, { color: colors.textSecondary }]}>
                 {destination.distance} km
               </Text>
             </View>
           )}
         </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 160,
    borderRadius: 12,
    marginRight: 12,
    borderWidth: 1,
    overflow: 'hidden',
    // gölge
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 120,
  },
  content: {
    padding: 10,
  },
  name: {
    fontSize: 14,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 6,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tourInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  tourCount: {
    fontSize: 11,
    fontFamily: 'Montserrat_400Regular',
  },
  distanceInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  distance: {
    fontSize: 10,
    fontFamily: 'Montserrat_400Regular',
  },
});

