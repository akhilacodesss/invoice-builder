import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function Actions({ preview, setPreview, invoice }) {
  async function exportPDF() {
    if (!preview) {
      alert("Switch to Preview before exporting PDF");
      return;
    }

    const invoiceEl = document.getElementById("invoice");
    const canvas = await html2canvas(invoiceEl, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const imgHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 10, pdfWidth, imgHeight);
    pdf.save("invoice.pdf");
  }

  function handlePreviewToggle() {
    if (
      !invoice.invoiceNumber.trim() ||
      !invoice.date ||
      !invoice.client.name.trim() ||
      !invoice.client.email.trim() ||
      !invoice.client.address.trim() ||
      invoice.items.length === 0
    ) {
      alert("Invoice number, date, client details, and at least one item are required");
      return;
    }

    setPreview(!preview);
  }


  return (
    <div className="flex justify-between mb-4">
      <button
        onClick={handlePreviewToggle}
        className="px-4 py-2 border border-gray-300 rounded bg-white hover:bg-gray-50 transition"
      >
        {preview ? "Edit" : "Preview"}
      </button>


      <button
        onClick={exportPDF}
        className="bg-[#47484C] text-white font-medium px-4 py-2 rounded hover:opacity-90 transition"
      >
        Export PDF
      </button>


    </div>
  );
}

export default Actions;
