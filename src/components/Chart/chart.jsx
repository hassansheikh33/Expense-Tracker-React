import './Chart.css'
import ChartBar from './ChartBar'

export default function Chart(props) {  //first we make a new array of values from the object taken in props

    const values = props.dataPoints.map(dataPoint => dataPoint.value);
    let fillHeight = Math.max.apply(0, values);

    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint => <ChartBar
                key={dataPoint.label}
                value={dataPoint.value}
                maxValue={fillHeight}
                label={dataPoint.label} />)}
        </div>
    )

}