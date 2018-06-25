import React, {Component} from 'react'

export default (OriginalComponent, title) => class extends Component {
  constructor(...props){
    super(...props);
    this.state = {
      documentTitle: document.title
    }
  }

  componentDidMount() {
    document.title = title
  }

  componentWillUnmount() {
    document.title = this.state.documentTitle
  }

  render() {
    return (
      <OriginalComponent {...this.props} />
    )
  }
}