// import React, {FC, useState, useEffect } from 'react'
import React, {FC, useState } from 'react'
const axios = require('axios')
import {
  Layout,
  PageBlock,
  Input,
  Toggle,
  // Button,
  FloatingActionBar
} from 'vtex.styleguide'
/*import {useQuery} from 'react-apollo'
import helloworld from './graphql/helloworld.gql'*/
// import talk from './graphql/talk.gql'
// import Button from '@material-ui/core/Button';
// import "./myFile.css";



const style = {
  container: {
    margin: "10px",
  },
  wrapper: {
    display: "flex",
    "flex-wrap": "nowrap",
    "justify-content": "space-between",
    // border: "1px solid red",
    "align-items": "center"
  },
  box: {
    // display: "flex-item",
    // border: "1px solid blue",
    flex: 1,
    // "text-align": "center"
  },
  smallButton: {
    width: "200px"
  }
};

const AdminExample: FC = () => {
  // const [count, setCount] = useState(0)
  const [count] = useState(0)
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // form values
  const [formState, setFormState] = useState({
    emailPrefix: '',
    anotherField: '', // Add other fields here if needed
  });

  // handler to change values
  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Save button
  const talkToServer = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/_v/app/events-example/hcheck');
      setData(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };


  // cancel button
  const stop = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/_v/app/events-example/todd');
      setData(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };


  /*const testHandleClick = () => {
    setCount(count + 1);
  };*/

/*  const handleSaveClick = () => {
    setCount(count + 1);
    // useQuery(talk);
  };*/

  // const {data} = useQuery(helloworld)

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Layout>
      <h1>Fetched Data</h1>
      <ul>
        {data}
      </ul>
      <pre>form state: {JSON.stringify(formState, null, 2)}</pre>
      <PageBlock title="Order Operator Settings"
                 subtitle="Spam orders to fill out the dashboard"
                 variation="full">
        <div style={style.wrapper}>
          <div style={style.box}>
            <h1>Enter your settings</h1>
          </div>
          <div style={style.box}>
            <Toggle label="Activated" size="large"/>
          </div>
        </div>
        <div>Hi there</div>
        {/*<div><p>{data?.helloworld}</p></div>*/}
        <div><p>count is: {count}</p></div>
        <div className="mb5">
          <Input className="pb2 mw9" style={style.smallButton} label="Account"/>
        </div>
        <div className="mb5">
          <Input
            name="emailPrefix"
            style={style.smallButton}
            label="Email Prefix"
            placeholder="e.g. your.name"
            value={formState.emailPrefix}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb5">
          <Input style={style.smallButton} label="Api Key"/>
        </div>
        <div className="mb5">
          <Input style={style.smallButton} label="Token"/>
        </div>
        <div className="mb5">
          <Input style={style.smallButton} label="Shipping Price" placeholder="in pennies e.g. 500"/>
        </div>
        <div className="mb5">
          <Input style={style.smallButton} label="Shipping SLA Name" placeholder="e.g. Standard Delivery"/>
        </div>
        <div className="mb5">
          <Input style={style.smallButton} label="Orders Per Hour" placeholder="e.g. 20"/>
        </div>

      </PageBlock>

      {/*<Button></Button>*/}


      <FloatingActionBar
        save={{
          label: 'save',
          onClick: talkToServer
        }}
        cancel={{
          label: 'cancel',
          onClick: stop
        }}
      />
    </Layout>
  )
}

export default AdminExample
