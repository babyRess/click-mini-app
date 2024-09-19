import { useState } from 'react';
import TapPage from '../pages/TapPage/TapPage';
import UnderMaintenance from '../pages/UnderMaintenance';

const Menu = () => {
  const [activePage, setActivePage] = useState('Tap'); // Default active page is 'Tap'

  const menuItems = [
    { name: 'Ref', icon: '🐱' },
    { name: 'Tasks', icon: '✅' },
    { name: 'Tap', icon: '🟡' },
    { name: 'Boost', icon: '🔥' },
    { name: 'Stats', icon: '📊' },
  ];

  const renderPage = () => {
    switch (activePage) {
      case 'Ref':
        // return <RefPage />;
        return <UnderMaintenance />;
      case 'Tasks':
        // return <TasksPage />;
        return <UnderMaintenance />;
      case 'Tap':
        return <TapPage />;
      case 'Boost':
        // return <BoostPage />;
        return <UnderMaintenance />;
      case 'Stats':
        // return <StatsPage />;
        return <UnderMaintenance />;

      default:
        return <TapPage />; // Default page
    }
  };

  return (
    <div className="h-screen flex flex-col justify-between">
      <div className="flex-grow">{renderPage()}</div> {/* Page content area */}
      {/* Bottom navigation menu */}
      <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-black border-t border-gray-200 dark:bg-gray-800 dark:border-gray-600">
        <div className="grid h-full max-w-lg grid-cols-5 mx-auto font-medium">
          {menuItems.map((item, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActivePage(item.name)} // Switch page when clicked
              className={`inline-flex flex-col items-center justify-center px-4 py-2 
                          ${activePage === item.name ? 'bg-blue-700' : 'bg-gray-800'}
                          rounded-lg text-white mx-1`}
            >
              <span className="text-2xl mb-1">{item.icon}</span>
              <span
                className={`text-sm 
                          ${activePage === item.name ? 'text-blue-200' : 'text-gray-400'}`}
              >
                {item.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
