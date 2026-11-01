export const RecentTransactions = () => {
  const transactions = [
    {
      id: 1,
      date: "12 Apr",
      amount: -7.99,
      name: "YouTube",
      method: "PayPal",
      category: "Subscription",
    },
    {
      id: 2,
      date: "8 Apr",
      amount: -12.99,
      name: "McDonald's",
      method: "Visa **1234",
      category: "Food",
    },
  ];

  return (
    <section className="mt-8 rounded-xl border border-gray-200 bg-white p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">
          Recent Transactions
        </h2>
        <button className="text-sm font-medium text-orange-500 hover:text-orange-600">
          View all
        </button>
      </div>
      <div className="mt-4 w-full overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-gray-100 text-sm text-gray-700">
            <tr>
              <th className="px-4 py-4">DATE</th>
              <th className="px-4 py-4">AMOUNT</th>
              <th className="px-4 py-4">PAYMENT NAME</th>
              <th className="px-4 py-4">METHOD</th>
              <th className="px-4 py-4">CATEGORY</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr
                key={transaction.id}
                className="border-b border-gray-100 text-sm text-gray-700"
              >
                <td className="px-4 py-4">{transaction.date}</td>
                <td
                  className={`px-4 py-4 font-medium ${
                    transaction.amount >= 0 ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {transaction.amount < 0 ? "-" : "+"}
                  ETB {Math.abs(transaction.amount).toFixed(2)}
                </td>
                <td className="px-4 py-4">{transaction.name}</td>
                <td className="px-4 py-4">{transaction.method}</td>
                <td className="px-4 py-4">{transaction.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
