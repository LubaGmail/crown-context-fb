import './category-item.styles.scss'

const CategoryItem = ({title, imageUrl}) => {

    return (
        <>
            <div className='background-image'
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
            />
            <div className='category-body-container'>
                <h3>{title}</h3>
                <p>Shop Now!</p>
            </div>
            
        </>

    )
    
}

export default CategoryItem