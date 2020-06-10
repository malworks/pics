import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.imageRef = React.createRef();
    }

    componentDidMount() {
        console.log(this.imageRef)
    }
    render() {
        const { description, urls } = this.props.image; // Used so that this.image.* doesn't have to be types over and over
        return (
            <div>
                <img alt={description}
                src={urls.regular}
                ref={this.imageRef}
                />
            </div>
        )
    }
}

export default ImageCard;