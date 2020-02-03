import * as typesConst from "../redux-constants";
import * as typesAction from "../redux-actions";

export type state = {
  list: {
    data: typesAction.Data[];
  };
};

export default function List(
  state = {
    list: {
      data: {}
    }
  },
  action: typesAction.TypeData
) {
  switch (action.type) {
    case typesConst.FETCH_SUCCESS_LIST:
      return { ...state, data: action.data };
    default:
      return state;
  }
}
