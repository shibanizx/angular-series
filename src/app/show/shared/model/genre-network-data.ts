import { ProductionHouseModel } from './production-house-model';
import { GenreModel } from './genre-model';
import { ShowModel } from './show-model';

export class GenreNetworkData {
    public genreData : Array<GenreModel>;
    public networkList : Array<ProductionHouseModel>;
}

export class NetworkData {
    public productionHouse : string;
    public colorCode : string;
    public genreCountList : Array<number>
    public showList : Array<ShowModel>
}

