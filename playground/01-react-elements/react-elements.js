// const element = React.createElement(
//   'h1',
//   null,
//   'Understanding react elements without JSX'
// );

heading = 'Understanding react elements without JSX'

const element = React.createElement(
  'div',
  null,
  React.createElement('h1', { className: 'heading' }, heading),
  React.createElement(
    'h2',
    {
      style: {
        color: '#006400',
        padding: '10px',
        backgroundColor: 'lightgreen',
        border: '2px solid #301934'
      }
    },
    'This is a h2 text with inline style properties'
  )
)

ReactDOM.render(element, document.getElementById('root'))
