import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemlist: [],
    rest:{}
  },
  reducers: {
    add: (state, action) => {
      const newItem = action.payload;

      const existing = state.itemlist.find((item) => item.id == newItem.id);

      if (existing) {
        existing.quantity++;
        existing.price += newItem.price;
      } else {
        state.itemlist.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          image: newItem.image,
          name: newItem.name
        });
      }
    },
    remove: (state, action) => {
      const id = action.payload.id;
      const price= action.payload.price;
      const existing  = state.itemlist.find(x=> x.id== id)
      if(existing.quantity==1 ){
        state.itemlist=state.itemlist.filter(item=>item.id != id)
      }else{
        existing.quantity--
        existing.price = existing.price-price
      }
    },
    addres:( state, action )=>{
      
state.rest={... action.payload}
    }
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
