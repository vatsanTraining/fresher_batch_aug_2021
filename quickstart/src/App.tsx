import React from 'react';
import './App.css';
import Es6ClassComponent from './components/Es6ClassComponent';
import HeaderComponent from './components/HeaderComponent';
import { MenuItem, Title } from './model/models';
import complogo from './images/logo.jpg'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
function App() {

  const list:MenuItem[] =[{link:'/home',linkText:"Home"},
                {link:'/register',linkText:"Register"}];
 const heading= {title:"Restaurant Information Service",logo:complogo}

  return (
    <div>
         
           <HeaderComponent title={heading} list={list} ></HeaderComponent>

              <section className="row">
         <article className="col-md-6"></article>
         <article className="col-md-6"></article>
       </section>
       <footer className="row"></footer>
 
    </div>
  );
}

export default App;
