import { useState } from 'react'
import { FormControl, TextField, Button} from '@mui/material';
import '../Register.css'

const CreatePost = ({ onCreate }) => {
  const [content, setText] = useState('')

  return (
    <div className="container">
      <FormControl fullWidth={true} >
        <TextField id="post" 
                    type="text"
                    placeholder="What's on your mind?"
                    value={content} onChange={(e) => setText(e.target.value)}
                    multiline={true}
                    sx={{
                      bgcolor: 'background.paper'
                    }} />
        <Button type="submit" sx={{
          display: 'flex',
          flexDirection: 'row',
          backgroundColor: '#E2BCFB',
          border: 0,
          m: 1,
          justifyContent: 'center',
          //mt: 10,
          //mb: 8,
          mx: 'auto',
          borderRadius: 4,
          color: 'white',
          fontWeight: 700,
          width: 500
        }}
            onClick={() => {
              if (!content) {
                alert('Please add some content') //raises error if you try and submit without entering text
                return
              }
              onCreate({ content })
              setText("") //resets text
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
