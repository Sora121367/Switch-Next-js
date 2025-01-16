// components/BookMarkButton.js

const BookMarkButton = ({ onClick, isFavorited }) => {
  return (
    <button
      onClick={onClick}
      className={`p-2 ${isFavorited ? "text-red-500" : "text-gray-500"}`}
      aria-label={isFavorited ? "Unfavorite" : "Favorite"}
    >
      {isFavorited ? "❤️" : "🤍"}
    </button>
  );
};

export default BookMarkButton;
