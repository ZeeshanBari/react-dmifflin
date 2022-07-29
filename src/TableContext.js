import React, { useContext, useReducer, useEffect } from 'react';

const TableContext = React.createContext();

const TableProvider = ({ children }) = () => {
	return (
		<TableContext.Provider
			value={{
			}}
		>
			{children}
		</TableContext.Provider>
	)
}

export const useGlobalContext = () => {
	return useContext(TableContext)
}

export { TableContext, TableProvider }