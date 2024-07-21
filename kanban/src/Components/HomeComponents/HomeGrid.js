import React from 'react'

export default function HomeGrid() {
    return (
        <div>

            <div className='home-grid'>
                <div className='hero-circle' >
                <div className='hero-circle' style={{right:'-60%', top:'-50%',scale:'10%'}} />
                <div className='hero-circle' style={{filter:"blur(20px)",right:'-60%',top:'-50%', scale:'10%'}}/>
                <div className='hero-circle' style={{left:'-50%', top:'60px',scale:'30%'}} />
                <div className='hero-circle' style={{filter:"blur(20px)",left:'-50%',top:'60px', scale:'30%'}}/>
                </div>
                <div className='hero-circle' style={{filter:"blur(20px)"}}/>
                

                <div className='home-grid-card'>
                    <div style={{ display: 'flex', gap: "10px", flexDirection: 'column' }}>
                        <div>
                            <h3>Monitoring Progress</h3>
                            <h4 style={{ color: "#9073B1" }}>Discover Performance bottlenecks</h4>
                        </div>
                        <span>Monitor the progress of each task and keep your project on track and steer your ship out of the storm!</span>
                    </div>
                    <div>
                        <img style={{ height: '60px', width: '60px' }} src='https://icons.iconarchive.com/icons/microsoft/fluentui-emoji-3d/256/Cloud-With-Lightning-And-Rain-3d-icon.png'></img>
                    </div>
                </div>
                <div className='home-grid-card'>
                    <div style={{ display: 'flex', gap: "10px", flexDirection: 'column' }}>
                        <div>
                            <h3>Collaborate</h3>
                            <h4 style={{ color: "#92B173" }}>Collaborate Worldwide</h4>
                        </div>
                        <span>Collaborate seamlessly with your team and work together to efficiently produce wonders. </span>
                    </div>
                    <div>
                        <img style={{ height: '60px', width: '60px' }} src='https://icons.iconarchive.com/icons/microsoft/fluentui-emoji-3d/256/Globe-Showing-Europe-Africa-3d-icon.png'></img>
                    </div>
                </div>
                <div className='home-grid-card'>
                    <div style={{ display: 'flex', gap: "10px", flexDirection: 'column' }}>
                        <div>
                            <h3>Manage Tasks</h3>
                            <h4 style={{ color: "#88B7BA" }}>Keeping it Simple</h4>
                        </div>
                        <span>Break down complex projects into manageable tasks and have them delivered as digestable undertakings.</span>
                    </div>
                    <div>
                        <img style={{ height: '60px', width: '60px' }} src='https://icons.iconarchive.com/icons/microsoft/fluentui-emoji-3d/256/Control-Knobs-3d-icon.png'></img>
                    </div>
                </div>
                <div className='home-grid-card' style={{ overflow: 'hidden' }}>
                    <div style={{ display: 'flex', gap: "10px", flexDirection: 'column' }}>
                        <div>
                            <h3>Concise Instructions</h3>
                            <h4 style={{ color: "#BAA088" }}>Understanding at a Glance</h4>
                        </div>
                        <span>Provide useful comments and neatly formatted instructions to ensure the project values are shared.</span>
                    </div>
                    <div style={{ position: 'relative', height: '60px', width: '60px' }}>
                        <img style={{ height: '60px', width: '60px' }} src='https://icons.iconarchive.com/icons/microsoft/fluentui-emoji-3d/512/Megaphone-3d-icon.png'></img>

                    </div>
                </div>



            </div>
        </div>
    )
}
