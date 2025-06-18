import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function LanguageChanger() {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);

  const handleChangeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLang(lng);
  };

  return (
    <select
      className="px-3 py-1 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      onChange={(e) => handleChangeLanguage(e.target.value)}
      value={lang}
    >
      <option value="en">English</option>
      <option value="hi">हिन्दी</option>
      <option value="bn">বাংলা</option>
    </select>
  );
}

export default LanguageChanger;
