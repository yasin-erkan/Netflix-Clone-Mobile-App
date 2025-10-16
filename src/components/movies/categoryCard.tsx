import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {CategoryCardProps} from '../../models/ui/categoryCardProps';

const CategoryCard: React.FC<CategoryCardProps> = ({
  category,
  isActive = false,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, isActive && styles.activeContainer]}
      activeOpacity={0.7}>
      <Text style={[styles.text, isActive && styles.activeText]}>
        {category.categoryTitle}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 10,
    marginHorizontal: 6,
    borderRadius: 20,
    backgroundColor: '#2a2a2a',
    borderWidth: 1,
    borderColor: '#3a3a3a',
  },
  activeContainer: {
    backgroundColor: '#e50914',
    borderColor: '#e50914',
    elevation: 3,
    shadowColor: '#e50914',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  text: {
    fontSize: 14,
    color: '#b3b3b3',
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  activeText: {
    color: '#ffffff',
    fontWeight: '700',
  },
});

export default CategoryCard;
