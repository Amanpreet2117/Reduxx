const INIT_STATE = {
    cartdata: []
};


export const carddata = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "ADD_To_CART":

        const IteamIndex = state.cartdata.findIndex((iteam)=> iteam.id === action.payload.id);
         console.log("itemm",IteamIndex);
        if(IteamIndex >= 0){
            state.cartdata[IteamIndex].qnty +=1
            return {  
                ...state,
                cartdata:[...state.cartdata]
            }
        }else{
            const temp = {...action.payload,qnty:1}
             return {
                ...state,
                cartdata: [...state.cartdata, temp]
            }
        }

           

        case "DEL_To_CART":
            const data = state.cartdata.filter((el)=>el.id !== action.payload); 
            // console.log(data);

            return {
                ...state,
                cartdata:data
            }

        case "RMV_ONE":
            const IteamIndex_dec = state.cartdata.findIndex((iteam)=> iteam.id === action.payload.id);
             console.log("iteamdec",IteamIndex_dec);
            if(state.cartdata[IteamIndex_dec].qnty > 1){
                const dltiteams = state.cartdata[IteamIndex_dec].qnty -= 1
                console.log("rmv",[...state.cartdata,dltiteams]);

                return {
                    ...state,
                    cartdata:[...state.cartdata]
                }
            }else if(state.cartdata[IteamIndex_dec].qnty === 1 ){
                const data = state.cartdata.filter((el)=>el.id !== action.payload);

                return {
                    ...state,
                    cartdata:data
                }
            }

        default:
            return state
    }
} 





// 


// // const initialstate={
//    const cartdata=[];

// // }

// function carddata(state=[], action) {
//     // console.log("action :", action);

//     switch(action.type){
//         case "ADD_To_CART":
//         console.log("action :", action);
//         console.log("state :", state);
//         return [
//             ...state,
//            {cartdata:action.data}
           
//         ]
//         case "DEL_To_CART":
//             const ddata=cartdata.filter((e)=>e.id!= action.id);
//             console.log("ddata",ddata);
//             return[
//             ...state,
//             {cartdata:ddata}
//             ]
//         default:
//             return state
//     }

// }
// export default carddata;

// const initialstate={
    // const cartdata=[];

    // // }
    
    // function carddata(state=cartdata, action) {
    //     // console.log("action :", action);
    //     const product=action.data;
      
    //     switch(action.type){
    //         case "ADD_To_CART":
    //    const exist=state.find((x)=>x.id===product.id);
    //   if(exist){
    //     return state.map((x)=>
    //     x.id===product.id ?{...x,qty: x.qty+1}:x
    //     );
    //   }
    //   else{
    //     const product=action.data;
    //     return [
    //         ...state,
    //         {
    //             ...product,
    //             qty:1,
    //         }
    //     ]
    //   }
    //         break;
    //         case "DEL_To_CART":
    //    const exist1=state.find((x)=>x.id===product.id);
    //    if(exist1.qty===1){
    //     return state.filter((x)=>x.id!==exist1.id)
    //    }else{
    //     return state.map((x)=>
    //     x.id===product.id ?{...x,qty: x.qty-1}:x
    //    )}
    //    break;
    //         default:
    //             break;
    //     }
    
    // }
    // export default carddata;
    