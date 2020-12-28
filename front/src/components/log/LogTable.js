import React from 'react';
import './style.css';

const LogTable = (props) => {
    return <div className={"table-scrollable"}>
        <table className="table table-dark">
            <thead className="table table-dark">
            <tr>
                <th scope="col">Время</th>
                <th scope="col">Текст</th>
            </tr>
            </thead>
            <tbody>
            {props.data.map(it =>
                <tr>
                    <td>{it.timestamp}</td>
                    <td>{it.text}</td>
                </tr>
            )}
            </tbody>
        </table>
    </div>
}
export default LogTable;