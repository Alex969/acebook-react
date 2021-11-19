function addLikeToComment(id) {

  const handleCommentLike = async () => {
    const res = await fetch(`https://acebook-api.herokuapp.com/comments/${id}/likes`, {
      method: 'POST',
      credentials: 'include',

    })
    const data = await res.json()
    return console.log(data);
    }

  return (
    <form onSubmit={handleCommentLike}>
      <button type="submit">Add like</button>
    </form>
  );

}

export default addLikeToComment
