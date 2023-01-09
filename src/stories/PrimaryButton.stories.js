import React from 'react'
import PrimaryButton from '../components/UI/Button/PrimaryButton'

const stories = {
  title: 'PrimaryButton',
  component: PrimaryButton
}

export default stories

const TemplateStory = (args) => <PrimaryButton {...args} />

const WithNormal = TemplateStory.bind({})
WithNormal.args = {
  type: 'submit',
  color: 'NORMAL',
  children: 'Normal'
}

const WithDanger = TemplateStory.bind({})
WithDanger.args = {
  type: 'submit',
  color: 'DANGER',
  children: 'Danger'
}

const WithWarning = TemplateStory.bind({})
WithWarning.args = {
  type: 'submit',
  color: 'WARNING',
  children: 'Warning'
}

export { WithNormal, WithDanger, WithWarning }
