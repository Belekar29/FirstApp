import './Chart.css';
import ChartBar from './ChartBar';

const Chart = props =>{

    // Getting specific data (value) from array of objects
    const maxVal = Math.max(...props.data.map(dataPoint=> dataPoint.value));
    return <div className="chart">
        {props.data.map(dataPoint=><ChartBar key={dataPoint.label} value={dataPoint.value} label={dataPoint.label} maxValue={maxVal} />)}
        
    </div>;
}

export default Chart;