import React, { Component } from 'react'
import CommentBox from './comment_box'
import CommentList from './comment_list'
class App extends Component {
  render () {
    return (
      <div>
        <div className='d-flex'>
          <div className='p-2'>
            <CommentBox />
          </div>
        </div>
        <div className='d-flex'>
          <div className='p-2'>
            <CommentList />
          </div>
        </div>
      </div>
    )
  }
}

export default App
