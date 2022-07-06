import {Children, useState} from 'react'
import { Tab, TabHeader, TabContent,TabIcon,Tooltip } from './TabElement';
import {BsArrowLeftCircle} from 'react-icons/bs';
import Toggle from './../Toggle/index';
const TabComponent = ({title,children, toggle}) => {

    const [open,setopen]= useState(false);

    const handleClick =()=>{
        setopen(!open);
    }
  return (
    <Tab>
        <TabHeader>
            {
                toggle ? (
                    <Toggle label={`notifications`}/>
                ) : (

                    <TabIcon onClick={handleClick} open={open}>
                        <BsArrowLeftCircle/>
                        <Tooltip open={open}>
                            Click to Save
                        </Tooltip>
                    </TabIcon>
                )
            }

            <h1>{title}</h1>
        </TabHeader>
        <TabContent open={open}>
            {children}
        </TabContent>
    </Tab>
  )
}

export default TabComponent