import css from "./TransactionHistory.module.css";
import clsx from "clsx";
function TransactionHistory({ items }) {
  return (
    <div className={css.tableContainer}>
      <table className={css.tableFlex}>
        <thead className={css.headTable}>
          <tr className={css.trTable}>
            <th className={css.th}>Type</th>
            <th className={css.th}>Amount</th>
            <th className={css.th}>Currency</th>
          </tr>
        </thead>
        {items.map((item) => {
          return (
            <tbody key={item.id} className={`${css.bodyTable} ${css.trColor}`}>
              <tr className={css.trWrapper}>
                <td className={css.td}>{item.type}</td>
                <td className={css.td}>{item.amount}</td>
                <td className={css.td}>{item.currency}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default TransactionHistory;
