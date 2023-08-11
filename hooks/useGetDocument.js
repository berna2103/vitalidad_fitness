import { useState, useEffect } from "react";
import { db } from "../firabase/firebaseConfig";
import { doc, onSnapshot } from "firebase/firestore";

export const useGetDocument = (collection, docID) => {

  const [ document, setDocument ] = useState()
  const [ isPending, setIsPending ] = useState(false)
  const [ error, setError ] = useState()

  useEffect(() => { 
        
    const fetchData = async() => {

      try {   
      setIsPending(true)
      const docRef = doc(db, collection, docID)
      onSnapshot(docRef , (doc) => {
        if(doc.exists()){
          let data = doc.data()
          setDocument(data)
          setIsPending(false)
      }
      }) 

      }catch(err){
          console.log(err)
          setIsPending(false)
          setError(err)
        }
      }
     
      fetchData()

    return () => fetchData() // Clean up function
  }, [collection, docID])
   
    return { document, isPending, error }
}