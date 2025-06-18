export default function Authentication() {
  const authentication = {
    isAuthenticated: false,
    user: { name: 'John Doe' },
    onLogin: () => alert('Logging in...'),
    onLogout: () => alert('Logging out...')
  }

  const { isAuthenticated, user, onLogin, onLogout } = authentication

  return (
    <div className='authentication'>
      {isAuthenticated ? (
        <div>
          <p>Welcome, {user.name}!</p>
          <button onClick={onLogout} className='btn btn-secondary'>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <p>You are not Logged in.</p>
          <button onClick={onLogin} className='btn btn-primary'>
            Login
          </button>
        </div>
      )}
    </div>
  )
}
  
