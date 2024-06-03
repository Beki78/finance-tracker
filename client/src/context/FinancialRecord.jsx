import React, { createContext, useState } from 'react'

const MyProvider = createContext()

const FinancialRecord = ({children}) => {
    const [records, setRecords] = useState(0)
  return (
    <>
      <MyProvider.Provider value={{ records }}>{children}</MyProvider.Provider>
    </>
  );
}

export { FinancialRecord, MyProvider}
