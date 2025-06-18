function User ({ user }) {
  return (
    <div className='user'>
      <img
        src={user.avatar}
        alt={`${user.name}'s avatar`}
        className='user-avatar'
      />
      <div className='user-info'>
        <h2 className='user-name'>{user.name}</h2>
        <p className='user-email'>{user.email}</p>
      </div>
      <div className='user-actions'>
        <button className='btn btn-primary'>Follow</button>
        <button className='btn btn-secondary'>Message</button>
      </div>
    </div>
  )
}

export default User
  