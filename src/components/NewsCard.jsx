
import { FaStar } from "react-icons/fa"; // For star ratings
import { AiOutlineEye } from "react-icons/ai"; // For views icon

const NewsCard = ({ news }) => {
  return (
    <div className="card shadow-lg mb-2 rounded-lg bg-base-100">
      {/* Thumbnail */}
      <figure>
        <img
          src={news.thumbnail_url}
          alt="News Thumbnail"
          className="w-1/4 h-1/4  object-cover"
        />
      </figure>

      {/* Card Body */}
      <div className="card-body">
        {/* Title */}
        <h2 className="card-title text-xl font-bold">{news.title}</h2>

        {/* Author and Date */}
        <div className="flex items-center gap-3 mt-2">
          <img
            src={news.author.img}
            alt={news.author.name}
            className="w-10 h-10 rounded-full border"
          />
          <div>
            <p className="text-sm font-medium">{news.author.name}</p>
            <p className="text-xs text-gray-500">
              {news.author.published_date}
            </p>
          </div>
        </div>

        {/* Details */}
        <p className="text-gray-700 mt-3 line-clamp-3">{news.details}</p>

        {/* Footer */}
        <div className="card-actions mt-4 flex items-center justify-between">
          {/* Rating */}
          <div className="flex items-center gap-1 text-yellow-400">
            <FaStar />{" "}
            <span className="text-sm font-medium">{news.rating.number}</span>
          </div>

          {/* Views */}
          <div className="flex items-center gap-1 text-gray-600">
            <AiOutlineEye /> <span className="text-sm">{news.total_view}</span>
          </div>

          {/* Trending Badge */}
          {news.others_info.is_trending && (
            <div className="badge badge-secondary">Trending</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
