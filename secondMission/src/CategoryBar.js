import React from 'react';

function CategoryBar() {
  const countries = [
    { name: 'Netherlands', iconUrl: 'https://cdn-icons-png.flaticon.com/512/330/330448.png', link: 'index.html' },
    { name: 'Belgium', iconUrl: 'https://cdn-icons-png.flaticon.com/512/330/330520.png', link: 'html/belgium.html' },
    { name: 'Turkey', iconUrl: 'https://cdn-icons-png.flaticon.com/512/330/330467.png', link: 'html/turkey.html' },
    { name: 'United Kingdom', iconUrl: 'https://cdn-icons-png.flaticon.com/512/330/330425.png', link: 'html/uk.html' },
    { name: 'France', iconUrl: 'https://cdn-icons-png.flaticon.com/512/330/330490.png', link: 'html/france.html' },
    { name: 'Germany', iconUrl: 'https://cdn-icons-png.flaticon.com/512/330/330523.png', link: 'html/germany.html' },
    { name: 'Portugal', iconUrl: 'https://cdn-icons-png.flaticon.com/512/330/330461.png', link: 'html/portugal.html' },
    { name: 'Italy', iconUrl: 'https://cdn-icons-png.flaticon.com/512/330/330672.png', link: 'html/italy.html' },
    { name: 'Czech Republic', iconUrl: 'https://cdn-icons-png.flaticon.com/512/330/330536.png', link: 'html/czech.html' },
    { name: 'Spain', iconUrl: 'https://cdn-icons-png.flaticon.com/512/330/330557.png', link: 'html/spain.html' },
  ];

  return (
    <div className="category-bar">
      {countries.map((country, index) => (
        <a key={index} className="category-bar_element" href={country.link}>
          <img className="category-bar_img" src={country.iconUrl} alt={country.name} />
          <span className="country">{country.name}</span>
        </a>
      ))}
    </div>
  );
}

export default CategoryBar;


