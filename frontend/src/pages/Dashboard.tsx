const Dashboard = () => {
  return (
    <section className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Welcome to Your Dashboard</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Projects</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Manage and view your projects.</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Analytics</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Track your portfolio visits and performance.</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Settings</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Update your profile and preferences.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
