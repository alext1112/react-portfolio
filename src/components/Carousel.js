import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from '../components/Card';

import techbar from '../img/screencapture-tech-bar-netlify-com-1585967985030.png';

class Carousel extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      items: [
        {
          id: 0,
          title: 'Tech Bar',
          subTitle: 'Your favorite drink finder!',
          imgSrc: techbar,
          link: 'https://tech-bar.netlify.com',
          selected: false
        },
        {
          id: 1,
          title: '',
          subTitle: '',
          imgSrc: '',
          link: '',
          selected: false
        },
        {
          id: 2,
          title: '',
          subTitle: '',
          imgSrc: '',
          link: '',
          selected: false
        }
      ]
    }
  }

 
  handleCardClick = (id, card) => {

    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach(item => {
        if(item.id !== id) {
            item.selected = false;
        }
    });

    this.setState({
        items
    });
}


makeItems = (items) => {
    return items.map(item => {
        return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
    })
}


render() {
    return(
        <Container fluid={true}>
            <Row className="justify-content-around">
                {this.makeItems(this.state.items)}
            </Row>
        </Container>
    );
}

}

export default Carousel;