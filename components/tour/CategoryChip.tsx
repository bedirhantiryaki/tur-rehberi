import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

interface CategoryChipProps {
  name: string;
  icon: string;
  isSelected?: boolean;
  onPress?: () => void;
}

export function CategoryChip({ name, icon, isSelected = false, onPress }: CategoryChipProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  return (
    <Pressable
      style={[
        styles.container,
        {
          backgroundColor: isSelected ? colors.primary : colors.backgroundSecondary,
          borderColor: isSelected ? colors.primary : colors.border,
        },
      ]}
      onPress={onPress}
    >
      <Ionicons
        name={icon as any}
        size={16}
        color={isSelected ? '#FFF' : colors.icon}
      />
      <Text
        style={[
          styles.text,
          { color: isSelected ? '#FFF' : colors.text },
        ]}
      >
        {name}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    gap: 6,
    marginRight: 8,
  },
  text: {
    fontSize: 13,
    fontFamily: 'Montserrat_600SemiBold',
  },
});

