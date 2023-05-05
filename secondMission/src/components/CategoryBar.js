import React from 'react';
import { Link } from 'react-router-dom';

function CategoryBar() {
  const countries = [
    { name: 'Netherlands', iconUrl: 'https://cdn-icons-png.flaticon.com/512/330/330448.png', link: '/' },
    { name: 'Belgium', iconUrl: 'https://cdn-icons-png.flaticon.com/512/330/330520.png', link: '/belgium' },
    { name: 'Turkey', iconUrl: 'https://cdn-icons-png.flaticon.com/512/330/330467.png', link: '/turkey' },
    { name: 'United Kingdom', iconUrl: 'https://cdn-icons-png.flaticon.com/512/330/330425.png', link: '/uk' },
    { name: 'France', iconUrl: 'https://cdn-icons-png.flaticon.com/512/330/330490.png', link: '/france' },
    { name: 'Germany', iconUrl: 'https://cdn-icons-png.flaticon.com/512/330/330523.png', link: '/germany' },
    { name: 'Portugal', iconUrl: 'https://cdn-icons-png.flaticon.com/512/330/330461.png', link: '/portugal' },
    { name: 'Italy', iconUrl: 'https://cdn-icons-png.flaticon.com/512/330/330672.png', link: '/italy' },
    { name: 'Czech Republic', iconUrl: 'https://cdn-icons-png.flaticon.com/512/330/330536.png', link: '/czech' },
    { name: 'Spain', iconUrl: 'https://cdn-icons-png.flaticon.com/512/330/330557.png', link: '/spain' },
  ];

  return (
    <div className="category-bar">
      {countries.map((country, index) => (
        /*
        <a key={index} className="category-bar_element" href={country.link}>
          <img className="category-bar_img" src={country.iconUrl} alt={country.name} />
          <span className="country">{country.name}</span>
        </a>
        */

        <Link key={index} className="category-bar_element" to={country.link}>
          <img className="category-bar_img" src={country.iconUrl} alt={country.name} />
          <span className="country">{country.name}</span>
        </Link>
     
      ))}
    </div>
  );
}

export default CategoryBar;


