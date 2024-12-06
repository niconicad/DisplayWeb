// src/translateService.js
import axios from 'axios';

const libreTranslateUrl = 'https://libretranslate.com/translate';

export default async function translateText(text, targetLanguage) {
  try {
    const response = await axios.post(libreTranslateUrl, {
      q: text,
      source: 'auto',
      target: targetLanguage,
      format: 'text'
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return response.data.translatedText;
  } catch (error) {
    console.error('Translation Error:', error);
    return text; // Return original text if translation fails
  }
}
