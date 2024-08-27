import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../reducers/authSlice';
import bookReducer from '../reducers/bookSlice';
import courseReducer from '../reducers/courseSlice';
import examReducer from '../reducers/examSlice'
import lectureReducer from '../reducers/lectureSlice'
import adminReducer from '../reducers/adminSlice'
import landingReducer from '../reducers/landingSlice'

const store = configureStore({
    reducer: {
        auth: authReducer,
        book: bookReducer,
        course:courseReducer,
        exam: examReducer,
        lecture: lectureReducer,
        landing: landingReducer,
        admin: adminReducer,
    },
});

export default store;
