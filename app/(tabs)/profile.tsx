import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
    Pressable,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native';

// Profil menü item'ları
const menuItems = [
  { id: '1', icon: 'person-outline', label: 'Hesap Bilgileri', chevron: true },
  { id: '2', icon: 'time-outline', label: 'Tur Geçmişim', chevron: true },
  { id: '3', icon: 'card-outline', label: 'Ödeme Yöntemleri', chevron: true },
  { id: '4', icon: 'notifications-outline', label: 'Bildirimler', chevron: true },
  { id: '5', icon: 'language-outline', label: 'Dil Seçimi', chevron: true },
  { id: '6', icon: 'help-circle-outline', label: 'Yardım & Destek', chevron: true },
  { id: '7', icon: 'document-text-outline', label: 'Kullanım Koşulları', chevron: true },
  { id: '8', icon: 'shield-checkmark-outline', label: 'Gizlilik Politikası', chevron: true },
];

export default function ProfileScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]} edges={['bottom', 'left', 'right']}>
      <StatusBar barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'} />
      
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
         {/* Profil Header */}
         <View style={[styles.profileHeader, { backgroundColor: colors.primary }]}>
           <View style={styles.avatarContainer}>
             <View style={[styles.avatar, { backgroundColor: colors.card }]}>
               <Ionicons name="person" size={48} color={colors.primary} />
             </View>
           </View>
           <Text style={styles.userName}>Kullanıcı Adı</Text>
           <Text style={styles.userEmail}>kullanici@email.com</Text>
           <Pressable style={styles.editButton}>
             <Text style={styles.editButtonText}>Profili Düzenle</Text>
           </Pressable>
         </View>

        {/* İstatistikler */}
        <View style={styles.statsContainer}>
          <View style={[styles.statCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
            <Text style={[styles.statNumber, { color: colors.text }]}>12</Text>
            <Text style={[styles.statLabel, { color: colors.textSecondary }]}>
              Tamamlanan Tur
            </Text>
          </View>
          <View style={[styles.statCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
            <Text style={[styles.statNumber, { color: colors.text }]}>8</Text>
            <Text style={[styles.statLabel, { color: colors.textSecondary }]}>
              Favori Tur
            </Text>
          </View>
          <View style={[styles.statCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
            <Text style={[styles.statNumber, { color: colors.text }]}>5</Text>
            <Text style={[styles.statLabel, { color: colors.textSecondary }]}>
              Yorum
            </Text>
          </View>
        </View>

        {/* Menü Items */}
        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <Pressable
              key={item.id}
              style={[
                styles.menuItem,
                {
                  backgroundColor: colors.card,
                  borderBottomColor: colors.border,
                },
                index === menuItems.length - 1 && styles.lastMenuItem,
              ]}
            >
              <View style={styles.menuItemLeft}>
                <View
                  style={[
                    styles.menuIconContainer,
                     { backgroundColor: colors.backgroundSecondary },
                   ]}
                 >
                   <Ionicons name={item.icon as any} size={20} color={colors.primary} />
                 </View>
                 <Text style={[styles.menuLabel, { color: colors.text }]}>
                   {item.label}
                 </Text>
               </View>
               {item.chevron && (
                 <Ionicons name="chevron-forward" size={20} color={colors.textSecondary} />
               )}
            </Pressable>
          ))}
        </View>

         {/* Çıkış Yap */}
         <Pressable
           style={[styles.logoutButton, { backgroundColor: colors.card, borderColor: colors.border }]}
         >
           <Ionicons name="log-out-outline" size={20} color={colors.error} />
           <Text style={[styles.logoutText, { color: colors.error }]}>
             Çıkış Yap
           </Text>
         </Pressable>

        <View style={{ height: 40 }} />
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
  profileHeader: {
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 32,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  avatarContainer: {
    marginBottom: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userName: {
    color: '#FFF',
    fontSize: 22,
    fontFamily: 'Montserrat_700Bold',
    marginBottom: 4,
  },
  userEmail: {
    color: '#FFF',
    fontSize: 14,
    fontFamily: 'Montserrat_400Regular',
    opacity: 0.9,
    marginBottom: 20,
  },
  editButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 20,
  },
  editButtonText: {
    color: '#FFF',
    fontSize: 14,
    fontFamily: 'Montserrat_600SemiBold',
  },
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginTop: -24,
    gap: 12,
  },
  statCard: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 16,
    borderRadius: 12,
    borderWidth: 1,
    // gölge
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  statNumber: {
    fontSize: 24,
    fontFamily: 'Montserrat_700Bold',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    fontFamily: 'Montserrat_500Medium',
    textAlign: 'center',
  },
  menuContainer: {
    marginTop: 24,
    marginHorizontal: 16,
    borderRadius: 12,
    overflow: 'hidden',
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
  },
  lastMenuItem: {
    borderBottomWidth: 0,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  menuIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuLabel: {
    fontSize: 15,
    fontFamily: 'Montserrat_500Medium',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
    marginTop: 24,
    paddingVertical: 16,
    borderRadius: 12,
    borderWidth: 1,
    gap: 8,
  },
  logoutText: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
  },
});

