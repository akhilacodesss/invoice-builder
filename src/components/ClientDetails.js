function ClientDetails({ invoice, setInvoice, preview }) {
  const { client } = invoice;

  return (
    <div className="border rounded p-4 space-y-2">
      <h3 className="text-sm font-semibold text-gray-600 uppercase">Bill To</h3>

      {preview ? (
        <div className="space-y-1">
          <p className="font-semibold text-base">{client.name}</p>
          <p className="font-semibold text-base">{client.email}</p>
          <p className="text-sm whitespace-pre-line text-gray-700">{client.address}</p>
        </div>
      ) : (
        <div className="space-y-2">
          <input className="border p-2 rounded w-full"
            placeholder="Client Name" value={client.name}
            onChange={(e) =>
              setInvoice({
                ...invoice,
                client: { ...client, name: e.target.value },
              })
            }
          />

          <input
            className="border p-2 rounded w-full"
            placeholder="Client Email"
            value={client.email}
            onChange={(e) =>
              setInvoice({
                ...invoice,
                client: { ...client, email: e.target.value },
              })
            }
          />

          <textarea
            className="border p-2 rounded w-full"
            placeholder="Client Address"
            value={client.address}
            onChange={(e) =>
              setInvoice({
                ...invoice,
                client: { ...client, address: e.target.value },
              })
            }
          />
        </div>
      )}
    </div>
  );
}

export default ClientDetails;
