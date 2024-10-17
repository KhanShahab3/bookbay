import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useDispatch } from "react-redux";
import { addToCart } from "./Navigators/Redux/CartSlice";

const BookDetail = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const { book } = route.params; // Retrieve the book passed from the Books screen
  const [quantity, setQuantity] = useState(1); // State for quantity

  const handleAddToCart = (book) => {
    // Dispatch the addToCart action to Redux
    dispatch(addToCart(book));
  };

  return (
    <View style={styles.container}>
      <Image source={book.imageUrl} style={styles.image} />
      <Text style={styles.title}>{book.title}</Text>
      <Text style={styles.description}>{book.description}</Text>
      <Text style={styles.price}>{book.price}</Text>

      {/* Add to Cart Button */}
      <TouchableOpacity
        style={styles.addToCartButton}
        onPress={() => handleAddToCart(book)}
      >
        <Text style={styles.addToCartText}>🛒 Add to Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.addToCartButton}
        onPress={() => {
          navigation.navigate("cart");
        }}
      >
        <Text style={styles.addToCartText}>🛒 Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BookDetail;

const styles = StyleSheet.create({
  container: {
    padding: 20,

    height: "100%",
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1252AE",
    marginBottom: 20,
  },
  addToCartButton: {
    backgroundColor: "#1252AE",
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  addToCartText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
