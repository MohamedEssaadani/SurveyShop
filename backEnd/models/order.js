import mongoose from 'mongoose'

const orderSchema = mongoose.Schema({
     user: {

     },
     products:{
        type:Array, 
     }, 
     
}, {
    timestamps:true
})

const Order = mongoose.model('Order', orderSchema)

export default Order