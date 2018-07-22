import { MongoObservable } from 'meteor-rxjs';
import { Episode } from '../models';

export const Episodes = new MongoObservable.Collection<Episode>('episodes');
