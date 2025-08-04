import React from 'react';

export default function Dashboard() {
  const currentHour = new Date().getHours();
  const greeting =
    currentHour < 12
      ? 'Good Morning'
      : currentHour < 18
      ? 'Good Afternoon'
      : 'Good Evening';

  return (
    <div className="flex min-h-screen font-sans bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r shadow-md">
        <div className="p-6 text-xl font-bold border-b">Welcome</div>
        <nav className="flex flex-col p-4 space-y-3 text-gray-700">
          <a href="#" className="hover:text-blue-600">Profile</a>
          <a href="#" className="hover:text-blue-600">My Exams</a>
          <a href="#" className="hover:text-blue-600">Scheduled Exams</a>
          <a href="#" className="hover:text-blue-600">Result</a>
          <a href="#" className="hover:text-blue-600">Change Password</a>
          <a href="#" className="hover:text-blue-600">Logout</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Top Header */}
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">{greeting}</h1>
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
        </header>

        {/* Stats Cards */}
        <section className="grid grid-cols-2 gap-4 mb-6">
          <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">Card 1</div>
          <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">Card 2</div>
        </section>

        {/* Result Table */}
        <section className="bg-white rounded-xl shadow overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-gray-100 text-gray-700 uppercase">
              <tr>
                <th className="px-4 py-3">S.No</th>
                <th className="px-4 py-3">Exams</th>
                <th className="px-4 py-3">Marks</th>
                <th className="px-4 py-3">Total M</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {/* Sample Row */}
              <tr>
                <td className="px-4 py-3">1</td>
                <td className="px-4 py-3">Math</td>
                <td className="px-4 py-3">85</td>
                <td className="px-4 py-3">100</td>
                <td className="px-4 py-3 text-green-600">Passed</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

