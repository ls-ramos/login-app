import React from 'react'

interface Props {}

interface State {
  hasError: boolean
  error: Error | null
}

interface Error {
  message: string
}

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError (error: Error | null) {
    return { hasError: true, error }
  }

  render () {
    const { hasError } = this.state
    if (hasError) {
      return (
        <div className="centered-container">
          <h1>Oh no an unexpected error ocurred :(</h1>
          <p>Try to reload the page, if the error persist contact our support team</p>
          <button className="button" onClick={() => this.setState({ hasError: false })}>Reload the page</button>
        </div>
      )
    }
    return this.props.children
  }
}
