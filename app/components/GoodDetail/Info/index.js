import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';
import { Rating } from 'belle';
const starStyle = {
  opacity: 1,
  marginBottom: 15,
  fontSize: 40,
};

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Info';
  }
  render() {
    const { good } = this.props;
    const higestBidding = good.allBiddings.biddings[good.allBiddings.biddings.length - 1];
    return (
      <div styleName="good-info">
        <img src={good.image} alt="not found" />
        <div styleName="word-intro">
          <h2>{good.title}</h2>
          <Rating defaultValue={2} disabled disabledStyle={starStyle}>star</Rating>
          <label>Description</label>
          <p>{good.description}</p>
          <label>Highest Bidder</label>
          <p>{higestBidding && higestBidding.user && higestBidding.user.fakeName || 'None of above'}</p>
          <label>Highest Amount</label>
          <p>NTD {higestBidding && higestBidding.amount || 0}</p>
          <label>Created At</label>
          <p>{good.createdAt}</p>
          <label>Updated At</label>
          <p>{good.updatedAt}</p>
          <label>Good ID</label>
          <p>{good.id}</p>
          <label>Time of Closing</label>
          <p>{good.biddingTime}</p>
        </div>
      </div>
    );
  }
}

Info.propTypes = {
  good: PropTypes.object.isRequired,
};

export default CSSModules(Info, styles);