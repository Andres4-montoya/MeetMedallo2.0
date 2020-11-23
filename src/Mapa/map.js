
import React ,{Component} from 'react';
import GoogleMaps from 'simple-react-google-maps'
import "./map.css"
export default class Maps extends Component{
    render(){
        return(
            <div> 
                <div className='container'> 
                    <GoogleMaps className="rounded-circle"
                    apiKey={'AIzaSyAg1Jl1B5tuf3-OH7YdIx70BoZqLdV_qqM'}
                    style={{height:"580px", width: "80%",margin:"12%",top:"-130px",}}
                    zoom={12}
                    center={{lat: 6.25184, 
                            lng:  -75.56359
                        }}
                    />
             </div>
          </div>
        )
    }
}