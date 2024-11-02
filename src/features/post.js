import { createSlice } from "@reduxjs/toolkit";
import { arrayMoveImmutable } from "array-move";

export const postSlice = createSlice({
  name: "search",
  initialState: {
    value: {
      marka: "none",
      model: "none",
      city: "none",
      year: 0,
      ban: "none",
      price: 0,
      mileage: 0,
      color: "none",
      yanacaq: "none",
      oturucu: "none",
      suretqutu: "none",
      hecm: 0,
      atgucu: 0,
      yer: 0,
      vinkod: "none",
      description: "none",
      additional: {
        yhl: false,
        mq: false,
        ds: false,
        ov: false,
        abs: false,
        pr: false,
        kl: false,
        lyuk: false,
        kondisioner: false,
        agk: false,
        ys: false,
        oi: false,
        yp: false,
      },
      postimages: [],
      phone: "",
      name: "",
      mail: "",
      modal: false,
    },
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
    changeYear: (state, action) => {
      state.value.year = action.payload;
    },
    changeBan: (state, action) => {
      state.value.ban = action.payload;
    },
    changePrice: (state, action) => {
      state.value.price = action.payload;
    },
    changeMileage: (state, action) => {
      state.value.mileage = action.payload;
    },
    changeColor: (state, action) => {
      state.value.color = action.payload;
    },
    changeYanacaq: (state, action) => {
      state.value.yanacaq = action.payload;
    },
    changeOturucu: (state, action) => {
      state.value.oturucu = action.payload;
    },
    changeSuretqutu: (state, action) => {
      state.value.suretqutu = action.payload;
    },
    changeHecm: (state, action) => {
      state.value.hecm = action.payload;
    },
    changeAtgucu: (state, action) => {
      state.value.atgucu = action.payload;
    },
    changeYer: (state, action) => {
      state.value.yer = action.payload;
    },
    changeVinkod: (state, action) => {
      state.value.vinkod = action.payload;
    },
    changeDescription: (state, action) => {
      state.value.description = action.payload;
    },
    changeAdditional: (state, action) => {
      state.value.additional = action.payload;
    },
    removeImage: (state, action) => {
      const index = state.value.postimages.indexOf(action.payload);
      if (index > -1) {
        state.value.postimages.splice(index, 1);
      }
    },
    changeImage: (state, action) => {
      state.value.postimages.push(action.payload);
    },
    changePosition: (state, action) => {
      const newArray = arrayMoveImmutable(
        state.value.postimages,
        action.payload.oldIndex,
        action.payload.newIndex
      );
      state.value.postimages = newArray;
    },
    changePhone: (state, action) => {
      state.value.phone = action.payload;
    },
    changeName: (state, action) => {
      state.value.name = action.payload;
    },
    changeMail: (state, action) => {
      state.value.mail = action.payload;
    },
    changeModal: (state, action) => {
      state.value.modal = !(state.value.modal);
    },
  },
});

export const {
  changeImage,
  changePosition,
  removeImage,
  changeMarka,
  changeModel,
  changeCity,
  changeYear,
  changeBan,
  changePrice,
  changeMileage,
  changeColor,
  changeYanacaq,
  changeOturucu,
  changeSuretqutu,
  changeHecm,
  changeAtgucu,
  changeYer,
  changeVinkod,
  changeDescription,
  changeAdditional,
  changePhone,
  changeName,
  changeMail,
  changeModal,
} = postSlice.actions;
export default postSlice.reducer;
