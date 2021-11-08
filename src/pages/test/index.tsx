import React from 'react'
import { useLocation } from 'react-router-dom'

const Test: React.FC = () => {
    const location = useLocation()
    return (
        <div
            className="dis-fl jc-sb fd-c">
            <div
                style={{
                    width: '500px',
                    fontSize: '80px',
                    fontWeight: 'bold',
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-10%, -10%)'
                }}
            >
                <p>{location.search}</p>
            </div>
        </div>
    )
}

export default Test