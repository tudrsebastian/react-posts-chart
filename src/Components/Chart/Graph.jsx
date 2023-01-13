import { useEffect, useState } from 'react';
import { ParentSize } from '@visx/responsive';
import { Chart } from './Chart';
function Graph({ props }) {
  const [dates, setDates] = useState([]);
  useEffect(() => {
    let months = [];
    const getDates = async () => {
      props.forEach((el) => {
        const created = JSON.stringify(el);
        const dates = created.slice(6, 8);
        months.push(dates);
      });
    };
    getDates();
    setDates(months);
  }, []);
  const postsCount = {};
  dates.forEach((el) => {
    postsCount[el] = (postsCount[el] || 0) + 1;
  });
  const chartData = [
    { month: 'Jan', total: postsCount['01'] },
    { month: 'Feb', total: postsCount['02'] },
    { month: 'Mar', total: postsCount['03'] },
    { month: 'Apr', total: postsCount['04'] },
    { month: 'May', total: postsCount['05'] },
    { month: 'Jun', total: postsCount['06'] },
    { month: 'Jul', total: postsCount['07'] },
    { month: 'Aug', total: postsCount['08'] },
    { month: 'Sep', total: postsCount['09'] },
    { month: 'Oct', total: postsCount['10'] },
    { month: 'Nov', total: postsCount['11'] },
    { month: 'Dec', total: postsCount['12'] }
  ];

  return (
    <div className="graph">
      <h3>Number of posts created each month for 2019</h3>
      <Chart data={chartData} />
    </div>
  );
}

export default Graph;
