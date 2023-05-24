import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import API from '../API/API';
import { FlatList } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';




export const PetañaScreen = () => {
  const [products, setproducts] = useState();


  const getproducts = async () => {
        try{
        const {data } = await API.get('/products/category/637fd33234834475d1f055b5');
        setproducts(data.products)
        }catch (error){
        console.log(error);
        }
      }
       useEffect(() => {
         getproducts();
      }, []);
       if (!products) {
        return null;
    }else 
    return (
       <View>
      <Text style={styles.TextContainer}> WAPIZIMA</Text>
      <TouchableOpacity style={styles.IconContainer} >
        <Icon name="shopping-cart" size={30} color="#000" />
      </TouchableOpacity>
      <View
        style={{
          height: '8%',
              backgroundColor: '#D3AFD4',
         }}
        />

        <FlatList 
        data={products}
         numColumns={2}
        renderItem={ ({item } ) => (
            
       
      <View style={styles.container}>
    
       <Image style={styles.productImage} source={{ uri: item.multimedia[0].images['400x400'] }} />


      <Text  style={styles.productname}>{item.name}</Text>
     {/* <Text> {item.description} </Text> */}
     {/* <Text> {item.category.name} </Text> */}
      <Text style={styles.productPrice}>${item.price}</Text>
      <TouchableOpacity style={styles.buyButton} >
     

      <Text style={styles.buyButtonText}>Agregar a la cesta</Text>
      </TouchableOpacity>


     {/* <Image style={{width: 400, height:400}} source={{ uri: item.multimedia[0].images['400x400'] }}  />    */}
    


       </View>
      )}/>
      </View>
 

  );
 };


 const styles = StyleSheet.create({

        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
        productItem: {
          margin: 10,
          alignItems: 'center',
        },
        productImage: {
          width: 150,
          height: 150,
          borderRadius: 10,
        },
        productname:{
          fontSize: 20,
          fontWeight: 'bold',
          color:'black',
          marginVertical: 10,
        },
        productPrice: {
          fontSize: 20,
          fontWeight: 'bold',
          color:'#1e90ff',
          marginVertical: 10,
        },
        buyButton: {
          backgroundColor: '#ff69b4',
          padding: 10,
          borderRadius: 10,
        },
        buyButtonText: {
          color: 'white',
          fontWeight: 'bold',
        },
        IconBarra: {
          flex: 1,
          paddingTop: 20, 
          paddingHorizontal: 10,
        },
        IconContainer: {
         position: 'absolute',
         top: 10, 
         right: 10,
         zIndex: 1,
        },
        TextContainer: {
          color: 'black',
          position: 'absolute',
          top: 20,
          left: 25,
          zIndex: 1,
        }
    
});