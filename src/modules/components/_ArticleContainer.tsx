import React from 'react'

interface ArticleProps {
  title: string
  children?: React.ReactNode
}

const ArticleContainer = (props: ArticleProps): JSX.Element => {
  const { title, children } = props

  return (
    <div className="article-container">
      <h1 className="article-title">{title}</h1>
      <hr />
      <div className="article-content">{children}</div>
    </div>
  )
}

export default ArticleContainer
