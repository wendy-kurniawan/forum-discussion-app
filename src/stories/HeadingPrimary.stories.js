import React from 'react'
import HeadingPrimary from '../components/UI/Typography/HeadingPrimary'

const stories = {
  title: 'HeadingPrimary',
  component: HeadingPrimary
}

export default stories

const TemplateStory = (args) => <HeadingPrimary {...args} />

const WithNormal = TemplateStory.bind({})
WithNormal.args = {
  type: 'NORMAL',
  children: 'Judul Normal'
}

const WithBorder = TemplateStory.bind({})
WithBorder.args = {
  type: 'BORDER',
  children: 'Judul dengan Border'
}

const WithBorderAll = TemplateStory.bind({})
WithBorderAll.args = {
  type: 'BORDER_ALL',
  children: 'Judul dengan Border All'
}

export { WithNormal, WithBorder, WithBorderAll }
