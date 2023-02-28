import React, { Component } from 'react'
import MovieCard from './MovieCard'

const list=[
    {
        _id: "5fedeef47c0ffe00176db1ca",
        title: "Devil's Mile",
        rate: 4,
        date: "2014",
    },
    {
        _id: "5fedeef47c0ffe00176db1ca",
        title: " Mile",
        rate: 4,
        date: "2014",
    },
    {
        _id: "5fedeef47c0ffe00176db1ca",
        title: "Devil's",
        rate: 4,
        date: "2014",
    }
]
export default class MovieList extends Component {
  render() {
    return <div>{list.map((list)=> <MovieCard id={list._id} date={list.date} 
    rate={list.rate} title={list.title}/>)}</div>
    
  }
}
