import { ProductionHouseModel } from "./production-house-model";
import { WatchStatusModel } from "./watch-status-model";
import { OnlineChannelModel } from "./online-channel-model";
import { AudioLanguageModel } from "./audio-language-model";
import { GenreModel } from "./genre-model";
import { RatingsModel } from './ratings-model';

export class ShowModel {

    showId : string;
    showName : string;
    productionHouse : ProductionHouseModel;
    watchStatus : WatchStatusModel;
    onlineChannel : OnlineChannelModel;
    language : AudioLanguageModel;
    ended : boolean = false;
    numberOfSeasons : number;
    genre : Array<GenreModel>;
    totalEpisodes : number;
    remarks : string;
    episodeLength : number;
    addedOn : number;
    modifiedOn : number = Date.now();
    rating : RatingsModel;
    favorite : boolean = false;
}
