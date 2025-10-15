import React, {memo} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {SectionTitleProps} from '../../models/ui/sectionTitleProps';

const SectionTitle: React.FC<SectionTitleProps> = ({title, onPress}) => {
  console.log('SectionTitle:', title);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.seeAll}>See All ›</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#fff',
  },
  seeAll: {
    fontSize: 14,
    color: '#46d369',
    fontWeight: '600',
  },
});

export default memo(SectionTitle);
