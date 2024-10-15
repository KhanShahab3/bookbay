import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

const MyAds = () => {
  const [ads, setAds] = useState([
    {
      id: "1",
      title: "The Great Gatsby",
      price: "500",
      status: "Available",
      image: require("../assets/book1.jpg"),
      postedDate: "2023-10-01",
    },
    {
      id: "2",
      title: "To Kill a Mockingbird",
      price: "800",
      status: "Sold",
      image: require("../assets/book2.jpg"),
      postedDate: "2023-09-15",
    },
  ]);

  const handleEdit = (id) => {
    // Implement edit logic here
    console.log("Edit ad with ID:", id);
  };

  const handleDelete = (id) => {
    // Implement delete logic here
    console.log("Delete ad with ID:", id);
  };

  const renderAd = ({ item }) => (
    <View style={styles.adContainer}>
      <Image source={item.image} style={styles.bookImage} />
      <View style={styles.detailsContainer}>
        <Text style={styles.bookTitle}>{item.title}</Text>
        <Text style={styles.bookPrice}>Price: Rs. {item.price}</Text>
        <Text
          style={[
            styles.bookStatus,
            item.status === "Available" ? styles.available : styles.sold,
          ]}
        >
          {item.status}
        </Text>
        <Text style={styles.postedDate}>Posted: {item.postedDate}</Text>
      </View>
      <View style={styles.actionsContainer}>
        <TouchableOpacity
          onPress={() => handleEdit(item.id)}
          style={styles.editButton}
        >
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleDelete(item.id)}
          style={styles.deleteButton}
        >
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {ads.length > 0 ? (
        <FlatList
          data={ads}
          renderItem={renderAd}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <Text style={styles.noAdsText}>You haven't posted any ads yet.</Text>
      )}
    </View>
  );
};

export default MyAds;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  adContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
  bookImage: {
    width: 60,
    height: 90,
    borderRadius: 8,
    marginRight: 15,
  },
  detailsContainer: {
    flex: 1,
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  bookPrice: {
    fontSize: 16,
    marginBottom: 5,
  },
  bookStatus: {
    fontSize: 14,
    marginBottom: 5,
  },
  available: {
    color: "green",
  },
  sold: {
    color: "red",
  },
  postedDate: {
    fontSize: 12,
    color: "gray",
  },
  actionsContainer: {
    justifyContent: "center",
  },
  editButton: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
  deleteButton: {
    backgroundColor: "#dc3545",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
  },
  noAdsText: {
    textAlign: "center",
    fontSize: 18,
    color: "gray",
    marginTop: 50,
  },
});
