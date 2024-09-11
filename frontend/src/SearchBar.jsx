import React, { useState, useEffect } from 'react';
import "./Searchbar.css"

const SearchBar = ({ setChathead, setIsNameChanged, setIsUploaded }) => {
  const [input, setInput] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const suggestions = [];

  useEffect(() => {
    const modifiedInput = input.toLowerCase().replace(/ /g, '_');

    fetch(`http://osrs-chat-generator.adaptable.app/chathead/search?q=${encodeURIComponent(modifiedInput)}`)
        .then(res => res.json())
        .then(data => {
            const modifiedData = data.map(item => {
                const modifiedName = item.name.replace(/_/g, ' ').replace(".png", "");

                return {
                    ...item,
                    name: `${modifiedName}`,
                    unmodifiedName: item.name,
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
    setIsNameChanged(false);
    setIsUploaded(false);
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
              className="suggestion-item"
              key={index}
              onClick={() => handleSuggestionClick(suggestion.name)}
            >
              {suggestion.name}
              <img
                id="suggestion-chathead"
                src={`http://osrs-chat-generator.adaptable.app/chathead/${encodeURIComponent(suggestion.unmodifiedName)}.png`}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;