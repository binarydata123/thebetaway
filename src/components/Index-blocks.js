import React from "react"
import { Link } from "gatsby"

import ScrollAnimation from "react-animate-on-scroll"

import intro_photo from "../assets/img/index/index_intro_photo.png"
import intro_photo_back from "../assets/img/index/index_intro_back.png"

import MailchimpForm from "./mailchimp-block"

export const IntroBlock = props => (
  <section className="intro_block">
    <img src={intro_photo_back} alt="" className="background_img" />
    <div className="info_wrapper layout">
      <div className="text_wrapper">
        <h3>{props.title}</h3>
        <h1>{props.sub}</h1>
        <div className="p_wrapper">
          <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" delay={200}>
            <div
              className="text_wrapper"
              dangerouslySetInnerHTML={{
                __html: props.text,
              }}
            />
          </ScrollAnimation>
        </div>
      </div>
      <div className="img_wrapper">
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" delay={200}>
          <img src={intro_photo} alt="" />
        </ScrollAnimation>
      </div>
    </div>
  </section>
)

export const ProcessBlock = props => (
  <section className="process_block grey">
    <div className="layout">
      <div className="info_wrapper">
        <h2>{props.title}</h2>
        <p>{props.text}</p>
        <p className="link_wrapper">
          <Link to="/thebetaway">Find out more</Link>
        </p>
      </div>
      <div className="images_wrapper">
        <div className="imagen_wrap_item">
          <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" delay={250}>
            <img src={props.alldata.process_01_img.url} alt="ind_1" />
            <p>{props.alldata.process_01.text}</p>
          </ScrollAnimation>
        </div>
        <div className="imagen_wrap_item">
          <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" delay={350}>
            <img src={props.alldata.process_02_img.url} alt="ind_1" />
            <p>{props.alldata.process_02.text}</p>
          </ScrollAnimation>
        </div>
        <div className="imagen_wrap_item">
          <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" delay={450}>
            <img src={props.alldata.process_03_img.url} alt="ind_1" />
            <p>{props.alldata.process_03.text}</p>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  </section>
)

export const CreatorsBlock = props => (
  <section className="creators_block half_background">
    <div className="layout">
      <h2>The Creators</h2>
      <div className="creators_wrapper">
        <div className="creator_item ">
          <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" delay={200}>
            <div className="photowrapper mail">
              <img src={props.mai.home_image.url} alt="mail" />
              <p className="name">{props.mai.name.text}</p>
              <p className="surname">{props.mai.lastname.text}</p>
            </div>
            <p className="quote">"{props.mai.quote.text}"</p>
          </ScrollAnimation>
        </div>

        <div className="creator_item ">
          <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" delay={400}>
            <div className="photowrapper john">
              <img src={props.john.home_image.url} alt="john" />
              <p className="name">{props.john.name.text}</p>
              <p className="surname">{props.john.lastname.text}</p>
            </div>
            <p className="quote">"{props.john.quote.text}”</p>
            <p className="link_wrapper">
              <Link to="/about-us">Find out more</Link>
            </p>
          </ScrollAnimation>
        </div>
      </div>
      <p />
    </div>
  </section>
)

export const InActionBlock = props => (
  <section className="">
    <div className="layout">
      <h2>In Action</h2>
      <div className="inAction_wrapper">
        {props.data.edges.map((item, i) => (
          <div className="item_wrp" key={i}>
            <a href={item.node.link} target="blank">
              <img
                src={item.node.localImage.childImageSharp.fluid.src}
                alt="img_insta"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export const PressBlock = props => (
  <section className="press_block half_background">
    <div className="layout">
      <h2>Press</h2>
      <div className="press_wrapper">
        {props.data.map((item, i) => (
          <div className="press_item" key={i}>
            <ScrollAnimation
              animateIn="fadeIn"
              animateOut="fadeOut"
              delay={200}
            >
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

export const CTABlock = props => (
  <section className="cta_block">
    <div className="layout">
      <p>Discover more about The differents Beta Way Method&Programs</p>

      <div className="link_wrapper">
        <MailchimpForm />
        {/* <Link to="/thebetaway">THE METHOD</Link> */}
      </div>
    </div>
  </section>
)
