import React, { Component } from 'react';
import {BiCar,BiCalculator,BiHappyBeaming}
from "react-icons/bi";
import {FaBeer}
from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
   state={
       services:[{
           icon:<BiCar/>,
           title:"no tension",
           info:'Corona can not stop us!!'
        },
        {
            icon:<BiCalculator/>,
            title:"Get jobs now",
            info:'Corona can not stop us!!'
         },
         {
            icon:<BiHappyBeaming/>,
            title:"Get Set Go",
            info:'Corona can not stop us!!'
         },
         {
            icon:<FaBeer/>,
            title:"Let's celebrate",
            info:'Corona can not stop us!!'
         }
    ]
   };
   
    render() {
        return (
            <section className="services">
                <Title title="services"/>
                <div className="services-center">
                    {this.state.services.map((item,index)=>{
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p> {item.info}</p>

                        </article>
                    })}
                </div>
            </section>
        )
    }
}
