import React, { useRef, useEffect } from "react"
import { ContainerWrapper, ContainerDiv } from "../elements"
import { Footer } from "./Footer"
import { Nav } from "./Nav"

export const Container = ({ children }) => {
  useEffect(()=>{
    // window.scrollTo(0,0)
    // return()=>window.scrollTo(0,0)
  })
  const footer = useRef(null)
  const scrollToRef = ref => {
    let div = (0, ref.current.offsetTop)
    window.scrollTo({ top: div, behavior: "smooth" })
  }
  return (
    <ContainerWrapper>
      {/* <Nav scrollToRef={() => scrollToRef(footer)} />
      <ContainerDiv>{children}</ContainerDiv>
      <span ref={footer} style={{ width: "100%" }}>
        <Footer />
      </span> */}
      helloo
    </ContainerWrapper>
  )
}