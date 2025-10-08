import { TourCard } from '@/components/tour/TourCard';
import { Colors } from '@/constants/theme';
import { favoriteTours } from '@/data/mockData';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default function FavoritesScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  
  // Gerçek uygulamada bu state management ile yönetilirdi
  const [favorites] = useState(favoriteTours);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]} edges={['top', 'left', 'right']}>
      <StatusBar barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'} />
      
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.text }]}>
          Favorilerim
        </Text>
        {favorites.length > 0 && (
          <Text style={[styles.count, { color: colors.textSecondary }]}>
            {favorites.length} tur
          </Text>
        )}
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {favorites.length > 0 ? (
          favorites.map((tour) => (
            <TourCard
              key={tour.id}
              tour={tour}
              onPress={() => {}}
            />
          ))
        ) : (
          <View style={styles.emptyState}>
             <View
               style={[
                 styles.emptyIcon,
                 { backgroundColor: colors.backgroundSecondary },
               ]}
             >
               <Ionicons name="heart-outline" size={48} color={colors.icon} />
             </View>
            <Text style={[styles.emptyTitle, { color: colors.text }]}>
              Henüz favori tur yok
            </Text>
            <Text style={[styles.emptyText, { color: colors.textSecondary }]}>
              Beğendiğiniz turları favorilere ekleyerek{'\n'}
              daha sonra kolayca ulaşabilirsiniz
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
    paddingBottom: 16,
  },
  title: {
    fontSize: 28,
    fontFamily: 'Montserrat_700Bold',
    marginBottom: 4,
  },
  count: {
    fontSize: 14,
    fontFamily: 'Montserrat_500Medium',
  },
  scrollView: {
    flex: 1,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 100,
    paddingHorizontal: 32,
  },
  emptyIcon: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  emptyTitle: {
    fontSize: 20,
    fontFamily: 'Montserrat_700Bold',
    marginBottom: 8,
  },
  emptyText: {
    fontSize: 15,
    fontFamily: 'Montserrat_400Regular',
    textAlign: 'center',
    lineHeight: 22,
  },
});

