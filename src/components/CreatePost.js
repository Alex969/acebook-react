import { useState } from 'react'
import { FormControl, TextField, Button} from '@mui/material';

const CreatePost = ({ onCreate }) => {
  const [content, setText] = useState('')

  return (
    <div className="container">
      <FormControl fullWidth={true} >
        <TextField id="post" 
                    type="text"
                    placeholder="What's on your mind?"
                    value={content} onChange={(e) => setText(e.target.value)}
                    multiline={true} />
        <Button variant="contained" type="submit"
            onClick={() => {
              if (!content) {
                alert('Please add some content')
                return
              }
              onCreate({ content })
              setText("")
              }
            }
          >
          Post
        </Button>
      </FormControl>
    </div>
    
  )
}

export default CreatePost
