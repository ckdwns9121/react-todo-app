import React ,{useState, useCallback}from 'react';
import {MdAdd} from 'react-icons/md';
import './TodoInsert.scss';


const TodoInsert =({onInsert}) =>{
    const [value, setValue] =useState('');

    const onChange = useCallback(e =>{
        console.log(e.target.value);
        setValue (e.target.value);
    },[]);// 컴포넌트가 처음 렌더될때 함수 생성

    const onSubmit = useCallback (e=>{
        onInsert(value);
        setValue('');
        e.preventDefault();
    },
    [onInsert,value],
    );
    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input placeholder="일정을 입력하세요" value={value} name="value" onChange={onChange}></input>
            <button type="submit"><MdAdd/></button>
        </form>
    )

}


export default TodoInsert;