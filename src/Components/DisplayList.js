import React from 'react'

export default function DisplayList(props) {
    const listOutData = props.info.map((item,index)=>{
        const i = index+1;
        return(
            <div key={i}>
                <p>{i}</p>
                <h1>{item.name}</h1>
                <p>{item.gender}</p>
                <p>{item.age}</p>
                <hr></hr>
            </div>
        )
    })
    return (
        <div>
            {listOutData}
        </div>
    )
}
