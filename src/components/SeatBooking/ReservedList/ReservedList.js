import React from 'react'

const reservedList = (props) => {
    let infants = []
    let wheelChair = []
      props.passengerData.filter(pass=> pass.infant === 10).map((passengers) => {
        return infants.push(passengers.infant)
    })

    props.passengerData.filter(pass=> pass.wheelChair === 10).map((passengers) => {
        return wheelChair.push(passengers.wheelChair)
    })




    return (
   
            <div style={{ width: '300px',backgroundColor:'white', alignItems: 'center', marginLeft: '100px', marginRight: '30px', border: '1px solid #ccc', boxSizing: 'border-box' }}>
                <div  >
                    <h3 style={{textAlign: 'center'}}><strong>Total Passengers</strong></h3>
                    <h3  style={{textAlign: 'center'}}>{props.reserved.length}</h3>
                    <h3 style={{textAlign: 'center'}}>Infants</h3>
                    <h3  style={{textAlign: 'center', color: 'rgb(252, 122, 118)'}}><strong>{infants.length}</strong></h3>
                    <h3 style={{textAlign: 'center'}}>Wheel Chair</h3>
                    <h3  style={{textAlign: 'center', color: 'rgb(252, 122, 118)'}}><strong>{wheelChair.length}</strong></h3>
                    <h3 style={{textAlign: 'center'}}>CheckedIn</h3>
                    <h3  style={{textAlign: 'center'}}><strong>{props.reserved.length}</strong></h3>

                </div>
            </div>
      

    )
}

export default reservedList;