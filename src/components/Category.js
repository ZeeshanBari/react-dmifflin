import './Category.css';
import React, { useState, useRef } from 'react';

// Component 
import Item from './Item';

export default function Category({ title }) {
	const [category, setCategory] = useState({ title, beingEdited: true })
	const [items, setItems] = useState([]);

	const categoryInputRef = useRef();

	// Category
	const saveCategory = () => {
		setCategory({
			...category,
			title: categoryInputRef.current.value,
			beingEdited: false
		})
	}

	const toggleCategoryEditable = () => {
		setCategory({
			...category,
			beingEdited: !category.beingEdited
		})
	}

	// Items 
	const createItem = () => {
		setItems([...items, {
			id: items.length,
			name: 'tentative item-name',
		}])
	}

	return (
		<div className='category-container'>
			{category.beingEdited ? (
				<div>
					<input
						placeholder={category.title}
						ref={categoryInputRef} />
					<button onClick={() => saveCategory()}>save</button>
					<button onClick={() => toggleCategoryEditable()}>cancel</button>
				</div>
			) : (
				<div>
					<h1>{category.title}</h1>
					<button onClick={() => toggleCategoryEditable()}>Edit</button>
				</div>
			)}
			{
				items.map(item => {
					return <Item key={item.id} {...item} />
				})
			}
			<button className='create-item' onClick={() => createItem()}>Create Item</button>
		</div>
	)
}
