import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';

import { FlatList } from 'react-native';
import axios from 'axios';

const YoutubeScreen = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.googleapis.com/youtube/v3/search", {
        params: {
          key: "AIzaSyAV88YbuhE6aG7ButQ_tUB91HwCnFl1Ofg",
          part: "snippet",
          type: "video",
          videoCategoryId: "17", // set category ID to "Exercise & Fitness"
          maxResults: 10,
          q: "exercise workouts" // set the search query to 'exercise workouts'
        }
      })
      .then((response) => {
        console.log(response.data.items);
        setVideos(response.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={videos}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => alert("You tapped a video!")}>
            <View style={styles.videoContainer}>
              <Image
                source={{ uri: item.snippet.thumbnails.medium.url }}
                style={styles.videoThumbnail}
              />
              <Text style={styles.videoTitle}>{item.snippet.title}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.videoId}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20
  },
  videoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20
  },
  videoThumbnail: {
    width: 120,
    height: 90,
    marginRight: 10
  },
  videoTitle: {
    fontSize: 16,
    fontWeight: "bold"
  }
});

export default YoutubeScreen;
