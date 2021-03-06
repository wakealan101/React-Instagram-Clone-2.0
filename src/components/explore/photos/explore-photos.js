import React, { Component } from 'react'
import { FadeIn } from 'animate-components'
import Title from '../../others/title'
import { connect } from 'react-redux'
import { getPhotosToExplore } from '../../../actions/explore'
import ExplorePhotoGallery from './photo-gallery'
import IsLoading from '../../others/isLoading'
import { cLoading } from '../../../utils/utils'

@connect(store => (
  { store }
))

export default class ExpPhotos extends Component {

  state = {
    loading: true
  }

  componentDidMount = () =>
    this.props.dispatch(getPhotosToExplore())

  componentWillReceiveProps = () =>
    this.setState({ loading: false })

  render() {
    let { loading } = this.state

    return (
      <div>
        <Title value='Explore photos' />

        <FadeIn duration='300ms'>

          <IsLoading loading={loading} />

          <div
            className={`m_div explore_photos ${cLoading(loading)}`}
            style={{ marginTop: 0 }}
          >
            <ExplorePhotoGallery/>
          </div>

        </FadeIn>
      </div>
    )
  }
}
