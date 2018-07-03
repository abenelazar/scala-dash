import React, { Component } from 'react';
import Card from './Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import classnames from 'classnames';

export default class FileCardControls extends Component {

  // adapted from stackoverflow
  toReadableFileSize(bytes) {
    var units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    var i = 0;
    while (bytes >= 1024) {
      bytes /= 1024;
      ++i;
    }
    return bytes.toFixed(0) + ' ' + units[i];
  }

  render() {
    return (
      <Card className='card-file-directory-controls'>
        <span className='card-checkbox card-file-directory-control'>
          <input type='checkbox' />
        </span>
        <span onClick={() => this.props.onSortChange('name')} className='card-file-title card-file-directory-control'>
          Name
          <FontAwesomeIcon className={classnames('card-file-directory-control-chevron', { 'active': this.props.sortField === 'name', 'ascending': this.props.sortField === 'name' && !this.props.descending })} icon={faChevronDown} />
        </span>
        <span onClick={() => this.props.onSortChange('type')} className='card-file-type card-file-directory-control'>
          Type
          <FontAwesomeIcon className={classnames('card-file-directory-control-chevron', { 'active': this.props.sortField === 'type', 'ascending': this.props.sortField === 'type' && !this.props.descending })} icon={faChevronDown} />
        </span>
        <span onClick={() => this.props.onSortChange('date')} className='card-file-modified-date card-file-directory-control'>
          Date Modified
          <FontAwesomeIcon className={classnames('card-file-directory-control-chevron', { 'active': this.props.sortField === 'date', 'ascending': this.props.sortField === 'date' && !this.props.descending })} icon={faChevronDown} />
        </span>
        <span onClick={() => this.props.onSortChange('size')} className='card-file-size card-file-directory-control'>
          Size
          <FontAwesomeIcon className={classnames('card-file-directory-control-chevron', { 'active': this.props.sortField === 'size', 'ascending': this.props.sortField === 'size' && !this.props.descending })} icon={faChevronDown} />
        </span>
      </Card>
    );
  }
}
