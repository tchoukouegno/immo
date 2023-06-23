import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer  } from 'recharts';


const data = [
  {
    name: 'Semaine 1',
    entree: 1526700,
    sortie: 63000,
    gain: 1463700,
  },
  {
    name: 'Semaine 2',
    entree: 1507500,
    sortie: 119000,
    gain: 1388500,
  },
  {
    name: 'Semaine 3',
    entree: 1117500,
    sortie: 166000,
    gain: 951500,
  },
  {
    name: 'Semaine 4',
    entree: 1548000,
    sortie: 293500,
    gain: 1254500,
  },
];

export function FitnessChart() {



  return (

    <div  className='barChart' >
        <h1 className='statTitle' >Statistique Du Mois En Cours...</h1>

    
    
    <BarChart
      width={1000}
      height={500}
      data={data}
      margin={{
        top: 5, right: 30, left: 20, bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name"  type={'category'} stroke="#9B9EAC" tickLine={false} />
      <YAxis  />
      <Tooltip />
      <Legend />
      <Bar dataKey="entree" stackId="a" fill="#8884d8"  />
      <Bar dataKey="sortie" stackId="a" fill="#82ca9d" />
      <Bar dataKey="gain" fill="#ffc658" />
    </BarChart>

    </div>
  );
}