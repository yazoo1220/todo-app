import React from 'react';

const CSVImport = ({ csvData }) => {
    const handleUpload = () => {
        alert('CSV data uploaded successfully!');
    };

    return (
        <div>
            <h2>CSV Import</h2>
            <textarea
                readOnly
                value={csvData}
                rows={10}
                cols={50}
                style={{ marginBottom: '10px' }}
            />
            <br />
            <button onClick={handleUpload}>Upload CSV</button>
        </div>
    );
};

export default CSVImport;