import React from "react";

export default function FeaturedPost() {
  const arr = [
    {
      id: 1,
      image:
        "https://reiro-dark.fueko.net/content/images/size/w600/2022/10/photo-1665406510231-6a3615a7c00e.jpeg",
      title: "It s a new era in design, there are no rules",
      name: "Breana Flatley & Daryl Wehner",
    },
    {
      id: 2,
      image:
        "https://reiro-dark.fueko.net/content/images/size/w600/2022/10/dillon-wanner-qrCmguAfqAg-unsplash.jpg",
      title: "The secret is to work less as individuals and more as a team",
      name: "Breana Flatley & Daryl Wehner",
    },
    {
      id: 3,
      image:
        "https://reiro-dark.fueko.net/content/images/size/w600/2022/10/jacek-dylag-PR-B3hhcOZY-unsplash.jpg",
      title: "I have my own definition of minimalism",
      name: "Breana Flatley & Daryl Wehner",
    },
  ];
  return (
    <div className='featured_section'>
      <div className='global-cover bg-image-black'></div>
      <small className='featured-subtitle'>Editor s Choice</small>
      <h2 className='featured-title'>Get started with our best stories</h2>

      <div className='featured_card'>
        {arr.map((i: any, ind: any) => {
          return (
            <div className='featured_card1 featured_card_post' key={ind}>
              <img
                className='featured_card1_image'
                src={i.image}
                alt='loding image'
              />
              <div className='text-[#1a1a1c] text-lg font-bold sm:text-2xl'>
                {i.title}
              </div>
              <div className='featured_card1_desc'>by {i.name}</div>
            </div>
          );
        })}
      </div>
      <div className='featured_more_posts'>See all featured posts </div>
    </div>
  );
}
