import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import Banner from './Banner';
import {menu} from '../static/menu';
import Category from './Category';
import MenuItem from './MenuItem';



const Main = () => {
    const [selectedCategory, setSelectedCategory] = useState(menu[0].title);
    const [selectedCategoryItems, setSelectedCategoryItems] = useState(menu[0].items,)

    useEffect(() => {
      setSelectedCategoryItems(
          menu.find(category => category.title === selectedCategory).items,
      );
    }, [selectedCategory]);
    
  return (
    <Wrapper>
        <ContentWrapper>
            <Title>Today's Menu</Title>
            <Banner />
            <Menu>
                <Title>Menu Category</Title>
                <CategorySelector>
                    {menu.map(category => (
                        <Category
                            category={category}
                            selectedCategory={selectedCategory}
                            setSelectedCategory={setSelectedCategory}
                        
                        />
                    ))}
                </CategorySelector>
                <MenuItems>
                {selectedCategoryItems.map(item => (
                
                <MenuItem item={item} />
                ))}</MenuItems>
            
            </Menu>
        
        </ContentWrapper>
    </Wrapper>
  )
}

export default Main;
const Wrapper = styled.div`
  height: 100vh;
  width: calc(100vw - 400px - 70px);
  display: flex;
  justify-content: center;
  overflow: scroll;
`
const ContentWrapper = styled.div`
  max-width: 1700px;
  margin: 0 50px;
  width: calc(100% - 100px);
  padding: 5vh 0;
  & > div {
    margin-bottom: 28px;
  }
`

const Title = styled.div`
  font-family: Comfortaa-Bold;
  font-weight: 900;
  font-size: 32px;
`
const Menu = styled.div`
  & > div {
    margin-bottom: 40px;
  }
`

const CategorySelector = styled.div`
  display: flex;
  padding: 12px;
  margin: -12px;
  overflow-y: visible;
  overflow-x: scroll;
`

const MenuItems = styled.div`
  display: flex;
`