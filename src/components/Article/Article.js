import './Article.css'
import React, { useState, useEffect } from 'react'
import DateHelper from '../../DateHelper/DateHelper'
import GetArticle from './FakeArticleService'
import NoMatch from '../NoMatch/NoMatch'
import { useParams, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const Article = function () {
  const [article, setArticle] = useState(null)
  const { id } = useParams()
  const navigate = useNavigate()
  const backLinkRef = React.createRef()

  useEffect(() => {
    // TODO: replace with real fetch
    GetArticle(Number(id))
      .then(resp => {
        if (resp.ok) {
          // article found, return so we can set
          return JSON.parse(resp.body)
        }
      })
      .then(article => {
        if (article) {
          // article found, set state
          setArticle(article)
        }
      })
      .catch(err => {
        // something went wrong while fetching
        // TODO: throw error for now but later I will want to display an error page
        throw Error(err)
      })
  }, [id])

  useEffect(() => {
    const currentBackLink = backLinkRef.current
    const goBack = () => {
      navigate(-1)
    }
    if (backLinkRef && currentBackLink) {
      currentBackLink.addEventListener('click', goBack)
      return () => {
        currentBackLink.removeEventListener('click', goBack)
      }
    }
  }, [backLinkRef, navigate])

  if (!article) {
    // no article found during fetch, render 404 page
    return <NoMatch />
  }
  const articleDateStr = new Date(article.posted_dt).toDateString()
  return (
    <section className='BlogArticle'>
      <div ref={backLinkRef}>
        <FontAwesomeIcon icon={faArrowLeft} size='2x' />
        <p>Go back</p>
      </div>
      <h1>{article.title}</h1>
      <sup>Posted: {DateHelper.trimDate(articleDateStr)}</sup>
      <p>{article.body}</p>
    </section>
  )
}

export default Article
