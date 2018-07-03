import React, { Component } from 'react';
import Card from './Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faFile } from '@fortawesome/free-solid-svg-icons';

export default class FileCard extends Component {

  // adapted from stackoverflow
  toReadableFileSize(bytes) {
    var units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    var i = 0;
    while (bytes >= 1024) {
      bytes /= 1024;
      i++;
    }
    return bytes.toFixed(0) + ' ' + units[i];
  }


  render() {
    const isDir = this.props.type === 'directory';
    return (
      <Card className='card-file-directory'>
        <span className='card-checkbox'>
          <input type='checkbox' />
        </span>
        <span className='card-file-title'>
          <FontAwesomeIcon className='card-icon' icon={isDir ? faFolder : faFile} />
          {this.props.name}
        </span>
        <span className='card-file-type'>
          {isDir ? 'Directory' : 'File'}
        </span>
        <span className='card-file-modified-date'>
          {this.props.dateModified}
        </span>
        <span className='card-file-size'>
          {this.toReadableFileSize(this.props.size)}
        </span>
      </Card>
    );
  }
}

FileCard.defaultProps = {
  name: 'undefined',
  type: 'directory',
  dateModified: '1969-01-01T00:00:00.000Z',
  size: 0,
}