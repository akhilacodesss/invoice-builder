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
    <div className="flex justify-between mb-4">
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
      {preview && (
      <button
        onClick={exportPDF}
        className="bg-[#47484C] text-white font-medium px-4 py-2 rounded hover:opacity-90 transition"
      >
        Export PDF
      </button>
      )}
    </div>
  );
}

export default Actions;
