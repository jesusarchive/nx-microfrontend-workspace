import './styles.css';
import * as React from 'react';

import { Route, Routes, useNavigate } from 'react-router-dom';

const Remote1 = React.lazy(() => import('remote1/Module'));

const Remote2 = React.lazy(() => import('remote2/Module'));

export function App() {
  const navigate = useNavigate();
  const [selectedMicrofrontend, setSelectedMicrofrontend] = React.useState('');

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedMicrofrontend(value);
    navigate(value);
  };

  return (
    <div className="h-screen w-screen flex flex-col p-6 gap-4 overflow-hidden">
      <React.Suspense fallback={null}>
        <div>
          <h1 className="text-3xl font-bold">Host App</h1>
        </div>
        <div>
          <select value={selectedMicrofrontend} onChange={handleSelectChange}>
            <option value="/remote1">Remote1</option>
            <option value="/remote2">Remote2</option>
          </select>
        </div>
        <div className="flex-grow flex p-5 border-2 border-yellow-500 rounded-md overflow-auto">
          <Routes>
            <Route path="/remote1" element={<Remote1 />} />
            <Route path="/remote2" element={<Remote2 />} />
          </Routes>
        </div>
      </React.Suspense>
    </div>
  );
}

export default App;
