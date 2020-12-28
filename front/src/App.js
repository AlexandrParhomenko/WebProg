import React, {useEffect} from 'react';
import { observer } from 'mobx-react';
import { toJS } from 'mobx';
import Time from './components/time/Time';
import Sidebar from './components/sidebar/Sidebar';
import Diag from "./components/diag/Diag";
import Widget from "./components/widget/Widget";
import LogTable from "./components/log/LogTable";
import './vendor/normalize.css';
import './App.css';
import cpuStorage from './storage/CPUstorage';
import ramStorage from './storage/RAMstorage';
import logStorage from './storage/LogStorage';

const App = observer(() => {
    useEffect(() => {
        cpuStorage.get();
        ramStorage.get();
        setInterval(
            () => {
                cpuStorage.get();
                ramStorage.get();
            }, 30000
        )
    }, [])
    useEffect(() => {
        logStorage.get();
        setInterval(
            () => {
                logStorage.get();
            }, 3000
        )
    }, [])

    const { data: { chart: { dataset: cpuDataSet, labels: cpuLabels}}} = cpuStorage;
    const { data: { chart: { dataset: ramDataSet, labels: ramLabels}}} = ramStorage;
    return (
        <React.Fragment>
            <header className="App-header">
                <h2 className={'header-title'}>Мониторинг CPU, RAM</h2>
                <Time/>
            </header>
            <main className="App-main">
                <Sidebar/>
                <div className={'main-content'}>
                    <div className={'main-charts-wrapper'}>
                        <div className={'diag-widget-wrapper'}>
                            <Widget title={'CPU'} value={toJS(cpuStorage.latestUsage)}/>
                            <Diag data={{
                                labels: toJS(cpuLabels),
                                datasets: [toJS(cpuDataSet)]
                            }}/>
                        </div>
                        <div className={'diag-widget-wrapper'}>
                            <Widget title={'RAM'} value={toJS(ramStorage.latestUsage)}/>
                            <Diag data={{
                                labels: toJS(ramLabels),
                                datasets: [toJS(ramDataSet)]
                            }}/>
                        </div>
                    </div>
                    <LogTable data = {toJS(logStorage.logs)}/>
                </div>
            </main>
            <footer className="App-footer">
                <h2>Пархоменко Александр, Гр. СМБ-701</h2>
            </footer>
        </React.Fragment>
    );
})

export default App;
