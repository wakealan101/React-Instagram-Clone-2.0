import React, { Component, Fragment } from 'react'
import Prompt from '../../../../others/prompt'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { deleteConversation } from '../../../../../utils/message-utils'

@connect(store => (
  { con_id: store.Message.conDetails.con_id }
))

export default class DeleteConversation extends Component {

  state = {
    deleteCon: false
  }

  showDltCon = e => {
    e.preventDefault()
    this.setState({ deleteCon: true })
  }

  deleteConversation = async e => {
    e.preventDefault()
    let { con_id, dispatch, hideConversation, toggleOptions } = this.props
    toggleOptions()
    deleteConversation({ con_id, dispatch, hideConversation })
  }

  modalBack = () => {
    this.setState({ deleteCon: false })
    this.props.toggleOptions()
  }

  render() {
    let { deleteCon } = this.state

    return (
      <Fragment>
        <li><a
          href='#'
          className='dlt_con'
          onClick={this.showDltCon}
        >Delete conversation</a></li>

        {
          deleteCon ?
            <Prompt
              title='Delete conversation'
              content="This conversation will be deleted. There's no undo so you won't be able to find it."
              actionText='Delete'
              action={this.deleteConversation}
              back={this.modalBack}
            />
            : null
        }
      </Fragment>
    )
  }
}

DeleteConversation.propTypes = {
  toggleOptions: PropTypes.func.isRequired,
  hideConversation: PropTypes.func.isRequired
}
