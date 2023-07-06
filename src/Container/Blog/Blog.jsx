import React from 'react'
import { Images } from '../../assets'
import { Article } from '../../Components'
import "./Blog.css"

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>
          A lot is happening,
          We are blogging about it.
        </h1>
      </div>
      <div className='gpt3__blog-container' >
        <div className='gpt3__blog-container_groupA'>
          <Article
            imgUrl={Images.blog01}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"

          />
        </div>

        <div className='gpt3__blog-container_groupB'>
          <Article imgUrl={Images.blog02}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"

          />
          <Article imgUrl={Images.blog03}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"

          />
          <Article imgUrl={Images.blog04}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"

          />
          <Article imgUrl={Images.blog05}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"

          />
        </div>

      </div>
    </div>
  )
}

export default Blog