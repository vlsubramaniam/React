class Machine extends React.Component {
  static defaultProps = {
    bangs: 1
  };
  render() {
    const { s1, s2, s3 } = this.props;
    const winner = s1 === s2 && s2 === s3 ? 'Winner' : 'Loser';
    return (
      <div>
        <p>
          {s1} {s2} {s3}
        </p>
        <p>
          {winner}
          {'!'.repeat(this.props.bangs)}
        </p>
      </div>
    );
  }
}
