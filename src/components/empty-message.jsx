import React from "react"
import styled from "styled-components"

const Message = styled.p`
  text-align: center;
  font-size: ${({ place }) => (place === "cart" ? "1.4rem" : "1.6rem")};
  font-weight: ${({ place }) => (place === "cart" ? 300 : 700)};
  margin-top: 6rem;
`

const EmptyMessage = ({ children, ...props }) => (
  <Message {...props}>{children}</Message>
)

export default EmptyMessage
