import React, { useState, useEffect } from 'react';
import "./Searchbar.css"

const SearchBar = ({ setChathead }) => {
  const [input, setInput] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const suggestions = [];

  useEffect(() => {
    const modifiedInput = input.toLowerCase().replace(/ /g, '_');

    fetch(`http://localhost:3000/chathead/search?q=${encodeURIComponent(modifiedInput)}`)
        .then(res => res.json())
        .then(data => {
            const modifiedData = data.map(item => {
                const modifiedName = item.name.replace(/_/g, ' ').replace(".png", "");

                return {
                    ...item,
                    name: `${modifiedName}`,
                };
            });
            setFilteredSuggestions(modifiedData);
        })
        .catch(error => console.error('Error fetching chathead:', error));
    }, [input]);

  const handleInputChange = (event) => {
    const userInput = event.target.value;
    setInput(userInput);

    const newSuggestions = suggestions.filter(
      (suggestion) =>
        suggestion.toLowerCase().includes(userInput.toLowerCase())
    );
    
    setFilteredSuggestions(newSuggestions);
  };

  const handleSuggestionClick = (suggestion) => {
    setInput(suggestion);
    setFilteredSuggestions([]);
    setChathead(suggestion);
  };

  return (
    <div className="searchbar-container">
      <p className="input-header">Chathead</p>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Search NPC/Player/Pet..."
      />
      {filteredSuggestions.length > 0 && (
        <ul>
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion.name)}
            >
              {suggestion.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;