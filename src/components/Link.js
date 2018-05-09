import React from 'react'


const Link = ({ active, children, onClick }) => (
    <button className="heck1"
       onClick={onClick}
       disabled={active}
       style={{
           marginLeft: '4px',
       }}
    >
      {children}
    </button>
)

export default Link
