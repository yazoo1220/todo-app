import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import CSVImport from './components/CSVImport';
import CalculationResults from './components/CalculationResults';
import PDFPreview from './components/PDFPreview';
import Login from './components/Login';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Dummy data for CSV import
    const csvData = `日付,時間,契約者名,発電量(kWh),単価(円/kWh)
2023-05-01,08:00,山田ソーラー,5.2,25
2023-05-01,09:00,山田ソーラー,7.8,25
2023-05-01,10:00,山田ソーラー,10.5,25
2023-05-01,08:00,田中エネルギー,4.7,23
2023-05-01,09:00,田中エネルギー,6.9,23
2023-05-01,10:00,田中エネルギー,9.8,23`;

    // Dummy data for calculation results
    const calculationResults = [
        {
            id: 1,
            contractorName: "山田ソーラー",
            date: "2023-05-01",
            totalPower: 23.5,
            averageUnitPrice: 25,
            totalAmount: 587.5
        },
        {
            id: 2,
            contractorName: "田中エネルギー",
            date: "2023-05-01",
            totalPower: 21.4,
            averageUnitPrice: 23,
            totalAmount: 492.2
        },
    ];

    // Dummy data for PDF preview
    const pdfPreviewData = {
        title: "太陽光発電レポート",
        generationDate: "2023-05-02",
        content: [
            {
                type: "table",
                headers: ["契約者", "日付", "総発電量 (kWh)", "平均単価 (円/kWh)", "合計金額 (円)"],
                rows: [
                    ["山田ソーラー", "2023-05-01", "23.5", "25", "587.5"],
                    ["田中エネルギー", "2023-05-01", "21.4", "23", "492.2"],
                ]
            },
            {
                type: "chart",
                title: "日別発電量",
                chartType: "bar",
                data: {
                    labels: ["山田ソーラー", "田中エネルギー"],
                    values: [23.5, 21.4]
                }
            },
            {
                type: "summary",
                text: "総発電量: 44.9 kWh\n合計金額: 1,079.7円"
            }
        ]
    };

    return (
        <Router>
            <div className="container">
                <h1>太陽光発電管理システム</h1>
                {isLoggedIn ? (
                    <>
                        <nav>
                            <ul>
                                <li><Link to="/csv-import">CSVインポート</Link></li>
                                <li><Link to="/calculation-results">計算結果</Link></li>
                                <li><Link to="/pdf-preview">PDFプレビュー</Link></li>
                            </ul>
                        </nav>
                        <Switch>
                            <Route path="/csv-import">
                                <CSVImport csvData={csvData} />
                            </Route>
                            <Route path="/calculation-results">
                                <CalculationResults results={calculationResults} />
                            </Route>
                            <Route path="/pdf-preview">
                                <PDFPreview pdfData={pdfPreviewData} />
                            </Route>
                        </Switch>
                    </>
                ) : (
                    <Login onLogin={() => setIsLoggedIn(true)} />
                )}
            </div>
        </Router>
    );
};

export default App;