import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/mapTo';
import { Observable } from 'rxjs/Observable';

export const testEpic = (action$: Observable<any>) =>
  action$.filter(action => action.type === 'SET_TEST_1')
    .delay(3000)
    .mapTo({ type: 'SET_TEST', payload: 'PONG' });
