import '../../globals.css'
import React from 'react'

const HomeText = () => {
    return (
        <div className="max-w-5xl mx-auto rounded-lg  bg-transparent text-white font-roboto  text-center mb-20 pb-5 sm:text-4xl text-3xl font-medium title-font py-5 text-white">
            <div style={{ marginTop:'25%' }}>
                Welcome to the <span style={{ fontWeight: 'bolder' }}>12th Edition</span> of Astronomy Club's <br />Flagship Fest <span style={{ fontWeight: 'bolder' }}>Yuri's Night</span>
            </div>
            <div style={{ height: 200, display: 'flex', justifyContent: 'center', margin: 25 }}>
                <img src="../../../static/livenow.jpg" alt="We Are Live Now" style={{ height: '90%', borderRadius: 30 }} />
            </div>
        </div>
    );
};

const YuriNight = () => {
    return (
        <div>
            <div style={{height:50}}></div>
            <div style={{ backgroundImage: `url('../../../static/bg.jpg')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', minHeight: '88vh' }}>
                < HomeText />
            </div>
        </div>
    )
}

export default YuriNight