import React from 'react'
import PropTypes from 'prop-types'
import parser from 'html-react-parser'
import { FiMessageCircle } from 'react-icons/fi'

import Avatar from '../../UI/Avatar'
import StretchLink from '../../UI/StretchLink'
import { showFormattedDate } from '../../../utils/date'

import classes from './index.module.css'
import IconTotal from '../../UI/IconTotal'
import Tag from '../../UI/Tag'

const ThreadItem = ({
  id,
  title,
  body,
  category,
  createdAt: date,
  owner,
  totalComments
}) => {
  return (
    <li className={classes.ThreadItem}>
      <article className={classes.Article}>
        <header>
          <Tag>{category}</Tag>
          <section className={classes.Heading}>
            <h2>{title}</h2>
            <IconTotal component={<FiMessageCircle />} label={totalComments} />
          </section>
          <section className={classes.Profile}>
            <Avatar>
              <img src={owner.avatar} alt={owner.name} />
            </Avatar>
            <div className={classes.Detail}>
              <p className={classes.Name}>{owner.name}</p>
              <p className={classes.Date}>{showFormattedDate(date)}</p>
            </div>
          </section>
        </header>
        <section className={classes.Content}>{parser(body)}</section>
        <StretchLink to={`../../threads/${id}`} />
      </article>
    </li>
  )
}

const threadItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.object.isRequired,
  totalComments: PropTypes.number.isRequired
}

ThreadItem.propTypes = { ...threadItemShape }

export { threadItemShape }
export default ThreadItem
