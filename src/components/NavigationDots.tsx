import React from 'react'

const links = ["home", "about", "work", "skills", "contact"];

interface NavigationDotsProps {
    active: string;
}

const NavigationDots = ({ active }: NavigationDotsProps) => {
  return (
    <div className="app__navigation">
        {links.map((item, index) => (
            <a 
                key={item + index}
                href={`#${item}`} 
                className="app__navigation-dot"
                style={active === item ? { backgroundColor: '#313BAC'} : {}}
            />
        ))} 
    </div>
  )
}

export default NavigationDots
