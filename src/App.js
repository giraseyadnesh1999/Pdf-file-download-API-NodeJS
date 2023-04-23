import React from 'react';

const DownloadPDF = () => {
  const handleDownloadPDF = () => {
    fetch('http://localhost:4000/api/download-pdf')
      .then(response => {
        console.log(response)
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.blob();
      })
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'example.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      })
      .catch(error => {
        console.error('Error fetching PDF: ', error);
      });
  };

  return (
    <button onClick={handleDownloadPDF}>
      Download PDF
    </button>
  );
};

export default DownloadPDF;
