import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.imageRef = React.createRef();

        this.state = { spans: 0 }
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10 + 1);
        this.setState({ spans }); // spans: spans was shortened to just spans (ES2015 syntax)

    }

    render() {
        const { description, urls } = this.props.image; // Used so that this.image.* doesn't have to be types over and over
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}`}}>
                <img alt={description}
                src={urls.regular}
                ref={this.imageRef}
                />
            </div>
        )
    }
}

export default ImageCard;