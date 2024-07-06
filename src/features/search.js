import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name: "search",
    initialState: { value: 
        {
         marka: "all",
         model: "all", 
         city: "all", 
         minyear: "0", 
         maxyear: "1000000", 
         ban: "all",
         minprice: "0",
         maxprice: "1000000",
         color: "all",
         ownertype: "all" 
        }
    },
    reducers: {
        changeMarka: (state, action) => {
            state.value.marka = action.payload;
        },
        changeModel: (state, action) => {
            state.value.model = action.payload;
        },
        changeCity: (state, action) => {
            state.value.city = action.payload;
        },
        changeMinYear: (state, action) => {
            state.value.minyear = action.payload;
        },
        changeMaxYear: (state, action) => {
            state.value.maxyear = action.payload;
        },
        changeMinPrice: (state, action) => {
            state.value.minprice = action.payload;
        },
        changeMaxPrice: (state, action) => {
            state.value.maxprice = action.payload;
        },
        changeBan: (state, action) => {
            state.value.ban = action.payload;
        },
        changeColor: (state, action) => {
            state.value.color = action.payload;
        },
        changeOwnerType: (state, action) => {
            state.value.ownertype = action.payload;
        },
    }
})

export const {changeMarka, changeMaxPrice, changeMinPrice, changeModel, changeCity, changeMinYear, changeMaxYear, changeBan, changeColor, changeOwnerType} =  searchSlice.actions;
export default searchSlice.reducer;
