import { createContext, useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeList } from '../store/store';

const storageContext = createContext();

export function StorageProvider({ children }) {

  const data = useSelector((state) => { return state.issue });
  const dispatch = useDispatch();
  
  useEffect(() => {
    const getLocalData = JSON.parse(localStorage.getItem("data")) || data;
    dispatch(changeList(getLocalData));
  }, []);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data])
  
  return (<storageContext.Provider value={data}>
    {children}
  </storageContext.Provider>
  );
}

export const useStorage = () => {
  return useContext(storageContext);
}
