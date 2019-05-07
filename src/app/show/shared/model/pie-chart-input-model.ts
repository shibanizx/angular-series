import { Observable } from 'rxjs/Observable';

export class PieChartInputModel {
    public chartId : string;
    public seriesName : string;
    public chartTitle : string;
    public data : Observable<Array<any>>
}
