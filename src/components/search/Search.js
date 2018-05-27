import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios'
import ImageResults from '../image-result/ImageResult'
export default class Search extends Component {

    state =
    {
        searchText:'',
        amount :15,
        apiUrl:'https://pixabay.com/api',
        apiKey:'9109338-6506149a069592cd45b9b529a',
        images:[]

    }
onTextChanges = e =>
{
  let val = e.target.value
    this.setState({ [e.target.name]: val }, () =>
    {
        if(val ==='')
        {
            this.setState({ images:[] })

        }
        else {
            axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
        .then(res =>this.setState({
            images:res.data.hits

        }))
.catch(err =>console.log(err))

        }

    });

}
onAmaountChange = (e,index,value) =>
{
    this.setState({
amount:value

    })

}
  render() {
    //   console.log(this.state.images)
    return (
      <div>
          <TextField

name="searchText"
value={this.state.searchText}
onChange={this.onTextChanges}
floatingLabelText="Search for image"
fullWidth={true}
        / >
        <br/>
        <SelectField
          floatingLabelText="Select for amount"
          value={this.state.amount}
          onChange={this.onAmaountChange}
          fullWidth={true}
        >
          <MenuItem value={5} primaryText="5" />
          <MenuItem value={10} primaryText="10" />
          <MenuItem value={15} primaryText="15" />
          <MenuItem value={30} primaryText="30" />
          <MenuItem value={50} primaryText="50" />
        </SelectField>
<br/>
{this.state.images.length> 0 ? (<ImageResults images={this.state.images}/>):null}


      </div>
    )
  }
}
