import React from 'react';
import ReactDOM from 'react-dom';
import Files from 'react-files';
import Blob from 'blob';
import FormData from 'form-data';
import './../../styles/components/InputFileComponent.css';
import axios from 'axios'




export default class FilesDemo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      files: []
    }
  }

  onFilesChange = (files) => {
    this.setState({
      files
    }, () => {
      console.log(this.state.files)
    })
  }

  onFilesError = (error, file) => {
    console.log('error code ' + error.code + ': ' + error.message)
  }

  filesRemoveOne = (file) => {
    this.refs.files.removeFile(file)
  }

  filesRemoveAll = () => {
    this.refs.files.removeFiles()
  }

  filesUpload = (e) => {
	  e.preventDefault();
	const formData = new FormData();
	console.log('THIS.STATE.FILE='+JSON.stringify(this.state.files))
    Object.keys(this.state.files).forEach((key) => {
      const file = this.state.files[key]
      formData.append(key, new Blob([file], { type: file.type }), file.name || 'file')
	})
	
	console.log('FORMDATA:-'+JSON.stringify(formData))
	if (Object.keys(this.state.files).length > 0) {
		axios.post('/files', formData)
		.then((response) => {
			window.alert(`${this.state.files.length} files uploaded succesfully!`)
		})
		.catch(err => window.alert('Error uploading files :('))
	} else {
		alert('PLEASE SELECT THE FILE TO UPLOAD FIRST')
	}

  }

  render () {
    return (
		<div>
			<Files
				ref="files"
				className="files-dropzone-list"
				style={{ height: '10vh' }}
				onChange={this.onFilesChange}
				onError={this.onFilesError}
				multiple
				maxFiles={10}
				maxFileSize={10000000}
				minFileSize={0}
				clickable
			>
				Click to Upload Your Receipt.
			</Files>

			<button class="files-dropzone-listBtn"  onClick={this.filesUpload}>
				Upload Receipt
			</button>
			{this.state.files.length > 0 ? (
				<div className="files-list">
					<ul>
						{this.state.files.map(file => (
							<li className="files-list-item" key={file.id}>
								<div className="files-list-item-preview">
									{file.preview.type === 'image' ? (
										<img className="files-list-item-preview-image" src={file.preview.url} />
									) : (
										<div className="files-list-item-preview-extension">{file.extension}</div>
									)}
								</div>
								<div className="files-list-item-content">
									<div className="files-list-item-content-item files-list-item-content-item-1">
										{file.name}
									</div>
									<div className="files-list-item-content-item files-list-item-content-item-2">
										{file.sizeReadable}
									</div>
								</div>
								<div
									id={file.id}
									className="files-list-item-remove"
									onClick={this.filesRemoveOne.bind(this, file)} // eslint-disable-line
								/>
							</li>
						))}
					</ul>
				</div>
			) : null}
		</div>
	);
  }
}

