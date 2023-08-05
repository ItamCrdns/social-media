async function getPost (id) {
  try {
    const url = new URL(process.env.NEXT_PUBLIC_API_URL + 'Post/' + id)

    const res = await fetch(url, { cache: 'no-store' })

    const statusCode = res.status

    if (!res.ok) {
      return { data: await res.text(), status: statusCode }
    }
    return { data: await res.json(), status: statusCode }
  } catch (error) {
    return error.message
  }
}
export default getPost