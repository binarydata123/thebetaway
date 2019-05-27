import React from "react"
import ScrollAnimation from "react-animate-on-scroll"

const PressBlockShared = props => (
  <section className="press_block">
    <div className="layout">
      <h2>Press</h2>
      <div className="press_wrapper">
        {props.data.map((item, i) => (
          <div className="press_item" key={i}>
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" delay={50}>
              <a href={item.node.data.media_link.url} target="blank">
                <img src={item.node.data.cover_image.url} alt="img" />
              </a>
              <h5>{item.node.data.title.text}</h5>
              <p>{item.node.data.texto.text}</p>

              <p className="media">
                <a href={item.node.data.media_link.url} target="blank">
                  Find out more
                </a>
              </p>
            </ScrollAnimation>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default PressBlockShared
