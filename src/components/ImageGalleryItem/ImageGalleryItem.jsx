import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'components/Modal';
import { Item, Image } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  static propTypes = {
    webFormatUrl: PropTypes.string.isRequired,
    largeImageUrl: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  };

  state = {
    imageUrl: null,
  };

  // ==================================
  showModal = largeImageUrl => {
    this.setState({ imageUrl: largeImageUrl });
  };

  // ==================================
  closeModal = () => {
    this.setState({ imageUrl: null });
  };

  // ==================================
  render() {
    const { tags, webFormatUrl, largeImageUrl } = this.props;

    return (
      <Item>
        <Image
          alt={tags}
          src={webFormatUrl}
          onClick={() => this.showModal(largeImageUrl)}
        />
        {this.state.imageUrl && (
          <Modal
            largeImageURL={this.state.imageUrl}
            onClose={this.closeModal}
          />
        )}
      </Item>
    );
  }
}
