import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchWether = createAsyncThunk(
    "wether/fetchWether", 
    async (city) => {
        const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
        //const apiKey = 'b1241ab9c491b2fb38b10fcd34bd338e';

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        const data = await response.json();
        return data
    }
)

const weatherSlice = createSlice({
    name: "wether",
    initialState: {
        city: "",
        data: {},
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchWether.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchWether.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchWether.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default weatherSlice.reducer;