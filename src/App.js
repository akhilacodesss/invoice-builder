import { useState, useEffect } from "react";
import InvoiceHeader from "./components/InvoiceHeader";
import ClientDetails from "./components/ClientDetails";
import ItemList from "./components/ItemList";
import Summary from "./components/Summary";
import Actions from "./components/Actions";

function App() {
  const [invoice, setInvoice] = useState({
    invoiceNumber: "",
    date: "",
    client: {
      name: "",
      email: "",
      address: "",
    },
    items: [],
  });

  const [preview, setPreview] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("invoice");
    if (saved) setInvoice(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("invoice", JSON.stringify(invoice));
  }, [invoice]);

  return (
   <div className="min-h-screen bg-gradient-to-br from-[#1e2023] to-[#47484c] py-10 flex justify-center">
      <div className="w-full max-w-xl space-y-4">
        <Actions preview={preview} setPreview={setPreview} invoice={invoice} />
      
      <div id="invoice" className="bg-white w-full max-w-2xl rounded-xl shadow-lg p-6 space-y-6" >
        <InvoiceHeader invoice={invoice} setInvoice={setInvoice} preview={preview} />

        <ClientDetails invoice={invoice} setInvoice={setInvoice} preview={preview} />

        <ItemList invoice={invoice} setInvoice={setInvoice} preview={preview} />

        <Summary items={invoice.items} />
        </div>
      </div>
    </div>
  );
}

export default App;
