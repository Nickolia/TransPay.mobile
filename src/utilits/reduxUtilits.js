export const createAction: ActionType = (type, fn = e => e) => payload => ({
    type,
    payload: fn(payload),
})

export const createReducer = ({ initialState = {}, actions = {} }) => (
    state = initialState,
    { type, payload },
) => {
    if (!actions[type]) return state
    return actions[type](state, payload)
}

export const mergeStateWithPayload = (state, payload) => ({ ...state, ...payload })

export const toggleProp = name => state => ({
    ...state,
    [name]: !state[name],
})

export const updateFieldWithPayload = name => (state, payload) => ({
    ...state,
    [name]: payload,
})

export const getLoadableAction = getLoader => ({ name, async }) => (...args) => (
    dispatch,
    getState,
) =>
    getLoader()
        .then(({ [name]: action }) => {
            const result = action(...args)
            async ? result(dispatch, getState) : dispatch(result)
        })
