function addLike(id) {

  const handleLike = async () => {
    const res = await fetch(`https://acebook-api.herokuapp.com/posts/${id}/likes`, {
      method: 'POST',
      credentials: 'include',

    })
    const data = await res.json()
    return console.log(data);
    }

  return (
    <form onSubmit={handleLike}>
      <button type="submit">Add like</button>
    </form>
  );

}

export default addLike









// const fetchPosts = async () => {
//   const res = await fetch('https://acebook-api.herokuapp.com/posts')
//   const data = await res.json()
//   return data
// }