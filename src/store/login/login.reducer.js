export default function user(state = [], action) {
    switch (action.type) {
      case 'ADD_INFO_USER':
        return action.username;
      default:
        return state;
    }
  }
  