import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Text, View, TouchableOpacity, Image, StyleSheet } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import {
  increaseQuantity,
  decreaseQuantity,
} from "./Navigators/Redux/CartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  // Increase Quantity
  const handleIncrease = (item) => {
    dispatch(increaseQuantity(item.id));
  };

  // Decrease Quantity
  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      dispatch(decreaseQuantity(item.id));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.cartTitle}>Your Cart</Text>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <View key={item.id} style={styles.cartItem}>
            <Image source={item.imageUrl} style={styles.image} />
            <View style={styles.details}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.price}>
                {item.quantity} x {item.price}
              </Text>
              <View style={styles.quantityControls}>
                <TouchableOpacity
                  onPress={() => handleDecrease(item)}
                  style={styles.quantityButton}
                >
                  <Text style={styles.quantityText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantityNumber}>{item.quantity}</Text>
                <TouchableOpacity
                  onPress={() => handleIncrease(item)}
                  style={styles.quantityButton}
                >
                  <Text style={styles.quantityText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))
      ) : (
        <Text style={styles.emptyCart}>Your cart is empty</Text>
      )}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  cartTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  cartItem: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 15,
    padding: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  image: {
    width: responsiveWidth(25),
    height: responsiveHeight(15),
    borderRadius: 10,
    marginRight: 15,
  },
  details: {
    flex: 1,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    color: "#1252AE",
    fontWeight: "bold",
    marginBottom: 10,
  },
  quantityControls: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityButton: {
    backgroundColor: "#1252AE",
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  quantityText: {
    color: "white",
    fontSize: 18,
  },
  quantityNumber: {
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  emptyCart: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 50,
    color: "#999",
  },
});
