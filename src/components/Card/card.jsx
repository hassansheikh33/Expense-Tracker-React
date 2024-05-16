import './card.css'

export default function Card(props) {
    const classList = props.className + ' card';
    return (
        <div className={classList}>{props.children}</div>
    )
}