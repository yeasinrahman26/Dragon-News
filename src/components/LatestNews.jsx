import React from 'react';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
      <div className="flex bg-base-200 p-3 items-center gap-5">
        <p className="bg-[#D72050] px-3 py-1 text-white">Latest</p>
        <Marquee pauseOnHover={true} speed={100} className="space-x-10">
          <Link to={"/new"}>
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </Link>
          <Link to={"/new"}>
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </Link>
          <Link to={"/new"}>
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </Link>
        </Marquee>
      </div>
    );
};

export default LatestNews;