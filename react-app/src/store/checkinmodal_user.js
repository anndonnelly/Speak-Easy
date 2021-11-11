// const GET_CHECKIN_USER = "checkins/GET_CHECKIN_USER";

// const addCheckinUserAction = (user) => {
//   return {
//     type: GET_CHECKIN_USER,
//     user,
//   };
// };

// export const loadCheckinUser = (id) => async (dispatch) => {
//   const res = await fetch(`/api/users/${id}`);
//   if (res.ok) {
//     const user = await res.json();
//     dispatch(addCheckinUserAction(user));
//   } else if (res.status < 500) {
//     const data = await res.json();
//     if (data.errors) {
//       return data.errors;
//     }
//   } else {
//     return ["An error occurred. Please try again."];
//   }
// };

// const initialState = {};
// export default function selectedUser(state = initialState, action) {
//   const newState = { ...state };
//   switch (action.type) {
//     case GET_CHECKIN_USER:
//       return action.user;
//     default:
//       return state;
//   }
// }
