'use client'
import Link from 'next/link'
import styles from './user.module.css'
import { useAuth } from '@/hooks/useAuth'
import { useState } from 'react'

const EditPencil = ({ name, pencil }) => {
  const [hover, setHover] = useState(false)
  const { user } = useAuth()

  // * Making sure the pencil only renders for the logged in user
  if (user?.username === name) {
    return (
      <Link href={`/profile/${name}/update`} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className={hover ? styles.pencilpopup : styles.pencil}>
        <p>
          {pencil}
        </p>
      </Link>
    )
  }
}

export default EditPencil