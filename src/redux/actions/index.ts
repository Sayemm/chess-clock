import {BUG_ADDED} from '../type';

// export default function bugAdded(description: string) {
//   return {
//     type: BUG_ADDED,
//     payload: {
//       description: description,
//     },
//   };
// }

export const bugAdded = (description: string) => ({
  type: BUG_ADDED,
  payload: {
    description: description,
  },
});
