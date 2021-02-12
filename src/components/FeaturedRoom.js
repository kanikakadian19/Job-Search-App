import React, { Component } from 'react';
import {RoomContext} from "../context";
import Title from "./Title";
import Loading from "./Loading";
import Room from "./Room";
export default class FeaturedRoom extends Component {
    static contextType = RoomContext;
    render() {
        let {loading,featuredRoom: rooms} = this.context;
        console.log(rooms);
        let myroom = rooms.map(room =>{
            return <Room key={room.id} room={room}/>
        })
        return (
            <section className="featured-rooms">
                <Title title="featured jobs"/>
                <div className="featured-rooms-center">
                    {loading ? <Loading/> :myroom}
                </div>
                
            </section>
        );
    }
}
