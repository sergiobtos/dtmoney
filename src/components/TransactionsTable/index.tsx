import { useTransactions } from "../../hooks/useTransactions";
import { formattedCurrency, formattedDate } from "../../utils/utils";

import { Container } from "./styles";

export function TransactionsTable() {
  const { transactions } = useTransactions();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {transaction.type === "withdraw" && "-"}
                {formattedCurrency(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>{formattedDate(transaction.createdAt)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}