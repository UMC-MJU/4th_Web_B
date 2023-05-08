import React, { useCallback, useEffect, useState, useRef } from 'react';

const data = [
  {
    id: 1,
    imgSrc: 'https://images.bestwestern.com/bwi/brochures/92740/photos/1024/15841747.jpg',
    name: 'Best Western Amsterdam, Netherlands',
    location: 'Amsterdam',
    period: '4월 16일~22일',
    price: '₩ 384,184 /박'
  },
  {
    id: 2,
    imgSrc: 'https://cf.bstatic.com/images/hotel/max1024x768/432/43274011.jpg',
    name: 'Best Western Hotel Brussels South, Belgium',
    location: 'Brussels',
    period: '4월 16일~22일',
    price: '₩ 384,184 /박'
  },
  {
    id:3,
    imgSrc: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/e2/93/d9/exterior.jpg?w=700&h=-1&s=1',
    name: 'Radisson Blu Frankfurt, Germany',
    location: 'Frankfurt',
    period: '4월 16일~22일',
    price: '₩ 384,184 /박'
  },
  {
    id:4,
    imgSrc: 'https://www.hotelsempionemilan.com/img/page1_bigimg1.jpg',
    name: 'Sempione Milano, Italy',
    location: 'Milan',
    period: '4월 16일~22일',
    price: '₩ 384,184 /박'
  },
  {
    id:5,
    imgSrc: 'https://pesweb.azureedge.net/spimg/hotelphotos/vintage-porto-summary-summer.jpg?scale=downscaleonly&encoder=freeimage&progressive=true&quality=70&w=960&h=720&mode=crop',
    name: 'Pestana vintage, Portugal',
    location: 'Porto',
    period: '4월 16일~22일',
    price: '₩ 384,184 /박'
  },
  {
    id:6,
    imgSrc: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/37/69/93/four-seasons-hotel-madrid.jpg?w=700&h=-1&s=1',
    name: 'Four Seasons Hotel Madrid, Spain',
    location: 'Madrid',
    period: '4월 16일~22일',
    price: '₩ 384,184 /박'
  },
  {
    id:7,
    imgSrc: 'https://cf.bstatic.com/xdata/images/hotel/max500/433595783.jpg?k=716b0a9a4d6a5f08e68333b7f5b44c69479631b8a599651e3181c6355d924fa9&o=&hp=1',
    name: 'KA Hotel & Suites, Turkey',
    location: 'Istanbul',
    period: '4월 16일~22일',
    price: '₩ 384,184 /박'
  },
  {
    id:8,
    imgSrc: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/72/e9/0d/mercer-roof-terrace.jpg?w=700&h=-1&s=1',
    name: 'Vintry and Mercer, United Kingdom',
    location: 'London',
    period: '4월 16일~22일',
    price: '₩ 384,184 /박'
  },

  {
    id:9,
    imgSrc: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/14/8a/14/exterior-view.jpg?w=700&h=-1&s=1',
    name: 'Hôtel Montaigne, France',
    location: 'Paris',
    period: '4월 16일~22일',
    price: '₩ 384,184 /박'
  },

  {
    id: 10,
    imgSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/5a/20/60/top-hotel-praha.jpg?w=700&h=-1&s=1",
    name: 'TOP CONGRESS HOTEL Praha, Czech',
    location: 'Prague',
    period: '4월 16일~22일',
    price: '₩ 384,184 /박'
  },
  // 다른 데이터들...
];

function ContentElement({ data }) {

  const [count, setCount] = useState(0);
  
  useEffect(() => {
    console.log('count updated: ', count)
  }, [count])

  const incrementCount = () => {
    setCount(count+1)
  }

  const name = useRef(null);

  const handleClick = () => {
    alert(name.current.innerText)
  }

  return (
    <div className="content-element">
      <a href="https://goo.gl/maps/FQ2VTQVQGT52EbN96" target="_blank">
        <img className="content-element__img" src={data.imgSrc} />
        <i className="fa-solid fa-heart"></i>
      </a>
      <span className="content-element__name">
        <span ref={name} onClick={handleClick}>{data.name}</span>
        <span>
          <span onClick={incrementCount}>Like</span>
          <p>{count}</p>
        </span>
      </span>
      <span className="location">{data.location}</span>
      <span className="period">{data.period}</span>
      <span className="price">{data.price}</span>
    </div>
  );
}

function search(title) {

  for(let i =0 ; i < data.length; i++) {
    if (data[i].location == title) {
        return data[i]
    }
  }

}


function Content(props) {
  //const searchData = search(props.title);
  const searchData = useCallback(search(props.title),[]);
  const contentElements = Array.from({ length: 8 }, (_, index) => (
    <ContentElement key={index} data={searchData}></ContentElement>
  ));

  return <div className="content">{contentElements}</div>;
}


export default Content;