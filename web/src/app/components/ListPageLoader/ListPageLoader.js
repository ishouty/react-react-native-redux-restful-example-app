import '../../assets/less/Loader/index.less'
import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import PropTypes from 'prop-types'

@connect((store) => {
  return {
    loading: store.loading
  }
})
class ListPageLoader extends Component {
  loadPage(page) {
    const { dispatch, loadFunction } = this.props
    dispatch(loadFunction(page))

    this.loadingPage = page
  }

  componentWillMount() {
    this.loadPage(0)
  }

  render() {
    const {
      page,
      totalPages,
      currentListSize,
      label,
      type,
      loading
    } = this.props
    const nextPage = page + 1
    const showLoading =
      loading.loading.common &&
      (currentListSize === 0 || this.loadingPage > 0)
    const showButton =
      currentListSize > 0 && nextPage < totalPages && !showLoading

    return (
      <div className="list-loader-container">
        {showButton && (
          <div>
            {type === 'link' ? (
              <div className="list-loader-link">
                <Link onClick={() => this.loadPage(nextPage)}>
                  {label}
                </Link>
              </div>
            ) : (
              <Button
                type="submit"
                className="list-loader-btn"
                onClick={() => this.loadPage(nextPage)}
              >
                {label}
              </Button>
            )}
          </div>
        )}
        <LoadingListButton show={showLoading} loading={loading} />
      </div>
    )
  }
}

ListPageLoader.propTypes = {
  dispatch: PropTypes.func,
  loadFunction: PropTypes.func
}

export default ListPageLoader

class LoadingListButton extends Component {
  render() {
    return <div>{this.props.show ? <div>Loading...</div> : null}</div>
  }
}
