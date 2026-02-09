function ClientDetails({ invoice, setInvoice, preview }) {
  const { client } = invoice;

  return (
    <div className="border rounded p-4 space-y-2">
      <h3 className="font-semibold">Client Information</h3>

      {preview ? (
        <>
          <p>{client.name}</p>
          <p>{client.email}</p>
          <p className="whitespace-pre-line">{client.address}</p>
        </>
      ) : (
        <>
          <input
            className="border p-2 rounded w-full"
            placeholder="Client Name"
            value={client.name}
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
        </>
      )}
    </div>
  );
}

export default ClientDetails;
