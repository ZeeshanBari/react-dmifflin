import React, { useState, useRef } from 'react'
import './Item.css';

export default function Item({ name, description }) {
	const [item, setItem] = useState({ name, description, beingEdited: true })
	const inputRef = useRef()

	const toggleEditable = () => {
		setItem({
			...item,
			beingEdited: !item.beingEdited
		})
	}

	const saveItem = () => {
		setItem({
			...item,
			name: inputRef.current.value,
			beingEdited: false
		})
	}

	return (
		<div className='item-container'>
			{item.beingEdited ? (
				<div>
					<input placeholder={item.name} ref={inputRef} />
					<button onClick={() => saveItem()}>save</button>
					<button onClick={() => toggleEditable()}>cancel</button>
				</div>
			) : (
				<div>
					{item.name}
					<button onClick={() => toggleEditable()}>Edit</button>
				</div>
			)}
		</div>
	)
}
