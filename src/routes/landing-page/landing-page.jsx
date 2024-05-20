import { useEffect, useState } from "react";

import Directory from "../../components/directory/directory";
import {getCategories} from '../../utils/firebase/firebase.utils'

const LandingPage = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCategories()

      let tempArr = []
      data.forEach(el => {
        tempArr.push({
          title: el.title,
          id: el.items[0].id,
          imageUrl: el.items[0].imageUrl
        })
      })

      setCategories(tempArr)
    }
  
    fetchData()
      .catch(console.error);
      
  }, [])

  return (
    
    <>
    
      <Directory categories={categories}
      />
      
    </>    
  )
}

export default LandingPage;
