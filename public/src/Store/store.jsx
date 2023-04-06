import { legacy_createStore as createStore } from "redux";
import Rootreducer from "../Reducers/Rootreducer";

const store=createStore(Rootreducer); 
export default store;