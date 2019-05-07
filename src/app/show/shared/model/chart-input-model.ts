import { Observable } from 'rxjs/Observable';

export class ChartInputModel {
    public chartId : string;
    public seriesName : string;
    public chartTitle : string;
    public chartSubtitle : string;
    public data : Observable<any>
}

