import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


 export const fetchProductsThunk=createAsyncThunk('products/fetchproductsThunk',async()=>{
   const response=await axios.get("https://dummyjson.com/products") 
   console.log(response)
    localStorage.setItem('products',JSON.stringify(response.data.products))
   return response.data.products
})


const productSlice=createSlice({
    name:'products',
    initialState:{
        product:[],
        loading:false,
        error:"" ,
        productsPerpage:10,
        currentPage:1
        
    },
    reducers:{

        nextpage(state){
            state.currentPage++
        },
        prevpage(state){
            state.currentPage--
        },
        search(state,action){
            state.product=state.product.filter(item=>item.title.toLowerCase().includes(action.payload.toLowerCase()))
        }

    },
                //builder:to build the actions
    extraReducers:(builder)=>{
        //3 types action done.fulfilled time was go to product
        builder.addCase(fetchProductsThunk.fulfilled,(state,action)=>{
            state.product=action.payload
            state.loading=false
        }),
        //pending time was to go loading false situation because the action was done and the result coming time delay was showing action.
        builder.addCase(fetchProductsThunk.pending,(state,action)=>{
            state.product=[]
            state.loading=true
        }),
        //The name is enough the action was rejected we send to work an action but returened as rejected.and this is to go error situation
        builder.addCase(fetchProductsThunk.rejected,(state,action)=>{
            state.product=[]
            state.loading=false
            state.error="Api fetching Failed!!"
        })
    
    }
})

export default productSlice.reducer

export const{nextpage,prevpage,search}=productSlice.actions

     

    

