
import React, { useState } from 'react';
import { Scheme } from '../data/schemesData';

interface SchemeResultsProps {
  schemes: Scheme[];
}

export const SchemeResults: React.FC<SchemeResultsProps> = ({ schemes }) => {
  // हर स्कीम के लिए डाक्यूमेंट्स की टिक-मार्क स्टेट को संभालने के लिए
  const [checkedDocs, setCheckedDocs] = useState<{ [key: string]: boolean }>({});

  const handleDocClick = (docKey: string) => {
    setCheckedDocs((prev) => ({
      ...prev,
      [docKey]: !prev[docKey],
    }));
  };

  if (schemes.length === 0) {
    return (
      <div className="text-center p-8 bg-gray-50 rounded-2xl border border-dashed border-gray-300 max-w-md mx-auto mt-6">
        <p className="text-gray-600 font-medium">आपकी जानकारी के अनुसार वर्तमान में कोई योजना नहीं मिली।</p>
        <p className="text-sm text-gray-400 mt-1">कृपया अपनी इनपुट वैल्यूज बदलकर दोबारा जांचें।</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-6 space-y-6">
      <h3 className="text-lg font-bold text-gray-800 px-1">
        आपके लिए <span className="text-green-600">{schemes.length}</span> योग्य योजनाएं मिलीं:
      </h3>

      {schemes.map((scheme) => (
        <div 
          key={scheme.id} 
          className="bg-white p-5 rounded-2xl shadow-md border border-gray-100 flex flex-col justify-between hover:border-orange-200 transition-colors duration-200"
        >
          {/*Header & Category Badge */}
          <div className="flex justify-between items-start mb-3">
            <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
              scheme.category === 'ROZGAAR' ? 'bg-orange-50 text-orange-700 border border-orange-200' :
              scheme.category === 'VIDYA' ? 'bg-blue-50 text-blue-700 border border-blue-200' :
              'bg-green-50 text-green-700 border border-green-200'
            }`}>
              {scheme.category}
            </span>
          </div>

          {/* स्कीम का नाम और विवरण */}
          <h4 className="text-lg font-bold text-gray-900 mb-2">{scheme.name}</h4>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">{scheme.description}</p>

          {/* आवश्यक दस्तावेज़ चेकलिस्ट (Dynamic Checklist) */}
          <div className="bg-gray-50 p-4 rounded-xl mb-4 border border-gray-100">
            <h5 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
              जरूरी कागजात (चेक करें कि आपके पास हैं या नहीं):
            </h5>
            <div className="grid grid-cols-1 gap-2">
              {scheme.documentsRequired.map((doc, idx) => {
                const docKey = `${scheme.id}-${idx}`;
                const isChecked = !!checkedDocs[docKey];
                return (
                  <label 
                    key={docKey}
                    onClick={() => handleDocClick(docKey)}
                    className={`flex items-center space-x-3 p-2 rounded-lg cursor-pointer transition-all ${
                      isChecked ? 'bg-green-50 border border-green-100 text-green-800' : 'bg-white border border-gray-200 text-gray-700'
                    }`}
                  >
                    <input 
                      type="checkbox"
                      checked={isChecked}
                      readOnly
                      className="rounded text-green-600 focus:ring-green-500 h-4 w-4 border-gray-300"
                    />
                    <span className={`text-sm ${isChecked ? 'line-through opacity-70' : ''}`}>
                      {doc}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* ऑफिशियल लिंक बटन */}
          <a
            href={scheme.applyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center bg-gray-900 text-white text-sm font-bold py-2.5 px-4 rounded-xl hover:bg-gray-800 transition-colors duration-150 mt-auto"
          >
            आधिकारिक पोर्टल पर जाएं →
          </a>
        </div>
      ))}
    </div>
  );
};
