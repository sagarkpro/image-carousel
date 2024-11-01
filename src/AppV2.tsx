import './AppV2.css'
import { useEffect, useState } from 'react';

function AppV2() {
    const images: string[] = [
        "https://i.travelapi.com/lodging/74000000/73980000/73974400/73974370/9d363b80_z.jpg",
        "https://i.travelapi.com/lodging/74000000/73980000/73974400/73974370/0b192d26_z.jpg",
        "https://i.travelapi.com/lodging/74000000/73980000/73974400/73974370/ad8ee37f_z.jpg",
        "https://i.travelapi.com/lodging/74000000/73980000/73974400/73974370/ffbfdabe_z.jpg",
        "https://i.travelapi.com/lodging/74000000/73980000/73974400/73974370/bd4ba53c_z.jpg",
        "https://i.travelapi.com/lodging/74000000/73980000/73974400/73974370/94917f61_z.jpg",
        "https://i.travelapi.com/lodging/74000000/73980000/73974400/73974370/04ffa7c6_z.jpg",
        "https://i.travelapi.com/lodging/74000000/73980000/73974400/73974370/088c5ccf_z.jpg",
        "https://i.travelapi.com/lodging/74000000/73980000/73974400/73974370/bf9b4dbc_z.jpg",
        "https://i.travelapi.com/lodging/74000000/73980000/73974400/73974370/638caa77_z.jpg",
        "https://i.travelapi.com/lodging/74000000/73980000/73974400/73974370/aab5e333_z.jpg",
        "https://i.travelapi.com/lodging/74000000/73980000/73974400/73974370/aab5e333_z.jpg",
        "https://i.travelapi.com/lodging/74000000/73980000/73974400/73974370/aab5e333_z.jpg",
        "https://i.travelapi.com/lodging/74000000/73980000/73974400/73974370/aab5e333_z.jpg",
      ];

    const [transform, setTransform] = useState<number>(0);
    const [transformCounter, setTransformCounter] = useState<number>(30);
    const [higlightedDiv, setHighlightesDiv] = useState<number>(0);
    
    const updateTransform=(transformAmt: number): void=>{
        let _transform = transform;
        _transform += transformAmt;
        if(_transform >= -512*(images.length) && _transform <= 0){
            setTransform(_transform);
            if(transformAmt < 0){
                setTransformCounter(prev => prev - 52);
                setHighlightesDiv(prev => ++prev);
            }
                
            else if(higlightedDiv > 0){
                setTransformCounter(prev => prev + 52);
                setHighlightesDiv(prev => --prev);
            }  
        }
    }

    useEffect(()=>{
        console.log(transform);
        
    }, [transform])

    return ( 
        <>
            <div className="div-container">
                <div className="flexbox" >
                    {
                        images.map((image, index)=>{
                            return(
                                <>
                                    <div className='image' style={{backgroundImage: `url(${image})`, transform: `translateX(${transform}px)`}}></div>
                                </>
                            )
                        })
                    }
                </div>

                <div className='control-wrapper'>
                    <div className="btn-wrapper">
                        <div className="arrow-button left-arrow" onClick={()=>{updateTransform(524)}}>
                        <i className="arrow left"></i>
                        </div>
                        <div className="arrow-button right-arrow" onClick={()=>{updateTransform(-524)}}>
                            <i className="arrow right"></i>
                        </div>
                    </div>
                </div>
                <div className='image-count-wrapper'>
                    <div className="image-count">
                        {
                            images.map((image, index)=>{
                                return(
                                    <div className={index === higlightedDiv ? 'highlighted-div' : ''} style={{transform: `translateX(${transformCounter}px)`}}></div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
     );
}

export default AppV2;