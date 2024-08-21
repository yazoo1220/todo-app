import React from 'react';

const CalculationResults = ({ results }) => {
    return (
        <div>
            <h2>計算結果</h2>
            <table>
                <thead>
                    <tr>
                        <th>契約者名</th>
                        <th>日付</th>
                        <th>総発電量 (kWh)</th>
                        <th>平均単価 (円/kWh)</th>
                        <th>合計金額 (円)</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map(result => (
                        <tr key={result.id}>
                            <td>{result.contractorName}</td>
                            <td>{result.date}</td>
                            <td>{result.totalPower}</td>
                            <td>{result.averageUnitPrice}</td>
                            <td>{result.totalAmount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CalculationResults;