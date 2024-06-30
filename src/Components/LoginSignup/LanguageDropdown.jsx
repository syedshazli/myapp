import React, { useState } from 'react';

const languages = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Spanish' },
    { code: 'fr', label: 'French' },
    { code: 'de', label: 'German' },
    // Add more languages as needed
];

const LanguageDropdown = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('en');

    const handleChange = (event) => {
        setSelectedLanguage(event.target.value);
    };

    return (
        <div className="language-dropdown">
            <select value={selectedLanguage} onChange={handleChange}>
                {languages.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                        {lang.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default LanguageDropdown;
