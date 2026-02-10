function Summary({ items }) {
  const subtotal = items.reduce(
    (sum, item) => sum + item.qty * item.rate,
    0
  );
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <div className="flex justify-end ">
      <div className="w-64 border rounded-lg p-4 bg-gray-50 space-y-2">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹ {subtotal}</span>
        </div>
        <div className="flex justify-between">
          <span>Tax (10%)</span>
          <span>₹ {tax}</span>
        </div>
        <div className="flex justify-between font-bold">
          <span>Total</span>
          <span>₹ {total}</span>
        </div>
      </div>
    </div>
  );
}

export default Summary;
