import React, {useState} from 'react';
import './style.css';
import cpuStorage from "../../storage/CPUstorage";
import ramStorage from "../../storage/RAMstorage";

const Sidebar = (props) => {
    const [selection, setSelection] = useState('0');
    const [usage, setUsage] = useState(0);
    return (
        <aside className="Side-bar">
            <form>
                <div className="input-group">
                    <select className='custom-select' id = "inputGroupSelect" value={selection} onChange={event => {
                        setSelection(event.target.value)
                        console.log(event);
                        console.log(event.target.value);
                    }}>
                        <option value="0">Выберите пункт</option>
                        <option value="CPU">CPU</option>
                        <option value="RAM">RAM</option>
                    </select>
                    <div className="input-group-append">
                        <label className="input-group-text" htmlFor="inputGroupSelect">Тип</label>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="inputMonitoringValue">Введите значение</label>
                    <input type="number" className="form-control" id="inputMonitoringValue" value = {usage} onChange={event => {setUsage(event.target.value)}}/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={e => {
                    e.preventDefault();
                    if(selection === 'CPU'){
                        cpuStorage.create(usage);
                    } else if(selection === 'RAM'){
                        ramStorage.create(usage);
                    }
                }}>Сохранить
                </button>
            </form>
        </aside>
    );
}
export default Sidebar;
