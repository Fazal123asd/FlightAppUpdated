import React from 'react'

const SeatMapColor = () => {
    return (
        <React.Fragment>
            <div style={{ width: '300px', alignItems: 'center', margin: 'auto', border: '1px solid #ccc', boxSizing: 'border-box', backgroundColor: 'white' }}>
                <div  >
                    <h3 style={{ textAlign: 'center' }}>Seat Map Color</h3>
                    <hr />
                    <h4 style={{ textAlign: 'center', color: 'orange' }}> <strong>Passengers + Normal Meals</strong></h4>
                    <h4 style={{ textAlign: 'center', color: 'rgb(252, 122, 118)' }}> <strong>Passengers + Special Meals</strong></h4>
                    <h4 style={{ textAlign: 'center', color: 'grey' }}> Available Seats</h4>
                    <hr/>
                    <h3 style={{ textAlign: 'center' }}>Ancillary Services</h3>
                    <hr />
                    <h4 style={{ textAlign: 'center', color: 'orange' }}> <strong>Drinks</strong></h4>
                    <h4 style={{ textAlign: 'center', color: 'rgb(252, 122, 118)' }}> <strong>Chocolate</strong></h4>
                    <h4 style={{ textAlign: 'center', color: 'grey' }}>Baggage</h4>
                    <h4 style={{ textAlign: 'center', color: 'grey' }}> Entertainment</h4>
                    <h4 style={{ textAlign: 'center', color: 'grey' }}> Confort Packs</h4>
                    <h4 style={{ textAlign: 'center', color: 'grey' }}> Wifi</h4>
                </div>
            </div>
            
        </React.Fragment>

    )
    }

    export default SeatMapColor;