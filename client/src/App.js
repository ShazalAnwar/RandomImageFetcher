 import React, { useEffect, useState} from 'react'
 import './App.css'
import axios from 'axios';
 
 
 const App = () => {
const [images, setImages] = useState([])
useEffect(() => {
  getImages()

}, [ ])

const getImages= async ()=>{
  try {
      const response = await axios.get("https://picsum.photos/v2/list")
      const data= response.data;
      setImages(data);
      console.log( data)
  } catch (error) {
    console.error("fetching error")
  }
     
  }
   return (
     <div>
  <button className='btnImages' onClick={getImages}>Get Images</button>
  <div>
  {images.map((elem,i)=>{
return <><img 
key={i}
 src={elem.download_url} 
 width={300}
 height={250}
 className='imagesset'
alt="" />
</>
  })}
  </div>
     </div>
   )
 }
 
 export default App