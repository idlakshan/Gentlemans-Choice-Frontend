import React from 'react'
import { useSelector } from 'react-redux'
import { useGetUserStatsQuery } from '../../../../redux/features/stats/statsApi';
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import UserStats from './UserStats';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const UserDashboardMain = () => {

  const { user } = useSelector((state) => state.auth);
  const { data: stats, error, isLoading } = useGetUserStatsQuery(user?.email);

  console.log(stats);

  if (isLoading) {
    return <div className='text-center text-gray-500'>Loading....</div>
  }

  if (!stats) {
    return <div className='text-center text-gray-500'>No stats available.</div>
  }

  const data = {
    labels: ['Total Payments', 'Total Reviews', 'Totat Purchased Products'],
    datasets: [{
      label: 'User Stats',
      data: [stats.totalPayment, stats.totalReviews, stats.totalPurchasedProducts],
      backgroundColor: 'rgba(237, 56, 73, 0.2)',
      borderColor: 'rgba(237, 56, 73, 1)', 
      borderWidth: 1
    }]
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top'
      },
      Tooltip: {
        callbacks: {
          label: function (TooltipItem) {
            if (TooltipItem.label === 'Total Payments') {
              return `Total Payments: ${TooltipItem.raw.toFixed(2)}`
            }
            return `${TooltipItem.label} : ${TooltipItem.raw}`
          }
        }
      }
    }
  }

  return (
    <div className="flex flex-col bg-gray-50 overflow-hidden h-full">
      <div className="bg-white p-6" style={{ flex: '0 0 auto' }}>
        <div>
          <h1 className="text-2xl font-semibold mb-2">User Dashboard</h1>
          <p className="text-gray-500">Hi, {user?.username}! Welcome to your user dashboard</p>
        </div>
        <UserStats stats={stats} />
      </div>

      <div className="bg-white h-full">
        <Bar
          data={data}
          options={options}
          style={{ width: '100%', height: '80px', margin: 0 }}
        />
      </div>

    </div>
  );
}

export default UserDashboardMain
