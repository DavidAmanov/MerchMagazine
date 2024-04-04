import React, {useEffect, useState} from "react";
import Menu from "../components/topMenu";
import './Products.css'
import Product from "../components/poductCard";


function Products() {
  const [pokemonData, setPokemonData] = useState([])
  const [pokemonImg, setPokemonImg] = useState([])
  useEffect(() => {
    if(pokemonData.length === 0)
    fetchData();
  }, []); 

  const fetchData = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=9`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network is not ok');
        }
        return response.json();
      })
      .then(data => {
        setPokemonData(data.results);
  
        const imgUrls = data.results.map(item => item.url);

        Promise.all(imgUrls.map(url =>
          fetch(url)
            .then(response => {
              if (!response.ok) {
                throw new Error('Network is not ok');
              }
              return response.json();
            })
            .then(data => data.sprites.front_default)
        ))
        .then(imageUrls => {
          setPokemonImg(imageUrls);
        })
        .catch(error => console.error('Error fetching Pokémon data:', error));
      })
      .catch(error => console.error('Error fetching Pokémon list:', error));
  };
  
  
  return (
   <>
   <Menu/>
   <div className="productMarkup" >
    {pokemonData.map((element, index)=>
    <div className="card_container" key={index}>
    <Product srcImg={pokemonImg[index]} pokemonName={element.name}/>
    </div>
    )}
   </div>
   </>
  );
}

export default Products;