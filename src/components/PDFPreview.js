import React from 'react';

const PDFPreview = ({ pdfData }) => {
    return (
        <div>
            <h2>{pdfData.title}</h2>
            <p>生成日: {pdfData.generationDate}</p>
            {pdfData.content.map((item, index) => (
                <div key={index}>
                    {item.type === 'table' && (
                        <table>
                            <thead>
                                <tr>
                                    {item.headers.map((header, i) => (
                                        <th key={i}>{header}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {item.rows.map((row, i) => (
                                    <tr key={i}>
                                        {row.map((cell, j) => (
                                            <td key={j}>{cell}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                    {item.type === 'chart' && (
                        <div>
                            <h3>{item.title}</h3>
                            <p>Chart placeholder: {item.chartType} chart</p>
                        </div>
                    )}
                    {item.type === 'summary' && (
                        <p>{item.text}</p>
                    )}
                </div>
            ))}
        </div>
    );
};

export default PDFPreview;