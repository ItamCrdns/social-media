import styles from '@/components/Login/users.module.css'
import styles2 from './updateprofile.module.css'
import Image from 'next/image'

const UpdateForm = ({
  thisUser,
  handleUpdate,
  msg,
  handleImageSelect,
  image
}) => {
  return (
    <article className={`${styles.usersmain} ${styles2.updateform}`}>
      <h1 style={{ fontWeight: '500', fontSize: '48px' }}>Update profile</h1>
      <form onSubmit={handleUpdate} className={styles2.updateformcontainer}>
        <section className={styles2.inputfield}>
          <p>Profile picture:</p>
          <input
            type='file'
            name='imageFile'
            autoComplete='off'
            onChange={handleImageSelect}
          />
        </section>
        {image && (
          <Image src={image} alt='Uploaded picture' width={150} height={150} />
        )}
        <section className={styles2.inputfield}>
          <p>Username:</p>
          <input
            type='text'
            name='username'
            autoComplete='off'
            placeholder={thisUser?.username}
            readOnly
            style={{ cursor: 'not-allowed' }}
          />
          <p>Role:</p>
          <input
            type='text'
            name='username'
            autoComplete='off'
            placeholder={thisUser?.role}
            readOnly
            style={{ cursor: 'not-allowed' }}
          />
        </section>
        <section className={styles2.inputfield}>
          <p>First Name:</p>
          <input
            type='text'
            name='first_Name'
            autoComplete='off'
            placeholder={thisUser?.first_Name}
          />
          <p>Last name:</p>
          <input
            type='text'
            name='last_Name'
            autoComplete='off'
            placeholder={thisUser?.last_Name}
          />
        </section>
        <section className={styles2.inputfield}>
          <p>Email:</p>
          <input
            type='text'
            name='email'
            autoComplete='off'
            placeholder={thisUser?.email}
          />
        </section>
        <section className={styles2.inputfield}>
          <p>Password:</p>
          <input type='password' name='password' autoComplete='off' placeholder='**************' />
        </section>
        <section className={styles2.inputfield}>
          <p>Gender:</p>
          <input
            type='text'
            name='gender'
            autoComplete='off'
            placeholder={thisUser?.gender}
          />
        </section>
        <section className={styles2.inputfield}>
          {thisUser?.birthday
            ? (
              <p>
                Your birthday:{' '}
                {thisUser?.birthday ? thisUser.birthday.split('T')[0] : ''}
              </p>
              )
            : (
              <p>Birthday:</p>
              )}
          <input type='date' name='birthday' autoComplete='off' />
        </section>
        <section className={styles2.inputfield}>
          <p>Bio:</p>
          <input
            type='text'
            name='bio'
            autoComplete='off'
            placeholder={thisUser?.bio}
          />
        </section>
        <input type='submit' />
      </form>
      {msg && <section>{msg.data}</section>}
    </article>
  )
}

export default UpdateForm