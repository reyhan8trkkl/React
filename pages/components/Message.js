import React from 'react'
import { useParams } from 'react-router-dom'

export default function Message() {
    let params=useParams()
  return (
    <div>
        <h3>This message is coming 
            from message ID { params.id}</h3>
    </div>
  )
}
