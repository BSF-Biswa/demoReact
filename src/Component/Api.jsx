import {useState,useEffect} from 'react';
import axios from 'axios';

export default function Api() {
    const [ProductList,setProductList]=useState([]);
    const getProducts=async()=>{
    await axios.get("https://fakestoreapi.com/products/").then((res)=>{
            console.log(res);
            setProductList(res.data);
            }).catch((error)=>{
                console.log(error);
            })
            }
            useEffect(()=>{
                getProducts();
            },[])
    
    return (
    
    <div>
        {/* <h1>Demo-Api</h1>
        {
           ProductList.map((data)=>{
            return (
                <li key={data.id}>{data.title }</li>
            )
           })
        } */}
        <div className='img-gallery'>
      {
        ProductList.map(data => (
          <>
            <div className='parts'>
            <img className='images' src={data.image} />
            <p>{data.title}</p>
            <p>{data.price}</p>
            </div>
          </>
          
        ))
      }
    </div>
    </div>
  )
}
