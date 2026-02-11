import {jsPDF} from "jspdf";
import html2canvas from "html2canvas";

function Actions({ preview, setPreview, invoice }) {
  const canPreview =
  invoice.invoiceNumber &&
  invoice.date &&
  invoice.client.name &&
  invoice.client.email &&
  invoice.client.address &&
  invoice.items.length > 0;

  async function exportPDF() {
    const invoiceEl = document.getElementById("invoice");
    if(!invoiceEl) return;
    const canvas = await html2canvas(invoiceEl, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const imgHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 5, 10, pdfWidth -10, imgHeight);
    pdf.save("invoice.pdf");
  }

  return (
    <> 
    <div className="flex justify-between mb-2">
      <button
        onClick={() => canPreview && setPreview(!preview)}
        className={`px-4 py-2 border rounded transition ${
          canPreview
            ? "bg-white hover:bg-gray-50"
            : "bg-gray-200 cursor-not-allowed"
        }`}
      >
        {preview ? "Edit" : "Preview"}
      </button>

      <button
        onClick={exportPDF}
        disabled={!preview}
        className={`font-medium px-4 py-2 rounded transition ${
          preview ? "bg-[#47484C] text-white hover:opacity-90" : "bg-gray-300 text-gray-600 cursor-not-allowed" }`}>
        Export PDF
      </button>
      </div>
      
    {!canPreview && (
      <p className="text-red-500 text-sm mt-2">
        Please fill all required fields and add at least one item before previewing.
      </p>
    )}
</>
  )};


export default Actions;
