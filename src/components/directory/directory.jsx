import CategoryItem from "../category-item/category-item"

import './directory.styles.scss'

const Directory = ({ categories }) => {

    return (
        <>
            <div className='directory-container'>
        
                {
                    categories?.map(({id, title, imageUrl}) => (
                        <div className='category-container' key={id}>
                            <CategoryItem title={title}  imageUrl={imageUrl} />
                        </div>
                    ))
                }
        
            </div>
        </>
    )

}

export default Directory