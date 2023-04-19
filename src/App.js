import React from 'react'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Card from './components/card/Card'
import Active from './components/active/Active';
import './App.css'
import './components/active/active.css'


const App = () => {
  // let image1= "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/85/6317722/1.jpg?8822";
  let image2= "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/902776/1.jpg?9293";
  let image3= "https://ng.jumia.is/cms/0-1-category-pages/phones-tablets/android-tablets_300x300.png";
  let text1 = "This is a wonderful mobile phone"
  let text2 = "This is a wonderful Computer"
  let text3 = "This is a wonderful Laptop"
  let text4 ="My play store"
  let images4="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/57/824144/1.jpg?0485";
 
  return (
    <div>
      <Navbar />
      <Active />
      <div className='name'>
      <Card images="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/85/6317722/1.jpg?8822" title='Mobile Phone' text={text1}/>
      <Card images={image2} title='Computer' text={text2}/>
      <Card images={image3} title='Laptop' text={text3}/>
      <Card images={images4} title='Earpod' text={text4}/>
      </div>
      
   <Footer />

    </div>
  )
}

export default App