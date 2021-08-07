import { createSlice } from '@reduxjs/toolkit';

const querySlice = createSlice({
    name: 'query',
    // Это
    initialState: {
        data: null,
    },
    reducers: {
        saveQuery(state, action) {
            state.data = action.payload;
        },
        deleteQuery(state) {
            state.data = null;
        },
    },
});

const { actions, reducer} = querySlice;

export const { saveQuery, deleteQuery } = actions;

export default reducer;
