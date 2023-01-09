import React from 'react'
import PropTypes from 'prop-types'

import classes from './index.module.css'

const CategoryItem = ({ category, onClick, selected }) => {
  return (
    <button
      onClick={onClick.bind(this, category)}
      className={`${classes.CategoryItem} ${selected ? classes.Active : ''}`}
    >
      {category}
    </button>
  )
}

CategoryItem.propTypes = {
  category: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired
}

export default CategoryItem
