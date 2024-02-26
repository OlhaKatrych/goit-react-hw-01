import css from "./TransactionHistory.module.css";

function TransactionHistory({ items }) {
  console.log(items);
  return (
    <div className={css.tableContainer}>
    <table className={css.tableFlex}>
      <thead className={css.tTable}>
        <tr className={css.trTable}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {items.map((item) => {
        return (
          <tbody key={item.id} className={css.bodyTable}>
            <tr>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          </tbody>
          
        );
      })}
    </table>
    </div>
  );
}

export default TransactionHistory;
