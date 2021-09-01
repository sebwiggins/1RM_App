import React from 'react'
import { Header } from 'semantic-ui-react'
import { maxNinety, maxEighty, maxSeventy, maxSixty, maxFifty, maxForty, maxThirty } from './HelperFunctions'

const CalculatorTables = () => {

    const style = {
        h1: {
          marginTop: '3em',
        },
        h2: {
          margin: '4em 0em 2em',
        },
        h3: {
          marginTop: '2em',
          padding: '2em 0em',
        },
        last: {
          marginBottom: '300px',
        },
      }


    return (
        <div>
        <Header as='h3' content='% of 1RM Calculator' style={style.h3} textAlign='center' />
    <div class="ui right labeled input">
        <input type="text" placeholder="Enter weight.."/>
        <div class="ui basic label">
    kg
    </div>
    </div>
    <Header as='h3' content='% of Max' style={style.h3} textAlign='center' />
    
    <table class="ui celled table">
    <thead>
      <tr><th>% of Max</th>
      <th>Weight</th>
    </tr></thead>
    <tbody>
      <tr>
        <td data-label="Name">90%</td>
        <td data-label="Age">{maxNinety}</td>
      </tr>
      <tr>
        <td data-label="Name">80%</td>
        <td data-label="Age">{maxEighty}</td>
      </tr>
      <tr>
        <td data-label="Name">70%</td>
        <td data-label="Age">{maxSeventy}</td>
      </tr>
      <tr>
        <td data-label="Name">60%</td>
        <td data-label="Age">{maxSixty}</td>
      </tr>
      <tr>
        <td data-label="Name">50%</td>
        <td data-label="Age">{maxFifty}</td>
      </tr>
      <tr>
        <td data-label="Name">40%</td>
        <td data-label="Age">{maxForty}</td>
      </tr>
      <tr>
        <td data-label="Name">30%</td>
        <td data-label="Age">{maxThirty}</td>
      </tr>
    </tbody>
  </table>
  </div>
    )
}

export default CalculatorTables