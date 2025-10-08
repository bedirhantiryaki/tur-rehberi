import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Tour } from '@/types/tour';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import React from 'react';
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';

interface TourCardProps {
  tour: Tour;
  onPress?: () => void;
  variant?: 'default' | 'compact';
}

const { width } = Dimensions.get('window');
const CARD_WIDTH = width - 32;

export function TourCard({ tour, onPress, variant = 'default' }: TourCardProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  return (
    <Pressable
      style={[
        styles.container,
        { backgroundColor: colors.card, borderColor: colors.border },
        variant === 'compact' && styles.compactContainer,
      ]}
      onPress={onPress}
    >
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: tour.image }}
          style={variant === 'compact' ? styles.compactImage : styles.image}
          contentFit="cover"
        />
         {tour.isFeatured && (
           <View style={[styles.badge, { backgroundColor: colors.secondary }]}>
             <Ionicons name="star" size={12} color="#FFF" />
             <Text style={styles.badgeText}>Öne Çıkan</Text>
           </View>
         )}
         <Pressable style={styles.favoriteButton}>
           <Ionicons name="heart-outline" size={20} color="#FFF" />
         </Pressable>
      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={[styles.category, { color: colors.secondary }]}>
            {tour.category}
          </Text>
           {tour.distance && (
             <View style={styles.distanceContainer}>
               <Ionicons name="location-outline" size={12} color={colors.textSecondary} />
               <Text style={[styles.distance, { color: colors.textSecondary }]}>
                 {tour.distance} km
               </Text>
             </View>
           )}
        </View>

        <Text style={[styles.title, { color: colors.text }]} numberOfLines={2}>
          {tour.title}
        </Text>

         <View style={styles.details}>
           <View style={styles.ratingContainer}>
             <Ionicons name="star" size={14} color="#FFB800" />
             <Text style={[styles.rating, { color: colors.text }]}>
               {tour.rating}
             </Text>
             <Text style={[styles.reviews, { color: colors.textSecondary }]}>
               ({tour.reviewCount})
             </Text>
           </View>

           <View style={styles.durationContainer}>
             <Ionicons name="time-outline" size={14} color={colors.textSecondary} />
             <Text style={[styles.duration, { color: colors.textSecondary }]}>
               {tour.duration}
             </Text>
           </View>
         </View>

        <View style={styles.footer}>
          <View style={styles.tagsContainer}>
            {tour.tags.slice(0, 2).map((tag, index) => (
              <View
                key={index}
                style={[styles.tag, { backgroundColor: colors.backgroundSecondary }]}
              >
                <Text style={[styles.tagText, { color: colors.textSecondary }]}>
                  {tag}
                </Text>
              </View>
            ))}
          </View>
          <View style={styles.priceContainer}>
            <Text style={[styles.price, { color: colors.price }]}>
              ₺{tour.price}
            </Text>
            <Text style={[styles.perPerson, { color: colors.textSecondary }]}>
              /kişi
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: CARD_WIDTH,
    borderRadius: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    borderWidth: 1,
    overflow: 'hidden',
    // gölge efekti - iOS için
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    // Android için
    elevation: 3,
  },
  compactContainer: {
    width: 280,
    marginHorizontal: 8,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 200,
  },
  compactImage: {
    width: '100%',
    height: 160,
  },
  badge: {
    position: 'absolute',
    top: 12,
    left: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    gap: 4,
  },
  badgeText: {
    color: '#FFF',
    fontSize: 11,
    fontFamily: 'Montserrat_600SemiBold',
  },
  favoriteButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    padding: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  category: {
    fontSize: 12,
    fontFamily: 'Montserrat_600SemiBold',
    textTransform: 'uppercase',
  },
  distanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  distance: {
    fontSize: 11,
    fontFamily: 'Montserrat_400Regular',
  },
  title: {
    fontSize: 16,
    fontFamily: 'Montserrat_700Bold',
    marginBottom: 8,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  rating: {
    fontSize: 14,
    fontFamily: 'Montserrat_600SemiBold',
  },
  reviews: {
    fontSize: 12,
    fontFamily: 'Montserrat_400Regular',
  },
  durationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  duration: {
    fontSize: 12,
    fontFamily: 'Montserrat_400Regular',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  tagsContainer: {
    flexDirection: 'row',
    gap: 6,
    flex: 1,
  },
  tag: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  tagText: {
    fontSize: 10,
    fontFamily: 'Montserrat_500Medium',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  price: {
    fontSize: 18,
    fontFamily: 'Montserrat_700Bold',
  },
  perPerson: {
    fontSize: 11,
    fontFamily: 'Montserrat_400Regular',
    marginLeft: 2,
  },
});

