import React from 'react';

const data = [
  {
    id: 1,
    imgSrc: 'https://images.bestwestern.com/bwi/brochures/92740/photos/1024/15841747.jpg',
    name: 'Best Western Amsterdam, Netherlands',
    rating: '5.0',
    location: 'Amsterdam',
    period: '4월 16일~22일',
    price: '₩ 384,184 /박'
  },
  {
    id: 2,
    imgSrc: 'https://cf.bstatic.com/images/hotel/max1024x768/432/43274011.jpg',
    name: 'Best Western Hotel Brussels South, Belgium',
    rating: '5.0',
    location: 'Brussels',
    period: '4월 16일~22일',
    price: '₩ 384,184 /박'
  },
  {
    id:3,
    imgSrc: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/e2/93/d9/exterior.jpg?w=700&h=-1&s=1',
    name: 'Radisson Blu Frankfurt, Germany',
    rating: '5.0',
    location: 'Frankfurt',
    period: '4월 16일~22일',
    price: '₩ 384,184 /박'
  },
  {
    id:4,
    imgSrc: 'https://www.hotelsempionemilan.com/img/page1_bigimg1.jpg',
    name: 'Sempione Milano, Italy',
    rating: '5.0',
    location: 'Milan',
    period: '4월 16일~22일',
    price: '₩ 384,184 /박'
  },
  {
    id:5,
    imgSrc: 'https://pesweb.azureedge.net/spimg/hotelphotos/vintage-porto-summary-summer.jpg?scale=downscaleonly&encoder=freeimage&progressive=true&quality=70&w=960&h=720&mode=crop',
    name: 'Pestana vintage, Portugal',
    rating: '5.0',
    location: 'Porto',
    period: '4월 16일~22일',
    price: '₩ 384,184 /박'
  },
  {
    id:6,
    imgSrc: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/37/69/93/four-seasons-hotel-madrid.jpg?w=700&h=-1&s=1',
    name: 'Four Seasons Hotel Madrid, Spain',
    rating: '5.0',
    location: 'Madrid',
    period: '4월 16일~22일',
    price: '₩ 384,184 /박'
  },
  {
    id:7,
    imgSrc: 'https://cf.bstatic.com/xdata/images/hotel/max500/433595783.jpg?k=716b0a9a4d6a5f08e68333b7f5b44c69479631b8a599651e3181c6355d924fa9&o=&hp=1',
    name: 'KA Hotel & Suites, Turkey',
    rating: '5.0',
    location: 'Istanbul',
    period: '4월 16일~22일',
    price: '₩ 384,184 /박'
  },
  {
    id:8,
    imgSrc: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/72/e9/0d/mercer-roof-terrace.jpg?w=700&h=-1&s=1',
    name: 'Vintry and Mercer, United Kingdom',
    rating: '5.0',
    location: 'London',
    period: '4월 16일~22일',
    price: '₩ 384,184 /박'
  },

  {
    id:9,
    imgSrc: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/14/8a/14/exterior-view.jpg?w=700&h=-1&s=1',
    name: 'Hôtel Montaigne, France',
    rating: '5.0',
    location: 'Paris',
    period: '4월 16일~22일',
    price: '₩ 384,184 /박'
  },

  {
    id: 10,
    imgSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/5a/20/60/top-hotel-praha.jpg?w=700&h=-1&s=1",
    name: 'TOP CONGRESS HOTEL Praha, Czech',
    rating: '5.0',
    location: 'Prague',
    period: '4월 16일~22일',
    price: '₩ 384,184 /박'
  },
  // 다른 데이터들...
];

function ContentElement({ data }) {
  return (
    <div className="content-element">
      <a href="https://goo.gl/maps/FQ2VTQVQGT52EbN96" target="_blank">
        <img className="content-element__img" src={data.imgSrc} />
        <i className="fa-solid fa-heart"></i>
      </a>
      <span className="content-element__name">
        <span>{data.name}</span>
        <span>
          <i className="fa-solid fa-star"></i> 
          <span className="rate">{data.rating}</span>
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
  console.log(props.title)
  return (
    <div className="content">
     <ContentElement data={search(props.title)}></ContentElement>
     <ContentElement data={search(props.title)}></ContentElement>
     <ContentElement data={search(props.title)}></ContentElement>
     <ContentElement data={search(props.title)}></ContentElement>
     <ContentElement data={search(props.title)}></ContentElement>
     <ContentElement data={search(props.title)}></ContentElement>
     <ContentElement data={search(props.title)}></ContentElement>
     <ContentElement data={search(props.title)}></ContentElement>
    </div>
  );


}

export default Content;