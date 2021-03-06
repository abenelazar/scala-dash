import React, { Component } from 'react';
import Fuse from 'fuse.js';
import Files from './Files';
import FileHeader from './FileHeader';
import FileCardControls from './FileCardControls';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import files from './files.json'

export default class DashRight extends Component {

  state = {
    descending: true,
    searchText: '',
    sortField: '',
    fuzzy: new Fuse(files, {  keys: [ 'name' ] })
  }

  onSearchChange = (e) => this.setState({searchText: e.target.value });

  onSortChange = (sortField) => this.setState({sortField: sortField, descending: this.state.sortField === sortField ? !this.state.descending : true});

  render() {

    let data = this.state.searchText ? this.state.fuzzy.search(this.state.searchText) : files;

    if(this.state.sortField) {
      data = data.sort((a, b) => {

        let _a = a[this.state.sortField];
        let _b = b[this.state.sortField];
        if(_a === _b) {
          return 0;
        }
        // room for improvement
        else if(typeof _a === 'string') {
          return this.state.descending ? _b.localeCompare(_a) : _a.localeCompare(_b);
        }else {
          return this.state.descending ? (_b > _a ? 1 : -1 ) : (_a > _b ? 1 : -1);
        }
      });
    }

    return (
      <div className='dash-right'>
        <div className='dash-right-options'>
          Hi, { this.props.username }
          <FontAwesomeIcon className='dash-icon' icon={faChevronDown} />
        </div>
        <div className='dash-right-title'>
          Files
        </div>
        <FileHeader onSearchChange={this.onSearchChange} />
        <FileCardControls descending={this.state.descending} sortField={this.state.sortField} onSortChange={this.onSortChange} />
        <Files data={data} />
      </div>

    );
  }
}
