import React from 'react'
import PropTypes from 'prop-types'

import CategoryItem from '../CategoryItem'

import classes from './index.module.css'

const CategoryList = ({ categories, onSelect, selectedCategory }) => {
  return (
    <ul className={classes.CategoryList}>
      {categories.map((category) => (
        <CategoryItem
          key={category}
          category={category}
          onClick={onSelect}
          selected={selectedCategory === category}
        />
      ))}
    </ul>
  )
}

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelect: PropTypes.func.isRequired,
  selectedCategory: PropTypes.string.isRequired
}

export default CategoryList
