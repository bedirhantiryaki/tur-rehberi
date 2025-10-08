# 🗺️ Tur Rehberi - Travel Guide Mobile App

Modern ve kullanıcı dostu bir tur rehberi mobil uygulaması. React Native ve Expo ile geliştirilmiştir.

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

## ✨ Özellikler

### 📱 Ana Özellikler
- **🏠 Ana Sayfa**: Popüler turlar, akıllı tur önerileri ve yakındaki destinasyonlar
- **🔍 Gelişmiş Arama**: Kategori bazlı filtreleme ve anlık arama
- **🗺️ Interaktif Harita**: Tüm turların konumları ve kullanıcı konumu takibi
- **❤️ Favoriler**: Beğenilen turları kaydetme ve yönetme
- **👤 Profil Yönetimi**: Kullanıcı bilgileri ve tur geçmişi

### 🎨 Tasarım & UX
- **Modern Arayüz**: Material Design prensipleriyle tasarlanmış
- **Montserrat Font**: Profesyonel ve okunabilir tipografi
- **Dark Mode**: Otomatik tema desteği
- **Smooth Animations**: React Native Reanimated ile akıcı geçişler
- **Haptic Feedback**: Dokunmatik geri bildirim

### 🛠️ Teknik Özellikler
- **TypeScript**: Tip güvenliği ve daha az hata
- **Expo Router**: Modern file-based routing
- **React Native Maps**: Gerçek zamanlı harita entegrasyonu
- **Expo Location**: Konum servisleri
- **Ionicons**: 1000+ modern ikon
- **Safe Area Context**: Tüm cihazlarda düzgün görüntüleme

## 📸 Ekran Görüntüleri

### Ana Sayfa & Arama
Ana sayfada popüler turlar, kategoriler ve akıllı tur önerileri bulunur. Arama ekranında gelişmiş filtreleme özellikleri mevcuttur.

### Harita & Favoriler
Interaktif haritada tüm turların konumları görüntülenir. Favori turlarınızı kaydedebilir ve yönetebilirsiniz.

### Profil
Kullanıcı profili, istatistikler ve ayarlar tek bir ekranda toplanmıştır.

## 🚀 Kurulum

### Gereksinimler
- Node.js 18+ 
- npm veya yarn
- Expo CLI
- iOS Simulator (Mac) veya Android Emulator

### Adımlar

```bash
# Projeyi klonlayın
git clone https://github.com/kullaniciadi/tur-rehberi.git
cd tur-rehberi

# Bağımlılıkları yükleyin
npm install

# Expo development server'ı başlatın
npx expo start

# Native build için (Harita özelliği)
npx expo prebuild --clean
npx expo run:android  # Android için
npx expo run:ios      # iOS için
```

## 📦 Kullanılan Teknolojiler

### Core
- **React Native** - Cross-platform mobil uygulama framework'ü
- **Expo** - React Native geliştirme platformu
- **TypeScript** - JavaScript'in tip güvenli versiyonu
- **Expo Router** - File-based navigation

### UI/UX
- **Montserrat Font** - Google Fonts
- **Ionicons** - Icon library
- **React Native Reanimated** - Animasyon kütüphanesi
- **React Native Gesture Handler** - Gesture yönetimi

### Özellikler
- **React Native Maps** - Harita entegrasyonu
- **Expo Location** - Konum servisleri
- **Expo Image** - Optimize edilmiş görsel yükleme
- **Safe Area Context** - Güvenli alan yönetimi

## 📁 Proje Yapısı

```
tur-rehberi/
├── app/                    # Uygulama ekranları
│   ├── (tabs)/            # Tab navigasyon ekranları
│   │   ├── index.tsx      # Ana sayfa
│   │   ├── search.tsx     # Arama ekranı
│   │   ├── map.tsx        # Harita ekranı
│   │   ├── favorites.tsx  # Favoriler
│   │   └── profile.tsx    # Profil
│   ├── tour-details.tsx   # Tur detay sayfası
│   └── _layout.tsx        # Root layout
├── components/            # Yeniden kullanılabilir bileşenler
│   ├── tour/             # Tur ile ilgili bileşenler
│   │   ├── TourCard.tsx
│   │   ├── CategoryChip.tsx
│   │   ├── SearchBar.tsx
│   │   └── ...
│   └── ui/               # Genel UI bileşenleri
├── constants/            # Sabitler (tema, renkler)
├── data/                # Mock data
├── types/               # TypeScript tip tanımları
└── hooks/               # Custom React hooks
```

## 🎯 Özellik Detayları

### Ana Sayfa
- Hoş geldin mesajı
- Arama çubuğu
- Kategori filtreleri
- Akıllı tur önerileri (carousel)
- Popüler turlar listesi
- Yakındaki destinasyonlar

### Arama
- Anlık arama
- Kategori bazlı filtreleme
- Sonuç sayısı gösterimi
- Boş durum ekranı

### Harita
- Google Maps entegrasyonu
- Turların konumları (custom marker)
- Kullanıcı konumu
- Zoom kontrolleri
- "Konumuma git" butonu
- Marker bilgi penceresi

### Tur Kartları
- Görsel
- Kategori badge
- Rating & yorum sayısı
- Süre bilgisi
- Fiyat
- Mesafe
- Tag'ler
- Favori butonu

## 🔜 Gelecek Özellikler

- [ ] Kullanıcı girişi ve kaydı
- [ ] Gerçek API entegrasyonu
- [ ] Rezervasyon sistemi
- [ ] Ödeme entegrasyonu
- [ ] Push bildirimleri
- [ ] Sosyal medya paylaşımı
- [ ] Yorumlar ve değerlendirmeler
- [ ] Çoklu dil desteği
- [ ] Offline mode
- [ ] AR özelliği (Augmented Reality)

## 🤝 Katkıda Bulunma

Katkılarınızı bekliyoruz! Lütfen pull request göndermeden önce:

1. Fork'layın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit'leyin (`git commit -m 'feat: Add amazing feature'`)
4. Push'layın (`git push origin feature/amazing-feature`)
5. Pull Request açın

## 📝 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için `LICENSE` dosyasına bakın.

## 👨‍💻 Geliştirici

**Bedir**

- LinkedIn: [Profiliniz](https://linkedin.com/in/profiliniz)
- GitHub: [@kullaniciadi](https://github.com/kullaniciadi)

## 🙏 Teşekkürler

- Expo ekibine harika bir platform için
- React Native topluluğuna
- Unsplash'a görseller için

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!

**Not**: Bu proje eğitim ve portfolyo amaçlı geliştirilmiştir.
