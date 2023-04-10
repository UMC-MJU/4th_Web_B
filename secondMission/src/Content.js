import React from 'react';

const data = [
  {
    imgSrc: 'https://images.bestwestern.com/bwi/brochures/92740/photos/1024/15841747.jpg',
    name: 'Best Western Amsterdam, Netherlands',
    rating: '5.0',
    location: 'Amsterdam',
    period: '4월 16일~22일',
    price: '₩ 384,184 /박'
  },
  {
    imgSrc: 'https://images.bestwestern.com/bwi/brochures/92740/photos/1024/15841747.jpg',
    name: 'Best Western Amsterdam, Netherlands',
    rating: '5.0',
    location: 'Amsterdam',
    period: '4월 16일~22일',
    price: '₩ 384,184 /박'
  },
  {
    imgSrc: 'https://images.bestwestern.com/bwi/brochures/92740/photos/1024/15841747.jpg',
    name: 'Best Western Amsterdam, Netherlands',
    rating: '5.0',
    location: 'Amsterdam',
    period: '4월 16일~22일',
    price: '₩ 384,184 /박'
  },
  {
    imgSrc: 'https://images.bestwestern.com/bwi/brochures/92740/photos/1024/15841747.jpg',
    name: 'Best Western Amsterdam, Netherlands',
    rating: '5.0',
    location: 'Amsterdam',
    period: '4월 16일~22일',
    price: '₩ 384,184 /박'
  },
  {
    imgSrc: 'https://images.bestwestern.com/bwi/brochures/92740/photos/1024/15841747.jpg',
    name: 'Best Western Amsterdam, Netherlands',
    rating: '5.0',
    location: 'Amsterdam',
    period: '4월 16일~22일',
    price: '₩ 384,184 /박'
  },
  {
    imgSrc: 'https://images.bestwestern.com/bwi/brochures/92740/photos/1024/15841747.jpg',
    name: 'Best Western Amsterdam, Netherlands',
    rating: '5.0',
    location: 'Amsterdam',
    period: '4월 16일~22일',
    price: '₩ 384,184 /박'
  },
  {
    imgSrc: 'https://images.bestwestern.com/bwi/brochures/92740/photos/1024/15841747.jpg',
    name: 'Best Western Amsterdam, Netherlands',
    rating: '5.0',
    location: 'Amsterdam',
    period: '4월 16일~22일',
    price: '₩ 384,184 /박'
  },
  {
    imgSrc: 'https://images.bestwestern.com/bwi/brochures/92740/photos/1024/15841747.jpg',
    name: 'Best Western Amsterdam, Netherlands',
    rating: '5.0',
    location: 'Amsterdam',
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

function Content() {
  return (
    <div className="content">
      {data.map((item, index) => (
        <ContentElement key={index} data={item} />
      ))}
    </div>
  );
}

export default Content;