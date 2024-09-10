import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const DropdownLang: React.FC = () => {
  const { i18n} = useTranslation();
  const [language, setLanguage] = useState<string>(i18n.language);

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
    setLanguage(selectedLanguage);
  };

  return (
    <div>
      <select
        id="language-select"
        value={language}
        onChange={changeLanguage}
      >
        <option value="en">English</option>
        <option value="fr">Français</option>
      </select>
    </div>
  );
};

export default DropdownLang;
