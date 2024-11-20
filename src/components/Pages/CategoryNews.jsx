import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../NewsCard';

const CategoryNews = () => {
    const {data} =useLoaderData()
    console.log(data);
    return (
      <div>
        <h2 className="font-semibold mb-3">Dragon News Home</h2>
        <p className="text-gray-400 text-sm">{data.length} News on this Category </p>
        <div>
           {
            data.map(news=> <NewsCard key={news._id} news={news} ></NewsCard>)
           } 
        </div>
      </div>
    );
};

export default CategoryNews;