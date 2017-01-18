import React, { PropTypes } from 'react';
import { Button } from '@btag/bt-ui-library/';

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <Button onClick={e => { e.preventDefault() }} type="solid" small>{children}</Button>
  }
  return (
    <Button type="no-effect" small href="#"
       onClick={e => {
         e.preventDefault()
         onClick()
       }}>{children}</Button>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
