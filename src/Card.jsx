import { useState } from 'react'
import './Card.css'
let arr = [
  {img: "/src/assets/pngwing.com.png" , cardT: 'Card title',title : 'Some quick example text to build on the card title and make up the bulk of the'},
  {cardT: 'Card title', title : 'Some quick example text to build on the card title and make up the bulk of the'},
  {img : "https://fastly.picsum.photos/id/428/200/127.jpg?hmac=BqrecEdBWvBbtc-zfXrM32hUuQm5zO876124Ur7vMq4",cardT: 'Card title', title :  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, nemo reprehenderit tempore optio neque recusandae quas deserunt quibusdam ea doloribus?' },
  {img : "https://picsum.photos/200/127", cardT: 'Card title', title :  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, nemo reprehenderit tempore optio neque recusandae quas deserunt quibusdam ea doloribus?' },
  ]

export default function Card() {
  const [array , setArray] = useState(arr)
  const [index, setIndex] = useState(0);
  
  

  let cart = array[index];
  const next = () =>{
    setIndex(index + 1);
    if(index === array.length - 1){
      setIndex(0);
    }
  }
  const back = () =>{
    setIndex(index - 1);
    if(index === 0){
      setIndex(array.length - 1);
    } 
    
  }
  

  return (
    <>
    <div className='corusel'>
    
     <button onClick={back}> <img  src="src/assets/lets-icons--back.svg" alt="back" /> </button>

     <div className="card">

      {cart.img ? <img src= {cart.img} alt="mountain" /> : null}
      <h2>{cart.cardT}</h2>
      <p>{cart.title}</p>
      <div className='link'>
      <a href="#">Card link</a>
      <a href="#">Another link</a>
      </div>
     </div>

     <button onClick={next}> <img  src="src/assets/carbon--next-filled.svg" alt="back" /> </button>

    </div>
    </>
  )
}

