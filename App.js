import emojipedia from "./emojipedia";
import React from 'react';
import Entry from "./components/Entry";

const App = () => {
    console.log(emojipedia);
    return (<>
        <h1>Emojipedia</h1>
        <div className="dictionary">
        <Entry data={emojipedia}/>
            
        </div>
        </>
    );
}

export default App;
