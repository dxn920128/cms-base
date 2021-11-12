import { Button,ConfigProvider } from 'antd'
import React from 'react'

const Home: React.FC = () => {

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
                }}>
                <p>asdasdasd</p>
                <Button onClick={()=>{
ConfigProvider.config({
    theme: {
      primaryColor: '#25b864'
    }
  })
                }}>aaa</Button>
            </div>
        </div>
    )
}

export default Home