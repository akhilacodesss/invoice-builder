# 🧾 Invoice Builder (React)

A responsive invoice generation application built with **React JS** that allows users to create, manage, and export invoices. Users can enter client details, add multiple line items, automatically calculate totals and taxes, preview the invoice, and export it as a PDF.


## 🚀 Features

* Create invoices with **invoice number** and **date**
* Enter **client details** (name & address)
* Add multiple invoice items with:

  * description
  * quantity
  * unit rate
  * auto-calculated amount
* Automatically calculates:

  * subtotal
  * tax
  * grand total
* **Preview mode** to view a read-only receipt
* **Export invoice as PDF**
* Data persistence using **localStorage**
* Responsive UI styled with **Tailwind CSS**

## 🛠 Tech Stack

* **React JS**
* **React Hooks** (`useState`, `useEffect`)
* **Tailwind CSS** (CDN)
* **jsPDF**
* **html2canvas**
* **localStorage**


## ⚙️ How It Works

* All invoice data is managed in a single state object in `App.jsx`
* Child components receive data and update functions via props
* Totals are derived using array operations (`reduce`)
* Invoice data is saved to **localStorage** on every change
* PDF export captures the invoice UI exactly as shown using `html2canvas` and `jsPDF`

## 📄 PDF Export

* The invoice preview is converted into an image
* The image is embedded into a PDF
* Ensures layout integrity and accurate export
