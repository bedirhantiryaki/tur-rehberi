import { CategoryChip } from '@/components/tour/CategoryChip';
import { DestinationCard } from '@/components/tour/DestinationCard';
import { SearchBar } from '@/components/tour/SearchBar';
import { SmartTourCard } from '@/components/tour/SmartTourCard';
import { TourCard } from '@/components/tour/TourCard';
import { Colors } from '@/constants/theme';
import {
    categories,
    nearbyDestinations,
    popularTours,
    smartTours,
} from '@/data/mockData';
import { useColorScheme } from '@/hooks/use-color-scheme';
import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('1'); // "Tümü" başlangıçta seçili

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]} edges={['top', 'left', 'right']}>
      <StatusBar barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'} />
      
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={[styles.greeting, { color: colors.textSecondary }]}>
            Merhaba,
          </Text>
          <Text style={[styles.title, { color: colors.text }]}>
            Nereyi keşfedelim? 🗺️
          </Text>
        </View>

        {/* Search Bar */}
        <View style={styles.searchSection}>
          <SearchBar
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder="Tur, şehir veya aktivite ara..."
            onFilterPress={() => {}}
          />
        </View>

        {/* Kategoriler */}
        <View style={styles.section}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoriesContainer}
          >
            {categories.map((category) => (
              <CategoryChip
                key={category.id}
                name={category.name}
                icon={category.icon}
                isSelected={selectedCategory === category.id}
                onPress={() => setSelectedCategory(category.id)}
              />
            ))}
          </ScrollView>
        </View>

        {/* Akıllı Turlar */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>
              🎯 Akıllı Turlar
            </Text>
            <Text style={[styles.seeAll, { color: colors.primary }]}>
              Tümünü Gör
            </Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalScroll}
          >
            {smartTours.map((tour) => (
              <SmartTourCard
                key={tour.id}
                tour={tour}
                onPress={() => {}}
              />
            ))}
          </ScrollView>
        </View>

        {/* Popüler Turlar */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>
              🔥 Popüler Turlar
            </Text>
            <Text style={[styles.seeAll, { color: colors.primary }]}>
              Tümünü Gör
            </Text>
          </View>
          {/* İlk 3 popüler turu göster */}
          {popularTours.slice(0, 3).map((tour) => (
            <TourCard
              key={tour.id}
              tour={tour}
              onPress={() => {}}
            />
          ))}
        </View>

        {/* Yakındaki Destinasyonlar */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>
              📍 Yakındaki Destinasyonlar
            </Text>
            <Text style={[styles.seeAll, { color: colors.primary }]}>
              Tümünü Gör
            </Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalScroll}
          >
            {nearbyDestinations.map((destination) => (
              <DestinationCard
                key={destination.id}
                destination={destination}
                onPress={() => {}}
              />
            ))}
          </ScrollView>
        </View>

        {/* Alt boşluk - tab bar için */}
        <View style={{ height: 20 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  greeting: {
    fontSize: 14,
    marginBottom: 4,
    fontFamily: 'Montserrat_500Medium',
  },
  title: {
    fontSize: 26,
    fontFamily: 'Montserrat_700Bold',
  },
  searchSection: {
    marginVertical: 16,
  },
  section: {
    marginTop: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Montserrat_700Bold',
  },
  seeAll: {
    fontSize: 14,
    fontFamily: 'Montserrat_600SemiBold',
  },
  categoriesContainer: {
    paddingHorizontal: 16,
  },
  horizontalScroll: {
    paddingHorizontal: 16,
  },
});
