import React from "react";
import Card from './Card';

const CardList= ({robot}) => {
    console.log(robot)

    const CardArrays= robot?.map((user,i) => {
        
        return(
            <Card key= {i} id={user.id} name={user.name} email={user.email}   />
        )
    });
    return(
        <div>
    
    {CardArrays}
    </div>
    );
}

export default CardList;