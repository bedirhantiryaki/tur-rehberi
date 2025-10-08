import { CategoryChip } from '@/components/tour/CategoryChip';
import { SearchBar } from '@/components/tour/SearchBar';
import { TourCard } from '@/components/tour/TourCard';
import { Colors } from '@/constants/theme';
import { categories, popularTours } from '@/data/mockData';
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

export default function SearchScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('1');

  // Basit arama filtresi - gerçek uygulamada daha gelişmiş olurdu
  const filteredTours = popularTours.filter((tour) => {
    const matchesSearch = tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tour.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === '1' || 
                           tour.category === categories.find(c => c.id === selectedCategory)?.name;
    return matchesSearch && matchesCategory;
  });

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]} edges={['top', 'left', 'right']}>
      <StatusBar barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'} />
      
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.text }]}>
          Arama
        </Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchSection}>
        <SearchBar
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Ne aramıştınız?"
          onFilterPress={() => {}}
        />
      </View>

      {/* Kategoriler */}
      <View style={styles.categoriesSection}>
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

      {/* Sonuçlar */}
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.resultsHeader}>
          <Text style={[styles.resultsText, { color: colors.textSecondary }]}>
            {filteredTours.length} sonuç bulundu
          </Text>
        </View>

        {filteredTours.length > 0 ? (
          filteredTours.map((tour) => (
            <TourCard
              key={tour.id}
              tour={tour}
              onPress={() => {}}
            />
          ))
        ) : (
          <View style={styles.emptyState}>
            <Text style={[styles.emptyText, { color: colors.textSecondary }]}>
              Aradığınız kriterlere uygun tur bulunamadı
            </Text>
          </View>
        )}

        <View style={{ height: 20 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  title: {
    fontSize: 28,
    fontFamily: 'Montserrat_700Bold',
  },
  searchSection: {
    marginVertical: 16,
  },
  categoriesSection: {
    marginBottom: 8,
  },
  categoriesContainer: {
    paddingHorizontal: 16,
  },
  scrollView: {
    flex: 1,
  },
  resultsHeader: {
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  resultsText: {
    fontSize: 14,
    fontFamily: 'Montserrat_500Medium',
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
    paddingHorizontal: 32,
  },
  emptyText: {
    fontSize: 15,
    fontFamily: 'Montserrat_400Regular',
    textAlign: 'center',
  },
});

