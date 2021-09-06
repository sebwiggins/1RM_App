import React, {useState, useEffect} from 'react'
import { Grid, Segment, Header } from 'semantic-ui-react'

const TrackerTables = () => {

    const [squat, setSquat] = useState ("")
    const [deadlift, setDeadlift] = useState ("")
    const [bench, setBench] = useState ("")

    const [squatTableElement, setSquatTableElement] = useState ([]);
    const [deadliftTableElement, setDeadliftTableElement] = useState ([]);
    const [benchTableElement, setBenchTableElement] = useState ([]);

    const onSubmitSquat = async entry => {
      entry.preventDefault();
      try {
          const body = {squat}
          const response = await fetch (`${process.env.REACT_APP_APILOCATION}/newsquat`, {
              method: "POST",
              headers: { "Content-Type": "application/json"},
              body: JSON.stringify(body)
          });

          console.log(response)
      } catch (error){
          console.error(error.message)

      }
      }

      const onSubmitDeadlift = async entry => {
        entry.preventDefault();
        try {
            const body = {deadlift}
            const response = await fetch (`${process.env.REACT_APP_APILOCATION}/newdeadlift`, {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
  
            console.log(response)
        } catch (error){
            console.error(error.message)
  
        }
        }

        const onSubmitBench = async entry => {
          entry.preventDefault();
          try {
              const body = {bench}
              const response = await fetch (`${process.env.REACT_APP_APILOCATION}/newbench`, {
                  method: "POST",
                  headers: { "Content-Type": "application/json"},
                  body: JSON.stringify(body)
              });
    
              console.log(response)
          } catch (error){
              console.error(error.message)
    
          }
          }

          const getSquatValue = async () => {
            try {
                const response = await fetch (`${process.env.REACT_APP_APILOCATION}/squat`)
                const jsonData = await response.json()
                console.log(jsonData)
    
                setSquatTableElement(jsonData);
            } catch (err) {
                console.error(err.message)
            }
        }

        const getDeadliftValue = async () => {
          try {
              const response = await fetch (`${process.env.REACT_APP_APILOCATION}/deadlift`)
              const jsonData = await response.json()
              console.log(jsonData)
  
              setDeadliftTableElement(jsonData);
          } catch (err) {
              console.error(err.message)
          }
      }

      const getBenchValue = async () => {
        try {
            const response = await fetch (`${process.env.REACT_APP_APILOCATION}/bench`)
            const jsonData = await response.json()
            console.log(jsonData)

            setBenchTableElement(jsonData);
        } catch (err) {
            console.error(err.message)
        }
    }

        useEffect(() =>{
          getSquatValue();
          getDeadliftValue();
          getBenchValue();
      }, [])

            if (squatTableElement.length === 0){
        return "loading"
      }

      if (deadliftTableElement.length === 0){
        return "loading"
      }

      if (benchTableElement.length === 0){
        return "loading"
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
        <Segment>{squatTableElement[0].squat}</Segment>
      </Grid.Column>
    </Grid>
    <Grid container columns={2} divided relaxed stackable>
      <Grid.Column>
        <Segment>Deadlift</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>{deadliftTableElement[0].deadlift}</Segment>
      </Grid.Column>
    </Grid>
    <Grid container columns={2} divided relaxed stackable>
      <Grid.Column>
        <Segment>Bench</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>{benchTableElement[0].bench}</Segment>
      </Grid.Column>
    </Grid>

    <Header as='h3' content='Enter New 1RM' style={style.h3} textAlign='center' />
    <Grid container columns={2} divided relaxed stackable>
      <Grid.Column>
        <Segment>Squat</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>
          <form onSubmit={onSubmitSquat}>
          <div class="ui fluid right labeled input">
            <input type="text" placeholder="Enter new weight.."
            onChange={entry => setSquat(entry.target.value)}/>
            <div class="ui basic label">
              kg
            </div>
            <button class="ui button">Submit</button>
          </div>
          </form>
        </Segment>
      </Grid.Column>
    </Grid>
    <Grid container columns={2} divided relaxed stackable>
      <Grid.Column>
        <Segment>Deadlift</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>
        <form onSubmit={onSubmitDeadlift}>
          <div class="ui fluid right labeled input">
            <input type="text" placeholder="Enter new weight.."
            onChange={entry => setDeadlift(entry.target.value)}/>
            <div class="ui basic label">
              kg
            </div>
            <button class="ui button">Submit</button>
          </div>
          </form>
        </Segment>
      </Grid.Column>
    </Grid>
    <Grid container columns={2} divided relaxed stackable>
      <Grid.Column>
        <Segment>Bench</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>
        <form onSubmit={onSubmitBench}>
          <div class="ui fluid right labeled input">
            <input type="text" placeholder="Enter new weight.."
            onChange={entry => setBench(entry.target.value)}/>
            <div class="ui basic label">
              kg
            </div>
            <button class="ui button">Submit</button>
          </div>
          </form>
        </Segment>
      </Grid.Column>
    </Grid>
        </div>
    )
}

export default TrackerTables