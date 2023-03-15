import React from 'react'

export default function WhatNew() {
  return (
    <div className='image_card'>
    <div className='big_image'>
      <img
        className='big_card-image'
        src='https://reiro-dark.fueko.net/content/images/size/w1600/2022/10/photo-1551734465-bf8cc92570f5.jpeg'
        alt='big image '
      />
      <div className='small__title'>
        <div className='small_card_title'>Story</div>
        <div className='small_card_title'>Concepts</div>
        <div className='small_card_title'>Idea</div>
      </div>
      <div className='small__desc'>
        The trick to getting more done is to have the freedom to
        roam around
      </div>
      <p className='small_paragraph'>
        Vel lectus vel velit pellentesque dignissim nec id magna.
        Cras molestie ornare quam at semper. Proin a ipsum ex.
        Curabitur eu venenatis justo. Nullam felis augue,
        imperdiet at sodales. Nullam felis libero, congue quis
        ipsum et, lacinia maximus eros. Vestibulum ante ipsum
        primis in faucibus.
      </p>

      <div className='big_image_profile_section'>
        <div>
          <img
            className='big_image_profile_image'
            src='https://reiro-dark.fueko.net/content/images/size/w1600/2022/10/photo-1551734465-bf8cc92570f5.jpeg'
            alt='profile image'
          />
        </div>
        <div className='profile_name_date'>
          <div>by Damian Erdman</div>
          <div>October 12,2022 -3 min red</div>
        </div>
      </div>
    </div>

    <div className='image_card_section'>
      <div className='small_card card_1'>
        <div className='card1_main'>
          <div className='crad1_title'>NEWSLETTER</div>
          <div className='crad1_desc'>
            Get all the latest posts delivered straight to your
            inbox.
          </div>
          <div className='text-center'>
            <input
              className='card1_input'
              placeholder='Your email address'
              type='text'
            />
          </div>
          <div className='text-center'>
            <button className='card1_button'>Subscribe</button>
          </div>
        </div>
      </div>
      <div className='small_card card_2'>
        <img
          className='left_image'
          src='https://reiro-dark.fueko.net/content/images/size/w600/2022/10/photo-1584539094584-c4231ff84bd4.jpeg'
          alt='small card image'
        />
      </div>
      <div>
        <div className='small__title'>
          <div className='small_card_title'>Story</div>
          <div className='small_card_title'>Concepts</div>
        </div>
        <div className='left_title'>
          There are still many questions left to answer
        </div>
        <div className='person_name'>by Damian Erdman</div>
      </div>
      <div className='small_card card_2'>
        <img
          className='left_image'
          src='https://reiro-dark.fueko.net/content/images/size/w600/2022/10/photo-1613498382159-0972b7b4c9f1.jpeg'
          alt='small card image'
        />
      </div>
      <div>
        <div className='small__title'>
          <div className='small_card_title'>Story</div>
          <div className='small_card_title'>Concepts</div>
        </div>
        <div className='left_title'>
          There are still many questions left to answer
        </div>
        <div className='person_name'>by Damian Erdman</div>
      </div>
    </div>
  </div>
  )
}
