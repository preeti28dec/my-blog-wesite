import React from "react";

export default function PopularTag() {
  const arr = [
    {
      id: 1,
      image:
        "https://reiro-dark.fueko.net/content/images/size/w300/2022/10/photo-1529307474719-3d0a417aaf8a.jpeg",
      name: "Idea",
    },
    {
      id: 2,
      image:
        "https://reiro-dark.fueko.net/content/images/size/w300/2022/10/photo-1540932239986-30128078f3c5.jpeg",
      name: "Idea",
    },
    {
      id: 3,
      image:
        "https://reiro-dark.fueko.net/content/images/size/w300/2022/10/photo-1655721529468-d0d81b2dc489.jpeg",
      name: "Idea",
    },
    {
      id: 4,
      image:
        "https://reiro-dark.fueko.net/content/images/size/w300/2022/10/photo-1540932239986-30128078f3c5.jpeg",
      name: "Idea",
    },
    {
      id: 5,
      image:
        "https://reiro-dark.fueko.net/content/images/size/w300/2022/10/photo-1655721529468-d0d81b2dc489.jpeg",
      name: "Idea",
    },
    {
      id: 6,
      image:
        "https://reiro-dark.fueko.net/content/images/size/w300/2022/10/photo-1529307474719-3d0a417aaf8a.jpeg",
      name: "Idea",
    },
  ];
  return (
    <div className='popular_tags'>
     
        {arr.map((i: any, ind: any) => {
          return (
            <div key={ind} className='card_imag'>
              <img className='card_image' src={i.image} alt='card image' />
              <div className='card_title'>{i.name}</div>
            </div>
          );
        })}
    </div>
  );
}
