import './chart.scss'
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { Month: 'January', Total: 1200 },
    { Month: 'February', Total: 2200 },
    { Month: 'March', Total: 900 },
    { Month: 'April', Total: 1700 },
    { Month: 'May', Total: 2300 },
    { Month: 'June', Total: 1500 },
  ];

const Chart = ({aspect, title}) => {
    return(
        <div className='chart'>
        <div className="title">{title}</div>
        <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" className='chartGrid'/>
          <XAxis dataKey="Month" stroke='gray'/>
          <Tooltip />
          <Area type="monotone" dataKey="Month" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="Total" stackId="1" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
      </div>
    );
}

export default Chart