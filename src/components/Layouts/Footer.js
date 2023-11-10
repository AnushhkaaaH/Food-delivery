import React from 'react'

function Footer() {
  return (

    <footer>
      <div className='footer py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 text-center'>
              <a className='footer-link' href='#'>Register</a>
              <a className='footer-link' href='#'>Affiliate</a>
              <a className='footer-link' href='#'>FAQ</a>
              <div className='footer-social pt-4 text-center'>
                <a href='#'><i className='fab bi bi-facebook'></i></a>
                <a href='#'><i className='fab bi bi-instagram'></i></a>
                <a href='#'><i className='fab bi bi-twitter-x'></i></a>
                <a href='#'><i className='fab bi bi-youtube'></i></a>
                <a href='#'><i className='fab bi bi-linkedin'></i></a>
              </div>
            </div>
            <div className='col-sm-12'>
              <div className='footer-copy'>
                <div className='copy-right text-center pt-5'>
                  <p className='text-light'>@ 2021. Foodies. All rights reserved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer