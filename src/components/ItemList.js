import { useState } from "react";

function ItemList({ invoice, setInvoice, preview }) {
  const [desc, setDesc] = useState("");
  const [qty, setQty] = useState("");
  const [rate, setRate] = useState("");

  function addItem() {
    if (!desc.trim() || !qty || !rate) {
      alert("Please fill all item fields");
      return;
    }

    setInvoice({
      ...invoice,
      items: [...invoice.items, { desc, qty: +qty, rate: +rate }],
    });

    setDesc("");
    setQty("");
    setRate("");
  }

  function removeItem(index) {
    setInvoice({
      ...invoice,
      items: invoice.items.filter((_, i) => i !== index),
    });
  }

  return (
    <div className="border rounded p-4">
      <h3 className="font-semibold mb-2">Invoice Items</h3>

      {!preview && (
        <div className="grid grid-cols-4 gap-2 mb-3">
          <input
            className="border p-2"
            placeholder="Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <input
            type="number"
            className="border p-2"
            placeholder="Qty"
            value={qty}
            onChange={(e) => setQty(e.target.value)}
          />
          <input
            type="number"
            className="border p-2"
            placeholder="Rate"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
          <button
            onClick={addItem}
            className="bg-[#47484C] text-white font-medium px-4 py-2 rounded hover:opacity-90 transition"
          >
            Add
          </button>


        </div>
      )}

      <table className="w-full text-sm">
        <thead>
          <tr className="border-b">
            <th>Description</th>
            <th>Qty</th>
            <th>Rate</th>
            <th>Amount</th>
            {!preview && <th></th>}
          </tr>
        </thead>
        <tbody>
          {invoice.items.map((item, i) => (
            <tr key={i} className="border-b">
              <td>{item.desc}</td>
              <td>{item.qty}</td>
              <td>₹ {item.rate}</td>
              <td>{item.qty * item.rate}</td>
              {!preview && (
                <td>
                  <button
                    onClick={() => removeItem(i)}
                    className="text-red-500"
                  >
                    Remove
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ItemList;
