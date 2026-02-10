function InvoiceHeader({ invoice, setInvoice, preview }) {
  return (
    <div className="flex justify-between items-start border-b pb-4">
      <h1 className="text-3xl font-bold">Invoice</h1>

      {preview ? (
        <div className="text-sm text-right space-y-1">
          <p><span className="font-semibold">Invoice #:</span> {invoice.invoiceNumber}</p>
          <p><span>Date:</span> {invoice.date}</p>
          </div>
      ) : (
        <div className="grid gap-4">
          <input className="border p-2 rounded" placeholder="Invoice Number" value={invoice.invoiceNumber} required
            onChange={(e) =>
              setInvoice({ ...invoice, invoiceNumber: e.target.value })}/>

          <input type="date" className="border p-2 rounded" value={invoice.date}
            onChange={(e) =>
              setInvoice({ ...invoice, date: e.target.value })}/>
        </div>
      )}
    </div>
  );
}

export default InvoiceHeader;
