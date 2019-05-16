import { WatchStatusModel } from './watch-status-model';
import { AudioLanguageModel } from './audio-language-model';
import { OnlineChannelModel } from './online-channel-model';
import { ProductionHouseModel } from './production-house-model';

export class FilterModel {
    isFavorite: boolean;
    isEnded: boolean;
    productionHouse: Array<string>;
    onlineChannel: Array<string>;
    watchStatus: Array<number>;
    language: Array<string>;

    constructor() {
        this.isFavorite = false;
        this.isEnded = false;
        this.productionHouse = new Array<string>();
        this.onlineChannel = new Array<string>();
        this.watchStatus = new Array<number>();
        this.language = new Array<string>();
    }
}
