import React, { Component } from 'react'
import defaultBcg from "../images/defImg.jpg";
//import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from 'react-router-dom';
import {RoomContext} from "../context";
import StyleHero from "../components/styledHero"; 
export default class singleRoom extends Component {
    
   constructor(props) {
       super(props);
       console.log(this.props);
       this.state ={
           slug : this.props.match.params.slug,
           defaultBcg,
           data: 'Apply'
       };
   }
   onClick = () => {
    
    this.setState({
      data: 'Applied!'
      
    })
  }
   static contextType = RoomContext;

    render() {
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug);
        if(!room){
            return (<div className="error">
                <h3>no such job could be found</h3>
                <Link to ='/room' className="btn-primary">
                    back to jobs
                </Link>
                </div>
            );
        }
        const{name,description,experience,location,price,extras,workFromOffice,workFromHome,images,site,company,applied,resources}=room;
        const [mainImg, ...remainImg]=images;
        //console.log(images[0]);
        //,description,capacity,size,price,extras,breakfast,pets,images
        return (
            <>
            <StyleHero img={mainImg}>
                <Banner title= {`${name} job`}>
                    <Link to= '/room' className="btn-primary">
                        back to jobs
                    </Link>
                </Banner>
            </StyleHero>
            <section className="single-room">
            {/* <div className="single-room-images">
            {
                remainImg.map((item,index)=>{
                    return <img key={index} src={item} alt={name}/>
                })
            }
            </div> */}
            <div className="single-room-info">
                <article className="desc">
                    <h3>details</h3>
                    <p>{description}</p>
                </article>
                <article className="info">
                    <h3>info</h3>
                    <h6>company : <strong>{company}</strong></h6>
                    <h6>salary per month : <strong>${price}</strong></h6>
                    <h6>location : <strong>{location}</strong> </h6>
                    <h6>
                        experience required: <strong>{experience >1 ? `${experience} year` : `${experience} year`}</strong>
                    </h6>
                    <h6>
                     <strong>   {workFromHome ? "work from home allowed" : "no work from home"}
                     </strong>
                    </h6>
                    <h6>
                        job fetched from site :<strong> {site} </strong>
                    </h6>
                </article>

            </div>
            </section>
            <section className="room-extras">
                <h6>extras</h6>
                <ul className="extras">
                    {extras.map((item,index)=>{
                        return <li key={index}>- {item}</li>
                    })}
                </ul>
            </section>
            <section className="room-extras">
                <h6>Resources</h6>
                <ul className="extras">
                    {resources.map((item,index)=>{
                        return <li key={index}>- {item}</li>
                    })}
                </ul>
            </section>
            <section>
            <div>
        
        <button  className="buttonW" color="success"
        size="lg" onClick={this.onClick}> 
        <a href="mailto:kanikakadian19@gmail.com">
        {this.state.data}
        </a>
        </button>
      </div>
            </section>
            </>
        )
    }
}

