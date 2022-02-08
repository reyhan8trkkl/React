import React from 'react';
import styleSheet from '../styles';

export default function MyPoems({data}) {
    console.log(data)
  return <div>
     {/* <h1 style={{padding:data.padding,fontFamily:data.fontFamily,
        fontSize:data.fontSize}}>SNOW IN THE MORNING</h1>*/}

        <h1 style={{padding:styleSheet.padding,fontFamily:styleSheet.fontFamily,
        fontSize:styleSheet.fontSize}}>SNOW IN THE MORNING</h1>
      
<p>The couple is traveling up the mountain.
<br/>
They have been traveling a long time to get to the mountain.<br/>
They left early with their son who strums<br/>
sweet songs with his fingers,<br/>
songs his mother sang when she was young,<br/>
singing sweetly like him for...</p>

  </div>;
}
