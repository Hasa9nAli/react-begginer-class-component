import React from 'react';

function Item({nameItem}) {
    
    if (nameItem === 'sexy') {
        throw new Error('this is bad item i cant show in my website ')
    }
return (
    <div>
        <h1 style={{color:'blue', fontSize:'12px'  }}>{nameItem}</h1>
    </div>
)

}
export default Item;