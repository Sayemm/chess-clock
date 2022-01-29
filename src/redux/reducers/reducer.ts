import {BUG_ADDED, BUG_REMOVED} from '../type';

/* eslint-disable @typescript-eslint/no-unused-vars */
let lastId = 0;

interface Bug {
  description?: string;
  id?: number;
}

interface BugAddAction {
  type: string;
  payload: Bug;
}

interface BugInterface {
  id: number;
  description: string;
  resolved: boolean;
}
interface BugState {
  bugs: BugInterface[];
  currentUser: object;
}
const initialState: BugState = {
  bugs: [],
  currentUser: {},
};

export default function reducer(
  state: BugState = initialState,
  action: BugAddAction,
) {
  if (action.type === BUG_ADDED) {
    return [
      ...state,
      {
        id: ++lastId,
        description: action.payload.description,
        resolve: false,
      },
    ];
  } else if (action.type === BUG_REMOVED) {
    return state.filter((bug: Bug) => bug.id !== action.payload.id);
  }

  return state;
}

// Design the Store
const store = {
  bugs: [
    {
      id: 1,
      description: 'hello',
      resolved: false,
    },
  ],
  currentUser: {},
};

// Define the actions
const action1 = {
  type: 'bugAdded',
  payload: {
    description: 'fdj',
  },
};

const action2 = {
  type: 'bugRemoved',
  payload: {
    id: 1,
  },
};
