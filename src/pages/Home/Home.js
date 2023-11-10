import React from 'react'
import Layout from '../../components/Layouts/Layout';
import "../../styles/HomeStyle.css";
import Section1 from './Section1'
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Testimonial from './Testimonial';

function Home() {
  return (
    <>
    <Layout>
      {/* Home section hero banner */}
      <Section1 />

      {/* Home section home */}
      <Section2 />

      {/* Home section Menu */}
      <Section3 />

      {/* Home Section Shop */}
      <Section4 />

      <Testimonial />

    </Layout>
    </>
  )
}

export default Home