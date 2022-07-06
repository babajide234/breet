import {useState} from 'react'
import { SelectContainer,SelectValue,SelectValueText,SelectValueArrow,SelectOptions,SelectText,SelectOption } from './InputElements'
import {BsArrowDownCircle} from 'react-icons/bs';
import  Ghana from '../../assets/Ghana.png';
import  Nigeria from '../../assets/naija.png';
const Select = (props) => {
    const [open,setopen]= useState(false);
    const [selected,setselected]= useState('');
    const [id,setid]= useState('');

    const handleClick =(e)=>{
        // console.log(e);
        if( id !== ''){
            setid('');
        }else{
            const id_ = e.target.parentElement.id;
            setid(id_);
            console.log(id_);
        }
        // setopen(!open);
    }

    const handleSelect =(e)=>{
        const attribute = e.target.attributes.getNamedItem('data-val').value;
        setselected(attribute)
        console.log(attribute);
        // setopen(!open);
        // const id = e.target.parent().attributes.getNamedItem('data-id').value;
        // console.log(e.target.value);
    }
  return (
    <SelectContainer id={props.id} >
        <SelectValue onClick={handleClick}>
            <SelectValueText>{selected || props.placeholder}</SelectValueText>
            <SelectValueArrow open={ id === props.id ?  true : false}><BsArrowDownCircle/> </SelectValueArrow>
        </SelectValue>
        <SelectOptions data-name={props.name} id={props.id} data-id='23' open={ id === props.id ?  true : false} >
            {
                props.options.map((option,index)=>{
                    return(
                        <SelectOption key={index} data-id={option.name +'-'+ option.id} onClick={handleSelect} data-val={option.name}>
                            {
                                option.image !== null ? <img src={option.image} alt={option.name}/> : <span></span>
                            }
                            <SelectText>{option.name}</SelectText>
                        </SelectOption>
                    )
                })
            }
        </SelectOptions>
    </SelectContainer>
  )
}

export default Select