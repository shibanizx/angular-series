import { WatchStatusModel } from './watch-status-model';
import { AudioLanguageModel } from './audio-language-model';
import { OnlineChannelModel } from './online-channel-model';
import { ProductionHouseModel } from './production-house-model';

export class FilterModel {
    isFavorite: boolean;
    isEnded: boolean;
    productionHouse: Array<ProductionHouseModel>;
    onlineChannel: Array<OnlineChannelModel>;
    watchStatus: Array<WatchStatusModel>;
    language: Array<AudioLanguageModel>;
}
