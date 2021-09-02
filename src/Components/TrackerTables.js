import React, {useState} from 'react'
import { Grid, Segment, Header } from 'semantic-ui-react'

const TrackerTables = () => {

    const [squat, setSquat] = useState ("")

    const onSubmitSquat = async entry => {
      entry.preventDefault();
      try {
          const body = {squat}
          const response = await fetch ("http://localhost:5000/newsquat", {
              method: "POST",
              headers: { "Content-Type": "application/json"},
              body: JSON.stringify(body)
          });

          console.log(response)
      } catch (error){
          console.error(error.message)

      }
      }

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


    return(
        <div>
            <Header as='h3' content='Current 1RM' style={style.h3} textAlign='center' />
    <Grid container columns={2} divided relaxed stackable>
      <Grid.Column>
        <Segment>Squat</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Will display value from backend table</Segment>
      </Grid.Column>
    </Grid>
    <Grid container columns={2} divided relaxed stackable>
      <Grid.Column>
        <Segment>Deadlift</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Will display value from backend table</Segment>
      </Grid.Column>
    </Grid>
    <Grid container columns={2} divided relaxed stackable>
      <Grid.Column>
        <Segment>Bench</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Will display value from backend table</Segment>
      </Grid.Column>
    </Grid>

    <Header as='h3' content='Enter New 1RM' style={style.h3} textAlign='center' />
    <Grid container columns={2} divided relaxed stackable>
      <Grid.Column>
        <Segment>Squat</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>
          <div class="ui fluid right labeled input" onSubmit={onSubmitSquat}>
            <input type="text" placeholder="Enter new weight.."
            onChange={entry => setSquat(entry.target.value)}/>
            <div class="ui basic label">
              kg
            </div>
            <button class="ui button">Submit</button>
          </div>
        </Segment>
      </Grid.Column>
    </Grid>
    <Grid container columns={2} divided relaxed stackable>
      <Grid.Column>
        <Segment>Deadlift</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>
          <div class="ui fluid right labeled input">
            <input type="text" placeholder="Enter new weight.."/>
            <div class="ui basic label">
              kg
            </div>
          </div>
        </Segment>
      </Grid.Column>
    </Grid>
    <Grid container columns={2} divided relaxed stackable>
      <Grid.Column>
        <Segment>Bench</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>
          <div class="ui fluid right labeled input">
            <input type="text" placeholder="Enter new weight.."/>
            <div class="ui basic label">
              kg
            </div>
          </div>
        </Segment>
      </Grid.Column>
    </Grid>
        </div>
    )
}

export default TrackerTables