import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { popularTours } from '@/data/mockData';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React from 'react';
import {
    Dimensions,
    Pressable,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native';

const { height } = Dimensions.get('window');

export default function TourDetailsScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  // Gerçek uygulamada route params'dan gelecek
  const tour = popularTours[0];

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar barStyle="light-content" />
      
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero Image */}
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: tour.image }}
            style={styles.heroImage}
            contentFit="cover"
          />
          
          {/* Üst butonlar */}
          <View style={styles.topButtons}>
            <Pressable
              style={styles.backButton}
              onPress={() => router.back()}
            >
              <IconSymbol name="chevron.left" size={24} color="#FFF" />
            </Pressable>
            <Pressable style={styles.favoriteButton}>
              <IconSymbol name="heart" size={24} color="#FFF" />
            </Pressable>
          </View>

          {/* Badge */}
          {tour.isFeatured && (
            <View style={[styles.badge, { backgroundColor: colors.secondary }]}>
              <IconSymbol name="star.fill" size={14} color="#FFF" />
              <Text style={styles.badgeText}>Öne Çıkan</Text>
            </View>
          )}
        </View>

        {/* İçerik */}
        <View style={[styles.content, { backgroundColor: colors.background }]}>
          {/* Başlık ve Kategori */}
          <View style={styles.header}>
            <Text style={[styles.category, { color: colors.secondary }]}>
              {tour.category}
            </Text>
            <Text style={[styles.title, { color: colors.text }]}>
              {tour.title}
            </Text>
          </View>

          {/* Rating ve Süre */}
          <View style={styles.metaInfo}>
            <View style={styles.ratingContainer}>
              <IconSymbol name="star.fill" size={18} color="#FFB800" />
              <Text style={[styles.rating, { color: colors.text }]}>
                {tour.rating}
              </Text>
              <Text style={[styles.reviews, { color: colors.textSecondary }]}>
                ({tour.reviewCount} değerlendirme)
              </Text>
            </View>
            <View style={styles.durationContainer}>
              <IconSymbol name="clock" size={16} color={colors.textSecondary} />
              <Text style={[styles.duration, { color: colors.textSecondary }]}>
                {tour.duration}
              </Text>
            </View>
          </View>

          {/* Konum */}
          <View style={styles.locationContainer}>
            <IconSymbol name="location.fill" size={16} color={colors.primary} />
            <Text style={[styles.location, { color: colors.text }]}>
              {tour.location.address}
            </Text>
            {tour.distance && (
              <Text style={[styles.distance, { color: colors.textSecondary }]}>
                • {tour.distance} km
              </Text>
            )}
          </View>

          {/* Açıklama */}
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>
              Açıklama
            </Text>
            <Text style={[styles.description, { color: colors.textSecondary }]}>
              {tour.description}
            </Text>
          </View>

          {/* Özellikler */}
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>
              Tur Özellikleri
            </Text>
            <View style={styles.tagsContainer}>
              {tour.tags.map((tag, index) => (
                <View
                  key={index}
                  style={[
                    styles.tag,
                    {
                      backgroundColor: colors.backgroundSecondary,
                      borderColor: colors.border,
                    },
                  ]}
                >
                  <IconSymbol name="checkmark.circle.fill" size={14} color={colors.primary} />
                  <Text style={[styles.tagText, { color: colors.text }]}>
                    {tag}
                  </Text>
                </View>
              ))}
            </View>
          </View>

          {/* Neler Dahil */}
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>
              Neler Dahil?
            </Text>
            {['Profesyonel Rehber', 'Ulaşım', 'Giriş Ücretleri', 'Sigorta'].map(
              (item, index) => (
                <View key={index} style={styles.includeItem}>
                  <IconSymbol name="checkmark.circle" size={20} color={colors.success} />
                  <Text style={[styles.includeText, { color: colors.text }]}>
                    {item}
                  </Text>
                </View>
              )
            )}
          </View>

          {/* Buluşma Noktası */}
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>
              Buluşma Noktası
            </Text>
            <View
              style={[
                styles.mapPreview,
                { backgroundColor: colors.backgroundSecondary },
              ]}
            >
              <IconSymbol name="map" size={32} color={colors.icon} />
              <Text style={[styles.mapText, { color: colors.textSecondary }]}>
                Haritada Göster
              </Text>
            </View>
          </View>

          <View style={{ height: 100 }} />
        </View>
      </ScrollView>

      {/* Alt rezervasyon bar */}
      <View
        style={[
          styles.bottomBar,
          {
            backgroundColor: colors.card,
            borderTopColor: colors.border,
          },
        ]}
      >
        <View style={styles.priceContainer}>
          <Text style={[styles.priceLabel, { color: colors.textSecondary }]}>
            Fiyat
          </Text>
          <View style={styles.priceRow}>
            <Text style={[styles.price, { color: colors.price }]}>
              ₺{tour.price}
            </Text>
            <Text style={[styles.perPerson, { color: colors.textSecondary }]}>
              /kişi
            </Text>
          </View>
        </View>
        <Pressable
          style={[styles.bookButton, { backgroundColor: colors.primary }]}
        >
          <Text style={styles.bookButtonText}>Rezervasyon Yap</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  imageContainer: {
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: height * 0.4,
  },
  topButtons: {
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  favoriteButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badge: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    gap: 4,
  },
  badgeText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '600',
  },
  content: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: -20,
    paddingTop: 24,
    paddingHorizontal: 16,
  },
  header: {
    marginBottom: 12,
  },
  category: {
    fontSize: 14,
    fontWeight: '600',
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 32,
  },
  metaInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    marginBottom: 16,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  rating: {
    fontSize: 16,
    fontWeight: '600',
  },
  reviews: {
    fontSize: 14,
  },
  durationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  duration: {
    fontSize: 14,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 24,
  },
  location: {
    fontSize: 14,
    fontWeight: '500',
  },
  distance: {
    fontSize: 14,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
  },
  description: {
    fontSize: 15,
    lineHeight: 24,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    gap: 6,
  },
  tagText: {
    fontSize: 14,
    fontWeight: '500',
  },
  includeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 12,
  },
  includeText: {
    fontSize: 15,
  },
  mapPreview: {
    height: 150,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapText: {
    fontSize: 14,
    marginTop: 8,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    paddingBottom: 32,
    borderTopWidth: 1,
    // gölge
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 10,
  },
  priceContainer: {
    gap: 4,
  },
  priceLabel: {
    fontSize: 12,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  price: {
    fontSize: 24,
    fontWeight: '700',
  },
  perPerson: {
    fontSize: 12,
    marginLeft: 4,
  },
  bookButton: {
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 12,
  },
  bookButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '700',
  },
});

