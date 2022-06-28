import React, { Component } from 'react'
import items from "./data";
import Client from './Contentful'
// Client.getEntries().then(response=> console.log(response.items))

const RoomContext = React.createContext();
const RoomConsumer = RoomContext.Consumer

class RoomProvider extends Component {

    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        //
        type: "all",
        sizeType: "all",
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false
      };


      getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "mGuidaTest1",
         order:"fields.price"
      });
      
      let rooms = this.formatData(response.items);

      let featuredRooms = rooms.filter(room => room.featured === true);
      //
      let maxPrice = Math.max(...rooms.map(item => item.price));
      let maxSize = Math.max(...rooms.map(item => item.size));
      this.setState({
        rooms,
        featuredRooms,
        sortedRooms: rooms,
        loading: false,
        //
        price: maxPrice,
        maxPrice,
        maxSize
      });
    } catch (error) {
      console.log(error);
    }
  };
     

      formatData(items){
        let tempItem = items.map(param =>{
           let id = param.sys.id
           let images = param.fields.images.map(image =>
           image.fields.file.url)
           let room = {...param.fields,images,id}
            return room
        })
        return tempItem
      }
      

      componentDidMount() {
       this.getData()
        //   let rooms = this.formatData(items)
        //  let featuredRooms = rooms.filter(room => 
        //     room.featured === true)
        //     let maxPrice = Math.max(...rooms.map(item => item.price));
        //     let maxSize = Math.max(...rooms.map(item => item.size));
            
           
        //     this.setState({
        //         rooms: rooms,
        //         featuredRooms : featuredRooms,
        //         sortedRooms : rooms,
        //         loading : false,
        //         price: maxPrice,
        //         maxPrice:maxPrice,
        //         maxSize:maxSize
            // })   

            
      }

      getRoom = slug => {
        let tempRooms = [...this.state.rooms];
        const room = tempRooms.find(room => room.slug === slug);
        return room;
      };

      handleChange = e => {
        const target = e.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name; 
        // console.log(name,value);

        this.setState(
          {
            [name]: value
          },
          this.filterRooms
        );
      }
      filterRooms = () => {
        let {
          rooms,
          type,
          sizeType,
          capacity,
          minPrice,
          maxPrice,
          minSize,
          maxSize,
          breakfast,
          pets
        } = this.state;
       
        let tempRooms = [...rooms];
    // transform values
    // get capacity
    capacity = parseInt(capacity);
    minPrice = parseInt(minPrice);
    maxPrice = parseInt(maxPrice);
  
    // filter by type
    if (type !== "all") {
      tempRooms = tempRooms.filter(room => room.type === type);
    }
    // filter by capacity
    if (capacity !== 1) {
      
      tempRooms = tempRooms.filter(room => 
        room.capacity >= capacity);
    
    }
    // filter by price
    tempRooms = tempRooms.filter(room =>
      room.price >= minPrice && room.price <= maxPrice
       );
    //filter by size
    if (sizeType !== "all") {
      sizeType= parseInt(sizeType)
      tempRooms = tempRooms.filter(room => 
        room.size === sizeType 
        );
    }
   
    //filter by breakfast
    if (breakfast) {
      tempRooms = tempRooms.filter(room => room.breakfast === true);
    }
    //filter by pets
    if (pets) {
      tempRooms = tempRooms.filter(room => room.pets === true);
    }
    this.setState({
      sortedRooms: tempRooms
    });
      }

    render() {
       
        return (
           <RoomContext.Provider
            value={
              {...this.state,
              getRoom:this.getRoom,
            handleChange:this.handleChange}
            }>
               {this.props.children}
           </RoomContext.Provider>
        )
    }
} 

export {RoomProvider,RoomConsumer,RoomContext}
 
