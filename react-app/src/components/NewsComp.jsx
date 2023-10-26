import "./NewsComp.css";

import React, { useState, useEffect } from 'react';

function NewsComp() {
  const [imageLink, setImageLink] = useState(null);
  const [newsContent, setNewsContent] = useState(null);

  useEffect(() => {
    // Fetch Data
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2023-09-26&sortBy=publishedAt&apiKey=a0a61902b3834f688de377ea10d19d37')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // Extract Image Link
        const imageUrl = data.urlToImage;
        setImageLink(imageUrl);

        // Extract News Content
        const newsContent = data.content;
        setNewsContent(newsContent);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="newsComp">
      {imageLink && <img src={imageLink} alt="News" />}
      {newsContent && <p style={{color:'white'}}>{newsContent}shad</p>}
    </div>
  );
};

export default NewsComp;