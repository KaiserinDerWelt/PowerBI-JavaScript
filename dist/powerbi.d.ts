/*! powerbi-client v2.0.0-beta.9 | (c) 2016 Microsoft Corporation MIT */
import * as service from './service';
import * as factories from './factories';
import * as models from 'powerbi-models';
import { IFilterable } from './ifilterable';
export { IFilterable, service, factories, models };
export { Report } from './report';
export { Tile } from './tile';
export { IEmbedConfiguration, Embed } from './embed';
export { Page } from './page';
export { Visual } from './visual';
declare global  {
    interface Window {
        Powerbi: typeof service.Service;
        powerbi: service.Service;
    }
}
