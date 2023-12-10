const ErrorNotification = ({ message }) => {
  if (message === null) {
    return null
  }
  console.log('error', message)

  return (
    <div className='error'>
      {message}
    </div>
  )
}

export default ErrorNotification;