import { Module, customModule, Container, Panel } from '@ijstech/components';
import ScomTradingChart from '@scom/scom-trading-chart';

@customModule
export default class Module1 extends Module {
    private tradingChart: ScomTradingChart;
    private pnlMainTest: Panel;

    constructor(parent?: Container, options?: any) {
        super(parent, options);
    }

    init() {
        super.init();
        this.tradingChart = new ScomTradingChart(undefined, {
            cryptoName: 'Bitcoin',
            width: 1000
        });
        // setTimeout(() => {
        //     this.tradingChart.setTag({
        //         ...this.tradingChart.tag,
        //         theme: 'dark'
        //     })
        // }, 5000);
        this.pnlMainTest.appendChild(this.tradingChart);
    }

    render() {
        return <i-panel id="pnlMainTest" />
    }
}