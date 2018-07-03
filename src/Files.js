import React, { Component } from 'react';
import FileCard from './FileCard';


export default class Files extends Component {
  render() {
    return (
      <React.Fragment>
        {
          this.props.data.map((file, i) => <FileCard key={`file-${i}`} {...file} />)
        }
      </React.Fragment>

    );
  }
}

Files.defaultProps = {
  data: [],
}