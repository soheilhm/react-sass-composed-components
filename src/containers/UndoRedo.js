import React from 'react';
import { Button } from '@btag/bt-ui-library/';

let UndoRedo = ({ canUndo, canRedo, onUndo, onRedo }) => (
  <div className="row-flex vcenter hcenter" >
    <Button onClick={onUndo} disabled={!canUndo} type="line">
      Undo
    </Button>
    <Button onClick={onRedo} disabled={!canRedo} type="line">
      Redo
    </Button>
  </div>
)
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { connect } from 'react-redux'

/* ... */

const mapStateToProps = (state) => {
  return {
    canUndo: state.todos.past.length > 0,
    canRedo: state.todos.future.length > 0
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUndo: () => dispatch(UndoActionCreators.undo()),
    onRedo: () => dispatch(UndoActionCreators.redo())
  }
}

UndoRedo = connect(
  mapStateToProps,
  mapDispatchToProps
)(UndoRedo)

export default UndoRedo
