import React from 'react';
import ReactDOM from 'react-dom';
import FilesDemo from './inputFileComponent';

class F extends React.Component {
	render() {
		  return (
				<div>
					<p style={{ border: '1px solid black' }}> FILE UPLOAD DROPZONE REACT COMPONENT </p>
					<FilesDemo/>
				</div>
			);
	}
  
}



ReactDOM.render(<F />, document.getElementById('root'));