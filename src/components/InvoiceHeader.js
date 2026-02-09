function InvoiceHeader({ invoice, setInvoice, preview }) {
  return (
    <div className="space-y-2">
      <h2 className="text-xl font-bold">Invoice</h2>

      {preview ? (
        <>
          <p><strong>Invoice #:</strong> {invoice.invoiceNumber}</p>
          <p><strong>Date:</strong> {invoice.date}</p>
        </>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          <input
            className="border p-2 rounded"
            placeholder="Invoice Number"
            value={invoice.invoiceNumber}
            required
            onChange={(e) =>
              setInvoice({ ...invoice, invoiceNumber: e.target.value })
            }
          />


          <input
            type="date"
            className="border p-2 rounded"
            value={invoice.date}
            onChange={(e) =>
              setInvoice({ ...invoice, date: e.target.value })
            }
          />
        </div>
      )}
    </div>
  );
}

export default InvoiceHeader;
