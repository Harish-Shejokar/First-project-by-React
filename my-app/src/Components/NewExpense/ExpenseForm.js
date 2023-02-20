import "./ExpenseForm.css";

const ExpenseForm = () => {

  // const input = document.getElementsByTagName("input");

  // input.addEventListener('onChange', (event)=>{
  //   console.log(event.target.value);
  // })

  const typeHandler = (event)=>{
      console.log(event.target.value);
  }

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={typeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.1" />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input onChange={typeHandler} type="date" min="2019-0-22" max="2023-12-31" />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
