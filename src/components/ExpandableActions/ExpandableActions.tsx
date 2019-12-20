import UnfoldLessIcon from '@material-ui/icons/UnfoldLess'
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore'
import React from 'react'
import MUIcon from '../MUIcon/MUIcon'

type ExpandableActionsProps = {
  onExpandAll?: () => void
  onCollapseAll?: () => void
}

const ExpandableActions = ({ onCollapseAll, onExpandAll }: ExpandableActionsProps) => {
  return (
    <>
      <MUIcon
        size="medium"
        title="Collapse All"
        interactive
        render={p => <UnfoldLessIcon {...p} onClick={onCollapseAll} />}
      />
      <MUIcon
        size="medium"
        interactive
        title="Expand All"
        render={p => <UnfoldMoreIcon {...p} onClick={onExpandAll} />}
      />
    </>
  )
}

export default ExpandableActions
