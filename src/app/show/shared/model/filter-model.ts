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
}
