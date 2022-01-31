import './ChartBar.css';
const ChartBar = props => {
    let percentValue = "0%";
    if(props.maxValue > 0){
         percentValue = Math.round(props.value / props.maxValue * 100) + "%";
    }

    return <div className="chart-bar">
        <div className="chart-bar__inner">
            {/* Adding dynamic style in div for other (-) style keys use like 'background-color' or backgroundColor */}
        <div className="chart-bar__fill" style={{height:percentValue, 'background-color':'red'}}></div>
        </div>
        <div className="chart-bar__label">{props.label}</div>
    </div>
}

export default ChartBar;