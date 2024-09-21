export const formatDate = (date: Date, format: 'numeric' | 'long') => {
  const formattedDate = new Date(date).toLocaleDateString('en-us', {
    year: 'numeric',
    month: format,
    day: 'numeric',
  })

  if (format === 'numeric') {
    return formattedDate.replaceAll('/', '-')
  }

  return formattedDate
}
