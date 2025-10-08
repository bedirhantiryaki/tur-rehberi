import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { SmartTour } from '@/types/tour';
import { Image } from 'expo-image';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

interface SmartTourCardProps {
  tour: SmartTour;
  onPress?: () => void;
}

export function SmartTourCard({ tour, onPress }: SmartTourCardProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image
        source={{ uri: tour.image }}
        style={styles.image}
        contentFit="cover"
      />
      {/* Gradient overlay yerine basit overlay kullanıyoruz */}
      <View style={styles.overlay}>
        <View style={styles.content}>
          <Text style={styles.subtitle}>{tour.subtitle}</Text>
          <Text style={styles.title}>{tour.title}</Text>
          <Text style={styles.tourCount}>{tour.tourCount} tur</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 320,
    height: 180,
    borderRadius: 16,
    overflow: 'hidden',
    marginRight: 12,
    // gölge
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '70%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  content: {
    padding: 16,
  },
  subtitle: {
    color: '#FFF',
    fontSize: 12,
    fontFamily: 'Montserrat_600SemiBold',
    opacity: 0.9,
    marginBottom: 4,
  },
  title: {
    color: '#FFF',
    fontSize: 18,
    fontFamily: 'Montserrat_700Bold',
    marginBottom: 6,
  },
  tourCount: {
    color: '#FFF',
    fontSize: 12,
    fontFamily: 'Montserrat_400Regular',
    opacity: 0.8,
  },
});

