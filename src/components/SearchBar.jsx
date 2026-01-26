export default function SearchBar({ city, setCity, onSearch }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search city (e.g. Abuja, London)"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={handleKeyDown}
        className="search-input"
      />

      <button
        onClick={onSearch}
        className="search-button"
      >
        🔍 Search
      </button>
    </div>
  );
}

