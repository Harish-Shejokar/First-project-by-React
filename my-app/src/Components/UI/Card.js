import './Card.css';
import '../Expenses/ExpenseItem'
const Card = (props) => {

    const classes = 'card ' + props.className;
    
    return  (<div id={props.id} className={classes}>{props.children}</div>);
}

export default Card;