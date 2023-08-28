'use client'
import { useState } from 'react'
import { navLinks } from './navlinks'
import Image from 'next/image'
import Link from 'next/link'
import styles from './navbar.module.css'
import { useAuth } from '@/hooks/useAuth'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()
  const { user } = useAuth()
  const [toggle, setToggle] = useState(false)
  const [popup, setPopup] = useState(false)
  const [toggleDoor, setToggleDoor] = useState(false)

  const door = (
    <svg
      width='24'
      height='24'
      xmlns='http://www.w3.org/2000/svg'
      fillRule='evenodd'
      clipRule='evenodd'
    >
      <path
        d='M13.033 2v-2l10 3v18l-10 3v-2h-9v-7h1v6h8v-18h-8v7h-1v-8h9zm1 20.656l8-2.4v-16.512l-8-2.4v21.312zm-3.947-10.656l-3.293-3.293.707-.707 4.5 4.5-4.5 4.5-.707-.707 3.293-3.293h-9.053v-1h9.053z'
        fill={toggleDoor ? 'black' : 'white'}
      />
    </svg>
  )

  const handleLogout = () => {
    ['token', 'user'].forEach(item => window.localStorage.removeItem(item))
    window.location.reload()
  }

  const navItems = (
    <ul>
      {navLinks.map((link) => (
        <li key={link.key}>
          <Link
            href={link.href}
            className={pathname === link.href ? styles.active : ''}
          >
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  )

  return (
    <>
      <nav className={styles.navbar}>
        <section className={styles.navlinks}>
          <p className={styles.logo}>Social stuff</p>
          <section className={styles.links}>{navItems}</section>
        </section>
        <section className={styles.user}>
          {!user && (
            <>
              <p>
                <Link href='/'>Log in</Link>
              </p>
              <p>
                <Link href='/register'>Sign up</Link>
              </p>
            </>
          )}
          {user && (
            <aside
              onMouseLeave={() => setPopup(false)}
              onMouseEnter={() => setPopup(!popup)}
              className={styles.useraside}
            >
              <section
                className={popup ? styles.navuserfocused : styles.navuser}
              >
                {user.profile_Picture
                  ? (
                    <Image
                      src={user.profile_Picture}
                      alt={user.username}
                      width={50}
                      height={50}
                      style={{ borderRadius: '50%' }}
                    />
                    )
                  : (
                    <div className={styles.nouser}>?</div>
                    )}
              </section>
              <section className={popup ? styles.userpopup : styles.hidden}>
                <section className={styles.popuptext}>
                  <span>
                    Welcome,{' '}
                    <span className={styles.uppercase}>{user.username}</span>
                  </span>
                  <span className={styles.openprofile}>
                    <Link href={`/profile/${user.username}`}>Your profile</Link>
                  </span>
                </section>
                <section
                  onMouseEnter={() => setToggleDoor(!toggleDoor)}
                  onMouseLeave={() => setToggleDoor(false)}
                  className={styles.logoutbtn}
                  onClick={handleLogout}
                >
                  <span>{door}</span>
                </section>
              </section>
            </aside>
          )}
        </section>
        <section
          onClick={() => {
            setToggle(!toggle)
          }}
          className={styles.menu}
        >
          <span className={toggle ? styles.rotate : ''} />
          <span className={toggle ? styles.opacity0 : ''} />
          <span className={toggle ? styles.rotateminus : ''} />
        </section>
      </nav>
      {toggle && (
        <section className={styles.overlay}>
          {!user && (
            <section className={styles.useroverlay}>
              <p>Log in</p>
              <p>Sign up</p>
            </section>
          )}
          {user && (
            <section className={styles.useroverlay}>
              <section className={styles.usercontainer}>
                {user.profile_Picture
                  ? (
                    <Image
                      src={user.profile_Picture}
                      alt={user.username}
                      width={50}
                      height={50}
                      style={{ borderRadius: '50%' }}
                    />
                    )
                  : (
                    <div className={styles.nouser}>?</div>
                    )}
                <section className={styles.userinfo}>
                  <span>
                    Welcome,{' '}
                    <span className={styles.uppercase}>{user.username}</span>
                  </span>
                  <span className={styles.openprofile}>
                    <Link href={`/profile/${user.username}`}>Your profile</Link>
                  </span>
                </section>
              </section>
              <p className={styles.userlogout}>Log out</p>
            </section>
          )}
          <section className={styles.items}>{navItems}</section>
        </section>
      )}
    </>
  )
}

export default Navbar
