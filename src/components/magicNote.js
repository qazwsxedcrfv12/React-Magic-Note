import React from "react";
import Card from "../util/Card";
import Button from "../util/Button";


const MagicNote = props=>{
    return(
        <>
          <Card>
               {/* {props.data.map(data=>(<p>{data}</p>))} */}
               {props.data}
              <Button>Delete It</Button>
          </Card>
        </>
    )
}

export default MagicNote;