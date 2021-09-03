import React, { useState } from 'react'
import { Header } from 'semantic-ui-react'

const CalculatorTables = () => {

  const [maxValue, setMaxValue] = useState (0)


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

      const maxPercentage = (max, percentage) => {
        return parseInt(max * percentage)
    }


    return (
        <div>
        <Header as='h3' content='% of 1RM Calculator' style={style.h3} textAlign='center' />
    <div class="ui right labeled input">
        <input type="text" placeholder="Enter weight.." onChange={(event) => setMaxValue(event.target.value)}/>
        <div class="ui basic label">
    kg
    </div>
    <button class="ui button">Submit</button>
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
        <td data-label="Age">{maxPercentage(maxValue, 0.9)}</td>
      </tr>
      <tr>
        <td data-label="Name">80%</td>
        <td data-label="Age">{maxPercentage(maxValue, 0.8)}</td>
      </tr>
      <tr>
        <td data-label="Name">70%</td>
        <td data-label="Age">{maxPercentage(maxValue, 0.7)}</td>
      </tr>
      <tr>
        <td data-label="Name">60%</td>
        <td data-label="Age">{maxPercentage(maxValue, 0.7)}</td>
      </tr>
      <tr>
        <td data-label="Name">50%</td>
        <td data-label="Age">{maxPercentage(maxValue, 0.5)}</td>
      </tr>
      <tr>
        <td data-label="Name">40%</td>
        <td data-label="Age">{maxPercentage(maxValue, 0.4)}</td>
      </tr>
      <tr>
        <td data-label="Name">30%</td>
        <td data-label="Age">{maxPercentage(maxValue, 0.3)}</td>
      </tr>
    </tbody>
  </table>
  </div>
    )
}

export default CalculatorTables