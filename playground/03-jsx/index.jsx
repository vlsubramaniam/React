class JSXDemo extends React.Component {
  render () {
    return (
      <div>
        <Heading />
        <Image />
      </div>
    )
  }
}

class Heading extends React.Component {
  text = 'You should see a tiger image below'
  render () {
    return <h1>{this.text}</h1>
  }
}

class Image extends React.Component {
  render () {
    const image =
      'https://images.unsplash.com/photo-1526034332220-067b0f400e06?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=650&q=80'
    return <img src={image} alt='Tiger Image' />
  }
}

ReactDOM.render(<JSXDemo />, document.getElementById('root'))
