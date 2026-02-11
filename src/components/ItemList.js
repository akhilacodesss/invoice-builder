import { useState } from "react";

function ItemList({ invoice, setInvoice, preview }) {
  const [desc, setDesc] = useState("");
  const [qty, setQty] = useState("");
  const [rate, setRate] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const isValid = desc.trim() && qty > 0 && rate > 0;

  function addItem() {
    if (!isValid)
      return;

      if (editIndex !== null) {
        const updatedItems = [...invoice.items];
        updatedItems[editIndex] = {
          desc,
          qty: Number(qty),
          rate: Number(rate),
        };

        setInvoice({ ...invoice, items: updatedItems });
        setEditIndex(null);
      } else {
        setInvoice({
          ...invoice,
          items: [
            ...invoice.items,
            { desc, qty: Number(qty), rate: Number(rate) },
          ],
        });
      }

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
    <div className="space-y-4">
      <h3 className="font-semibold mb-2">Invoice Items</h3>

      {!preview && (
        <div className="grid grid-cols-4 gap-2 mb-3">
          <input className="border p-2" placeholder="Description" value={desc}
            onChange={(e) => setDesc(e.target.value)} />
          <input type="number" className="border p-2" placeholder="Qty" value={qty}
            onChange={(e) => setQty(e.target.value)} />
          <input type="number" className="border p-2" placeholder="Rate" value={rate}
            onChange={(e) => setRate(e.target.value)} />
          <button disabled={!isValid} onClick={addItem}
            className={`rounded px-4 py-2 transition  ${isValid
                ? "bg-[#47484C] text-white hover:opacity-90"
                : "bg-gray-300 cursor-not-allowed"
              }`}>
                {editIndex !== null ? "Update" : "Add"}
          </button>
        </div>
      )}

      <table className="w-full text-sm border-t">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-right p-2">Description</th>
            <th className="text-right p-2">Qty</th>
            <th className="text-right p-2">Rate</th>
            <th className="text-right p-2">Amount</th>
            {!preview && <th className="text-right p-2"></th>}
          </tr>
        </thead>
        <tbody>
          {invoice.items.map((item, i) => (
            <tr key={i} className="border-b border-gray-200">
              <td className="p-2">{item.desc}</td>
              <td className="p-2 text-right">{item.qty}</td>
              <td className="p-2 text-right">₹ {item.rate}</td>
              <td className="p-2 text-right">{(item.qty * item.rate)}</td>

              {!preview && (
                <td className="p-2 text-right">
                  <button
                    onClick={() => {
                      setDesc(item.desc);
                      setQty(item.qty);
                      setRate(item.rate);
                      setEditIndex(i);
                    }}
                    className="text-blue-500 hover:underline mr-2"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => removeItem(i)}
                    className="text-red-500 hover:underline">
                    Remove
                  </button>
                </td>
              )}
            </tr>
          ))}

          {invoice.items.length === 0 && (
            <tr>
              <td
                colSpan={preview ? 4 : 5}
                className="text-center text-gray-500 p-4"
              >
                No items added
              </td>
            </tr>
          )}

        </tbody>
      </table>
    </div>
  );
}

export default ItemList;
