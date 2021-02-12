import React, { Component } from 'react';
//import FeaturedRoom from './components/FeaturedRoom';
import items from "./data";
import room from './pages/room';
const RoomContext = React.createContext();
 class RoomProvider extends Component {
     state={
         rooms:[],
         sortedRooms:[],
         featuredRoom:[],
         loading: true,
         type:'all',
         location:'all',
         price:0,
         minPrice:0,
         maxPrice:0,
         minSize:0,
         maxSize:0,
         workFromHome:false,
         workFromOffice: false,
         applied : false
     };
     componentDidMount(){
         let room = this.formatData(items);
         let featuredRooms = room.filter(troom=> troom.featured=== true);
        let maxPrice = Math.max(...room.map(item=>item.price));
        let maxSize = Math.max(...room.map(item=>item.experience));
         this.setState({
             rooms:room, 
             featuredRoom:featuredRooms,
             sortedRooms: room,
             loading:false,
             price:maxPrice,
             maxPrice,
             maxSize
         });
     }
     formatData(para){
         let tempItems = para.map(item=>{
             let id = item.sys.id
             let images = item.fields.images.map(image=>image.fields.file.url);
             let room = {...item.fields,images,id};
            return room;
         });
         return tempItems;
     };
     getRoom = slug =>{
         let tempRooms= [...this.state.rooms];
         const room = tempRooms.find(room =>room.slug===slug);
         return room;
     };


handleChange = event =>{
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked:target.value;
    const name = event.target.name;
    this.setState({
        [name]:value
    },this.filterRooms);
    
    //console.log(`this is ${type},this is ${name},this is ${value}`);
};

filterRooms =()=>{
let{
    rooms,type,location,price,minSize,maxSize,workFromHome,workFromOffice
} = this.state
//all rooms
let tempRooms = [...rooms];
//transform value 
//capacity = parseInt(capacity)
price = parseInt(price)


//filter by type
if(type !== 'all'){
    tempRooms = tempRooms.filter( room => room.type=== type)
}

//filter by capacity
if(location!=='all'){
    tempRooms = tempRooms.filter(room => room.location === location)
}
//filter by price
tempRooms = tempRooms.filter(room =>room.price<=price)
//Filter by size
tempRooms = tempRooms.filter(room=>room.experience>=minSize &&room.experience<=maxSize)
//filter by breakfast
if(workFromHome){
    tempRooms= tempRooms.filter(room=>room.workFromHome=== true)
}
//filter by pets
if(workFromOffice){
    tempRooms= tempRooms.filter(room=>room.workFromOffice=== true)
}
this.setState({
    sortedRooms: tempRooms
})
};
    render() {
        return (
            <RoomContext.Provider value={{...this.state,getRoom: this.getRoom,
            handleChange: this.handleChange}}>
                {this.props.children}
            </RoomContext.Provider>
        );
    }
}
const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component){
    return function ConsumerWrapper(props)
    {
        return <RoomConsumer>
            {value => <Component {...props} context={value}/>}
        </RoomConsumer>
    }
}

export{RoomProvider,RoomConsumer,RoomContext};