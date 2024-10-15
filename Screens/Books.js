import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { FlatList, TextInput } from "react-native-gesture-handler";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

const Books = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const books = [
    {
      id: 1,
      title: "Design Patterns",
      description: "A comprehensive guide to software design patterns.",
      price: "$39.99",
      imageUrl: require("../assets/book1.jpg"),
    },
    {
      id: 2,
      title: "Clean Code",
      description: "Learn how to write cleaner, more maintainable code.",
      price: "$49.99",
      imageUrl: require("../assets/book1.jpg"),
    },
    {
      id: 3,
      title: "JavaScript: The Good Parts",
      description: "An in-depth exploration of JavaScript.",
      price: "$29.99",
      imageUrl: require("../assets/book2.jpg"),
    },
  ];

  const handleDetailPress = (book) => {
    // Navigate to BookDetail and pass the book data
    navigation.navigate("bookDetail", { book });
  };

  // Book categories for chips
  const categories = [
    "Design Book",
    "Programming Book",
    "Science Book",
    "Fiction Book",
    "History Book",
    "Math Book",
    "Art Book",
  ];

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    // Perform search/filtering logic here based on selected category
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.chip,
        selectedCategory === item && styles.selectedChip, // Highlight selected category
      ]}
      onPress={() => handleCategorySelect(item)}
    >
      <Text style={styles.chipText}>{item}</Text>
    </TouchableOpacity>
  );
  const renderBook = ({ item }) => (
    <View key={item.id} style={styles.card}>
      <Image source={item.imageUrl} style={styles.image} />
      <View style={styles.cardContent}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>{item.price}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleDetailPress(item)}
        >
          <Text style={styles.buttonText}>📖 Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Search Input */}
      <TextInput style={styles.searchInput} placeholder="Search" />

      {/* FlatList for Categories */}
      <FlatList
        data={categories}
        horizontal
        keyExtractor={(item) => item}
        renderItem={renderItem}
        contentContainerStyle={styles.chipContainer}
        showsHorizontalScrollIndicator={false}
      />
      <View style={{ marginTop: 25 }}>
        <FlatList
          data={books}
          scrollEnabled={true}
          renderItem={renderBook}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Books;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  searchInput: {
    width: responsiveWidth(85),
    backgroundColor: "rgba(18, 82, 174, 0.11)",
    borderRadius: 15,
    borderColor: "gray",
    borderWidth: 1,
    height: responsiveHeight(5),
    paddingHorizontal: 15,
    marginLeft: 15,
    marginBottom: responsiveHeight(2),
  },
  chipContainer: {
    marginTop: responsiveHeight(0),
  },
  chip: {
    backgroundColor: "#E0E0E0",
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 5,
  },
  selectedChip: {
    backgroundColor: "#1252AE", // Highlight selected chip
  },
  chipText: {
    color: "black",
    fontWeight: "bold",
  },
  container: {
    padding: 10,
    backgroundColor: "#f5f5f5",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
    flexDirection: "row",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: responsiveWidth(25),
    height: responsiveHeight(15),
    borderRadius: 10,
    marginRight: 15,
  },
  cardContent: {
    flex: 1,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
  },
  price: {
    fontSize: 16,
    color: "#1252AE",
    fontWeight: "bold",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#1252AE",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignSelf: "flex-start",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
