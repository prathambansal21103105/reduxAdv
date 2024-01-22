import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{visible:0,items:[],totalQuantity:0},
    reducers:{
        replaceCart(state,action){
            state.items=action.payload.items;
            state.totalQuantity=action.payload.totalQuantity;
        },
        toggle(state){
            state.visible=!state.visible;
        },
        addItem(state,action){
            const product=action.payload;
            const id=product.id;
            let index=-1;
            for(let i=0;i<state.items.length;i++){
                if(state.items[i].id===id){
                    index=i;
                    break;
                }
            }
            if(index===-1){
                state.items.push({...product,total:product.price,quantity:1});
                state.totalQuantity+=1;
            }
            else{
                const oldItem=state.items[index];
                const newItem={...oldItem,quantity:oldItem.quantity+1,total:(oldItem.quantity+1)*oldItem.price};
                state.items[index]=newItem;
                state.totalQuantity+=1;
            }
        },
        removeItem(state,action){
            const product=action.payload;
            const id=product.id;
            let index=-1;
            for(let i=0;i<state.items.length;i++){
                if(state.items[i].id===id){
                    index=i;
                    break;
                }
            }
            if(index===-1){
                throw new Error("Element not found!!");
            }
            else{
                const oldItem=state.items[index];
                const newItem={...oldItem,quantity:oldItem.quantity-1,total:(oldItem.quantity-1)*oldItem.price};
                state.items[index]=newItem;
                if(state.items[index].quantity===0){
                    state.items.splice(index,1);
                }
                state.totalQuantity-=1;
            }
        }
    }
})

export const cartActions=cartSlice.actions;
export default cartSlice;