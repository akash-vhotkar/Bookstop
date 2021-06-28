
const Bids = (state=[], action )=>{
    switch (action.type) {
        case "GETBIDS":
            return action.data;
        case "Bid":
            return action.data
        default:
            return state;
    }
    
}
export default Bids;