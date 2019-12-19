import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { rootReducer,rootSaga } from './saga';

const logger = createLogger({
    collapsed: true,
});
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;
let middleware = [sagaMiddleware,logger];

export default function configureStore() {
    
    const store = createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(...middleware))
      );
      
    sagaMiddleware.run(rootSaga);

    return store;
}
