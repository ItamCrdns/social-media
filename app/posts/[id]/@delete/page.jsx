import RemovePostModal from './RemovePostModal'

const RemovePost = ({ params }) => {
  const { id } = params

  return <RemovePostModal id={id} />
}
export default RemovePost
