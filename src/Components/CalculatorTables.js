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

     const numArray = [0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65, 0.6, 0.55, 0.5, 0.4, 0.3]

    return (
        <div>
        <Header as='h3' content='% of 1RM Calculator' style={style.h3} textAlign='center' />
    <div class="ui right labeled input">
        <input type="text" placeholder="Enter weight.." onChange={(event) => setMaxValue(event.target.value)}/>
        <div class="ui basic label">
    kg
    </div>
    </div>
    <Header as='h3' content='% of Max' style={style.h3} textAlign='center' />
    
    {/* <table class="ui celled table">
    <thead>
      <tr><th>% of Max</th>
      <th>Weight</th>
    </tr></thead>
    <tbody>
      <tr>
        <td >90%</td>
        <td>{maxPercentage(maxValue, 0.9)}</td>
      </tr>
      <tr>
        <td>80%</td>
        <td>{maxPercentage(maxValue, 0.8)}</td>
      </tr>
      <tr>
        <td>70%</td>
        <td>{maxPercentage(maxValue, 0.7)}</td>
      </tr>
      <tr>
        <td>60%</td>
        <td>{maxPercentage(maxValue, 0.6)}</td>
      </tr>
      <tr>
        <td>50%</td>
        <td>{maxPercentage(maxValue, 0.5)}</td>
      </tr>
      <tr>
        <td>40%</td>
        <td>{maxPercentage(maxValue, 0.4)}</td>
      </tr>
      <tr>
        <td>30%</td>
        <td>{maxPercentage(maxValue, 0.3)}</td>
      </tr>
    </tbody>
  </table> */}
  <table class="ui celled table">
    <thead>
      <tr>
        <th>%</th>
        <th>Weight</th>
      </tr>
    </thead>
    <tbody>
      {numArray.map(num => {
        return (
          <tr>
            <td>{parseInt(num * 100) + "%"}</td>
            <td>{maxPercentage(maxValue, num) + "kg"}</td>
          </tr>
        )
      })}
    </tbody>
  </table>
  </div>
    )
}

export default CalculatorTables