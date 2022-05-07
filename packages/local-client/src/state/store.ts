import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";
import { persistMiddleware } from "./middlewares/persiste-middleware";

export const store = createStore(reducer, {}, applyMiddleware(persistMiddleware, thunk));
