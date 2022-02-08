import React from 'react';
import MyPoems from './MyPoems'
import styleSheet from '../styles'

export default function () {
    const style1 = {
        background: styleSheet.background,
        color: styleSheet.color
    }
    return <div style={style1}>
        <h1>Welcome To My Page</h1>

        <MyPoems data={styleSheet} />


        <footer style={{ fontSize: styleSheet.fontSize }}>Thank You Visiting My Page!</footer>
    </div>;
}


/*const style1 = {
        background: styleSheet.background,
        color: styleSheet.color
    }*/

   /* <footer style={{ fontSize: styleSheet.fontSize }}></footer>*/