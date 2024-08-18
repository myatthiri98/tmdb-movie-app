import React, { useEffect, useState, useCallback } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import Colors from '../Theme/Colors';
import { getData } from '../Service/MovieDataService';

const CustomCategoryCard = () => {
  const [movies, setMovies] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const result = await getData();
      setMovies(result);
    } catch (error) {
      console.error('Failed to fetch data', error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const renderCategory = ({ item }) => (
    <View style={styles.videoCard}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
        style={styles.videoImage}
        resizeMode="cover"
      />
      {/* <View style={styles.titleContainer}>
        <Text numberOfLines={2} style={styles.videoTitle}>
          {item.title}
        </Text>
      </View> */}
    </View>
  );

  return (
    <View style={styles.categoryContainer}>
      <Text style={styles.categoryTitle}>Popular</Text>
      <FlatList
        horizontal
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderCategory}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default CustomCategoryCard;

const styles = StyleSheet.create({
  categoryContainer: {
    width: '100%',
    marginTop: 20,
    paddingHorizontal: 15,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.text.white,
    marginBottom: 10,
  },
  videoCard: {
    width: 120,
    backgroundColor: Colors.backgroundColor,
    elevation: 5,
    alignItems: 'center',
    marginRight: 15,
    borderRadius: 10,
    overflow: 'hidden',
  },
  videoImage: {
    width: '100%',
    height: 160,
  },
  titleContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingVertical: 5,
    paddingHorizontal: 8,
  },
  videoTitle: {
    fontSize: 14,
    color: Colors.text.white,
    textAlign: 'center',
  },
});
