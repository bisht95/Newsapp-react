import React, { Component } from 'react'

export class About extends Component {
  
  componentDidMount() {
    // loading animation
    this.props.setProgress(30)

    setTimeout(() => {
      this.props.setProgress(100)
    }, 300)
  }

  render() {
    return (
      <div>
        <div className='container mt-5'>
            <h1 className='mb-4' style={{fontSize: '30px'}}>About Us Page</h1>
            <p>Welcome to Newsapp , your trusted destination for latest breaking news, trending stories, and live updates on politics, business, sports, technology, and entertainment. We are committed to keeping you informed, engaged, and ahead of the curve in an ever-changing world.</p>

            <p>Our newsroom delivers accurate, timely, and unbiased reporting, ensuring you get the facts that matter most—when they matter most. From major political developments and global business trends to sports highlights, tech innovations, and entertainment buzz, we cover stories that shape conversations and impact lives.</p>

            <p>At Newsapp, we believe journalism should be fast, factual, and accessible. Our team of experienced journalists, editors, and digital storytellers works around the clock to bring you reliable news, in-depth analysis, and real-time updates across multiple platforms.</p>

            <p>Whether you're checking headlines on the go or diving deep into trending stories, we strive to be your go-to source for credible news and insightful coverage.</p>

            <p>Stay informed. Stay connected. Stay ahead—with Newsapp.</p>

        </div>

      </div>
    )
  }
}

export default About
