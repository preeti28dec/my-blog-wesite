import React from "react";

export default function YouLike() {
  const arr = [
    {
      id: 1,
      image:
        "https://reiro-dark.fueko.net/content/images/size/w600/2022/10/photo-1613498382159-0972b7b4c9f1.jpeg",
      name: "Preeti thakur",
      title: "You have to fight to reach your dream",
    },
    {
      id: 2,
      image:
        "https://reiro-dark.fueko.net/content/images/size/w600/2022/10/photo-1613498382159-0972b7b4c9f1.jpeg",
      name: "Preeti thakur",
      title: "You have to fight to reach your dream",
    },
    {
      id: 3,
      image:
        "https://reiro-dark.fueko.net/content/images/size/w600/2022/10/photo-1613498382159-0972b7b4c9f1.jpeg",
      name: "Preeti thakur",
      title: "You have to fight to reach your dream",
    },
    {
      id: 4,
      image:
        "https://reiro-dark.fueko.net/content/images/size/w600/2022/10/photo-1613498382159-0972b7b4c9f1.jpeg",
      name: "Preeti thakur",
      title: "You have to fight to reach your dream",
    },
    {
      id: 5,
      image:
        "https://reiro-dark.fueko.net/content/images/size/w600/2022/10/photo-1613498382159-0972b7b4c9f1.jpeg",
      name: "Preeti thakur",
      title: "You have to fight to reach your dream",
    },
  ];
  return (
    <div className='like_all_card'>
      {arr.map((i: any, ind: any) => {
        return (
          <div className='like_card' key={ind}>
            <img className='like_image' src={i.image} alt='loding...' />
            <div className='like_title'>{i.title}</div>
            <div className='like_name'>by {i.name}</div>
          </div>
        );
      })}
    </div>
  );
}
