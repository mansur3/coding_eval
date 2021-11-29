import {createStore} from "redux"

import {LoginReducer} from "./Login/reducer.js";

export const store = createStore(LoginReducer);