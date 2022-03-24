import React from 'react'
import styled from 'styled-components';


const Category = ({category, selectedCategory, setSelectedCategory}) => {
  return (
    <CategoryItem
    key={category.title}
    onClick={() => setSelectedCategory(category.title)}
    style={{
        backgroundColor:
        selectedCategory == category.title ? '#f38c00' : '#f6f6f6',
        color: selectedCategory == category.title ? '#eee' : '#000',
    }}    
    >
        <CategoryItemImage src={category.icon} />
        <CategoryItemTitle>{category.title}</CategoryItemTitle>
    
    </CategoryItem>
  )
}

export default Category;

const CategoryItem = styled.div`
  border-radius: 28px;
  min-width: 75px;
  max-width: 125px
  width: 10%;
  height: 14vh;
  padding: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-right: 24px;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`

const CategoryItemImage = styled.img`
  height: 24%;
  padding: 14%;
  background-color: #f6f6f6;
  border-radius: 50%;
`

const CategoryItemTitle = styled.div`
  margin: 10px 0;
  font-family: Comfortaa-Bold;
  font-size: 16px;
  font-weight: 700;
  transition: 0.1s;
`