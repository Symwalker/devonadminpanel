import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { BASE_URI } from "../Instance";

const STATUSES = {
    idle: "idle",
    loading: "loading",
    error: "error",
}

const ProductSlice = createSlice({
    name: "product",
    initialState: {
        contactdata: [],
        emails:[],
        articles:[],
        status: STATUSES,

    },
    extraReducers: (builder) => {
        builder.addCase(createContact.pending, (state, action) => {
            state.status = STATUSES.loading
        });
        builder.addCase(createContact.fulfilled, (state, action) => {
            state.status = STATUSES.idle
            state.contactdata.push(action.payload)
        });
        builder.addCase(createContact.rejected, (state, action) => {
            state.status = STATUSES.error
        });


        builder.addCase(fetchAllcontactss.pending, (state, action) => {
            state.status = STATUSES.loading
        });
        builder.addCase(fetchAllcontactss.fulfilled, (state, action) => {
            state.status = STATUSES.idle
            state.contactdata = action.payload
        });
        builder.addCase(fetchAllcontactss.rejected, (state, action) => {
            state.status = STATUSES.error
        });

        
        builder.addCase(fetchAllemails.pending, (state, action) => {
            state.status = STATUSES.loading
        });
        builder.addCase(fetchAllemails.fulfilled, (state, action) => {
            state.status = STATUSES.idle
            state.emails = action.payload
        });
        builder.addCase(fetchAllemails.rejected, (state, action) => {
            state.status = STATUSES.error
        });

        builder.addCase(createArticlee.pending, (state, action) => {
            state.status = STATUSES.loading
        });
        builder.addCase(createArticlee.fulfilled, (state, action) => {
            state.status = STATUSES.idle
            state.articles.push(action.payload)
        });
        builder.addCase(createArticlee.rejected, (state, action) => {
            state.status = STATUSES.error
        });

        
        builder.addCase(fetchAllArticless.pending, (state, action) => {
            state.status = STATUSES.loading
        });
        builder.addCase(fetchAllArticless.fulfilled, (state, action) => {
            state.status = STATUSES.idle
            state.articles = action.payload
        });
        builder.addCase(fetchAllArticless.rejected, (state, action) => {
            state.status = STATUSES.error
        });

    },
})

const { actions, reducer } = ProductSlice

export {

    reducer as ProductSlice,
}

export const createContact = createAsyncThunk("products/createcontact",async (con)=>{
    const data = await fetch('https://wandering-pink-fedora.cyclic.app/api/addcontact',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(con)
      })
    // const data = await fetch(`${BASE_URI}get`)
    const products = await data.json();
    // console.log(products);
    return products;    
})


export const createArticlee = createAsyncThunk("products/createarticle",async (con)=>{
    const data = await fetch('https://wandering-pink-fedora.cyclic.app/api/addarticle',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(con)
      })
    // const data = await fetch(`${BASE_URI}get`)
    const products = await data.json();
    // console.log(products);
    return products;    
})

// yeh pagination wali
// export const fetchproduct = createAsyncThunk("products/fetch", async (pagination, filter) => {
//     let queryString = '';
//     for (let key in pagination) {
//         queryString += `${key}=${pagination[key]}&`;
//     }
//     // console.log(queryString);
//     //   if(admin){
//     //     queryString += `admin=true`;
//     //   }
//     const data = await fetch(`https://wandering-pink-fedora.cyclic.app/api/products?${queryString}`)
//     // const data = await fetch(`${BASE_URI}get`)
//     const products = await data.json();
//     // console.log(products);
//     return products;
// })
// export const fetchAllProducts = createAsyncThunk("products/fetchAllProducts", async (pagination) => {
//     let queryString = '';
//     for (let key in pagination) {
//         queryString += `${key}=${pagination[key]}&`;
//     }
    
//     const data = await fetch(`https://wandering-pink-fedora.cyclic.app/api/allproducts?${queryString}`)
    
//     const products = await data.json();
//     // console.log(products);
//     return products;
// })

export const fetchAllcontactss = createAsyncThunk("products/fetchallcontacts",async ()=>{
    const data = await fetch(`https://wandering-pink-fedora.cyclic.app/api/allcontacts`)
    // const data = await fetch(`${BASE_URI}get`)
    const products = await data.json();
    // console.log(products);
    return products;
})

export const fetchAllemails = createAsyncThunk("products/fetchallemails",async ()=>{
    const data = await fetch(`https://wandering-pink-fedora.cyclic.app/api/allemails`)
    // const data = await fetch(`${BASE_URI}get`)
    const products = await data.json();
    // console.log(products);
    return products;
})

export const fetchAllArticless = createAsyncThunk("products/fetchallarticless",async ()=>{
    const data = await fetch(`https://wandering-pink-fedora.cyclic.app/api/allarticles`)
    // const data = await fetch(`${BASE_URI}get`)
    const products = await data.json();
    // console.log(products);
    return products;
})