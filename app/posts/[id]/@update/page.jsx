import UpdatePostModal from './UpdatePostModal'

const EditPost = ({ params }) => {
  const { id } = params

  return <UpdatePostModal id={id} />
}

export default EditPost
