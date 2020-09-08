const INITIAL_STATE = {
  isAuthenticated: false,
}

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOGIN': {
      return {
        ...state,
        isAuthenticated: true,
      }
    }
    case 'LOGOUT': {
      return {
        ...INITIAL_STATE,
      }
    }
    default: {
      // return throw new Error(`A ação ${action.type} não é suportada`)
      return {...state}
    }
  }
}

export {authReducer}
