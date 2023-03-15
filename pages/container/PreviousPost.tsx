import React, { useState } from "react";

const arr = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1665686374006-b8f04cf62d57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wxfDF8YWxsfDE2fHx8fHx8Mnx8MTY3MDM4OTcxNg&ixlib=rb-4.0.3&q=80&w=2000",
    Title: "The Best friend that never was",
    Name: "Preeti thakur",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1670315194416-17645cbfc9f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8YWxsfDIyfHx8fHx8Mnx8MTY3MDM4OTcxNg&ixlib=rb-4.0.3&q=80&w=2000",
    Title: "The Best friend that never was",
    Name: "Preeti thakur",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1670272506154-080063eee4be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wxfDF8YWxsfDIxfHx8fHx8Mnx8MTY3MDM4OTcxNg&ixlib=rb-4.0.3&q=80&w=2000",
    Title: "The Best friend that never was",
    Name: "Preeti thakur",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1665686374006-b8f04cf62d57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wxfDF8YWxsfDE2fHx8fHx8Mnx8MTY3MDM4OTcxNg&ixlib=rb-4.0.3&q=80&w=2000",
    Title: "The Best friend that never was",
    Name: "Preeti thakur",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1670315194416-17645cbfc9f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8YWxsfDIyfHx8fHx8Mnx8MTY3MDM4OTcxNg&ixlib=rb-4.0.3&q=80&w=2000",
    Title: "The Best friend that never was",
    Name: "Preeti thakur",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1670272506154-080063eee4be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wxfDF8YWxsfDIxfHx8fHx8Mnx8MTY3MDM4OTcxNg&ixlib=rb-4.0.3&q=80&w=2000",
    Title: "The Best friend that never was",
    Name: "Preeti thakur",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1665686374006-b8f04cf62d57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wxfDF8YWxsfDE2fHx8fHx8Mnx8MTY3MDM4OTcxNg&ixlib=rb-4.0.3&q=80&w=2000",
    Title: "The Best friend that never was",
    Name: "Preeti thakur",
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1670315194416-17645cbfc9f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8YWxsfDIyfHx8fHx8Mnx8MTY3MDM4OTcxNg&ixlib=rb-4.0.3&q=80&w=2000",
    Title: "The Best friend that never was",
    Name: "Preeti thakur",
  },
  {
    id: 9,
    image:
      "https://images.unsplash.com/photo-1670272506154-080063eee4be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wxfDF8YWxsfDIxfHx8fHx8Mnx8MTY3MDM4OTcxNg&ixlib=rb-4.0.3&q=80&w=2000",
    Title: "The Best friend that never was",
    Name: "Preeti thakur",
  },
];
export default function PreviousPost() {
  const [showMore, setShowMore] = useState(false);
  const [index, setIndex] = useState(3);
  const handleMoreImage = () => {
    setIndex(index + 3);
    setShowMore(!showMore);
  };
  return (
    <>
      <div className='md:flex flex-wrap justify-between items-center gap-12'>
        {arr.slice(0, index).map((i: any, ind: any) => {
          return (
            <div className='my-2 md:w-[30%]' key={ind}>
              <a href='#'>
                <img
                  className='previous_post_image'
                  src={i.image}
                  alt='Loding....'
                />
              </a>
              <div className='small__title'>
                <div className='small_card_title'>Story</div>
                <div className='small_card_title'>Concepts</div>
                <div className='small_card_title'>Idea</div>
              </div>
              <div className='mx-2'>
                <div className='sm:text-3xl  text-lg font-bold'>{i.Title}</div>
                <p className='previous_post_paragraph'>
                  Image by PublicDomainArchive from Pixabay Susan stood in line
                  for the tour bus with her family. This was their second tour
                  of the day. The same tour to be exact. Only difference
                </p>
                <div className='flex justify-between items-center my-2'>
                  <div className='text-[#d8d6d3]'>by {i.Name}</div>
                  <div className='text-[#d8d6d3] text-sm'>23 march 2023</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className='text-center my-4'>
        {index < arr?.length && (
          <button
            className='previous_post_load_more_button'
            onClick={handleMoreImage}
          >
            Load More
            {/* {showMore && index == arr?.length ? "Show less" : "Show more"} */}
          </button>
        )}
      </div>
    </>
  );
}
