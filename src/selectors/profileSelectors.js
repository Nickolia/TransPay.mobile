const getProfileRoot = (state) => state.profile


export const getBalanceProfileSelector = (state) => getProfileRoot(state).balance
