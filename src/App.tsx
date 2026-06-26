
import React, { useState } from 'react';
import { SchemeForm } from './components/SchemeForm';
import { SchemeResults } from './components/SchemeResults';
import { schemesData, type Scheme } from './data/schemesData';
import { filterSchemes, type UserInput } from './utils/filterLogic';

function App() {
  const [filteredSchemes, setFilteredSchemes] = useState<Scheme[] | null>(null);

  const handleFilter = (input: UserInput) => {
    const results = filterSchemes(input, schemesData);
    setFilteredSchemes(results);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 font-sans">
      {/* Header */}
      <header className="max-w-md mx-auto text-center mb-8">
        <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-green-700">
          सरकार साथी
        </h1>
        <p className="text-gray-500 text-sm mt-1 font-medium">
          Sarkar Sathi • भारत के लिए बनाओ, असल समस्याओं के लिए बनाओ।
        </p>
      </header>

      {/* Main Content */}
      <main className="space-y-6">
        <SchemeForm onFilter={handleFilter} />
        
        {filteredSchemes !== null && (
          <SchemeResults schemes={filteredSchemes} />
        )}
      </main>

      {/* Footer */}
      <footer className="max-w-md mx-auto text-center mt-12 text-xs text-gray-400">
        © 2026 सरकार साथी • Build for Good Hackathon
      </footer>
    </div>
  );
}

export default App;
