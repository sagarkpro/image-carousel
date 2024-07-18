import { Button } from 'primereact/button';
import './AppV2.css'
import { transform } from 'typescript';
import { useEffect, useRef, useState } from 'react';

function AppV2() {
    const imageRef = useRef(null);
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
        "https://i.travelapi.com/lodging/74000000/73980000/73974400/73974370/9195f2f4_z.jpg",
        "https://i.travelapi.com/lodging/74000000/73980000/73974400/73974370/f3f0b967_z.jpg",
        "https://i.travelapi.com/lodging/74000000/73980000/73974400/73974370/0cabf5f7_z.jpg",
        "https://i.travelapi.com/lodging/74000000/73980000/73974400/73974370/d1036b64_z.jpg",
        "https://i.travelapi.com/lodging/74000000/73980000/73974400/73974370/d952c9ad_z.jpg",
        "https://i.travelapi.com/lodging/74000000/73980000/73974400/73974370/258f5741_z.jpg",
        "https://i.travelapi.com/lodging/74000000/73980000/73974400/73974370/e8e9cdb6_z.jpg",
        "https://i.travelapi.com/lodging/74000000/73980000/73974400/73974370/e5f72e6a_z.jpg",
        "https://i.travelapi.com/lodging/74000000/73980000/73974400/73974370/e41c7196_z.jpg",
        "https://i.travelapi.com/lodging/74000000/73980000/73974400/73974370/7aca8bc3_z.jpg",
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
        "https://i.travelapi.com/lodging/74000000/73980000/73974400/73974370/9195f2f4_z.jpg",
        "https://i.travelapi.com/lodging/74000000/73980000/73974400/73974370/f3f0b967_z.jpg",
        "https://i.travelapi.com/lodging/74000000/73980000/73974400/73974370/0cabf5f7_z.jpg",
        "https://i.travelapi.com/lodging/74000000/73980000/73974400/73974370/d1036b64_z.jpg",
        "https://i.travelapi.com/lodging/74000000/73980000/73974400/73974370/d952c9ad_z.jpg",
        "https://i.travelapi.com/lodging/74000000/73980000/73974400/73974370/258f5741_z.jpg",
        "https://i.travelapi.com/lodging/74000000/73980000/73974400/73974370/e8e9cdb6_z.jpg",
        "https://i.travelapi.com/lodging/74000000/73980000/73974400/73974370/e5f72e6a_z.jpg",
        "https://i.travelapi.com/lodging/74000000/73980000/73974400/73974370/e41c7196_z.jpg",
        "https://i.travelapi.com/lodging/74000000/73980000/73974400/73974370/7aca8bc3_z.jpg"
      ];

    const [transform, setTransform] = useState<number>(0);
    
    const updateTransform=(transformAmt: number): void=>{
        let _transform = transform;
        _transform += transformAmt;
        if(_transform >= -524*(images.length-4) && _transform <= 0)
            setTransform(_transform);
    }

    useEffect(()=>{
        console.log(transform);
        
    }, [transform])

    useEffect(()=>{
        console.log(imageRef);
        
    }, [imageRef])

    return ( 
        <>
            <h1>AppV2</h1>
            
            <div className="flexbox" style={{}}>
                
                {
                    images.map((image)=>{
                        return(
                            <>
                                <div ref={imageRef} className='image' style={{backgroundImage: `url(${image})`, transform: `translateX(${transform}px)`}}></div>
                            </>
                        )
                    })
                }
            </div>
            <div className='btn-wrapper'>
                
                <Button className='next-btn' label='+' onClick={()=>{updateTransform(524)}}></Button>
                <Button className='prev-btn' label='-' onClick={()=>{updateTransform(-524)}}></Button>
            </div>
            
        </>
     );
}

export default AppV2;