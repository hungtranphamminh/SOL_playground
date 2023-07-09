import {createSlice,PayloadAction} from "@reduxjs/toolkit"
import type { RootState } from "../store"


// Define a type for the slice state
interface AccountState {
    address:string,
    balance:number,
    isConnected:Boolean
  }
  
  // Define the initial state using that type
const initialState: AccountState = {
    address:"",
    balance:0,
    isConnected:false
  }

export const accountSlice = createSlice ({
    name:'walletAccount',
    initialState,
    reducers: {
        updateAccount: (state, action: PayloadAction<AccountState>) => {
            state.address = action.payload.address
            state.balance = action.payload.balance
            state.isConnected = true
        },
        disconnectWallet : (state) => {
            state.isConnected = false
        },
        updateWalletBalance: (state, action:PayloadAction<number>) => {
            state.balance = action.payload
        }
    }
})

export const {updateAccount, disconnectWallet, updateWalletBalance} = accountSlice.actions

export const selectAccount = (state: RootState) => state.walletAccount
export const selectAccountBalance = (state:RootState) => state.walletAccount.balance
// export const {increment,decrement,incrementByAmount} = balanceSlice.actions

// // Other code such as selectors can use the imported `RootState` type
// export const selectBalance = (state: RootState) => state.walletBalance.value

export default accountSlice.reducer