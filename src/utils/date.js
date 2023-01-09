const showFormattedDate = (date, language = 'id') => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
  const languageLocale = language === 'id' ? 'id-ID' : 'en-US'
  return new Date(date).toLocaleDateString(languageLocale, options)
}

export { showFormattedDate }
