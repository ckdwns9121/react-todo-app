import React from 'react';
import cn from 'classnames';
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
} from 'react-icons/md';
import './TodoListItem.scss';


const TodoListItem = ({todo,onRemove,onToggle}) => {
    const {id,text ,checked} = todo; //비구조화 할당
    return (
        <div className="TodoListItem">
            <div className={cn("checkbox",{checked})} onClick ={() =>onToggle(id)}>
                {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
                <div className="text">{text}</div>
            </div>
            <div className="remove" onClick={()=> onRemove(id)}>
                <MdRemoveCircleOutline />
            </div>
        </div>
    )


}

export default React.memo(TodoListItem);