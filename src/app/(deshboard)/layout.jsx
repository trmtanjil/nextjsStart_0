import React from 'react';

function DeshboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="grid grid-cols-12">
        {/* Sidebar */}
        <div className="col-span-3 bg-gray-500 shadow-lg h-screen p-4">
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">Dashboard</h2>
          <ul className="space-y-2 text-gray-700">
            <li className="hover:bg-blue-100 p-2 rounded cursor-pointer">🏠 Home</li>
            <li className="hover:bg-blue-100 p-2 rounded cursor-pointer">📦 Parcels</li>
            <li className="hover:bg-blue-100 p-2 rounded cursor-pointer">👤 Profile</li>
            <li className="hover:bg-blue-100 p-2 rounded cursor-pointer">⚙️ Settings</li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="col-span-9 p-6">
          {children}
        </div>
      </div>
    </div>
  );
}

export default DeshboardLayout;
