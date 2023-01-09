import React from 'react'
import PropTypes from 'prop-types'

import CategoryList from '../CategoryList'

import classes from './index.module.css'

const CategoryChooser = ({ categories, onChoose, selectedCategory }) => {
  return (
    <div className={classes.CategoryChooser}>
      <h2 style={{ marginBottom: '2rem' }}>Pilih kategori terkini</h2>
      <CategoryList
        categories={categories}
        onSelect={onChoose}
        selectedCategory={selectedCategory}
      />
    </div>
  )
}

CategoryChooser.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChoose: PropTypes.func.isRequired,
  selectedCategory: PropTypes.string.isRequired
}

export default CategoryChooser
