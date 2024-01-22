import { useState,useEffect } from 'react';
import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  const [items,setItems]=useState([]);
  useEffect(()=>{
    const fetchItems=async()=>{
      const response=await fetch("https://react-http-1df71-default-rtdb.firebaseio.com/products.json");
      if(!response.ok){
        throw new Error("Items not fetched");
      }
      const data=await response.json();
      setItems(data);
      // console.log(typeof items[0].price);
    }
    fetchItems();
  },[]);
  
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {items.map(item=><ProductItem id={item.id} title={item.title} price={item.price} description={item.description}/>)}
        {/* <ProductItem
          id='id1'
          title='Test1'
          price={6}
          description='This is a first product - amazing!'
        />
        <ProductItem
          id='id2'
          title='Test2'
          price={7}
          description='This is a second product - amazing!'
        /> */}
      </ul>
    </section>
  );
};

export default Products;
