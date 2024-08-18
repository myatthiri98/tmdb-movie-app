import React, {useEffect, useState, useCallback} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Colors from '../Theme/Colors';
import {
  getPopularData,
  getTopRatedData,
  getUpcomingData,
} from '../Service/MovieDataService';

const { width } = Dimensions.get('window');

const CustomCategoryCard = () => {
  const [movies, setMovies] = useState({
    popular: [],
    topRated: [],
    upcoming: [],
  });

  const fetchAllData = useCallback(async () => {
    try {
      const [popular, topRated, upcoming] = await Promise.all([
        getPopularData(),
        getTopRatedData(),
        getUpcomingData(),
      ]);
      setMovies({popular, topRated, upcoming});
    } catch (error) {
      console.error('Failed to fetch data', error);
    }
  }, []);
  useEffect(() => {
    fetchAllData();
  }, [fetchAllData]);

  const renderCategory = useCallback(
    ({item}) => (
      <View style={styles.videoCard}>
        <Image
          source={{uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`}}
          style={styles.videoImage}
          resizeMode="cover"
        />
        <View style={styles.titleContainer}>
        <Text numberOfLines={2} style={styles.videoTitle}>
          {item.title}
        </Text>
      </View>
      </View>
    ),
    [],
  );

  const renderCategorySection = (title, data) => (
    <View style={styles.categorySection}>
      <Text style={styles.categoryTitle}>{title}</Text>
      <FlatList
        horizontal
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={renderCategory}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );

  return (
    <View style={styles.categoryContainer}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}  showsVerticalScrollIndicator={false}>
        {renderCategorySection('Popular', movies.popular)}
        {renderCategorySection('Top Rated', movies.topRated)}
        {renderCategorySection('Upcoming', movies.upcoming)}
        {renderCategorySection('Upcoming', movies.upcoming)}
      </ScrollView>
    </View>
  );
};

export default React.memo(CustomCategoryCard);

const styles = StyleSheet.create({
  categoryContainer: {
    width: '100%',
    marginTop: 20,
    paddingHorizontal: 15,
  },
  categorySection: {
    marginBottom: 15,
  },
  scrollViewContent: {
    paddingBottom: 100,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.text.white,
    marginBottom: 10,
  },
  videoCard: {
    width: width * 0.3,
    backgroundColor: Colors.backgroundColor,
    elevation: 5,
    alignItems: 'center',
    marginRight: 15,
    borderRadius: 10,
    overflow: 'hidden',
  },
  videoImage: {
    width: '100%',
    height: width * 0.45,
  },
  titleContainer: {
    // position: 'absolute',
    bottom: 0,
    width: '100%',
    // backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingVertical: 5,
    paddingHorizontal: 8,
  },
  videoTitle: {
    fontSize: 14,
    color: Colors.text.white,
    textAlign: 'center',
  },
  listContent: {
    // paddingLeft: 10,
    paddingBottom: 10,
  },
});
